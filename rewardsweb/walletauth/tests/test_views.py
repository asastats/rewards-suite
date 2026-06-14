"""Testing module for walletauth app's views."""

import json
from unittest import mock

import pytest
from algosdk.transaction import SignedTransaction
from django.conf import settings
from django.contrib.auth import get_user_model
from django.contrib.auth.models import AnonymousUser
from django.test import RequestFactory
from django.views import View
from rest_framework.permissions import IsAdminUser
from rest_framework.request import Request
from rest_framework.test import APIRequestFactory
from rest_framework.views import APIView

from core.models import Contributor, Profile
from utils.constants.core import WALLET_CONNECT_NONCE_PREFIX
from walletauth.models import WalletNonce
from walletauth.views import (
    ActiveNetworkAPIView,
    AddAllocationsAPIView,
    AllocationsSuccessfulAPIView,
    ClaimSuccessfulAPIView,
    ReclaimAllocationsAPIView,
    ReclaimSuccessfulAPIView,
    WalletNonceAPIView,
    WalletsAPIView,
    WalletVerifyAPIView,
)

User = get_user_model()


class TestWalletsAPIView:
    """Test suite for WalletsAPIView."""

    @pytest.fixture
    def view(self):
        return WalletsAPIView().as_view()

    @pytest.fixture
    def rf(self):
        return APIRequestFactory()

    def test_walletauth_walletsapiview_is_subclass_of_apiview(self):
        assert issubclass(WalletsAPIView, APIView)

    def test_walletauth_walletsapiview_get_returns_wallets(self, view, rf):
        """Test that GET returns a list of supported wallets."""
        request = rf.get("/wallets/")
        response = view(request)

        assert response.status_code == 200
        data = response.data

        assert isinstance(data, list)
        assert len(data) > 0
        assert {"id", "name"}.issubset(data[0].keys())


class TestActiveNetworkAPIView:
    """Test suite for ActiveNetworkAPIView."""

    @pytest.fixture
    def view(self):
        return ActiveNetworkAPIView().as_view()

    @pytest.fixture
    def rf(self):
        return APIRequestFactory()

    def test_walletauth_activenetworkapiview_is_subclass_of_apiview(self):
        assert issubclass(ActiveNetworkAPIView, APIView)

    @pytest.mark.django_db
    def test_walletauth_activenetworkapiview_get_returns_default_network(
        self, view, rf
    ):
        """Test GET returns default network when none stored in session."""
        request = rf.get("/active-network/")
        request.session = {}

        response = view(request)

        assert response.status_code == 200
        assert response.data == {"network": "testnet"}

    @pytest.mark.django_db
    def test_walletauth_activenetworkapiview_post_valid_network(self, view, rf, mocker):
        """Test POST sets active network."""
        mocker.patch(
            "walletauth.views.WALLET_CONNECT_NETWORK_OPTIONS", ["mainnet", "testnet"]
        )
        request = rf.post(
            "/active-network/", data={"network": "mainnet"}, format="json"
        )
        request.session = {}

        response = view(request)

        assert response.status_code == 200
        assert response.data == {"success": True, "network": "mainnet"}
        assert request.session["active_network"] == "mainnet"

    @pytest.mark.django_db
    def test_walletauth_activenetworkapiview_post_fallback_to_json_body(self, mocker):
        """Test that request.body is used when request.data does not exist."""
        mocker.patch(
            "walletauth.views.WALLET_CONNECT_NETWORK_OPTIONS", ["mainnet", "testnet"]
        )

        rf = RequestFactory()  # <-- triggers missing .data
        request = rf.post(
            "/active-network/",
            data='{"network": "mainnet"}',  # <-- must be string!
            content_type="application/json",
        )
        request.session = {}

        # call .post() directly because `view()` would wrap request into DRF Request
        response = ActiveNetworkAPIView().post(request)

        assert response.status_code == 200
        assert response.data == {"success": True, "network": "mainnet"}
        assert request.session["active_network"] == "mainnet"

    @pytest.mark.django_db
    def test_walletauth_activenetworkapiview_post_invalid_network(
        self, view, rf, mocker
    ):
        """Test POST rejects invalid network."""
        mocker.patch(
            "walletauth.views.WALLET_CONNECT_NETWORK_OPTIONS", ["mainnet", "testnet"]
        )
        request = rf.post(
            "/active-network/", data={"network": "unknown"}, format="json"
        )
        request.session = {}

        response = view(request)

        assert response.status_code == 400
        assert response.data == {"error": "Invalid network"}

    def test_walletauth_activenetworkapiview_invalid_json(self, view, rf, mocker):
        """Test handling of invalid JSON."""
        mocker.patch(
            "walletauth.views.WALLET_CONNECT_NETWORK_OPTIONS", ["mainnet", "testnet"]
        )
        request = rf.post("/active-network/", data="Invalid JSON", format="json")
        response = view(request)

        assert response.status_code == 400
        assert response.data == {"error": "Invalid JSON"}


class TestWalletNonceAPIView:
    """Test suite for WalletNonceAPIView."""

    @pytest.fixture
    def view(self):
        return WalletNonceAPIView().as_view()

    @pytest.fixture
    def rf(self):
        return APIRequestFactory()

    @pytest.fixture
    def valid_address(self):
        return "2EVGZ4BGOSL3J64UYDE2BUGTNTBZZZLI54VUQQNZZLYCDODLY33UGXNSIU"

    def test_walletauth_walletnonceapiview_is_subclass_of_view(self):
        assert issubclass(WalletNonceAPIView, View)

    @pytest.mark.django_db
    def test_walletauth_walletnonceapiview_valid_request(
        self, view, rf, valid_address, mocker
    ):
        """Test successful nonce generation for valid address."""
        # Mock the is_valid_address to return True for our test address
        mocker.patch("walletauth.views.is_valid_address", return_value=True)

        data = {"address": valid_address}
        request = rf.post("/nonce/", data=data, format="json")

        response = view(request)

        assert response.status_code == 200
        response_data = response.data
        assert "nonce" in response_data
        assert response_data["prefix"] == WALLET_CONNECT_NONCE_PREFIX
        assert WalletNonce.objects.filter(
            address=valid_address, nonce=response_data["nonce"]
        ).exists()

    @pytest.mark.django_db
    def test_walletauth_walletnonceapiview_fallback_to_json_body(
        self, mocker, valid_address
    ):
        """Test fallback to request.body JSON parsing when request.data is missing."""
        # Mock address validation and nonce creation so we don't hit DB or crypto
        mocker.patch("walletauth.views.is_valid_address", return_value=True)
        mocker.patch("walletauth.views.token_hex", return_value="fixednonce")

        rf = RequestFactory()  # <-- WSGIRequest → request.data does NOT exist
        json_body = json.dumps({"address": valid_address})

        request = rf.post(
            "/nonce/",
            data=json_body,  # <-- MUST be a string, not dict
            content_type="application/json",
        )

        # Call .post() directly so fallback branch executes
        response = WalletNonceAPIView().post(request)

        assert response.status_code == 200
        assert response.data == {
            "nonce": "fixednonce",
            "prefix": WALLET_CONNECT_NONCE_PREFIX,
        }

    def test_walletauth_walletnonceapiview_invalid_json(self, view, rf):
        """Test handling of invalid JSON."""
        request = rf.post("/nonce/", data="invalid json", format="json")
        response = view(request)

        assert response.status_code == 400
        response_data = response.data
        assert response_data["error"] == "Invalid JSON"

    def test_walletauth_walletnonceapiview_missing_address(self, view, rf):
        """Test handling of missing address."""
        request = rf.post("/nonce/", data={}, format="json")
        response = view(request)

        assert response.status_code == 400
        response_data = response.data
        assert "Invalid or missing address" in response_data["error"]

    def test_walletauth_walletnonceapiview_invalid_address(self, view, rf, mocker):
        """Test handling of invalid address."""
        mocker.patch("walletauth.views.is_valid_address", return_value=False)

        data = {"address": "invalid_address"}
        request = rf.post("/nonce/", data=data, format="json")

        response = view(request)

        assert response.status_code == 400
        response_data = response.data
        assert "Invalid or missing address" in response_data["error"]


class TestWalletVerifyAPIView:
    """Test suite for WalletVerifyAPIView."""

    @pytest.fixture
    def view(self):
        return WalletVerifyAPIView().as_view()

    @pytest.fixture
    def rf(self):
        return APIRequestFactory()

    @pytest.fixture
    def valid_address(self):
        return "2EVGZ4BGOSL3J64UYDE2BUGTNTBZZZLI54VUQQNZZLYCDODLY33UGXNSIU"

    @pytest.fixture
    def valid_nonce(self):
        return "abc123def456"

    @pytest.fixture
    def mock_signed_transaction(self, valid_nonce, valid_address):
        """Create a mock signed transaction with proper note."""
        mock_stxn = mock.MagicMock(spec=SignedTransaction)
        mock_stxn.signature = "mock_signature"
        mock_stxn.transaction = mock.MagicMock()
        # The signer must be the address being authenticated (identity binding),
        # and the proof must be a 0-ALGO self-payment.
        mock_stxn.transaction.sender = valid_address
        mock_stxn.transaction.type = "pay"
        mock_stxn.transaction.amt = 0
        # Create a mock note that can be decoded
        mock_note = mock.MagicMock()
        mock_note.decode.return_value = f"{WALLET_CONNECT_NONCE_PREFIX}{valid_nonce}"
        mock_stxn.transaction.note = mock_note
        mock_stxn.authorizing_address = None
        return mock_stxn

    @pytest.fixture
    def mock_wallet_nonce(self, valid_address, valid_nonce):
        """Create a mock WalletNonce object."""
        mock_nonce = mock.MagicMock(spec=WalletNonce)
        mock_nonce.nonce = valid_nonce
        mock_nonce.address = valid_address
        mock_nonce.used = False
        mock_nonce.is_expired.return_value = False
        mock_nonce.mark_used = mock.MagicMock()
        return mock_nonce

    def setup_method(self):
        """Setup method to mock is_valid_address for all tests."""
        # Mock is_valid_address to return True by default
        self.is_valid_address_patcher = mock.patch(
            "walletauth.views.is_valid_address", return_value=True
        )
        self.mock_is_valid_address = self.is_valid_address_patcher.start()

    def teardown_method(self):
        """Teardown method to stop patchers."""
        self.is_valid_address_patcher.stop()

    def _verify_mocks(self, mocker, mock_wallet_nonce, mock_signed_transaction):
        """Patch the decode/verify pipeline so policy checks are reached."""
        mocker.patch(
            "walletauth.views.WalletNonce.objects.get", return_value=mock_wallet_nonce
        )
        mocker.patch("walletauth.views.base64.b64decode", return_value=b"mock_tx_bytes")
        mocker.patch(
            "walletauth.views.msgpack.unpackb", return_value={"mock": "tx_dict"}
        )
        mocker.patch(
            "walletauth.views.SignedTransaction.undictify",
            return_value=mock_signed_transaction,
        )
        mocker.patch("walletauth.views.verify_signed_transaction", return_value=True)

    def test_walletauth_walletverifyapiview_rejects_sender_address_mismatch(
        self, view, rf, valid_address, mocker, mock_wallet_nonce, mock_signed_transaction
    ):
        """Reject a valid signature whose signer is not the claimed address.

        Guards the authentication-bypass: an attacker requests a nonce for a
        victim address and signs with their own key. ``verify_signed_transaction``
        passes, but the signer differs from the address, so login must not occur.
        """
        mock_signed_transaction.transaction.sender = "Z" * 58
        data = {
            "address": valid_address,
            "signedTransaction": "base64_encoded_tx",
            "nonce": mock_wallet_nonce.nonce,
        }
        request = rf.post("/verify/", data=data, format="json")
        self._verify_mocks(mocker, mock_wallet_nonce, mock_signed_transaction)
        mock_login = mocker.patch("walletauth.views.login")

        response = view(request)

        assert response.status_code == 400
        assert response.data == {
            "success": False,
            "error": "Signature does not match the address",
        }
        mock_wallet_nonce.mark_used.assert_not_called()
        mock_login.assert_not_called()

    def test_walletauth_walletverifyapiview_rejects_forged_rekey(
        self, view, rf, valid_address, mocker, mock_wallet_nonce, mock_signed_transaction
    ):
        """Reject a transaction claiming a rekey to a different address.

        ``authorizing_address`` is attacker-controllable and is not trusted
        off-chain, so a signature against a fabricated authorizing address must
        not authenticate the sender.
        """
        mock_signed_transaction.transaction.sender = valid_address
        mock_signed_transaction.authorizing_address = "Y" * 58
        data = {
            "address": valid_address,
            "signedTransaction": "base64_encoded_tx",
            "nonce": mock_wallet_nonce.nonce,
        }
        request = rf.post("/verify/", data=data, format="json")
        self._verify_mocks(mocker, mock_wallet_nonce, mock_signed_transaction)
        mock_login = mocker.patch("walletauth.views.login")

        response = view(request)

        assert response.status_code == 400
        assert response.data == {
            "success": False,
            "error": "Rekeyed account not supported",
        }
        mock_wallet_nonce.mark_used.assert_not_called()
        mock_login.assert_not_called()

    def test_walletauth_walletverifyapiview_rejects_non_payment(
        self, view, rf, valid_address, mocker, mock_wallet_nonce, mock_signed_transaction
    ):
        """Reject a proof that is not a 0-ALGO payment transaction."""
        mock_signed_transaction.transaction.sender = valid_address
        mock_signed_transaction.transaction.type = "axfer"
        data = {
            "address": valid_address,
            "signedTransaction": "base64_encoded_tx",
            "nonce": mock_wallet_nonce.nonce,
        }
        request = rf.post("/verify/", data=data, format="json")
        self._verify_mocks(mocker, mock_wallet_nonce, mock_signed_transaction)
        mock_login = mocker.patch("walletauth.views.login")

        response = view(request)

        assert response.status_code == 400
        assert response.data == {"success": False, "error": "Invalid transaction"}
        mock_login.assert_not_called()

    def test_walletauth_walletverifyapiview_is_subclass_of_view(self):
        assert issubclass(WalletVerifyAPIView, View)

    def test_walletauth_walletverifyapiview_invalid_json(self, view, rf):
        """Test handling of invalid JSON."""
        request = rf.post("/verify/", data="invalid json", format="json")
        response = view(request)

        assert response.status_code == 400
        response_data = response.data
        assert response_data == {"success": False, "error": "Invalid request"}

    def test_walletauth_walletverifyapiview_missing_data(self, view, rf, valid_address):
        """Test handling of missing required data."""
        data = {"address": valid_address}  # Missing signedTransaction and nonce
        request = rf.post("/verify/", data=data, format="json")

        response = view(request)

        assert response.status_code == 400
        response_data = response.data
        assert response_data == {"success": False, "error": "Missing data"}

    def test_walletauth_walletverifyapiview_invalid_address(self, view, rf):
        """Test handling of invalid address."""
        # Override the mock for this specific test
        self.mock_is_valid_address.return_value = False

        data = {
            "address": "invalid_address",
            "signedTransaction": "base64_encoded_tx",
            "nonce": "abc123",
        }
        request = rf.post("/verify/", data=data, format="json")
        response = view(request)

        assert response.status_code == 400
        response_data = response.data
        assert response_data == {
            "success": False,
            "error": "Invalid address: invalid_address",
        }

    def test_walletauth_walletverifyapiview_nonce_not_found(
        self, view, rf, valid_address, mocker
    ):
        """Test handling of non-existent nonce."""
        data = {
            "address": valid_address,
            "signedTransaction": "base64_encoded_tx",
            "nonce": "nonexistent_nonce",
        }
        request = rf.post("/verify/", data=data, format="json")

        mocker.patch(
            "walletauth.views.WalletNonce.objects.get",
            side_effect=WalletNonce.DoesNotExist,
        )

        response = view(request)

        assert response.status_code == 400
        response_data = response.data
        assert response_data == {
            "success": False,
            "error": "Nonce not found or already used",
        }

    def test_walletauth_walletverifyapiview_nonce_expired(
        self, view, rf, valid_address, mocker, mock_wallet_nonce
    ):
        """Test handling of expired nonce."""
        data = {
            "address": valid_address,
            "signedTransaction": "base64_encoded_tx",
            "nonce": "expired_nonce",
        }
        request = rf.post("/verify/", data=data, format="json")

        mock_wallet_nonce.is_expired.return_value = True
        mocker.patch(
            "walletauth.views.WalletNonce.objects.get", return_value=mock_wallet_nonce
        )

        response = view(request)

        assert response.status_code == 400
        response_data = response.data
        assert response_data == {"success": False, "error": "Nonce expired"}

    def test_walletauth_walletverifyapiview_invalid_signed_transaction(
        self, view, rf, valid_address, mocker, mock_wallet_nonce
    ):
        """Test handling of invalid signed transaction base64."""
        data = {
            "address": valid_address,
            "signedTransaction": "invalid_base64",
            "nonce": mock_wallet_nonce.nonce,
        }
        request = rf.post("/verify/", data=data, format="json")

        mocker.patch(
            "walletauth.views.WalletNonce.objects.get", return_value=mock_wallet_nonce
        )
        mocker.patch(
            "walletauth.views.base64.b64decode", side_effect=Exception("Invalid base64")
        )

        response = view(request)

        assert response.status_code == 400
        response_data = response.data
        assert response_data == {
            "success": False,
            "error": "Invalid signed transaction",
        }

    def test_walletauth_walletverifyapiview_signature_verification_failed(
        self,
        view,
        rf,
        valid_address,
        mocker,
        mock_wallet_nonce,
        mock_signed_transaction,
    ):
        """Test handling of failed signature verification."""
        data = {
            "address": valid_address,
            "signedTransaction": "base64_encoded_tx",
            "nonce": mock_wallet_nonce.nonce,
        }
        request = rf.post("/verify/", data=data, format="json")

        mocker.patch(
            "walletauth.views.WalletNonce.objects.get", return_value=mock_wallet_nonce
        )
        mocker.patch("walletauth.views.base64.b64decode", return_value=b"mock_tx_bytes")
        mocker.patch(
            "walletauth.views.msgpack.unpackb", return_value={"mock": "tx_dict"}
        )
        mocker.patch(
            "walletauth.views.SignedTransaction.undictify",
            return_value=mock_signed_transaction,
        )
        mocker.patch("walletauth.views.verify_signed_transaction", return_value=False)

        response = view(request)

        assert response.status_code == 400
        response_data = response.data
        assert response_data == {"success": False, "error": "Invalid signature"}

    def test_walletauth_walletverifyapiview_nonce_mismatch_in_note(
        self,
        view,
        rf,
        valid_address,
        mocker,
        mock_wallet_nonce,
        mock_signed_transaction,
    ):
        """Test handling of nonce mismatch in transaction note."""
        data = {
            "address": valid_address,
            "signedTransaction": "base64_encoded_tx",
            "nonce": mock_wallet_nonce.nonce,
        }
        request = rf.post("/verify/", data=data, format="json")

        # Set up transaction with wrong nonce in note
        mock_signed_transaction.transaction.note.decode.return_value = (
            f"{WALLET_CONNECT_NONCE_PREFIX}wrong_nonce"
        )

        mocker.patch(
            "walletauth.views.WalletNonce.objects.get", return_value=mock_wallet_nonce
        )
        mocker.patch("walletauth.views.base64.b64decode", return_value=b"mock_tx_bytes")
        mocker.patch(
            "walletauth.views.msgpack.unpackb", return_value={"mock": "tx_dict"}
        )
        mocker.patch(
            "walletauth.views.SignedTransaction.undictify",
            return_value=mock_signed_transaction,
        )
        mocker.patch("walletauth.views.verify_signed_transaction", return_value=True)

        response = view(request)

        assert response.status_code == 400
        response_data = response.data
        assert response_data == {
            "success": False,
            "error": "Invalid nonce in transaction",
        }

    def test_walletauth_walletverifyapiview_success_new_user(
        self,
        view,
        rf,
        valid_address,
        mocker,
        mock_wallet_nonce,
        mock_signed_transaction,
    ):
        """Test successful verification with new user creation."""
        data = {
            "address": valid_address,
            "signedTransaction": "base64_encoded_tx",
            "nonce": mock_wallet_nonce.nonce,
        }
        request = rf.post("/verify/", data=data, format="json")

        mocker.patch(
            "walletauth.views.WalletNonce.objects.get", return_value=mock_wallet_nonce
        )
        mocker.patch("walletauth.views.base64.b64decode", return_value=b"mock_tx_bytes")
        mocker.patch(
            "walletauth.views.msgpack.unpackb", return_value={"mock": "tx_dict"}
        )
        mocker.patch(
            "walletauth.views.SignedTransaction.undictify",
            return_value=mock_signed_transaction,
        )
        mocker.patch("walletauth.views.verify_signed_transaction", return_value=True)
        mocker.patch(
            "walletauth.views.Contributor.objects.filter",
            return_value=mock.MagicMock(first=lambda: None),
        )
        mock_user_create = mocker.patch("walletauth.views.User.objects.create")
        mocker.patch("walletauth.views.Contributor.objects.create")
        mock_login = mocker.patch("walletauth.views.login")

        response = view(request)

        assert response.status_code == 200
        response_data = response.data
        assert response_data == {"success": True, "redirect_url": "/"}
        mock_wallet_nonce.mark_used.assert_called_once()
        mock_user_create.assert_called_once()
        mock_login.assert_called_once()

    def test_walletauth_walletverifyapiview_success_existing_contributor_no_profile(
        self,
        view,
        rf,
        valid_address,
        mocker,
        mock_wallet_nonce,
        mock_signed_transaction,
    ):
        """Test successful verification with existing contributor but no profile."""
        data = {
            "address": valid_address,
            "signedTransaction": "base64_encoded_tx",
            "nonce": mock_wallet_nonce.nonce,
        }
        request = rf.post("/verify/", data=data, format="json")

        mock_contributor = mock.MagicMock(spec=Contributor)
        mock_contributor.address = valid_address

        mocker.patch(
            "walletauth.views.WalletNonce.objects.get", return_value=mock_wallet_nonce
        )
        mocker.patch("walletauth.views.base64.b64decode", return_value=b"mock_tx_bytes")
        mocker.patch(
            "walletauth.views.msgpack.unpackb", return_value={"mock": "tx_dict"}
        )
        mocker.patch(
            "walletauth.views.SignedTransaction.undictify",
            return_value=mock_signed_transaction,
        )
        mocker.patch("walletauth.views.verify_signed_transaction", return_value=True)
        mocker.patch(
            "walletauth.views.Contributor.objects.filter",
            return_value=mock.MagicMock(first=lambda: mock_contributor),
        )
        mocker.patch(
            "walletauth.views.Profile.objects.filter",
            return_value=mock.MagicMock(first=lambda: None),
        )
        mock_user_create = mocker.patch("walletauth.views.User.objects.create")
        mock_login = mocker.patch("walletauth.views.login")

        response = view(request)

        assert response.status_code == 200
        response_data = response.data
        assert response_data == {"success": True, "redirect_url": "/"}
        mock_wallet_nonce.mark_used.assert_called_once()
        mock_user_create.assert_called_once()
        mock_login.assert_called_once()

    def test_walletauth_walletverifyapiview_success_existing_user(
        self,
        view,
        rf,
        valid_address,
        mocker,
        mock_wallet_nonce,
        mock_signed_transaction,
    ):
        """Test successful verification with existing user."""
        data = {
            "address": valid_address,
            "signedTransaction": "base64_encoded_tx",
            "nonce": mock_wallet_nonce.nonce,
        }
        request = rf.post("/verify/", data=data, format="json")

        mock_contributor = mock.MagicMock(spec=Contributor)
        mock_contributor.address = valid_address
        mock_profile = mock.MagicMock(spec=Profile)
        mock_user = mock.MagicMock(spec=User)
        mock_profile.user = mock_user

        mocker.patch(
            "walletauth.views.WalletNonce.objects.get", return_value=mock_wallet_nonce
        )
        mocker.patch("walletauth.views.base64.b64decode", return_value=b"mock_tx_bytes")
        mocker.patch(
            "walletauth.views.msgpack.unpackb", return_value={"mock": "tx_dict"}
        )
        mocker.patch(
            "walletauth.views.SignedTransaction.undictify",
            return_value=mock_signed_transaction,
        )
        mocker.patch("walletauth.views.verify_signed_transaction", return_value=True)
        mocker.patch(
            "walletauth.views.Contributor.objects.filter",
            return_value=mock.MagicMock(first=lambda: mock_contributor),
        )
        mocker.patch(
            "walletauth.views.Profile.objects.filter",
            return_value=mock.MagicMock(first=lambda: mock_profile),
        )
        mock_login = mocker.patch("walletauth.views.login")

        response = view(request)

        assert response.status_code == 200
        response_data = response.data
        assert response_data == {"success": True, "redirect_url": "/"}
        mock_wallet_nonce.mark_used.assert_called_once()
        assert mock_user.backend == "django.contrib.auth.backends.ModelBackend"
        wrapped_request = mock_login.call_args[0][0]
        assert isinstance(wrapped_request, Request)
        assert mock_login.call_args[0][1] == mock_user

    @pytest.mark.django_db
    def test_walletauth_walletverifyapiview_integration_success(
        self, view, rf, valid_address, mocker, mock_signed_transaction
    ):
        """Integration test for successful wallet verification."""
        # Create a real nonce in database
        nonce_str = "integration_test_nonce"
        wallet_nonce = WalletNonce.objects.create(
            address=valid_address, nonce=nonce_str
        )

        data = {
            "address": valid_address,
            "signedTransaction": "base64_encoded_tx",
            "nonce": nonce_str,
        }
        request = rf.post("/verify/", data=data, format="json")

        # Set up the mock transaction note to match the integration test nonce
        mock_signed_transaction.transaction.note.decode.return_value = (
            f"{WALLET_CONNECT_NONCE_PREFIX}{nonce_str}"
        )

        mocker.patch("walletauth.views.base64.b64decode", return_value=b"mock_tx_bytes")
        mocker.patch(
            "walletauth.views.msgpack.unpackb", return_value={"mock": "tx_dict"}
        )
        mocker.patch(
            "walletauth.views.SignedTransaction.undictify",
            return_value=mock_signed_transaction,
        )
        mocker.patch("walletauth.views.verify_signed_transaction", return_value=True)
        mocker.patch(
            "walletauth.views.Contributor.objects.filter",
            return_value=mock.MagicMock(first=lambda: None),
        )
        mocker.patch("walletauth.views.User.objects.create")
        mocker.patch("walletauth.views.Contributor.objects.create")
        mocker.patch("walletauth.views.login")

        response = view(request)

        assert response.status_code == 200
        response_data = response.data
        assert response_data == {
            "success": True,
            "redirect_url": settings.LOGIN_REDIRECT_URL,
        }

        # Verify nonce was marked as used
        wallet_nonce.refresh_from_db()
        assert wallet_nonce.used is True

    def test_walletauth_walletverifyapiview_transaction_note_decoding_error(
        self,
        view,
        rf,
        valid_address,
        mocker,
        mock_wallet_nonce,
        mock_signed_transaction,
    ):
        """Test handling of transaction note decoding errors."""
        data = {
            "address": valid_address,
            "signedTransaction": "base64_encoded_tx",
            "nonce": mock_wallet_nonce.nonce,
        }
        request = rf.post("/verify/", data=data, format="json")

        # Create a new mock for the note that will raise UnicodeDecodeError
        mock_note_with_error = mock.MagicMock()
        mock_note_with_error.decode.side_effect = UnicodeDecodeError(
            "utf-8", b"", 0, 1, "invalid byte"
        )
        mock_signed_transaction.transaction.note = mock_note_with_error

        mocker.patch(
            "walletauth.views.WalletNonce.objects.get", return_value=mock_wallet_nonce
        )
        mocker.patch("walletauth.views.base64.b64decode", return_value=b"mock_tx_bytes")
        mocker.patch(
            "walletauth.views.msgpack.unpackb", return_value={"mock": "tx_dict"}
        )
        mocker.patch(
            "walletauth.views.SignedTransaction.undictify",
            return_value=mock_signed_transaction,
        )
        mocker.patch("walletauth.views.verify_signed_transaction", return_value=True)

        response = view(request)

        assert response.status_code == 400
        response_data = response.data
        assert response_data == {
            "success": False,
            "error": "Invalid signed transaction",
        }

    def test_walletauth_walletverifyapiview_empty_note(
        self,
        view,
        rf,
        valid_address,
        mocker,
        mock_wallet_nonce,
        mock_signed_transaction,
    ):
        """Test handling of empty transaction note."""
        data = {
            "address": valid_address,
            "signedTransaction": "base64_encoded_tx",
            "nonce": mock_wallet_nonce.nonce,
        }
        request = rf.post("/verify/", data=data, format="json")

        # Set up transaction with empty note
        mock_signed_transaction.transaction.note = None

        mocker.patch(
            "walletauth.views.WalletNonce.objects.get", return_value=mock_wallet_nonce
        )
        mocker.patch("walletauth.views.base64.b64decode", return_value=b"mock_tx_bytes")
        mocker.patch(
            "walletauth.views.msgpack.unpackb", return_value={"mock": "tx_dict"}
        )
        mocker.patch(
            "walletauth.views.SignedTransaction.undictify",
            return_value=mock_signed_transaction,
        )
        mocker.patch("walletauth.views.verify_signed_transaction", return_value=True)

        response = view(request)

        assert response.status_code == 400
        response_data = response.data
        assert response_data == {
            "success": False,
            "error": "Invalid nonce in transaction",
        }

    def test_walletauth_walletverifyapiview_note_without_prefix(
        self,
        view,
        rf,
        valid_address,
        mocker,
        mock_wallet_nonce,
        mock_signed_transaction,
    ):
        """Test handling of transaction note without expected prefix."""
        data = {
            "address": valid_address,
            "signedTransaction": "base64_encoded_tx",
            "nonce": mock_wallet_nonce.nonce,
        }
        request = rf.post("/verify/", data=data, format="json")

        # Set up transaction with note that doesn't start with the prefix
        mock_signed_transaction.transaction.note.decode.return_value = (
            f"WrongPrefix{mock_wallet_nonce.nonce}"
        )

        mocker.patch(
            "walletauth.views.WalletNonce.objects.get", return_value=mock_wallet_nonce
        )
        mocker.patch("walletauth.views.base64.b64decode", return_value=b"mock_tx_bytes")
        mocker.patch(
            "walletauth.views.msgpack.unpackb", return_value={"mock": "tx_dict"}
        )
        mocker.patch(
            "walletauth.views.SignedTransaction.undictify",
            return_value=mock_signed_transaction,
        )
        mocker.patch("walletauth.views.verify_signed_transaction", return_value=True)

        response = view(request)

        assert response.status_code == 400
        response_data = response.data
        assert response_data == {
            "success": False,
            "error": "Invalid nonce in transaction",
        }

    def test_walletauth_walletverifyapiview_msgpack_unpack_error(
        self, view, rf, valid_address, mocker, mock_wallet_nonce
    ):
        """Test handling of msgpack unpacking errors."""
        data = {
            "address": valid_address,
            "signedTransaction": "base64_encoded_tx",
            "nonce": mock_wallet_nonce.nonce,
        }
        request = rf.post("/verify/", data=data, format="json")

        mocker.patch(
            "walletauth.views.WalletNonce.objects.get", return_value=mock_wallet_nonce
        )
        mocker.patch("walletauth.views.base64.b64decode", return_value=b"mock_tx_bytes")
        mocker.patch(
            "walletauth.views.msgpack.unpackb", side_effect=Exception("Msgpack error")
        )

        response = view(request)

        assert response.status_code == 400
        response_data = response.data
        assert response_data == {
            "success": False,
            "error": "Invalid signed transaction",
        }


class TestAddAllocationsAPIView:
    """Test suite for AddAllocationsAPIView."""

    @pytest.fixture
    def view(self):
        return AddAllocationsAPIView().as_view()

    @pytest.fixture
    def rf(self):
        return APIRequestFactory()

    @pytest.fixture
    def valid_address(self):
        return "2EVGZ4BGOSL3J64UYDE2BUGTNTBZZZLI54VUQQNZZLYCDODLY33UGXNSIU"

    def test_walletauth_addllocationsapiview_is_subclass_of_view(self):
        assert issubclass(AddAllocationsAPIView, View)

    @pytest.mark.django_db
    def test_walletauth_addllocationsapiview_valid_request(
        self, view, rf, valid_address, mocker
    ):
        """Test successful data retrieval for valid address."""
        mocked_address = mocker.patch(
            "walletauth.views.is_valid_address", return_value=True
        )
        addresses, amounts = mocker.MagicMock(), mocker.MagicMock()
        mocked_contribs = mocker.patch(
            (
                "walletauth.views.Contribution.objects."
                "addressed_contributions_addresses_and_amounts"
            ),
            return_value=(addresses, amounts),
        )

        data = {"address": valid_address}
        request = rf.post("/add-allocations/", data=data, format="json")

        response = view(request)

        assert response.status_code == 200
        response_data = response.data
        assert "addresses" in response_data
        assert "amounts" in response_data
        mocked_address.assert_called_once_with(valid_address)
        mocked_contribs.assert_called_once_with()

    @pytest.mark.django_db
    def test_walletauth_addallocationsapiview_fallback_to_json_body(self, mocker):
        """Test fallback data parsing when `request.data` is missing (WSGIRequest)."""
        mocker.patch("walletauth.views.is_valid_address", return_value=True)
        addresses, amounts = mocker.MagicMock(), mocker.MagicMock()
        mocked_contribs = mocker.patch(
            (
                "walletauth.views.Contribution.objects."
                "addressed_contributions_addresses_and_amounts"
            ),
            return_value=(addresses, amounts),
        )

        rf = RequestFactory()  # <-- forces WSGIRequest (no request.data)
        json_body = (
            '{"address": "2EVGZ4BGOSL3J64UYDE2BUGTNTBZZZLI54VUQQNZZLYCDODLY33UGXNSIU"}'
        )

        request = rf.post(
            "/add-allocations/", data=json_body, content_type="application/json"
        )

        response = AddAllocationsAPIView().post(request)  # call .post(), not view()

        assert response.status_code == 200
        assert response.data == {"addresses": addresses, "amounts": amounts}
        mocked_contribs.assert_called_once_with()

    def test_walletauth_addllocationsapiview_invalid_json(self, view, rf):
        """Test handling of invalid JSON."""
        request = rf.post("/add-allocations/", data="invalid json", format="json")
        response = view(request)
        assert response.status_code == 400
        assert response.data == {"error": "Invalid JSON"}

    def test_walletauth_addllocationsapiview_missing_address(self, view, rf):
        """Test handling of missing address."""
        request = rf.post("/add-allocations/", data={}, format="json")
        response = view(request)
        assert response.status_code == 400
        assert "Invalid or missing address" in response.data["error"]


class TestAllocationsSuccessfulAPIView:
    """Test suite for AllocationsSuccessfulAPIView."""

    @pytest.fixture
    def view(self):
        return AllocationsSuccessfulAPIView().as_view()

    @pytest.fixture
    def rf(self):
        return APIRequestFactory()

    @pytest.fixture
    def admin_user(self):
        """Create an admin user for testing."""
        return User.objects.create_user(
            username="admin", email="admin@test.com", password="testpass", is_staff=True
        )

    @pytest.fixture
    def regular_user(self):
        """Create a regular user for testing."""
        return User.objects.create_user(
            username="regular", email="regular@test.com", password="testpass"
        )

    def test_walletauth_allocationssuccessfulapiview_is_subclass_of_view(self):
        """Ensure AllocationsSuccessfulAPIView is a valid Django view."""
        assert issubclass(AllocationsSuccessfulAPIView, object)

    def test_walletauth_allocationssuccessfulapiview_has_admin_permission(self):
        """Test that the view requires admin permissions."""
        assert IsAdminUser in AllocationsSuccessfulAPIView.permission_classes

    @pytest.mark.django_db
    def test_walletauth_allocationssuccessfulapiview_valid_request_admin_user(
        self, view, rf, admin_user, mocker
    ):
        """Test successful allocation marking by admin user."""
        # Mock the helper function
        mock_added_allocations = mocker.patch(
            "walletauth.views.added_allocations_for_addresses"
        )

        data = {"addresses": ["ADDR1", "ADDR2"], "txIDs": ["TX123", "TX456"]}
        request = rf.post("/allocations-successful/", data=data, format="json")

        # Force authentication for admin user
        request.user = admin_user

        response = view(request)

        assert response.status_code == 200
        assert response.data == {"success": True}
        # Use call_args to check the actual call without worrying about request type
        mock_added_allocations.assert_called_once()
        call_args = mock_added_allocations.call_args[0]
        assert call_args[1] == ["ADDR1", "ADDR2"]  # addresses
        assert call_args[2] == ["TX123", "TX456"]  # txIDs

    @pytest.mark.django_db
    def test_walletauth_allocationssuccessfulapiview_fallback_to_json_body_admin(
        self, admin_user, mocker
    ):
        """Test fallback JSON parsing when DRF Request is NOT used (admin user)."""
        mock_added_allocations = mocker.patch(
            "walletauth.views.added_allocations_for_addresses"
        )

        rf = RequestFactory()
        json_body = '{"addresses": ["ADDR1", "ADDR2"], "txIDs": ["TX123", "TX456"]}'

        request = rf.post(
            "/allocations-successful/", data=json_body, content_type="application/json"
        )
        request.user = admin_user

        response = AllocationsSuccessfulAPIView().post(request)

        assert response.status_code == 200
        assert response.data == {"success": True}
        mock_added_allocations.assert_called_once()
        call_args = mock_added_allocations.call_args[0]
        assert call_args[1] == ["ADDR1", "ADDR2"]  # addresses
        assert call_args[2] == ["TX123", "TX456"]  # txIDs

    @pytest.mark.django_db
    def test_walletauth_allocationssuccessfulapiview_regular_user_permission_denied(
        self, view, rf, regular_user
    ):
        """Test that regular users cannot access this endpoint."""
        data = {"addresses": ["ADDR1", "ADDR2"], "txIDs": ["TX123", "TX456"]}
        request = rf.post("/allocations-successful/", data=data, format="json")
        request.user = regular_user

        response = view(request)

        assert response.status_code == 403  # Permission Denied

    @pytest.mark.django_db
    def test_walletauth_allocationssuccessfulapiview_unauthenticated_user(
        self, view, rf
    ):
        """Test that unauthenticated users cannot access this endpoint."""
        data = {"addresses": ["ADDR1", "ADDR2"], "txIDs": ["TX123", "TX456"]}
        request = rf.post("/allocations-successful/", data=data, format="json")
        request.user = AnonymousUser()

        response = view(request)

        assert response.status_code == 403  # Permission Denied

    @pytest.mark.django_db
    def test_walletauth_allocationssuccessfulapiview_invalid_json(
        self, view, rf, admin_user
    ):
        """Test handling of invalid JSON data."""
        request = rf.post(
            "/allocations-successful/", data="invalid json", format="json"
        )
        request.user = admin_user

        response = view(request)

        assert response.status_code == 400
        assert response.data == {"error": "Invalid JSON"}

    @pytest.mark.django_db
    def test_walletauth_allocationssuccessfulapiview_missing_addresses(
        self, view, rf, admin_user
    ):
        """Test handling of missing addresses."""
        data = {"txIDs": ["TX123", "TX456"]}  # Missing addresses
        request = rf.post("/allocations-successful/", data=data, format="json")
        request.user = admin_user

        response = view(request)

        assert response.status_code == 400
        assert response.data == {"error": "Missing addresses"}

    @pytest.mark.django_db
    def test_walletauth_allocationssuccessfulapiview_empty_addresses(
        self, view, rf, admin_user
    ):
        """Test handling of empty addresses array."""
        data = {"addresses": [], "txIDs": ["TX123", "TX456"]}
        request = rf.post("/allocations-successful/", data=data, format="json")
        request.user = admin_user

        response = view(request)

        assert response.status_code == 400
        assert response.data == {"error": "Missing addresses"}

    @pytest.mark.django_db
    def test_walletauth_allocationssuccessfulapiview_single_address(
        self, view, rf, admin_user, mocker
    ):
        """Test successful processing with single address."""
        mock_added_allocations = mocker.patch(
            "walletauth.views.added_allocations_for_addresses"
        )

        data = {"addresses": ["SINGLE_ADDR"], "txIDs": ["SINGLE_TX"]}
        request = rf.post("/allocations-successful/", data=data, format="json")
        request.user = admin_user

        response = view(request)

        assert response.status_code == 200
        assert response.data == {"success": True}
        mock_added_allocations.assert_called_once()
        call_args = mock_added_allocations.call_args[0]
        assert call_args[1] == ["SINGLE_ADDR"]  # addresses
        assert call_args[2] == ["SINGLE_TX"]  # txIDs

    @pytest.mark.django_db
    def test_walletauth_allocationssuccessfulapiview_missing_txids(
        self, view, rf, admin_user, mocker
    ):
        """Test processing when txIDs are missing (should still work)."""
        mock_added_allocations = mocker.patch(
            "walletauth.views.added_allocations_for_addresses"
        )

        data = {
            "addresses": ["ADDR1", "ADDR2"]
            # Missing txIDs
        }
        request = rf.post("/allocations-successful/", data=data, format="json")
        request.user = admin_user

        response = view(request)

        assert response.status_code == 200
        assert response.data == {"success": True}
        # Should pass None for txIDs when not provided
        mock_added_allocations.assert_called_once()
        call_args = mock_added_allocations.call_args[0]
        assert call_args[1] == ["ADDR1", "ADDR2"]  # addresses
        assert call_args[2] is None  # txIDs should be None


class TestClaimSuccessfulAPIView:
    """Test suite for ClaimSuccessfulAPIView."""

    @pytest.fixture
    def view(self):
        return ClaimSuccessfulAPIView().as_view()

    @pytest.fixture
    def rf(self):
        return APIRequestFactory()

    @pytest.fixture
    def valid_address(self):
        return "2EVGZ4BGOSL3J64UYDE2BUGTNTBZZZLI54VUQQNZZLYCDODLY33UGXNSIU"

    def test_walletauth_claimsuccessfulapiview_is_subclass_of_view(self):
        """Ensure ClaimSuccessfulAPIView is a valid Django view."""
        assert issubclass(ClaimSuccessfulAPIView, View)

    @pytest.mark.django_db
    def test_walletauth_claimsuccessfulapiview_valid_request(
        self, view, rf, valid_address, mocker
    ):
        """Test a valid request marks contributions as claimed."""
        mocked_address = mocker.patch(
            "walletauth.views.is_valid_address", return_value=True
        )
        mocked_claim = mocker.patch("walletauth.views.claim_successful_for_address")
        txid = "txid"
        data = {"address": valid_address, "txID": txid}
        request = rf.post("/claim-successful/", data=data, format="json")
        response = view(request)

        assert response.status_code == 200
        assert response.data == {"success": True}
        mocked_address.assert_called_once_with(valid_address)
        mocked_claim.assert_called_once()
        call_args = mocked_claim.call_args[0]
        assert call_args[1] == valid_address
        assert call_args[2] == txid

    @pytest.mark.django_db
    def test_walletauth_claimsuccessfulapiview_fallback_to_json_body(
        self, valid_address, mocker
    ):
        """Test fallback JSON decoding when request.data is not available."""
        mocker.patch("walletauth.views.is_valid_address", return_value=True)
        mocked_claim = mocker.patch("walletauth.views.claim_successful_for_address")
        rf = RequestFactory()
        txid = "txid"
        json_body = f'{{"address": "{valid_address}", "txID": "{txid}"}}'

        request = rf.post(
            "/claim-successful/", data=json_body, content_type="application/json"
        )
        response = ClaimSuccessfulAPIView().post(request)

        assert response.status_code == 200
        assert response.data == {"success": True}
        mocked_claim.assert_called_once()
        call_args = mocked_claim.call_args[0]
        assert call_args[1] == valid_address
        assert call_args[2] == txid

    def test_walletauth_claimsuccessfulapiview_invalid_json(self, view, rf):
        """Test handling of invalid JSON data."""
        request = rf.post("/claim-successful/", data="invalid json", format="json")
        response = view(request)

        assert response.status_code == 400
        assert response.data == {"error": "Invalid JSON"}

    def test_walletauth_claimsuccessfulapiview_missing_address(self, view, rf):
        """Test missing address yields error."""
        request = rf.post("/claim-successful/", data={}, format="json")
        response = view(request)

        assert response.status_code == 400
        assert "Invalid or missing address" in response.data["error"]


class TestReclaimAllocationsAPIView:
    """Test suite for ReclaimAllocationsAPIView."""

    @pytest.fixture
    def view(self):
        return ReclaimAllocationsAPIView().as_view()

    @pytest.fixture
    def rf(self):
        return APIRequestFactory()

    @pytest.fixture
    def valid_address(self):
        return "2EVGZ4BGOSL3J64UYDE2BUGTNTBZZZLI54VUQQNZZLYCDODLY33UGXNSIU"

    def test_walletauth_reclaimallocationsapiview_is_subclass_of_view(self):
        assert issubclass(ReclaimAllocationsAPIView, View)

    @pytest.mark.django_db
    def test_walletauth_reclaimallocationsapiview_valid_request(
        self, view, rf, valid_address, mocker
    ):
        """Test successful data retrieval for valid address."""
        mocked_address = mocker.patch(
            "walletauth.views.is_valid_address", return_value=True
        )
        addresses = ["ADDR1", "ADDR2"]
        mocked_addresses = mocker.patch(
            "walletauth.views.reclaimable_addresses", return_value=addresses
        )
        data = {"address": valid_address}
        request = rf.post("/reclaim-allocations/", data=data, format="json")
        response = view(request)

        assert response.status_code == 200
        response_data = response.data
        assert response_data["addresses"] == addresses
        mocked_address.assert_called_once_with(valid_address)
        mocked_addresses.assert_called_once_with()

    @pytest.mark.django_db
    def test_walletauth_reclaimallocationsapiview_fallback_to_json_body(self, mocker):
        """Test JSON parsing when DRF Request is NOT used."""
        mocker.patch("walletauth.views.is_valid_address", return_value=True)
        addresses = ["ADDR1", "ADDR2"]
        mocker.patch("walletauth.views.reclaimable_addresses", return_value=addresses)

        rf = RequestFactory()
        json_body = (
            '{"address": "2EVGZ4BGOSL3J64UYDE2BUGTNTBZZZLI54VUQQNZZLYCDODLY33UGXNSIU"}'
        )

        request = rf.post(
            "/reclaim-allocations/", data=json_body, content_type="application/json"
        )

        response = ReclaimAllocationsAPIView().post(request)

        assert response.status_code == 200
        assert response.data["addresses"] == addresses

    def test_walletauth_reclaimallocationsapiview_invalid_json(self, view, rf):
        """Test handling of invalid JSON."""
        request = rf.post("/reclaim-allocations/", data="invalid json", format="json")
        response = view(request)
        assert response.status_code == 400
        assert response.data == {"error": "Invalid JSON"}

    def test_walletauth_reclaimallocationsapiview_missing_address(self, view, rf):
        """Test handling of missing address."""
        request = rf.post("/reclaim-allocations/", data={}, format="json")

        response = view(request)
        assert response.status_code == 400
        assert "Invalid or missing address" in response.data["error"]


class TestReclaimSuccessfulAPIView:
    """Test suite for ReclaimSuccessfulAPIView."""

    @pytest.fixture
    def view(self):
        return ReclaimSuccessfulAPIView().as_view()

    @pytest.fixture
    def rf(self):
        return APIRequestFactory()

    @pytest.fixture
    def admin_user(self):
        """Create an admin user for testing."""
        return User.objects.create_user(
            username="admin", email="admin@test.com", password="testpass", is_staff=True
        )

    @pytest.fixture
    def regular_user(self):
        """Create a regular user for testing."""
        return User.objects.create_user(
            username="regular", email="regular@test.com", password="testpass"
        )

    def test_walletauth_reclaimsuccessfulapiview_is_subclass_of_view(self):
        """Ensure ReclaimSuccessfulAPIView is a valid Django view."""
        assert issubclass(ReclaimSuccessfulAPIView, object)

    def test_walletauth_reclaimsuccessfulapiview_has_admin_permission(self):
        """Test that the view requires admin permissions."""
        assert IsAdminUser in ReclaimSuccessfulAPIView.permission_classes

    @pytest.mark.django_db
    def test_walletauth_reclaimsuccessfulapiview_valid_request_admin_user(
        self, view, rf, admin_user, mocker
    ):
        """Test successful reclaim marking by admin user."""
        # Mock the helper function
        mock_reclaimed_allocation = mocker.patch(
            "walletauth.views.reclaimed_allocation_for_address"
        )

        data = {"address": "TEST_ADDRESS", "txID": "TX123456"}
        request = rf.post("/reclaim-successful/", data=data, format="json")

        # Force authentication for admin user
        request.user = admin_user

        response = view(request)

        assert response.status_code == 200
        assert response.data == {"success": True}
        mock_reclaimed_allocation.assert_called_once()
        call_args = mock_reclaimed_allocation.call_args[0]
        assert call_args[1] == "TEST_ADDRESS"  # address
        assert call_args[2] == "TX123456"  # txID

    @pytest.mark.django_db
    def test_walletauth_reclaimsuccessfulapiview_fallback_to_json_body_admin(
        self, admin_user, mocker
    ):
        """Test fallback JSON parsing when DRF Request is NOT used (admin user)."""
        mock_reclaimed_allocation = mocker.patch(
            "walletauth.views.reclaimed_allocation_for_address"
        )

        rf = RequestFactory()
        json_body = '{"address": "TEST_ADDRESS", "txID": "TX123456"}'

        request = rf.post(
            "/reclaim-successful/", data=json_body, content_type="application/json"
        )
        request.user = admin_user

        response = ReclaimSuccessfulAPIView().post(request)

        assert response.status_code == 200
        assert response.data == {"success": True}
        mock_reclaimed_allocation.assert_called_once()
        call_args = mock_reclaimed_allocation.call_args[0]
        assert call_args[1] == "TEST_ADDRESS"  # address
        assert call_args[2] == "TX123456"  # txID

    @pytest.mark.django_db
    def test_walletauth_reclaimsuccessfulapiview_regular_user_permission_denied(
        self, view, rf, regular_user
    ):
        """Test that regular users cannot access this endpoint."""
        data = {"address": "TEST_ADDRESS", "txID": "TX123456"}
        request = rf.post("/reclaim-successful/", data=data, format="json")
        request.user = regular_user

        response = view(request)

        assert response.status_code == 403  # Permission Denied

    @pytest.mark.django_db
    def test_walletauth_reclaimsuccessfulapiview_unauthenticated_user(self, view, rf):
        """Test that unauthenticated users cannot access this endpoint."""
        data = {"address": "TEST_ADDRESS", "txID": "TX123456"}
        request = rf.post("/reclaim-successful/", data=data, format="json")
        request.user = AnonymousUser()

        response = view(request)

        assert response.status_code == 403  # Permission Denied

    @pytest.mark.django_db
    def test_walletauth_reclaimsuccessfulapiview_invalid_json(
        self, view, rf, admin_user
    ):
        """Test handling of invalid JSON data."""
        request = rf.post("/reclaim-successful/", data="invalid json", format="json")
        request.user = admin_user

        response = view(request)

        assert response.status_code == 400
        assert response.data == {"error": "Invalid JSON"}

    @pytest.mark.django_db
    def test_walletauth_reclaimsuccessfulapiview_missing_address(
        self, view, rf, admin_user
    ):
        """Test handling of missing address."""
        data = {"txID": "TX123456"}  # Missing address
        request = rf.post("/reclaim-successful/", data=data, format="json")
        request.user = admin_user

        response = view(request)

        assert response.status_code == 400
        assert response.data == {"error": "Missing address"}

    @pytest.mark.django_db
    def test_walletauth_reclaimsuccessfulapiview_empty_address(
        self, view, rf, admin_user
    ):
        """Test handling of empty address string."""
        data = {"address": "", "txID": "TX123456"}
        request = rf.post("/reclaim-successful/", data=data, format="json")
        request.user = admin_user

        response = view(request)

        assert response.status_code == 400
        assert response.data == {"error": "Missing address"}

    @pytest.mark.django_db
    def test_walletauth_reclaimsuccessfulapiview_missing_txid(
        self, view, rf, admin_user, mocker
    ):
        """Test processing when txID is missing."""
        mock_reclaimed_allocation = mocker.patch(
            "walletauth.views.reclaimed_allocation_for_address"
        )

        data = {
            "address": "TEST_ADDRESS"
            # Missing txID
        }
        request = rf.post("/reclaim-successful/", data=data, format="json")
        request.user = admin_user

        response = view(request)

        assert response.status_code == 200
        assert response.data == {"success": True}
        # Should pass None for txID when not provided
        mock_reclaimed_allocation.assert_called_once()
        call_args = mock_reclaimed_allocation.call_args[0]
        assert call_args[1] == "TEST_ADDRESS"  # address
        assert call_args[2] is None  # txID should be None
