import{d as Zn,g as Sn}from"../js/bundle.js";import{t as Vi}from"./es5-DpwS1tMq.js";import{a as Ri,c as Oi,d as qi,f as Hn,i as hn,l as Di,n as Hi,o as kn,r as yn,s as Be,t as jn}from"./index-3449716b-m_VRd8xs.js";var Ni=Zn(((et,ut)=>{(function(pt,Lt){typeof et=="object"&&typeof ut=="object"?ut.exports=Lt():typeof define=="function"&&define.amd?define([],Lt):typeof et=="object"?et.QRCodeStyling=Lt():pt.QRCodeStyling=Lt()})(self,(function(){return(()=>{var pt={192:(kt,Dt)=>{var Ut,Ve,ve=(function(){var le=function(tt,J){var $=tt,U=we[J],D=null,st=0,ot=null,rt=[],Z={},Tt=function(L,E){D=(function(k){for(var V=new Array(k),N=0;N<k;N+=1){V[N]=new Array(k);for(var q=0;q<k;q+=1)V[N][q]=null}return V})(st=4*$+17),H(0,0),H(st-7,0),H(0,st-7),_(),p(),M(L,E),$>=7&&x(L),ot??=P($,U,rt),z(ot,E)},H=function(L,E){for(var k=-1;k<=7;k+=1)if(!(L+k<=-1||st<=L+k))for(var V=-1;V<=7;V+=1)E+V<=-1||st<=E+V||(D[L+k][E+V]=0<=k&&k<=6&&(V==0||V==6)||0<=V&&V<=6&&(k==0||k==6)||2<=k&&k<=4&&2<=V&&V<=4)},p=function(){for(var L=8;L<st-8;L+=1)D[L][6]??(D[L][6]=L%2==0);for(var E=8;E<st-8;E+=1)D[6][E]??(D[6][E]=E%2==0)},_=function(){for(var L=Vt.getPatternPosition($),E=0;E<L.length;E+=1)for(var k=0;k<L.length;k+=1){var V=L[E],N=L[k];if(D[V][N]==null)for(var q=-2;q<=2;q+=1)for(var ht=-2;ht<=2;ht+=1)D[V+q][N+ht]=q==-2||q==2||ht==-2||ht==2||q==0&&ht==0}},x=function(L){for(var E=Vt.getBCHTypeNumber($),k=0;k<18;k+=1){var V=!L&&(E>>k&1)==1;D[Math.floor(k/3)][k%3+st-8-3]=V}for(k=0;k<18;k+=1)V=!L&&(E>>k&1)==1,D[k%3+st-8-3][Math.floor(k/3)]=V},M=function(L,E){for(var k=U<<3|E,V=Vt.getBCHTypeInfo(k),N=0;N<15;N+=1){var q=!L&&(V>>N&1)==1;N<6?D[N][8]=q:N<8?D[N+1][8]=q:D[st-15+N][8]=q}for(N=0;N<15;N+=1)q=!L&&(V>>N&1)==1,N<8?D[8][st-N-1]=q:N<9?D[8][15-N-1+1]=q:D[8][15-N-1]=q;D[st-8][8]=!L},z=function(L,E){for(var k=-1,V=st-1,N=7,q=0,ht=Vt.getMaskFunction(E),X=st-1;X>0;X-=2)for(X==6&&(X-=1);;){for(var dt=0;dt<2;dt+=1)if(D[V][X-dt]==null){var mt=!1;q<L.length&&(mt=(L[q]>>>N&1)==1),ht(V,X-dt)&&(mt=!mt),D[V][X-dt]=mt,(N-=1)==-1&&(q+=1,N=7)}if((V+=k)<0||st<=V){V-=k,k=-k;break}}},P=function(L,E,k){for(var V=je.getRSBlocks(L,E),N=Ae(),q=0;q<k.length;q+=1){var ht=k[q];N.put(ht.getMode(),4),N.put(ht.getLength(),Vt.getLengthInBits(ht.getMode(),L)),ht.write(N)}var X=0;for(q=0;q<V.length;q+=1)X+=V[q].dataCount;if(N.getLengthInBits()>8*X)throw"code length overflow. ("+N.getLengthInBits()+">"+8*X+")";for(N.getLengthInBits()+4<=8*X&&N.put(0,4);N.getLengthInBits()%8!=0;)N.putBit(!1);for(;!(N.getLengthInBits()>=8*X||(N.put(236,8),N.getLengthInBits()>=8*X));)N.put(17,8);return(function(dt,mt){for(var vt=0,At=0,gt=0,wt=new Array(mt.length),ft=new Array(mt.length),xt=0;xt<mt.length;xt+=1){var Xt=mt[xt].dataCount,It=mt[xt].totalCount-Xt;At=Math.max(At,Xt),gt=Math.max(gt,It),wt[xt]=new Array(Xt);for(var Ct=0;Ct<wt[xt].length;Ct+=1)wt[xt][Ct]=255&dt.getBuffer()[Ct+vt];vt+=Xt;var Ot=Vt.getErrorCorrectPolynomial(It),Pt=Jt(wt[xt],Ot.getLength()-1).mod(Ot);for(ft[xt]=new Array(Ot.getLength()-1),Ct=0;Ct<ft[xt].length;Ct+=1){var qt=Ct+Pt.getLength()-ft[xt].length;ft[xt][Ct]=qt>=0?Pt.getAt(qt):0}}var Ht=0;for(Ct=0;Ct<mt.length;Ct+=1)Ht+=mt[Ct].totalCount;var Rt=new Array(Ht),ie=0;for(Ct=0;Ct<At;Ct+=1)for(xt=0;xt<mt.length;xt+=1)Ct<wt[xt].length&&(Rt[ie]=wt[xt][Ct],ie+=1);for(Ct=0;Ct<gt;Ct+=1)for(xt=0;xt<mt.length;xt+=1)Ct<ft[xt].length&&(Rt[ie]=ft[xt][Ct],ie+=1);return Rt})(N,V)};Z.addData=function(L,E){var k=null;switch(E=E||"Byte"){case"Numeric":k=We(L);break;case"Alphanumeric":k=Ge(L);break;case"Byte":k=me(L);break;case"Kanji":k=ye(L);break;default:throw"mode:"+E}rt.push(k),ot=null},Z.isDark=function(L,E){if(L<0||st<=L||E<0||st<=E)throw L+","+E;return D[L][E]},Z.getModuleCount=function(){return st},Z.make=function(){if($<1){for(var L=1;L<40;L++){for(var E=je.getRSBlocks(L,U),k=Ae(),V=0;V<rt.length;V++){var N=rt[V];k.put(N.getMode(),4),k.put(N.getLength(),Vt.getLengthInBits(N.getMode(),L)),N.write(k)}var q=0;for(V=0;V<E.length;V++)q+=E[V].dataCount;if(k.getLengthInBits()<=8*q)break}$=L}Tt(!1,(function(){for(var ht=0,X=0,dt=0;dt<8;dt+=1){Tt(!0,dt);var mt=Vt.getLostPoint(Z);(dt==0||ht>mt)&&(ht=mt,X=dt)}return X})())},Z.createTableTag=function(L,E){L=L||2;var k="";k+='<table style="',k+=" border-width: 0px; border-style: none;",k+=" border-collapse: collapse;",k+=" padding: 0px; margin: "+(E=E===void 0?4*L:E)+"px;",k+='">',k+="<tbody>";for(var V=0;V<Z.getModuleCount();V+=1){k+="<tr>";for(var N=0;N<Z.getModuleCount();N+=1)k+='<td style="',k+=" border-width: 0px; border-style: none;",k+=" border-collapse: collapse;",k+=" padding: 0px; margin: 0px;",k+=" width: "+L+"px;",k+=" height: "+L+"px;",k+=" background-color: ",k+=Z.isDark(V,N)?"#000000":"#ffffff",k+=";",k+='"/>';k+="</tr>"}return(k+="</tbody>")+"</table>"},Z.createSvgTag=function(L,E,k,V){var N={};typeof arguments[0]=="object"&&(L=(N=arguments[0]).cellSize,E=N.margin,k=N.alt,V=N.title),L=L||2,E=E===void 0?4*L:E,(k=typeof k=="string"?{text:k}:k||{}).text=k.text||null,k.id=k.text?k.id||"qrcode-description":null,(V=typeof V=="string"?{text:V}:V||{}).text=V.text||null,V.id=V.text?V.id||"qrcode-title":null;var q,ht,X,dt,mt=Z.getModuleCount()*L+2*E,vt="";for(dt="l"+L+",0 0,"+L+" -"+L+",0 0,-"+L+"z ",vt+='<svg version="1.1" xmlns="http://www.w3.org/2000/svg"',vt+=N.scalable?"":' width="'+mt+'px" height="'+mt+'px"',vt+=' viewBox="0 0 '+mt+" "+mt+'" ',vt+=' preserveAspectRatio="xMinYMin meet"',vt+=V.text||k.text?' role="img" aria-labelledby="'+j([V.id,k.id].join(" ").trim())+'"':"",vt+=">",vt+=V.text?'<title id="'+j(V.id)+'">'+j(V.text)+"</title>":"",vt+=k.text?'<description id="'+j(k.id)+'">'+j(k.text)+"</description>":"",vt+='<rect width="100%" height="100%" fill="white" cx="0" cy="0"/>',vt+='<path d="',ht=0;ht<Z.getModuleCount();ht+=1)for(X=ht*L+E,q=0;q<Z.getModuleCount();q+=1)Z.isDark(ht,q)&&(vt+="M"+(q*L+E)+","+X+dt);return(vt+='" stroke="transparent" fill="black"/>')+"</svg>"},Z.createDataURL=function(L,E){L=L||2,E=E===void 0?4*L:E;var k=Z.getModuleCount()*L+2*E,V=E,N=k-E;return Re(k,k,(function(q,ht){if(V<=q&&q<N&&V<=ht&&ht<N){var X=Math.floor((q-V)/L),dt=Math.floor((ht-V)/L);return Z.isDark(dt,X)?0:1}return 1}))},Z.createImgTag=function(L,E,k){L=L||2,E=E===void 0?4*L:E;var V=Z.getModuleCount()*L+2*E,N="";return N+="<img",N+=' src="',N+=Z.createDataURL(L,E),N+='"',N+=' width="',N+=V,N+='"',N+=' height="',N+=V,N+='"',k&&(N+=' alt="',N+=j(k),N+='"'),N+"/>"};var j=function(L){for(var E="",k=0;k<L.length;k+=1){var V=L.charAt(k);switch(V){case"<":E+="&lt;";break;case">":E+="&gt;";break;case"&":E+="&amp;";break;case'"':E+="&quot;";break;default:E+=V}}return E};return Z.createASCII=function(L,E){if((L=L||1)<2)return(function(wt){wt=wt===void 0?2:wt;var ft,xt,Xt,It,Ct,Ot=1*Z.getModuleCount()+2*wt,Pt=wt,qt=Ot-wt,Ht={"██":"█","█ ":"▀"," █":"▄","  ":" "},Rt={"██":"▀","█ ":"▀"," █":" ","  ":" "},ie="";for(ft=0;ft<Ot;ft+=2){for(Xt=Math.floor((ft-Pt)/1),It=Math.floor((ft+1-Pt)/1),xt=0;xt<Ot;xt+=1)Ct="█",Pt<=xt&&xt<qt&&Pt<=ft&&ft<qt&&Z.isDark(Xt,Math.floor((xt-Pt)/1))&&(Ct=" "),Pt<=xt&&xt<qt&&Pt<=ft+1&&ft+1<qt&&Z.isDark(It,Math.floor((xt-Pt)/1))?Ct+=" ":Ct+="█",ie+=wt<1&&ft+1>=qt?Rt[Ct]:Ht[Ct];ie+=`
`}return Ot%2&&wt>0?ie.substring(0,ie.length-Ot-1)+Array(Ot+1).join("▀"):ie.substring(0,ie.length-1)})(E);L-=1,E=E===void 0?2*L:E;var k,V,N,q,ht=Z.getModuleCount()*L+2*E,X=E,dt=ht-E,mt=Array(L+1).join("██"),vt=Array(L+1).join("  "),At="",gt="";for(k=0;k<ht;k+=1){for(N=Math.floor((k-X)/L),gt="",V=0;V<ht;V+=1)q=1,X<=V&&V<dt&&X<=k&&k<dt&&Z.isDark(N,Math.floor((V-X)/L))&&(q=0),gt+=q?mt:vt;for(N=0;N<L;N+=1)At+=gt+`
`}return At.substring(0,At.length-1)},Z.renderTo2dContext=function(L,E){E=E||2;for(var k=Z.getModuleCount(),V=0;V<k;V++)for(var N=0;N<k;N++)L.fillStyle=Z.isDark(V,N)?"black":"white",L.fillRect(V*E,N*E,E,E)},Z};le.stringToBytes=(le.stringToBytesFuncs={default:function(tt){for(var J=[],$=0;$<tt.length;$+=1){var U=tt.charCodeAt($);J.push(255&U)}return J}}).default,le.createStringToBytes=function(tt,J){var $=(function(){for(var D=Gt(tt),st=function(){var p=D.read();if(p==-1)throw"eof";return p},ot=0,rt={};;){var Z=D.read();if(Z==-1)break;var Tt=st(),H=st()<<8|st();rt[String.fromCharCode(Z<<8|Tt)]=H,ot+=1}if(ot!=J)throw ot+" != "+J;return rt})(),U=63;return function(D){for(var st=[],ot=0;ot<D.length;ot+=1){var rt=D.charCodeAt(ot);if(rt<128)st.push(rt);else{var Z=$[D.charAt(ot)];typeof Z=="number"?(255&Z)==Z?st.push(Z):(st.push(Z>>>8),st.push(255&Z)):st.push(U)}}return st}};var jt,se,Nt,Ft,zt,we={L:1,M:0,Q:3,H:2},Vt=(jt=[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],se=1335,Nt=7973,zt=function(tt){for(var J=0;tt!=0;)J+=1,tt>>>=1;return J},(Ft={}).getBCHTypeInfo=function(tt){for(var J=tt<<10;zt(J)-zt(se)>=0;)J^=se<<zt(J)-zt(se);return 21522^(tt<<10|J)},Ft.getBCHTypeNumber=function(tt){for(var J=tt<<12;zt(J)-zt(Nt)>=0;)J^=Nt<<zt(J)-zt(Nt);return tt<<12|J},Ft.getPatternPosition=function(tt){return jt[tt-1]},Ft.getMaskFunction=function(tt){switch(tt){case 0:return function(J,$){return(J+$)%2==0};case 1:return function(J,$){return J%2==0};case 2:return function(J,$){return $%3==0};case 3:return function(J,$){return(J+$)%3==0};case 4:return function(J,$){return(Math.floor(J/2)+Math.floor($/3))%2==0};case 5:return function(J,$){return J*$%2+J*$%3==0};case 6:return function(J,$){return(J*$%2+J*$%3)%2==0};case 7:return function(J,$){return(J*$%3+(J+$)%2)%2==0};default:throw"bad maskPattern:"+tt}},Ft.getErrorCorrectPolynomial=function(tt){for(var J=Jt([1],0),$=0;$<tt;$+=1)J=J.multiply(Jt([1,Et.gexp($)],0));return J},Ft.getLengthInBits=function(tt,J){if(1<=J&&J<10)switch(tt){case 1:return 10;case 2:return 9;case 4:case 8:return 8;default:throw"mode:"+tt}else if(J<27)switch(tt){case 1:return 12;case 2:return 11;case 4:return 16;case 8:return 10;default:throw"mode:"+tt}else{if(!(J<41))throw"type:"+J;switch(tt){case 1:return 14;case 2:return 13;case 4:return 16;case 8:return 12;default:throw"mode:"+tt}}},Ft.getLostPoint=function(tt){for(var J=tt.getModuleCount(),$=0,U=0;U<J;U+=1)for(var D=0;D<J;D+=1){for(var st=0,ot=tt.isDark(U,D),rt=-1;rt<=1;rt+=1)if(!(U+rt<0||J<=U+rt))for(var Z=-1;Z<=1;Z+=1)D+Z<0||J<=D+Z||rt==0&&Z==0||ot==tt.isDark(U+rt,D+Z)&&(st+=1);st>5&&($+=3+st-5)}for(U=0;U<J-1;U+=1)for(D=0;D<J-1;D+=1){var Tt=0;tt.isDark(U,D)&&(Tt+=1),tt.isDark(U+1,D)&&(Tt+=1),tt.isDark(U,D+1)&&(Tt+=1),tt.isDark(U+1,D+1)&&(Tt+=1),Tt!=0&&Tt!=4||($+=3)}for(U=0;U<J;U+=1)for(D=0;D<J-6;D+=1)tt.isDark(U,D)&&!tt.isDark(U,D+1)&&tt.isDark(U,D+2)&&tt.isDark(U,D+3)&&tt.isDark(U,D+4)&&!tt.isDark(U,D+5)&&tt.isDark(U,D+6)&&($+=40);for(D=0;D<J;D+=1)for(U=0;U<J-6;U+=1)tt.isDark(U,D)&&!tt.isDark(U+1,D)&&tt.isDark(U+2,D)&&tt.isDark(U+3,D)&&tt.isDark(U+4,D)&&!tt.isDark(U+5,D)&&tt.isDark(U+6,D)&&($+=40);var H=0;for(D=0;D<J;D+=1)for(U=0;U<J;U+=1)tt.isDark(U,D)&&(H+=1);return $+Math.abs(100*H/J/J-50)/5*10},Ft),Et=(function(){for(var tt=new Array(256),J=new Array(256),$=0;$<8;$+=1)tt[$]=1<<$;for($=8;$<256;$+=1)tt[$]=tt[$-4]^tt[$-5]^tt[$-6]^tt[$-8];for($=0;$<255;$+=1)J[tt[$]]=$;return{glog:function(U){if(U<1)throw"glog("+U+")";return J[U]},gexp:function(U){for(;U<0;)U+=255;for(;U>=256;)U-=255;return tt[U]}}})();function Jt(tt,J){if(tt.length===void 0)throw tt.length+"/"+J;var $=(function(){for(var D=0;D<tt.length&&tt[D]==0;)D+=1;for(var st=new Array(tt.length-D+J),ot=0;ot<tt.length-D;ot+=1)st[ot]=tt[ot+D];return st})(),U={getAt:function(D){return $[D]},getLength:function(){return $.length},multiply:function(D){for(var st=new Array(U.getLength()+D.getLength()-1),ot=0;ot<U.getLength();ot+=1)for(var rt=0;rt<D.getLength();rt+=1)st[ot+rt]^=Et.gexp(Et.glog(U.getAt(ot))+Et.glog(D.getAt(rt)));return Jt(st,0)},mod:function(D){if(U.getLength()-D.getLength()<0)return U;for(var st=Et.glog(U.getAt(0))-Et.glog(D.getAt(0)),ot=new Array(U.getLength()),rt=0;rt<U.getLength();rt+=1)ot[rt]=U.getAt(rt);for(rt=0;rt<D.getLength();rt+=1)ot[rt]^=Et.gexp(Et.glog(D.getAt(rt))+st);return Jt(ot,0).mod(D)}};return U}var je=(function(){var tt=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12,7,37,13],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],J=function($,U){var D={};return D.totalCount=$,D.dataCount=U,D};return{getRSBlocks:function($,U){var D=(function(_,x){switch(x){case we.L:return tt[4*(_-1)+0];case we.M:return tt[4*(_-1)+1];case we.Q:return tt[4*(_-1)+2];case we.H:return tt[4*(_-1)+3];default:return}})($,U);if(D===void 0)throw"bad rs block @ typeNumber:"+$+"/errorCorrectionLevel:"+U;for(var st=D.length/3,ot=[],rt=0;rt<st;rt+=1)for(var Z=D[3*rt+0],Tt=D[3*rt+1],H=D[3*rt+2],p=0;p<Z;p+=1)ot.push(J(Tt,H));return ot}}})(),Ae=function(){var tt=[],J=0,$={getBuffer:function(){return tt},getAt:function(U){return(tt[Math.floor(U/8)]>>>7-U%8&1)==1},put:function(U,D){for(var st=0;st<D;st+=1)$.putBit((U>>>D-st-1&1)==1)},getLengthInBits:function(){return J},putBit:function(U){var D=Math.floor(J/8);tt.length<=D&&tt.push(0),U&&(tt[D]|=128>>>J%8),J+=1}};return $},We=function(tt){var J=tt,$={getMode:function(){return 1},getLength:function(st){return J.length},write:function(st){for(var ot=J,rt=0;rt+2<ot.length;)st.put(U(ot.substring(rt,rt+3)),10),rt+=3;rt<ot.length&&(ot.length-rt==1?st.put(U(ot.substring(rt,rt+1)),4):ot.length-rt==2&&st.put(U(ot.substring(rt,rt+2)),7))}},U=function(st){for(var ot=0,rt=0;rt<st.length;rt+=1)ot=10*ot+D(st.charAt(rt));return ot},D=function(st){if("0"<=st&&st<="9")return st.charCodeAt(0)-48;throw"illegal char :"+st};return $},Ge=function(tt){var J=tt,$={getMode:function(){return 2},getLength:function(D){return J.length},write:function(D){for(var st=J,ot=0;ot+1<st.length;)D.put(45*U(st.charAt(ot))+U(st.charAt(ot+1)),11),ot+=2;ot<st.length&&D.put(U(st.charAt(ot)),6)}},U=function(D){if("0"<=D&&D<="9")return D.charCodeAt(0)-48;if("A"<=D&&D<="Z")return D.charCodeAt(0)-65+10;switch(D){case" ":return 36;case"$":return 37;case"%":return 38;case"*":return 39;case"+":return 40;case"-":return 41;case".":return 42;case"/":return 43;case":":return 44;default:throw"illegal char :"+D}};return $},me=function(tt){var J=le.stringToBytes(tt);return{getMode:function(){return 4},getLength:function($){return J.length},write:function($){for(var U=0;U<J.length;U+=1)$.put(J[U],8)}}},ye=function(tt){var J=le.stringToBytesFuncs.SJIS;if(!J)throw"sjis not supported.";(function(U,D){var st=J("友");if(st.length!=2||(st[0]<<8|st[1])!=38726)throw"sjis not supported."})();var $=J(tt);return{getMode:function(){return 8},getLength:function(U){return~~($.length/2)},write:function(U){for(var D=$,st=0;st+1<D.length;){var ot=(255&D[st])<<8|255&D[st+1];if(33088<=ot&&ot<=40956)ot-=33088;else{if(!(57408<=ot&&ot<=60351))throw"illegal char at "+(st+1)+"/"+ot;ot-=49472}ot=192*(ot>>>8&255)+(255&ot),U.put(ot,13),st+=2}if(st<D.length)throw"illegal char at "+(st+1)}}},Ke=function(){var tt=[],J={writeByte:function($){tt.push(255&$)},writeShort:function($){J.writeByte($),J.writeByte($>>>8)},writeBytes:function($,U,D){U=U||0,D=D||$.length;for(var st=0;st<D;st+=1)J.writeByte($[st+U])},writeString:function($){for(var U=0;U<$.length;U+=1)J.writeByte($.charCodeAt(U))},toByteArray:function(){return tt},toString:function(){var $="";$+="[";for(var U=0;U<tt.length;U+=1)U>0&&($+=","),$+=tt[U];return $+"]"}};return J},Gt=function(tt){var J=tt,$=0,U=0,D=0,st={read:function(){for(;D<8;){if($>=J.length){if(D==0)return-1;throw"unexpected end of file./"+D}var rt=J.charAt($);if($+=1,rt=="=")return D=0,-1;rt.match(/^\s$/)||(U=U<<6|ot(rt.charCodeAt(0)),D+=6)}var Z=U>>>D-8&255;return D-=8,Z}},ot=function(rt){if(65<=rt&&rt<=90)return rt-65;if(97<=rt&&rt<=122)return rt-97+26;if(48<=rt&&rt<=57)return rt-48+52;if(rt==43)return 62;if(rt==47)return 63;throw"c:"+rt};return st},Re=function(tt,J,$){for(var U=(function(H,p){var _=H,x=p,M=new Array(H*p),z={setPixel:function(L,E,k){M[E*_+L]=k},write:function(L){L.writeString("GIF87a"),L.writeShort(_),L.writeShort(x),L.writeByte(128),L.writeByte(0),L.writeByte(0),L.writeByte(0),L.writeByte(0),L.writeByte(0),L.writeByte(255),L.writeByte(255),L.writeByte(255),L.writeString(","),L.writeShort(0),L.writeShort(0),L.writeShort(_),L.writeShort(x),L.writeByte(0);var E=P(2);L.writeByte(2);for(var k=0;E.length-k>255;)L.writeByte(255),L.writeBytes(E,k,255),k+=255;L.writeByte(E.length-k),L.writeBytes(E,k,E.length-k),L.writeByte(0),L.writeString(";")}},P=function(L){for(var E=1<<L,k=1+(1<<L),V=L+1,N=j(),q=0;q<E;q+=1)N.add(String.fromCharCode(q));N.add(String.fromCharCode(E)),N.add(String.fromCharCode(k));var ht,X,dt,mt=Ke(),vt=(ht=mt,X=0,dt=0,{write:function(ft,xt){if(ft>>>xt)throw"length over";for(;X+xt>=8;)ht.writeByte(255&(ft<<X|dt)),xt-=8-X,ft>>>=8-X,dt=0,X=0;dt|=ft<<X,X+=xt},flush:function(){X>0&&ht.writeByte(dt)}});vt.write(E,V);var At=0,gt=String.fromCharCode(M[At]);for(At+=1;At<M.length;){var wt=String.fromCharCode(M[At]);At+=1,N.contains(gt+wt)?gt+=wt:(vt.write(N.indexOf(gt),V),N.size()<4095&&(N.size()==1<<V&&(V+=1),N.add(gt+wt)),gt=wt)}return vt.write(N.indexOf(gt),V),vt.write(k,V),vt.flush(),mt.toByteArray()},j=function(){var L={},E=0,k={add:function(V){if(k.contains(V))throw"dup key:"+V;L[V]=E,E+=1},size:function(){return E},indexOf:function(V){return L[V]},contains:function(V){return L[V]!==void 0}};return k};return z})(tt,J),D=0;D<J;D+=1)for(var st=0;st<tt;st+=1)U.setPixel(st,D,$(st,D));var ot=Ke();U.write(ot);for(var rt=(function(){var H=0,p=0,_=0,x="",M={},z=function(j){x+=String.fromCharCode(P(63&j))},P=function(j){if(!(j<0)){if(j<26)return 65+j;if(j<52)return j-26+97;if(j<62)return j-52+48;if(j==62)return 43;if(j==63)return 47}throw"n:"+j};return M.writeByte=function(j){for(H=H<<8|255&j,p+=8,_+=1;p>=6;)z(H>>>p-6),p-=6},M.flush=function(){if(p>0&&(z(H<<6-p),H=0,p=0),_%3!=0)for(var j=3-_%3,L=0;L<j;L+=1)x+="="},M.toString=function(){return x},M})(),Z=ot.toByteArray(),Tt=0;Tt<Z.length;Tt+=1)rt.writeByte(Z[Tt]);return rt.flush(),"data:image/gif;base64,"+rt};return le})();ve.stringToBytesFuncs["UTF-8"]=function(le){return(function(jt){for(var se=[],Nt=0;Nt<jt.length;Nt++){var Ft=jt.charCodeAt(Nt);Ft<128?se.push(Ft):Ft<2048?se.push(192|Ft>>6,128|63&Ft):Ft<55296||Ft>=57344?se.push(224|Ft>>12,128|Ft>>6&63,128|63&Ft):(Nt++,Ft=65536+((1023&Ft)<<10|1023&jt.charCodeAt(Nt)),se.push(240|Ft>>18,128|Ft>>12&63,128|Ft>>6&63,128|63&Ft))}return se})(le)},(Ve=typeof(Ut=function(){return ve})=="function"?Ut.apply(Dt,[]):Ut)===void 0||(kt.exports=Ve)},676:(kt,Dt,Ut)=>{"use strict";Ut.d(Dt,{default:()=>Tt});var Ve=function(){return(Ve=Object.assign||function(H){for(var p,_=1,x=arguments.length;_<x;_++)for(var M in p=arguments[_])Object.prototype.hasOwnProperty.call(p,M)&&(H[M]=p[M]);return H}).apply(this,arguments)},ve=function(){for(var H=0,p=0,_=arguments.length;p<_;p++)H+=arguments[p].length;var x=Array(H),M=0;for(p=0;p<_;p++)for(var z=arguments[p],P=0,j=z.length;P<j;P++,M++)x[M]=z[P];return x},le=function(H){return!!H&&typeof H=="object"&&!Array.isArray(H)};function jt(H){for(var p=[],_=1;_<arguments.length;_++)p[_-1]=arguments[_];if(!p.length)return H;var x=p.shift();return x!==void 0&&le(H)&&le(x)?(H=Ve({},H),Object.keys(x).forEach((function(M){var z=H[M],P=x[M];Array.isArray(z)&&Array.isArray(P)?H[M]=P:le(z)&&le(P)?H[M]=jt(Object.assign({},z),P):H[M]=P})),jt.apply(void 0,ve([H],p))):H}function se(H,p){var _=document.createElement("a");_.download=p,_.href=H,document.body.appendChild(_),_.click(),document.body.removeChild(_)}function Nt(H){return p=this,_=void 0,M=function(){return(function(z,P){var j,L,E,k,V={label:0,sent:function(){if(1&E[0])throw E[1];return E[1]},trys:[],ops:[]};return k={next:N(0),throw:N(1),return:N(2)},typeof Symbol=="function"&&(k[Symbol.iterator]=function(){return this}),k;function N(q){return function(ht){return(function(X){if(j)throw new TypeError("Generator is already executing.");for(;V;)try{if(j=1,L&&(E=2&X[0]?L.return:X[0]?L.throw||((E=L.return)&&E.call(L),0):L.next)&&!(E=E.call(L,X[1])).done)return E;switch(L=0,E&&(X=[2&X[0],E.value]),X[0]){case 0:case 1:E=X;break;case 4:return V.label++,{value:X[1],done:!1};case 5:V.label++,L=X[1],X=[0];continue;case 7:X=V.ops.pop(),V.trys.pop();continue;default:if(!((E=(E=V.trys).length>0&&E[E.length-1])||X[0]!==6&&X[0]!==2)){V=0;continue}if(X[0]===3&&(!E||X[1]>E[0]&&X[1]<E[3])){V.label=X[1];break}if(X[0]===6&&V.label<E[1]){V.label=E[1],E=X;break}if(E&&V.label<E[2]){V.label=E[2],V.ops.push(X);break}E[2]&&V.ops.pop(),V.trys.pop();continue}X=P.call(z,V)}catch(dt){X=[6,dt],L=0}finally{j=E=0}if(5&X[0])throw X[1];return{value:X[0]?X[1]:void 0,done:!0}})([q,ht])}}})(this,(function(z){return[2,new Promise((function(P){var j=new XMLHttpRequest;j.onload=function(){var L=new FileReader;L.onloadend=function(){P(L.result)},L.readAsDataURL(j.response)},j.open("GET",H),j.responseType="blob",j.send()}))]}))},new((x=void 0)||(x=Promise))((function(z,P){function j(k){try{E(M.next(k))}catch(V){P(V)}}function L(k){try{E(M.throw(k))}catch(V){P(V)}}function E(k){var V;k.done?z(k.value):(V=k.value,V instanceof x?V:new x((function(N){N(V)}))).then(j,L)}E((M=M.apply(p,_||[])).next())}));var p,_,x,M}const Ft={L:.07,M:.15,Q:.25,H:.3};var zt=function(){return(zt=Object.assign||function(H){for(var p,_=1,x=arguments.length;_<x;_++)for(var M in p=arguments[_])Object.prototype.hasOwnProperty.call(p,M)&&(H[M]=p[M]);return H}).apply(this,arguments)};const we=(function(){function H(p){var _=p.svg,x=p.type;this._svg=_,this._type=x}return H.prototype.draw=function(p,_,x,M){var z;switch(this._type){case"dots":z=this._drawDot;break;case"classy":z=this._drawClassy;break;case"classy-rounded":z=this._drawClassyRounded;break;case"rounded":z=this._drawRounded;break;case"extra-rounded":z=this._drawExtraRounded;break;default:z=this._drawSquare}z.call(this,{x:p,y:_,size:x,getNeighbor:M})},H.prototype._rotateFigure=function(p){var _,x=p.x,M=p.y,z=p.size,P=p.rotation,j=P===void 0?0:P,L=x+z/2,E=M+z/2;(0,p.draw)(),(_=this._element)===null||_===void 0||_.setAttribute("transform","rotate("+180*j/Math.PI+","+L+","+E+")")},H.prototype._basicDot=function(p){var _=this,x=p.size,M=p.x,z=p.y;this._rotateFigure(zt(zt({},p),{draw:function(){_._element=document.createElementNS("http://www.w3.org/2000/svg","circle"),_._element.setAttribute("cx",String(M+x/2)),_._element.setAttribute("cy",String(z+x/2)),_._element.setAttribute("r",String(x/2))}}))},H.prototype._basicSquare=function(p){var _=this,x=p.size,M=p.x,z=p.y;this._rotateFigure(zt(zt({},p),{draw:function(){_._element=document.createElementNS("http://www.w3.org/2000/svg","rect"),_._element.setAttribute("x",String(M)),_._element.setAttribute("y",String(z)),_._element.setAttribute("width",String(x)),_._element.setAttribute("height",String(x))}}))},H.prototype._basicSideRounded=function(p){var _=this,x=p.size,M=p.x,z=p.y;this._rotateFigure(zt(zt({},p),{draw:function(){_._element=document.createElementNS("http://www.w3.org/2000/svg","path"),_._element.setAttribute("d","M "+M+" "+z+"v "+x+"h "+x/2+"a "+x/2+" "+x/2+", 0, 0, 0, 0 "+-x)}}))},H.prototype._basicCornerRounded=function(p){var _=this,x=p.size,M=p.x,z=p.y;this._rotateFigure(zt(zt({},p),{draw:function(){_._element=document.createElementNS("http://www.w3.org/2000/svg","path"),_._element.setAttribute("d","M "+M+" "+z+"v "+x+"h "+x+"v "+-x/2+"a "+x/2+" "+x/2+", 0, 0, 0, "+-x/2+" "+-x/2)}}))},H.prototype._basicCornerExtraRounded=function(p){var _=this,x=p.size,M=p.x,z=p.y;this._rotateFigure(zt(zt({},p),{draw:function(){_._element=document.createElementNS("http://www.w3.org/2000/svg","path"),_._element.setAttribute("d","M "+M+" "+z+"v "+x+"h "+x+"a "+x+" "+x+", 0, 0, 0, "+-x+" "+-x)}}))},H.prototype._basicCornersRounded=function(p){var _=this,x=p.size,M=p.x,z=p.y;this._rotateFigure(zt(zt({},p),{draw:function(){_._element=document.createElementNS("http://www.w3.org/2000/svg","path"),_._element.setAttribute("d","M "+M+" "+z+"v "+x/2+"a "+x/2+" "+x/2+", 0, 0, 0, "+x/2+" "+x/2+"h "+x/2+"v "+-x/2+"a "+x/2+" "+x/2+", 0, 0, 0, "+-x/2+" "+-x/2)}}))},H.prototype._drawDot=function(p){var _=p.x,x=p.y,M=p.size;this._basicDot({x:_,y:x,size:M,rotation:0})},H.prototype._drawSquare=function(p){var _=p.x,x=p.y,M=p.size;this._basicSquare({x:_,y:x,size:M,rotation:0})},H.prototype._drawRounded=function(p){var _=p.x,x=p.y,M=p.size,z=p.getNeighbor,P=z?+z(-1,0):0,j=z?+z(1,0):0,L=z?+z(0,-1):0,E=z?+z(0,1):0,k=P+j+L+E;if(k!==0)if(k>2||P&&j||L&&E)this._basicSquare({x:_,y:x,size:M,rotation:0});else{if(k===2){var V=0;P&&L?V=Math.PI/2:L&&j?V=Math.PI:j&&E&&(V=-Math.PI/2),this._basicCornerRounded({x:_,y:x,size:M,rotation:V});return}if(k===1)return V=0,L?V=Math.PI/2:j?V=Math.PI:E&&(V=-Math.PI/2),void this._basicSideRounded({x:_,y:x,size:M,rotation:V})}else this._basicDot({x:_,y:x,size:M,rotation:0})},H.prototype._drawExtraRounded=function(p){var _=p.x,x=p.y,M=p.size,z=p.getNeighbor,P=z?+z(-1,0):0,j=z?+z(1,0):0,L=z?+z(0,-1):0,E=z?+z(0,1):0,k=P+j+L+E;if(k!==0)if(k>2||P&&j||L&&E)this._basicSquare({x:_,y:x,size:M,rotation:0});else{if(k===2){var V=0;P&&L?V=Math.PI/2:L&&j?V=Math.PI:j&&E&&(V=-Math.PI/2),this._basicCornerExtraRounded({x:_,y:x,size:M,rotation:V});return}if(k===1)return V=0,L?V=Math.PI/2:j?V=Math.PI:E&&(V=-Math.PI/2),void this._basicSideRounded({x:_,y:x,size:M,rotation:V})}else this._basicDot({x:_,y:x,size:M,rotation:0})},H.prototype._drawClassy=function(p){var _=p.x,x=p.y,M=p.size,z=p.getNeighbor,P=z?+z(-1,0):0,j=z?+z(1,0):0,L=z?+z(0,-1):0,E=z?+z(0,1):0;P+j+L+E!==0?P||L?j||E?this._basicSquare({x:_,y:x,size:M,rotation:0}):this._basicCornerRounded({x:_,y:x,size:M,rotation:Math.PI/2}):this._basicCornerRounded({x:_,y:x,size:M,rotation:-Math.PI/2}):this._basicCornersRounded({x:_,y:x,size:M,rotation:Math.PI/2})},H.prototype._drawClassyRounded=function(p){var _=p.x,x=p.y,M=p.size,z=p.getNeighbor,P=z?+z(-1,0):0,j=z?+z(1,0):0,L=z?+z(0,-1):0,E=z?+z(0,1):0;P+j+L+E!==0?P||L?j||E?this._basicSquare({x:_,y:x,size:M,rotation:0}):this._basicCornerExtraRounded({x:_,y:x,size:M,rotation:Math.PI/2}):this._basicCornerExtraRounded({x:_,y:x,size:M,rotation:-Math.PI/2}):this._basicCornersRounded({x:_,y:x,size:M,rotation:Math.PI/2})},H})();var Vt=function(){return(Vt=Object.assign||function(H){for(var p,_=1,x=arguments.length;_<x;_++)for(var M in p=arguments[_])Object.prototype.hasOwnProperty.call(p,M)&&(H[M]=p[M]);return H}).apply(this,arguments)};const Et=(function(){function H(p){var _=p.svg,x=p.type;this._svg=_,this._type=x}return H.prototype.draw=function(p,_,x,M){var z;switch(this._type){case"square":z=this._drawSquare;break;case"extra-rounded":z=this._drawExtraRounded;break;default:z=this._drawDot}z.call(this,{x:p,y:_,size:x,rotation:M})},H.prototype._rotateFigure=function(p){var _,x=p.x,M=p.y,z=p.size,P=p.rotation,j=P===void 0?0:P,L=x+z/2,E=M+z/2;(0,p.draw)(),(_=this._element)===null||_===void 0||_.setAttribute("transform","rotate("+180*j/Math.PI+","+L+","+E+")")},H.prototype._basicDot=function(p){var _=this,x=p.size,M=p.x,z=p.y,P=x/7;this._rotateFigure(Vt(Vt({},p),{draw:function(){_._element=document.createElementNS("http://www.w3.org/2000/svg","path"),_._element.setAttribute("clip-rule","evenodd"),_._element.setAttribute("d","M "+(M+x/2)+" "+z+"a "+x/2+" "+x/2+" 0 1 0 0.1 0zm 0 "+P+"a "+(x/2-P)+" "+(x/2-P)+" 0 1 1 -0.1 0Z")}}))},H.prototype._basicSquare=function(p){var _=this,x=p.size,M=p.x,z=p.y,P=x/7;this._rotateFigure(Vt(Vt({},p),{draw:function(){_._element=document.createElementNS("http://www.w3.org/2000/svg","path"),_._element.setAttribute("clip-rule","evenodd"),_._element.setAttribute("d","M "+M+" "+z+"v "+x+"h "+x+"v "+-x+"zM "+(M+P)+" "+(z+P)+"h "+(x-2*P)+"v "+(x-2*P)+"h "+(2*P-x)+"z")}}))},H.prototype._basicExtraRounded=function(p){var _=this,x=p.size,M=p.x,z=p.y,P=x/7;this._rotateFigure(Vt(Vt({},p),{draw:function(){_._element=document.createElementNS("http://www.w3.org/2000/svg","path"),_._element.setAttribute("clip-rule","evenodd"),_._element.setAttribute("d","M "+M+" "+(z+2.5*P)+"v "+2*P+"a "+2.5*P+" "+2.5*P+", 0, 0, 0, "+2.5*P+" "+2.5*P+"h "+2*P+"a "+2.5*P+" "+2.5*P+", 0, 0, 0, "+2.5*P+" "+2.5*-P+"v "+-2*P+"a "+2.5*P+" "+2.5*P+", 0, 0, 0, "+2.5*-P+" "+2.5*-P+"h "+-2*P+"a "+2.5*P+" "+2.5*P+", 0, 0, 0, "+2.5*-P+" "+2.5*P+"M "+(M+2.5*P)+" "+(z+P)+"h "+2*P+"a "+1.5*P+" "+1.5*P+", 0, 0, 1, "+1.5*P+" "+1.5*P+"v "+2*P+"a "+1.5*P+" "+1.5*P+", 0, 0, 1, "+1.5*-P+" "+1.5*P+"h "+-2*P+"a "+1.5*P+" "+1.5*P+", 0, 0, 1, "+1.5*-P+" "+1.5*-P+"v "+-2*P+"a "+1.5*P+" "+1.5*P+", 0, 0, 1, "+1.5*P+" "+1.5*-P)}}))},H.prototype._drawDot=function(p){var _=p.x,x=p.y,M=p.size,z=p.rotation;this._basicDot({x:_,y:x,size:M,rotation:z})},H.prototype._drawSquare=function(p){var _=p.x,x=p.y,M=p.size,z=p.rotation;this._basicSquare({x:_,y:x,size:M,rotation:z})},H.prototype._drawExtraRounded=function(p){var _=p.x,x=p.y,M=p.size,z=p.rotation;this._basicExtraRounded({x:_,y:x,size:M,rotation:z})},H})();var Jt=function(){return(Jt=Object.assign||function(H){for(var p,_=1,x=arguments.length;_<x;_++)for(var M in p=arguments[_])Object.prototype.hasOwnProperty.call(p,M)&&(H[M]=p[M]);return H}).apply(this,arguments)};const je=(function(){function H(p){var _=p.svg,x=p.type;this._svg=_,this._type=x}return H.prototype.draw=function(p,_,x,M){var z;this._type==="square"?z=this._drawSquare:z=this._drawDot,z.call(this,{x:p,y:_,size:x,rotation:M})},H.prototype._rotateFigure=function(p){var _,x=p.x,M=p.y,z=p.size,P=p.rotation,j=P===void 0?0:P,L=x+z/2,E=M+z/2;(0,p.draw)(),(_=this._element)===null||_===void 0||_.setAttribute("transform","rotate("+180*j/Math.PI+","+L+","+E+")")},H.prototype._basicDot=function(p){var _=this,x=p.size,M=p.x,z=p.y;this._rotateFigure(Jt(Jt({},p),{draw:function(){_._element=document.createElementNS("http://www.w3.org/2000/svg","circle"),_._element.setAttribute("cx",String(M+x/2)),_._element.setAttribute("cy",String(z+x/2)),_._element.setAttribute("r",String(x/2))}}))},H.prototype._basicSquare=function(p){var _=this,x=p.size,M=p.x,z=p.y;this._rotateFigure(Jt(Jt({},p),{draw:function(){_._element=document.createElementNS("http://www.w3.org/2000/svg","rect"),_._element.setAttribute("x",String(M)),_._element.setAttribute("y",String(z)),_._element.setAttribute("width",String(x)),_._element.setAttribute("height",String(x))}}))},H.prototype._drawDot=function(p){var _=p.x,x=p.y,M=p.size,z=p.rotation;this._basicDot({x:_,y:x,size:M,rotation:z})},H.prototype._drawSquare=function(p){var _=p.x,x=p.y,M=p.size,z=p.rotation;this._basicSquare({x:_,y:x,size:M,rotation:z})},H})(),Ae="circle";var We=function(H,p,_,x){return new(_||(_=Promise))((function(M,z){function P(E){try{L(x.next(E))}catch(k){z(k)}}function j(E){try{L(x.throw(E))}catch(k){z(k)}}function L(E){var k;E.done?M(E.value):(k=E.value,k instanceof _?k:new _((function(V){V(k)}))).then(P,j)}L((x=x.apply(H,p||[])).next())}))},Ge=function(H,p){var _,x,M,z,P={label:0,sent:function(){if(1&M[0])throw M[1];return M[1]},trys:[],ops:[]};return z={next:j(0),throw:j(1),return:j(2)},typeof Symbol=="function"&&(z[Symbol.iterator]=function(){return this}),z;function j(L){return function(E){return(function(k){if(_)throw new TypeError("Generator is already executing.");for(;P;)try{if(_=1,x&&(M=2&k[0]?x.return:k[0]?x.throw||((M=x.return)&&M.call(x),0):x.next)&&!(M=M.call(x,k[1])).done)return M;switch(x=0,M&&(k=[2&k[0],M.value]),k[0]){case 0:case 1:M=k;break;case 4:return P.label++,{value:k[1],done:!1};case 5:P.label++,x=k[1],k=[0];continue;case 7:k=P.ops.pop(),P.trys.pop();continue;default:if(!((M=(M=P.trys).length>0&&M[M.length-1])||k[0]!==6&&k[0]!==2)){P=0;continue}if(k[0]===3&&(!M||k[1]>M[0]&&k[1]<M[3])){P.label=k[1];break}if(k[0]===6&&P.label<M[1]){P.label=M[1],M=k;break}if(M&&P.label<M[2]){P.label=M[2],P.ops.push(k);break}M[2]&&P.ops.pop(),P.trys.pop();continue}k=p.call(H,P)}catch(V){k=[6,V],x=0}finally{_=M=0}if(5&k[0])throw k[1];return{value:k[0]?k[1]:void 0,done:!0}})([L,E])}}},me=[[1,1,1,1,1,1,1],[1,0,0,0,0,0,1],[1,0,0,0,0,0,1],[1,0,0,0,0,0,1],[1,0,0,0,0,0,1],[1,0,0,0,0,0,1],[1,1,1,1,1,1,1]],ye=[[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,1,1,1,0,0],[0,0,1,1,1,0,0],[0,0,1,1,1,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0]];const Ke=(function(){function H(p){this._element=document.createElementNS("http://www.w3.org/2000/svg","svg"),this._element.setAttribute("width",String(p.width)),this._element.setAttribute("height",String(p.height)),this._defs=document.createElementNS("http://www.w3.org/2000/svg","defs"),this._element.appendChild(this._defs),this._options=p}return Object.defineProperty(H.prototype,"width",{get:function(){return this._options.width},enumerable:!1,configurable:!0}),Object.defineProperty(H.prototype,"height",{get:function(){return this._options.height},enumerable:!1,configurable:!0}),H.prototype.getElement=function(){return this._element},H.prototype.drawQR=function(p){return We(this,void 0,void 0,(function(){var _,x,M,z,P,j,L,E,k,V,N=this;return Ge(this,(function(q){switch(q.label){case 0:return _=p.getModuleCount(),x=Math.min(this._options.width,this._options.height)-2*this._options.margin,M=this._options.shape===Ae?x/Math.sqrt(2):x,z=Math.floor(M/_),P={hideXDots:0,hideYDots:0,width:0,height:0},this._qr=p,this._options.image?[4,this.loadImage()]:[3,2];case 1:if(q.sent(),!this._image)return[2];j=this._options,L=j.imageOptions,E=j.qrOptions,k=L.imageSize*Ft[E.errorCorrectionLevel],V=Math.floor(k*_*_),P=(function(ht){var X=ht.originalHeight,dt=ht.originalWidth,mt=ht.maxHiddenDots,vt=ht.maxHiddenAxisDots,At=ht.dotSize,gt={x:0,y:0},wt={x:0,y:0};if(X<=0||dt<=0||mt<=0||At<=0)return{height:0,width:0,hideYDots:0,hideXDots:0};var ft=X/dt;return gt.x=Math.floor(Math.sqrt(mt/ft)),gt.x<=0&&(gt.x=1),vt&&vt<gt.x&&(gt.x=vt),gt.x%2==0&&gt.x--,wt.x=gt.x*At,gt.y=1+2*Math.ceil((gt.x*ft-1)/2),wt.y=Math.round(wt.x*ft),(gt.y*gt.x>mt||vt&&vt<gt.y)&&(vt&&vt<gt.y?(gt.y=vt,gt.y%2==0&&gt.x--):gt.y-=2,wt.y=gt.y*At,gt.x=1+2*Math.ceil((gt.y/ft-1)/2),wt.x=Math.round(wt.y/ft)),{height:wt.y,width:wt.x,hideYDots:gt.y,hideXDots:gt.x}})({originalWidth:this._image.width,originalHeight:this._image.height,maxHiddenDots:V,maxHiddenAxisDots:_-14,dotSize:z}),q.label=2;case 2:return this.drawBackground(),this.drawDots((function(ht,X){var dt,mt,vt,At,gt,wt;return!(N._options.imageOptions.hideBackgroundDots&&ht>=(_-P.hideXDots)/2&&ht<(_+P.hideXDots)/2&&X>=(_-P.hideYDots)/2&&X<(_+P.hideYDots)/2||!((dt=me[ht])===null||dt===void 0)&&dt[X]||!((mt=me[ht-_+7])===null||mt===void 0)&&mt[X]||!((vt=me[ht])===null||vt===void 0)&&vt[X-_+7]||!((At=ye[ht])===null||At===void 0)&&At[X]||!((gt=ye[ht-_+7])===null||gt===void 0)&&gt[X]||!((wt=ye[ht])===null||wt===void 0)&&wt[X-_+7])})),this.drawCorners(),this._options.image?[4,this.drawImage({width:P.width,height:P.height,count:_,dotSize:z})]:[3,4];case 3:q.sent(),q.label=4;case 4:return[2]}}))}))},H.prototype.drawBackground=function(){var p,_,x,M=this._element,z=this._options;if(M){var P=(p=z.backgroundOptions)===null||p===void 0?void 0:p.gradient,j=(_=z.backgroundOptions)===null||_===void 0?void 0:_.color;if((P||j)&&this._createColor({options:P,color:j,additionalRotation:0,x:0,y:0,height:z.height,width:z.width,name:"background-color"}),(x=z.backgroundOptions)===null||x===void 0?void 0:x.round){var L=Math.min(z.width,z.height),E=document.createElementNS("http://www.w3.org/2000/svg","rect");this._backgroundClipPath=document.createElementNS("http://www.w3.org/2000/svg","clipPath"),this._backgroundClipPath.setAttribute("id","clip-path-background-color"),this._defs.appendChild(this._backgroundClipPath),E.setAttribute("x",String((z.width-L)/2)),E.setAttribute("y",String((z.height-L)/2)),E.setAttribute("width",String(L)),E.setAttribute("height",String(L)),E.setAttribute("rx",String(L/2*z.backgroundOptions.round)),this._backgroundClipPath.appendChild(E)}}},H.prototype.drawDots=function(p){var _,x,M=this;if(!this._qr)throw"QR code is not defined";var z=this._options,P=this._qr.getModuleCount();if(P>z.width||P>z.height)throw"The canvas is too small.";var j=Math.min(z.width,z.height)-2*z.margin,L=z.shape===Ae?j/Math.sqrt(2):j,E=Math.floor(L/P),k=Math.floor((z.width-P*E)/2),V=Math.floor((z.height-P*E)/2),N=new we({svg:this._element,type:z.dotsOptions.type});this._dotsClipPath=document.createElementNS("http://www.w3.org/2000/svg","clipPath"),this._dotsClipPath.setAttribute("id","clip-path-dot-color"),this._defs.appendChild(this._dotsClipPath),this._createColor({options:(_=z.dotsOptions)===null||_===void 0?void 0:_.gradient,color:z.dotsOptions.color,additionalRotation:0,x:0,y:0,height:z.height,width:z.width,name:"dot-color"});for(var q=function(It){for(var Ct=function(Pt){return p&&!p(It,Pt)?"continue":!((x=ht._qr)===null||x===void 0)&&x.isDark(It,Pt)?(N.draw(k+It*E,V+Pt*E,E,(function(qt,Ht){return!(It+qt<0||Pt+Ht<0||It+qt>=P||Pt+Ht>=P)&&!(p&&!p(It+qt,Pt+Ht))&&!!M._qr&&M._qr.isDark(It+qt,Pt+Ht)})),void(N._element&&ht._dotsClipPath&&ht._dotsClipPath.appendChild(N._element))):"continue"},Ot=0;Ot<P;Ot++)Ct(Ot)},ht=this,X=0;X<P;X++)q(X);if(z.shape===Ae){var dt=Math.floor((j/E-P)/2),mt=P+2*dt,vt=k-dt*E,At=V-dt*E,gt=[],wt=Math.floor(mt/2);for(X=0;X<mt;X++){gt[X]=[];for(var ft=0;ft<mt;ft++)X>=dt-1&&X<=mt-dt&&ft>=dt-1&&ft<=mt-dt||Math.sqrt((X-wt)*(X-wt)+(ft-wt)*(ft-wt))>wt?gt[X][ft]=0:gt[X][ft]=this._qr.isDark(ft-2*dt<0?ft:ft>=P?ft-2*dt:ft-dt,X-2*dt<0?X:X>=P?X-2*dt:X-dt)?1:0}var xt=function(It){for(var Ct=function(Pt){if(!gt[It][Pt])return"continue";N.draw(vt+It*E,At+Pt*E,E,(function(qt,Ht){var Rt;return!!(!((Rt=gt[It+qt])===null||Rt===void 0)&&Rt[Pt+Ht])})),N._element&&Xt._dotsClipPath&&Xt._dotsClipPath.appendChild(N._element)},Ot=0;Ot<mt;Ot++)Ct(Ot)},Xt=this;for(X=0;X<mt;X++)xt(X)}},H.prototype.drawCorners=function(){var p=this;if(!this._qr)throw"QR code is not defined";var _=this._element,x=this._options;if(!_)throw"Element code is not defined";var M=this._qr.getModuleCount(),z=Math.min(x.width,x.height)-2*x.margin,P=x.shape===Ae?z/Math.sqrt(2):z,j=Math.floor(P/M),L=7*j,E=3*j,k=Math.floor((x.width-M*j)/2),V=Math.floor((x.height-M*j)/2);[[0,0,0],[1,0,Math.PI/2],[0,1,-Math.PI/2]].forEach((function(N){var q,ht,X,dt,mt,vt,At,gt,wt,ft,xt,Xt,It=N[0],Ct=N[1],Ot=N[2],Pt=k+It*j*(M-7),qt=V+Ct*j*(M-7),Ht=p._dotsClipPath,Rt=p._dotsClipPath;if((!((q=x.cornersSquareOptions)===null||q===void 0)&&q.gradient||!((ht=x.cornersSquareOptions)===null||ht===void 0)&&ht.color)&&((Ht=document.createElementNS("http://www.w3.org/2000/svg","clipPath")).setAttribute("id","clip-path-corners-square-color-"+It+"-"+Ct),p._defs.appendChild(Ht),p._cornersSquareClipPath=p._cornersDotClipPath=Rt=Ht,p._createColor({options:(X=x.cornersSquareOptions)===null||X===void 0?void 0:X.gradient,color:(dt=x.cornersSquareOptions)===null||dt===void 0?void 0:dt.color,additionalRotation:Ot,x:Pt,y:qt,height:L,width:L,name:"corners-square-color-"+It+"-"+Ct})),(mt=x.cornersSquareOptions)===null||mt===void 0?void 0:mt.type){var ie=new Et({svg:p._element,type:x.cornersSquareOptions.type});ie.draw(Pt,qt,L,Ot),ie._element&&Ht&&Ht.appendChild(ie._element)}else for(var be=new we({svg:p._element,type:x.dotsOptions.type}),re=function(ae){for(var te=function(Me){if(!(!((vt=me[ae])===null||vt===void 0)&&vt[Me]))return"continue";be.draw(Pt+ae*j,qt+Me*j,j,(function(Je,rn){var Wt;return!!(!((Wt=me[ae+Je])===null||Wt===void 0)&&Wt[Me+rn])})),be._element&&Ht&&Ht.appendChild(be._element)},pe=0;pe<me[ae].length;pe++)te(pe)},Ee=0;Ee<me.length;Ee++)re(Ee);if((!((At=x.cornersDotOptions)===null||At===void 0)&&At.gradient||!((gt=x.cornersDotOptions)===null||gt===void 0)&&gt.color)&&((Rt=document.createElementNS("http://www.w3.org/2000/svg","clipPath")).setAttribute("id","clip-path-corners-dot-color-"+It+"-"+Ct),p._defs.appendChild(Rt),p._cornersDotClipPath=Rt,p._createColor({options:(wt=x.cornersDotOptions)===null||wt===void 0?void 0:wt.gradient,color:(ft=x.cornersDotOptions)===null||ft===void 0?void 0:ft.color,additionalRotation:Ot,x:Pt+2*j,y:qt+2*j,height:E,width:E,name:"corners-dot-color-"+It+"-"+Ct})),(xt=x.cornersDotOptions)===null||xt===void 0?void 0:xt.type){var Oe=new je({svg:p._element,type:x.cornersDotOptions.type});Oe.draw(Pt+2*j,qt+2*j,E,Ot),Oe._element&&Rt&&Rt.appendChild(Oe._element)}else{be=new we({svg:p._element,type:x.dotsOptions.type});var pn=function(ae){for(var te=function(Me){if(!(!((Xt=ye[ae])===null||Xt===void 0)&&Xt[Me]))return"continue";be.draw(Pt+ae*j,qt+Me*j,j,(function(Je,rn){var Wt;return!!(!((Wt=ye[ae+Je])===null||Wt===void 0)&&Wt[Me+rn])})),be._element&&Rt&&Rt.appendChild(be._element)},pe=0;pe<ye[ae].length;pe++)te(pe)};for(Ee=0;Ee<ye.length;Ee++)pn(Ee)}}))},H.prototype.loadImage=function(){var p=this;return new Promise((function(_,x){var M=p._options,z=new Image;if(!M.image)return x("Image is not defined");typeof M.imageOptions.crossOrigin=="string"&&(z.crossOrigin=M.imageOptions.crossOrigin),p._image=z,z.onload=function(){_()},z.src=M.image}))},H.prototype.drawImage=function(p){var _=p.width,x=p.height,M=p.count,z=p.dotSize;return We(this,void 0,void 0,(function(){var P,j,L,E,k,V,N,q,ht;return Ge(this,(function(X){switch(X.label){case 0:return P=this._options,j=Math.floor((P.width-M*z)/2),L=Math.floor((P.height-M*z)/2),E=j+P.imageOptions.margin+(M*z-_)/2,k=L+P.imageOptions.margin+(M*z-x)/2,V=_-2*P.imageOptions.margin,N=x-2*P.imageOptions.margin,(q=document.createElementNS("http://www.w3.org/2000/svg","image")).setAttribute("x",String(E)),q.setAttribute("y",String(k)),q.setAttribute("width",V+"px"),q.setAttribute("height",N+"px"),[4,Nt(P.image||"")];case 1:return ht=X.sent(),q.setAttribute("href",ht||""),this._element.appendChild(q),[2]}}))}))},H.prototype._createColor=function(p){var _=p.options,x=p.color,M=p.additionalRotation,z=p.x,P=p.y,j=p.height,L=p.width,E=p.name,k=L>j?L:j,V=document.createElementNS("http://www.w3.org/2000/svg","rect");if(V.setAttribute("x",String(z)),V.setAttribute("y",String(P)),V.setAttribute("height",String(j)),V.setAttribute("width",String(L)),V.setAttribute("clip-path","url('#clip-path-"+E+"')"),_){var N;if(_.type==="radial")(N=document.createElementNS("http://www.w3.org/2000/svg","radialGradient")).setAttribute("id",E),N.setAttribute("gradientUnits","userSpaceOnUse"),N.setAttribute("fx",String(z+L/2)),N.setAttribute("fy",String(P+j/2)),N.setAttribute("cx",String(z+L/2)),N.setAttribute("cy",String(P+j/2)),N.setAttribute("r",String(k/2));else{var q=((_.rotation||0)+M)%(2*Math.PI),ht=(q+2*Math.PI)%(2*Math.PI),X=z+L/2,dt=P+j/2,mt=z+L/2,vt=P+j/2;ht>=0&&ht<=.25*Math.PI||ht>1.75*Math.PI&&ht<=2*Math.PI?(X-=L/2,dt-=j/2*Math.tan(q),mt+=L/2,vt+=j/2*Math.tan(q)):ht>.25*Math.PI&&ht<=.75*Math.PI?(dt-=j/2,X-=L/2/Math.tan(q),vt+=j/2,mt+=L/2/Math.tan(q)):ht>.75*Math.PI&&ht<=1.25*Math.PI?(X+=L/2,dt+=j/2*Math.tan(q),mt-=L/2,vt-=j/2*Math.tan(q)):ht>1.25*Math.PI&&ht<=1.75*Math.PI&&(dt+=j/2,X+=L/2/Math.tan(q),vt-=j/2,mt-=L/2/Math.tan(q)),(N=document.createElementNS("http://www.w3.org/2000/svg","linearGradient")).setAttribute("id",E),N.setAttribute("gradientUnits","userSpaceOnUse"),N.setAttribute("x1",String(Math.round(X))),N.setAttribute("y1",String(Math.round(dt))),N.setAttribute("x2",String(Math.round(mt))),N.setAttribute("y2",String(Math.round(vt)))}_.colorStops.forEach((function(At){var gt=At.offset,wt=At.color,ft=document.createElementNS("http://www.w3.org/2000/svg","stop");ft.setAttribute("offset",100*gt+"%"),ft.setAttribute("stop-color",wt),N.appendChild(ft)})),V.setAttribute("fill","url('#"+E+"')"),this._defs.appendChild(N)}else x&&V.setAttribute("fill",x);this._element.appendChild(V)},H})(),Gt="canvas";for(var Re={},tt=0;tt<=40;tt++)Re[tt]=tt;const J={type:Gt,shape:"square",width:300,height:300,data:"",margin:0,qrOptions:{typeNumber:Re[0],mode:void 0,errorCorrectionLevel:"Q"},imageOptions:{hideBackgroundDots:!0,imageSize:.4,crossOrigin:void 0,margin:0},dotsOptions:{type:"square",color:"#000"},backgroundOptions:{round:0,color:"#fff"}};var $=function(){return($=Object.assign||function(H){for(var p,_=1,x=arguments.length;_<x;_++)for(var M in p=arguments[_])Object.prototype.hasOwnProperty.call(p,M)&&(H[M]=p[M]);return H}).apply(this,arguments)};function U(H){var p=$({},H);if(!p.colorStops||!p.colorStops.length)throw"Field 'colorStops' is required in gradient";return p.rotation?p.rotation=Number(p.rotation):p.rotation=0,p.colorStops=p.colorStops.map((function(_){return $($({},_),{offset:Number(_.offset)})})),p}function D(H){var p=$({},H);return p.width=Number(p.width),p.height=Number(p.height),p.margin=Number(p.margin),p.imageOptions=$($({},p.imageOptions),{hideBackgroundDots:!!p.imageOptions.hideBackgroundDots,imageSize:Number(p.imageOptions.imageSize),margin:Number(p.imageOptions.margin)}),p.margin>Math.min(p.width,p.height)&&(p.margin=Math.min(p.width,p.height)),p.dotsOptions=$({},p.dotsOptions),p.dotsOptions.gradient&&(p.dotsOptions.gradient=U(p.dotsOptions.gradient)),p.cornersSquareOptions&&(p.cornersSquareOptions=$({},p.cornersSquareOptions),p.cornersSquareOptions.gradient&&(p.cornersSquareOptions.gradient=U(p.cornersSquareOptions.gradient))),p.cornersDotOptions&&(p.cornersDotOptions=$({},p.cornersDotOptions),p.cornersDotOptions.gradient&&(p.cornersDotOptions.gradient=U(p.cornersDotOptions.gradient))),p.backgroundOptions&&(p.backgroundOptions=$({},p.backgroundOptions),p.backgroundOptions.gradient&&(p.backgroundOptions.gradient=U(p.backgroundOptions.gradient))),p}var st=Ut(192),ot=Ut.n(st),rt=function(H,p,_,x){return new(_||(_=Promise))((function(M,z){function P(E){try{L(x.next(E))}catch(k){z(k)}}function j(E){try{L(x.throw(E))}catch(k){z(k)}}function L(E){var k;E.done?M(E.value):(k=E.value,k instanceof _?k:new _((function(V){V(k)}))).then(P,j)}L((x=x.apply(H,p||[])).next())}))},Z=function(H,p){var _,x,M,z,P={label:0,sent:function(){if(1&M[0])throw M[1];return M[1]},trys:[],ops:[]};return z={next:j(0),throw:j(1),return:j(2)},typeof Symbol=="function"&&(z[Symbol.iterator]=function(){return this}),z;function j(L){return function(E){return(function(k){if(_)throw new TypeError("Generator is already executing.");for(;P;)try{if(_=1,x&&(M=2&k[0]?x.return:k[0]?x.throw||((M=x.return)&&M.call(x),0):x.next)&&!(M=M.call(x,k[1])).done)return M;switch(x=0,M&&(k=[2&k[0],M.value]),k[0]){case 0:case 1:M=k;break;case 4:return P.label++,{value:k[1],done:!1};case 5:P.label++,x=k[1],k=[0];continue;case 7:k=P.ops.pop(),P.trys.pop();continue;default:if(!((M=(M=P.trys).length>0&&M[M.length-1])||k[0]!==6&&k[0]!==2)){P=0;continue}if(k[0]===3&&(!M||k[1]>M[0]&&k[1]<M[3])){P.label=k[1];break}if(k[0]===6&&P.label<M[1]){P.label=M[1],M=k;break}if(M&&P.label<M[2]){P.label=M[2],P.ops.push(k);break}M[2]&&P.ops.pop(),P.trys.pop();continue}k=p.call(H,P)}catch(V){k=[6,V],x=0}finally{_=M=0}if(5&k[0])throw k[1];return{value:k[0]?k[1]:void 0,done:!0}})([L,E])}}};const Tt=(function(){function H(p){this._options=p?D(jt(J,p)):J,this.update()}return H._clearContainer=function(p){p&&(p.innerHTML="")},H.prototype._setupSvg=function(){var p=this;if(this._qr){var _=new Ke(this._options);this._svg=_.getElement(),this._svgDrawingPromise=_.drawQR(this._qr).then((function(){var x;p._svg&&((x=p._extension)===null||x===void 0||x.call(p,_.getElement(),p._options))}))}},H.prototype._setupCanvas=function(){var p,_=this;this._qr&&(this._canvas=document.createElement("canvas"),this._canvas.width=this._options.width,this._canvas.height=this._options.height,this._setupSvg(),this._canvasDrawingPromise=(p=this._svgDrawingPromise)===null||p===void 0?void 0:p.then((function(){if(_._svg){var x=_._svg,M=new XMLSerializer().serializeToString(x),z="data:image/svg+xml;base64,"+btoa(M),P=new Image;return new Promise((function(j){P.onload=function(){var L,E;(E=(L=_._canvas)===null||L===void 0?void 0:L.getContext("2d"))===null||E===void 0||E.drawImage(P,0,0),j()},P.src=z}))}})))},H.prototype._getElement=function(p){return p===void 0&&(p="png"),rt(this,void 0,void 0,(function(){return Z(this,(function(_){switch(_.label){case 0:if(!this._qr)throw"QR code is empty";return p.toLowerCase()!=="svg"?[3,2]:(this._svg&&this._svgDrawingPromise||this._setupSvg(),[4,this._svgDrawingPromise]);case 1:return _.sent(),[2,this._svg];case 2:return this._canvas&&this._canvasDrawingPromise||this._setupCanvas(),[4,this._canvasDrawingPromise];case 3:return _.sent(),[2,this._canvas]}}))}))},H.prototype.update=function(p){H._clearContainer(this._container),this._options=p?D(jt(this._options,p)):this._options,this._options.data&&(this._qr=ot()(this._options.qrOptions.typeNumber,this._options.qrOptions.errorCorrectionLevel),this._qr.addData(this._options.data,this._options.qrOptions.mode||(function(_){switch(!0){case/^[0-9]*$/.test(_):return"Numeric";case/^[0-9A-Z $%*+\-./:]*$/.test(_):return"Alphanumeric";default:return"Byte"}})(this._options.data)),this._qr.make(),this._options.type===Gt?this._setupCanvas():this._setupSvg(),this.append(this._container))},H.prototype.append=function(p){if(p){if(typeof p.appendChild!="function")throw"Container should be a single DOM node";this._options.type===Gt?this._canvas&&p.appendChild(this._canvas):this._svg&&p.appendChild(this._svg),this._container=p}},H.prototype.applyExtension=function(p){if(!p)throw"Extension function should be defined.";this._extension=p,this.update()},H.prototype.deleteExtension=function(){this._extension=void 0,this.update()},H.prototype.getRawData=function(p){return p===void 0&&(p="png"),rt(this,void 0,void 0,(function(){var _,x,M;return Z(this,(function(z){switch(z.label){case 0:if(!this._qr)throw"QR code is empty";return[4,this._getElement(p)];case 1:return(_=z.sent())?p.toLowerCase()==="svg"?(x=new XMLSerializer,M=x.serializeToString(_),[2,new Blob([`<?xml version="1.0" standalone="no"?>\r
`+M],{type:"image/svg+xml"})]):[2,new Promise((function(P){return _.toBlob(P,"image/"+p,1)}))]:[2,null]}}))}))},H.prototype.download=function(p){return rt(this,void 0,void 0,(function(){var _,x,M,z,P;return Z(this,(function(j){switch(j.label){case 0:if(!this._qr)throw"QR code is empty";return _="png",x="qr",typeof p=="string"?(_=p,console.warn("Extension is deprecated as argument for 'download' method, please pass object { name: '...', extension: '...' } as argument")):typeof p=="object"&&p!==null&&(p.name&&(x=p.name),p.extension&&(_=p.extension)),[4,this._getElement(_)];case 1:return(M=j.sent())?(_.toLowerCase()==="svg"?(z=new XMLSerializer,P=`<?xml version="1.0" standalone="no"?>\r
`+(P=z.serializeToString(M)),se("data:image/svg+xml;charset=utf-8,"+encodeURIComponent(P),x+".svg")):se(M.toDataURL("image/"+_),x+"."+_),[2]):[2]}}))}))},H})()}},Lt={};function _t(kt){if(Lt[kt])return Lt[kt].exports;var Dt=Lt[kt]={exports:{}};return pt[kt](Dt,Dt.exports,_t),Dt.exports}return _t.n=kt=>{var Dt=kt&&kt.__esModule?()=>kt.default:()=>kt;return _t.d(Dt,{a:Dt}),Dt},_t.d=(kt,Dt)=>{for(var Ut in Dt)_t.o(Dt,Ut)&&!_t.o(kt,Ut)&&Object.defineProperty(kt,Ut,{enumerable:!0,get:Dt[Ut]})},_t.o=(kt,Dt)=>Object.prototype.hasOwnProperty.call(kt,Dt),_t(676)})().default}))})),Zi=Zn(((et,ut)=>{typeof navigator<"u"&&(function(pt,Lt){typeof define=="function"&&define.amd?define(function(){return Lt(pt)}):typeof ut=="object"&&ut.exports?ut.exports=Lt(pt):(pt.lottie=Lt(pt),pt.bodymovin=pt.lottie)})(window||{},function(pt){"use strict";var Lt="http://www.w3.org/2000/svg",_t="",kt=-999999,Dt=!1,Ut=!0,Ve="",ve,le=/^((?!chrome|android).)*safari/i.test(navigator.userAgent),jt=Math.pow,se=Math.sqrt,Nt=Math.floor,Ft=Math.min,zt={};(function(){var t=["abs","acos","acosh","asin","asinh","atan","atanh","atan2","ceil","cbrt","expm1","clz32","cos","cosh","exp","floor","fround","hypot","imul","log","log1p","log2","log10","max","min","pow","random","round","sign","sin","sinh","sqrt","tan","tanh","trunc","E","LN10","LN2","LOG10E","LOG2E","PI","SQRT1_2","SQRT2"],e,n=t.length;for(e=0;e<n;e+=1)zt[t[e]]=Math[t[e]]})();function we(){return{}}zt.random=Math.random,zt.abs=function(t){if(typeof t=="object"&&t.length){var e=rt(t.length),n,i=t.length;for(n=0;n<i;n+=1)e[n]=Math.abs(t[n]);return e}return Math.abs(t)};var Vt=150,Et=Math.PI/180,Jt=.5519;function je(t,e,n,i){this.type=t,this.currentTime=e,this.totalTime=n,this.direction=i<0?-1:1}function Ae(t,e){this.type=t,this.direction=e<0?-1:1}function We(t,e,n,i){this.type=t,this.currentLoop=n,this.totalLoops=e,this.direction=i<0?-1:1}function Ge(t,e,n){this.type=t,this.firstFrame=e,this.totalFrames=n}function me(t,e){this.type=t,this.target=e}function ye(t,e){this.type="renderFrameError",this.nativeError=t,this.currentTime=e}function Ke(t){this.type="configError",this.nativeError=t}var Gt=(function(){var t=0;return function(){return t+=1,Ve+"__lottie_element_"+t}})();function Re(t,e,n){var i,s,r,c,S,u,I,T;switch(c=Math.floor(t*6),S=t*6-c,u=n*(1-e),I=n*(1-S*e),T=n*(1-(1-S)*e),c%6){case 0:i=n,s=T,r=u;break;case 1:i=I,s=n,r=u;break;case 2:i=u,s=n,r=T;break;case 3:i=u,s=I,r=n;break;case 4:i=T,s=u,r=n;break;case 5:i=n,s=u,r=I;break;default:break}return[i,s,r]}function tt(t,e,n){var i=Math.max(t,e,n),s=Math.min(t,e,n),r=i-s,c,S=i===0?0:r/i,u=i/255;switch(i){case s:c=0;break;case t:c=e-n+r*(e<n?6:0),c/=6*r;break;case e:c=n-t+r*2,c/=6*r;break;case n:c=t-e+r*4,c/=6*r;break;default:break}return[c,S,u]}function J(t,e){var n=tt(t[0]*255,t[1]*255,t[2]*255);return n[1]+=e,n[1]>1?n[1]=1:n[1]<=0&&(n[1]=0),Re(n[0],n[1],n[2])}function $(t,e){var n=tt(t[0]*255,t[1]*255,t[2]*255);return n[2]+=e,n[2]>1?n[2]=1:n[2]<0&&(n[2]=0),Re(n[0],n[1],n[2])}function U(t,e){var n=tt(t[0]*255,t[1]*255,t[2]*255);return n[0]+=e/360,n[0]>1?n[0]-=1:n[0]<0&&(n[0]+=1),Re(n[0],n[1],n[2])}var D=(function(){var t=[],e,n;for(e=0;e<256;e+=1)n=e.toString(16),t[e]=n.length===1?"0"+n:n;return function(i,s,r){return i<0&&(i=0),s<0&&(s=0),r<0&&(r=0),"#"+t[i]+t[s]+t[r]}})();function st(){}st.prototype={triggerEvent:function(t,e){if(this._cbs[t])for(var n=this._cbs[t],i=0;i<n.length;i+=1)n[i](e)},addEventListener:function(t,e){return this._cbs[t]||(this._cbs[t]=[]),this._cbs[t].push(e),function(){this.removeEventListener(t,e)}.bind(this)},removeEventListener:function(t,e){if(!e)this._cbs[t]=null;else if(this._cbs[t]){for(var n=0,i=this._cbs[t].length;n<i;)this._cbs[t][n]===e&&(this._cbs[t].splice(n,1),n-=1,i-=1),n+=1;this._cbs[t].length||(this._cbs[t]=null)}}};var ot=(function(){function t(n,i){var s=0,r=[],c;switch(n){case"int16":case"uint8c":c=1;break;default:c=1.1;break}for(s=0;s<i;s+=1)r.push(c);return r}function e(n,i){return n==="float32"?new Float32Array(i):n==="int16"?new Int16Array(i):n==="uint8c"?new Uint8ClampedArray(i):t(n,i)}return typeof Uint8ClampedArray=="function"&&typeof Float32Array=="function"?e:t})();function rt(t){return Array.apply(null,{length:t})}function Z(t){return document.createElementNS(Lt,t)}function Tt(t){return document.createElement(t)}function H(){}H.prototype={addDynamicProperty:function(t){this.dynamicProperties.indexOf(t)===-1&&(this.dynamicProperties.push(t),this.container.addDynamicProperty(this),this._isAnimated=!0)},iterateDynamicProperties:function(){this._mdf=!1;var t,e=this.dynamicProperties.length;for(t=0;t<e;t+=1)this.dynamicProperties[t].getValue(),this.dynamicProperties[t]._mdf&&(this._mdf=!0)},initDynamicPropertyContainer:function(t){this.container=t,this.dynamicProperties=[],this._mdf=!1,this._isAnimated=!1}};var p=(function(){var t={0:"source-over",1:"multiply",2:"screen",3:"overlay",4:"darken",5:"lighten",6:"color-dodge",7:"color-burn",8:"hard-light",9:"soft-light",10:"difference",11:"exclusion",12:"hue",13:"saturation",14:"color",15:"luminosity"};return function(e){return t[e]||""}})(),_={1:"butt",2:"round",3:"square"},x={1:"miter",2:"round",3:"bevel"},M=(function(){var t=Math.cos,e=Math.sin,n=Math.tan,i=Math.round;function s(){return this.props[0]=1,this.props[1]=0,this.props[2]=0,this.props[3]=0,this.props[4]=0,this.props[5]=1,this.props[6]=0,this.props[7]=0,this.props[8]=0,this.props[9]=0,this.props[10]=1,this.props[11]=0,this.props[12]=0,this.props[13]=0,this.props[14]=0,this.props[15]=1,this}function r(d){if(d===0)return this;var v=t(d),O=e(d);return this._t(v,-O,0,0,O,v,0,0,0,0,1,0,0,0,0,1)}function c(d){if(d===0)return this;var v=t(d),O=e(d);return this._t(1,0,0,0,0,v,-O,0,0,O,v,0,0,0,0,1)}function S(d){if(d===0)return this;var v=t(d),O=e(d);return this._t(v,0,O,0,0,1,0,0,-O,0,v,0,0,0,0,1)}function u(d){if(d===0)return this;var v=t(d),O=e(d);return this._t(v,-O,0,0,O,v,0,0,0,0,1,0,0,0,0,1)}function I(d,v){return this._t(1,v,d,1,0,0)}function T(d,v){return this.shear(n(d),n(v))}function C(d,v){var O=t(v),it=e(v);return this._t(O,it,0,0,-it,O,0,0,0,0,1,0,0,0,0,1)._t(1,0,0,0,n(d),1,0,0,0,0,1,0,0,0,0,1)._t(O,-it,0,0,it,O,0,0,0,0,1,0,0,0,0,1)}function b(d,v,O){return!O&&O!==0&&(O=1),d===1&&v===1&&O===1?this:this._t(d,0,0,0,0,v,0,0,0,0,O,0,0,0,0,1)}function F(d,v,O,it,G,bt,Mt,St,Qt,ne,he,fe,ge,oe,Kt,ue){return this.props[0]=d,this.props[1]=v,this.props[2]=O,this.props[3]=it,this.props[4]=G,this.props[5]=bt,this.props[6]=Mt,this.props[7]=St,this.props[8]=Qt,this.props[9]=ne,this.props[10]=he,this.props[11]=fe,this.props[12]=ge,this.props[13]=oe,this.props[14]=Kt,this.props[15]=ue,this}function R(d,v,O){return O=O||0,d!==0||v!==0||O!==0?this._t(1,0,0,0,0,1,0,0,0,0,1,0,d,v,O,1):this}function y(d,v,O,it,G,bt,Mt,St,Qt,ne,he,fe,ge,oe,Kt,ue){var ct=this.props;if(d===1&&v===0&&O===0&&it===0&&G===0&&bt===1&&Mt===0&&St===0&&Qt===0&&ne===0&&he===1&&fe===0)return ct[12]=ct[12]*d+ct[15]*ge,ct[13]=ct[13]*bt+ct[15]*oe,ct[14]=ct[14]*he+ct[15]*Kt,ct[15]*=ue,this._identityCalculated=!1,this;var Zt=ct[0],Fe=ct[1],De=ct[2],Te=ct[3],Se=ct[4],Ie=ct[5],ze=ct[6],ce=ct[7],He=ct[8],Ne=ct[9],xe=ct[10],Ze=ct[11],Ce=ct[12],Qe=ct[13],fn=ct[14],un=ct[15];return ct[0]=Zt*d+Fe*G+De*Qt+Te*ge,ct[1]=Zt*v+Fe*bt+De*ne+Te*oe,ct[2]=Zt*O+Fe*Mt+De*he+Te*Kt,ct[3]=Zt*it+Fe*St+De*fe+Te*ue,ct[4]=Se*d+Ie*G+ze*Qt+ce*ge,ct[5]=Se*v+Ie*bt+ze*ne+ce*oe,ct[6]=Se*O+Ie*Mt+ze*he+ce*Kt,ct[7]=Se*it+Ie*St+ze*fe+ce*ue,ct[8]=He*d+Ne*G+xe*Qt+Ze*ge,ct[9]=He*v+Ne*bt+xe*ne+Ze*oe,ct[10]=He*O+Ne*Mt+xe*he+Ze*Kt,ct[11]=He*it+Ne*St+xe*fe+Ze*ue,ct[12]=Ce*d+Qe*G+fn*Qt+un*ge,ct[13]=Ce*v+Qe*bt+fn*ne+un*oe,ct[14]=Ce*O+Qe*Mt+fn*he+un*Kt,ct[15]=Ce*it+Qe*St+fn*fe+un*ue,this._identityCalculated=!1,this}function A(){return this._identityCalculated||(this._identity=!(this.props[0]!==1||this.props[1]!==0||this.props[2]!==0||this.props[3]!==0||this.props[4]!==0||this.props[5]!==1||this.props[6]!==0||this.props[7]!==0||this.props[8]!==0||this.props[9]!==0||this.props[10]!==1||this.props[11]!==0||this.props[12]!==0||this.props[13]!==0||this.props[14]!==0||this.props[15]!==1),this._identityCalculated=!0),this._identity}function f(d){for(var v=0;v<16;){if(d.props[v]!==this.props[v])return!1;v+=1}return!0}function o(d){var v;for(v=0;v<16;v+=1)d.props[v]=this.props[v];return d}function a(d){var v;for(v=0;v<16;v+=1)this.props[v]=d[v]}function l(d,v,O){return{x:d*this.props[0]+v*this.props[4]+O*this.props[8]+this.props[12],y:d*this.props[1]+v*this.props[5]+O*this.props[9]+this.props[13],z:d*this.props[2]+v*this.props[6]+O*this.props[10]+this.props[14]}}function h(d,v,O){return d*this.props[0]+v*this.props[4]+O*this.props[8]+this.props[12]}function g(d,v,O){return d*this.props[1]+v*this.props[5]+O*this.props[9]+this.props[13]}function m(d,v,O){return d*this.props[2]+v*this.props[6]+O*this.props[10]+this.props[14]}function B(){var d=this.props[0]*this.props[5]-this.props[1]*this.props[4],v=this.props[5]/d,O=-this.props[1]/d,it=-this.props[4]/d,G=this.props[0]/d,bt=(this.props[4]*this.props[13]-this.props[5]*this.props[12])/d,Mt=-(this.props[0]*this.props[13]-this.props[1]*this.props[12])/d,St=new M;return St.props[0]=v,St.props[1]=O,St.props[4]=it,St.props[5]=G,St.props[12]=bt,St.props[13]=Mt,St}function Q(d){return this.getInverseMatrix().applyToPointArray(d[0],d[1],d[2]||0)}function at(d){var v,O=d.length,it=[];for(v=0;v<O;v+=1)it[v]=Q(d[v]);return it}function lt(d,v,O){var it=ot("float32",6);if(this.isIdentity())it[0]=d[0],it[1]=d[1],it[2]=v[0],it[3]=v[1],it[4]=O[0],it[5]=O[1];else{var G=this.props[0],bt=this.props[1],Mt=this.props[4],St=this.props[5],Qt=this.props[12],ne=this.props[13];it[0]=d[0]*G+d[1]*Mt+Qt,it[1]=d[0]*bt+d[1]*St+ne,it[2]=v[0]*G+v[1]*Mt+Qt,it[3]=v[0]*bt+v[1]*St+ne,it[4]=O[0]*G+O[1]*Mt+Qt,it[5]=O[0]*bt+O[1]*St+ne}return it}function nt(d,v,O){var it;return this.isIdentity()?it=[d,v,O]:it=[d*this.props[0]+v*this.props[4]+O*this.props[8]+this.props[12],d*this.props[1]+v*this.props[5]+O*this.props[9]+this.props[13],d*this.props[2]+v*this.props[6]+O*this.props[10]+this.props[14]],it}function Y(d,v){if(this.isIdentity())return d+","+v;var O=this.props;return Math.round((d*O[0]+v*O[4]+O[12])*100)/100+","+Math.round((d*O[1]+v*O[5]+O[13])*100)/100}function W(){for(var d=0,v=this.props,O="matrix3d(",it=1e4;d<16;)O+=i(v[d]*it)/it,O+=d===15?")":",",d+=1;return O}function K(d){var v=1e4;return d<1e-6&&d>0||d>-1e-6&&d<0?i(d*v)/v:d}function w(){var d=this.props,v=K(d[0]),O=K(d[1]),it=K(d[4]),G=K(d[5]),bt=K(d[12]),Mt=K(d[13]);return"matrix("+v+","+O+","+it+","+G+","+bt+","+Mt+")"}return function(){this.reset=s,this.rotate=r,this.rotateX=c,this.rotateY=S,this.rotateZ=u,this.skew=T,this.skewFromAxis=C,this.shear=I,this.scale=b,this.setTransform=F,this.translate=R,this.transform=y,this.applyToPoint=l,this.applyToX=h,this.applyToY=g,this.applyToZ=m,this.applyToPointArray=nt,this.applyToTriplePoints=lt,this.applyToPointStringified=Y,this.toCSS=W,this.to2dCSS=w,this.clone=o,this.cloneFromProps=a,this.equals=f,this.inversePoints=at,this.inversePoint=Q,this.getInverseMatrix=B,this._t=this.transform,this.isIdentity=A,this._identity=!0,this._identityCalculated=!1,this.props=ot("float32",16),this.reset()}})();(function(t,e){var n=this,i=256,s=6,r=52,c="random",S=e.pow(i,s),u=e.pow(2,r),I=u*2,T=i-1,C;function b(a,l,h){var g=[];l=l===!0?{entropy:!0}:l||{};var m=A(y(l.entropy?[a,o(t)]:a===null?f():a,3),g),B=new F(g),Q=function(){for(var at=B.g(s),lt=S,nt=0;at<u;)at=(at+nt)*i,lt*=i,nt=B.g(1);for(;at>=I;)at/=2,lt/=2,nt>>>=1;return(at+nt)/lt};return Q.int32=function(){return B.g(4)|0},Q.quick=function(){return B.g(4)/4294967296},Q.double=Q,A(o(B.S),t),(l.pass||h||function(at,lt,nt,Y){return Y&&(Y.S&&R(Y,B),at.state=function(){return R(B,{})}),nt?(e[c]=at,lt):at})(Q,m,"global"in l?l.global:this==e,l.state)}e["seed"+c]=b;function F(a){var l,h=a.length,g=this,m=0,B=g.i=g.j=0,Q=g.S=[];for(h||(a=[h++]);m<i;)Q[m]=m++;for(m=0;m<i;m++)Q[m]=Q[B=T&B+a[m%h]+(l=Q[m])],Q[B]=l;g.g=function(at){for(var lt,nt=0,Y=g.i,W=g.j,K=g.S;at--;)lt=K[Y=T&Y+1],nt=nt*i+K[T&(K[Y]=K[W=T&W+lt])+(K[W]=lt)];return g.i=Y,g.j=W,nt}}function R(a,l){return l.i=a.i,l.j=a.j,l.S=a.S.slice(),l}function y(a,l){var h=[],g=typeof a,m;if(l&&g=="object")for(m in a)try{h.push(y(a[m],l-1))}catch{}return h.length?h:g=="string"?a:a+"\0"}function A(a,l){for(var h=a+"",g,m=0;m<h.length;)l[T&m]=T&(g^=l[T&m]*19)+h.charCodeAt(m++);return o(l)}function f(){try{if(C)return o(C.randomBytes(i));var a=new Uint8Array(i);return(n.crypto||n.msCrypto).getRandomValues(a),o(a)}catch{var l=n.navigator,h=l&&l.plugins;return[+new Date,n,h,n.screen,o(t)]}}function o(a){return String.fromCharCode.apply(0,a)}A(e.random(),t)})([],zt);var z=(function(){var t={};t.getBezierEasing=n;var e={};function n(o,a,l,h,g){var m=g||("bez_"+o+"_"+a+"_"+l+"_"+h).replace(/\./g,"p");if(e[m])return e[m];var B=new f([o,a,l,h]);return e[m]=B,B}var i=4,s=.001,r=1e-7,c=10,S=11,u=1/(S-1),I=typeof Float32Array=="function";function T(o,a){return 1-3*a+3*o}function C(o,a){return 3*a-6*o}function b(o){return 3*o}function F(o,a,l){return((T(a,l)*o+C(a,l))*o+b(a))*o}function R(o,a,l){return 3*T(a,l)*o*o+2*C(a,l)*o+b(a)}function y(o,a,l,h,g){var m,B,Q=0;do B=a+(l-a)/2,m=F(B,h,g)-o,m>0?l=B:a=B;while(Math.abs(m)>r&&++Q<c);return B}function A(o,a,l,h){for(var g=0;g<i;++g){var m=R(a,l,h);if(m===0)return a;var B=F(a,l,h)-o;a-=B/m}return a}function f(o){this._p=o,this._mSampleValues=I?new Float32Array(S):new Array(S),this._precomputed=!1,this.get=this.get.bind(this)}return f.prototype={get:function(o){var a=this._p[0],l=this._p[1],h=this._p[2],g=this._p[3];return this._precomputed||this._precompute(),a===l&&h===g?o:o===0?0:o===1?1:F(this._getTForX(o),l,g)},_precompute:function(){var o=this._p[0],a=this._p[1],l=this._p[2],h=this._p[3];this._precomputed=!0,(o!==a||l!==h)&&this._calcSampleValues()},_calcSampleValues:function(){for(var o=this._p[0],a=this._p[2],l=0;l<S;++l)this._mSampleValues[l]=F(l*u,o,a)},_getTForX:function(o){for(var a=this._p[0],l=this._p[2],h=this._mSampleValues,g=0,m=1,B=S-1;m!==B&&h[m]<=o;++m)g+=u;--m;var Q=(o-h[m])/(h[m+1]-h[m]),at=g+Q*u,lt=R(at,a,l);return lt>=s?A(o,at,a,l):lt===0?at:y(o,g,g+u,a,l)}},t})();(function(){for(var t=0,e=["ms","moz","webkit","o"],n=0;n<e.length&&!pt.requestAnimationFrame;++n)pt.requestAnimationFrame=pt[e[n]+"RequestAnimationFrame"],pt.cancelAnimationFrame=pt[e[n]+"CancelAnimationFrame"]||pt[e[n]+"CancelRequestAnimationFrame"];pt.requestAnimationFrame||(pt.requestAnimationFrame=function(i){var s=new Date().getTime(),r=Math.max(0,16-(s-t)),c=setTimeout(function(){i(s+r)},r);return t=s+r,c}),pt.cancelAnimationFrame||(pt.cancelAnimationFrame=function(i){clearTimeout(i)})})();function P(t,e){var n,i=t.length,s;for(n=0;n<i;n+=1){s=t[n].prototype;for(var r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e.prototype[r]=s[r])}}function j(t){function e(){}return e.prototype=t,e}function L(){var t=Math;function e(b,F,R,y,A,f){var o=b*y+F*A+R*f-A*y-f*b-R*F;return o>-.001&&o<.001}function n(b,F,R,y,A,f,o,a,l){if(R===0&&f===0&&l===0)return e(b,F,y,A,o,a);var h=t.sqrt(t.pow(y-b,2)+t.pow(A-F,2)+t.pow(f-R,2)),g=t.sqrt(t.pow(o-b,2)+t.pow(a-F,2)+t.pow(l-R,2)),m=t.sqrt(t.pow(o-y,2)+t.pow(a-A,2)+t.pow(l-f,2)),B;return h>g?h>m?B=h-g-m:B=m-g-h:m>g?B=m-g-h:B=g-h-m,B>-1e-4&&B<1e-4}var i=(function(){return function(b,F,R,y){var A=Vt,f,o,a,l,h,g=0,m,B=[],Q=[],at=Je.newElement();for(a=R.length,f=0;f<A;f+=1){for(h=f/(A-1),m=0,o=0;o<a;o+=1)l=jt(1-h,3)*b[o]+3*jt(1-h,2)*h*R[o]+3*(1-h)*jt(h,2)*y[o]+jt(h,3)*F[o],B[o]=l,Q[o]!==null&&(m+=jt(B[o]-Q[o],2)),Q[o]=B[o];m&&(m=se(m),g+=m),at.percents[f]=h,at.lengths[f]=g}return at.addedLength=g,at}})();function s(b){var F=Me.newElement(),R=b.c,y=b.v,A=b.o,f=b.i,o,a=b._length,l=F.lengths,h=0;for(o=0;o<a-1;o+=1)l[o]=i(y[o],y[o+1],A[o],f[o+1]),h+=l[o].addedLength;return R&&a&&(l[o]=i(y[o],y[0],A[o],f[0]),h+=l[o].addedLength),F.totalLength=h,F}function r(b){this.segmentLength=0,this.points=new Array(b)}function c(b,F){this.partialLength=b,this.point=F}var S=(function(){var b={};return function(F,R,y,A){var f=(F[0]+"_"+F[1]+"_"+R[0]+"_"+R[1]+"_"+y[0]+"_"+y[1]+"_"+A[0]+"_"+A[1]).replace(/\./g,"p");if(!b[f]){var o=Vt,a,l,h,g,m,B=0,Q,at,lt=null;F.length===2&&(F[0]!==R[0]||F[1]!==R[1])&&e(F[0],F[1],R[0],R[1],F[0]+y[0],F[1]+y[1])&&e(F[0],F[1],R[0],R[1],R[0]+A[0],R[1]+A[1])&&(o=2);var nt=new r(o);for(h=y.length,a=0;a<o;a+=1){for(at=rt(h),m=a/(o-1),Q=0,l=0;l<h;l+=1)g=jt(1-m,3)*F[l]+3*jt(1-m,2)*m*(F[l]+y[l])+3*(1-m)*jt(m,2)*(R[l]+A[l])+jt(m,3)*R[l],at[l]=g,lt!==null&&(Q+=jt(at[l]-lt[l],2));Q=se(Q),B+=Q,nt.points[a]=new c(Q,at),lt=at}nt.segmentLength=B,b[f]=nt}return b[f]}})();function u(b,F){var R=F.percents,y=F.lengths,A=R.length,f=Nt((A-1)*b),o=b*F.addedLength,a=0;if(f===A-1||f===0||o===y[f])return R[f];for(var l=y[f]>o?-1:1,h=!0;h;)if(y[f]<=o&&y[f+1]>o?(a=(o-y[f])/(y[f+1]-y[f]),h=!1):f+=l,f<0||f>=A-1){if(f===A-1)return R[f];h=!1}return R[f]+(R[f+1]-R[f])*a}function I(b,F,R,y,A,f){var o=u(A,f),a=1-o;return[t.round((a*a*a*b[0]+(o*a*a+a*o*a+a*a*o)*R[0]+(o*o*a+a*o*o+o*a*o)*y[0]+o*o*o*F[0])*1e3)/1e3,t.round((a*a*a*b[1]+(o*a*a+a*o*a+a*a*o)*R[1]+(o*o*a+a*o*o+o*a*o)*y[1]+o*o*o*F[1])*1e3)/1e3]}var T=ot("float32",8);function C(b,F,R,y,A,f,o){A<0?A=0:A>1&&(A=1);var a=u(A,o);f=f>1?1:f;var l=u(f,o),h,g=b.length,m=1-a,B=1-l,Q=m*m*m,at=a*m*m*3,lt=a*a*m*3,nt=a*a*a,Y=m*m*B,W=a*m*B+m*a*B+m*m*l,K=a*a*B+m*a*l+a*m*l,w=a*a*l,d=m*B*B,v=a*B*B+m*l*B+m*B*l,O=a*l*B+m*l*l+a*B*l,it=a*l*l,G=B*B*B,bt=l*B*B+B*l*B+B*B*l,Mt=l*l*B+B*l*l+l*B*l,St=l*l*l;for(h=0;h<g;h+=1)T[h*4]=t.round((Q*b[h]+at*R[h]+lt*y[h]+nt*F[h])*1e3)/1e3,T[h*4+1]=t.round((Y*b[h]+W*R[h]+K*y[h]+w*F[h])*1e3)/1e3,T[h*4+2]=t.round((d*b[h]+v*R[h]+O*y[h]+it*F[h])*1e3)/1e3,T[h*4+3]=t.round((G*b[h]+bt*R[h]+Mt*y[h]+St*F[h])*1e3)/1e3;return T}return{getSegmentsLength:s,getNewSegment:C,getPointInSegment:I,buildBezierData:S,pointOnLine2D:e,pointOnLine3D:n}}var E=L(),k=(function(){var t=1,e=[],n,i,s={onmessage:function(){},postMessage:function(b){n({data:b})}},r={postMessage:function(b){s.onmessage({data:b})}};function c(b){if(pt.Worker&&pt.Blob&&Dt){var F=new Blob(["var _workerSelf = self; self.onmessage = ",b.toString()],{type:"text/javascript"}),R=URL.createObjectURL(F);return new Worker(R)}return n=b,s}function S(){i||(i=c(function(F){function R(){function A(Y,W){var K,w,d=Y.length,v,O,it,G;for(w=0;w<d;w+=1)if(K=Y[w],"ks"in K&&!K.completed){if(K.completed=!0,K.tt&&(Y[w-1].td=K.tt),K.hasMask){var bt=K.masksProperties;for(O=bt.length,v=0;v<O;v+=1)if(bt[v].pt.k.i)a(bt[v].pt.k);else for(G=bt[v].pt.k.length,it=0;it<G;it+=1)bt[v].pt.k[it].s&&a(bt[v].pt.k[it].s[0]),bt[v].pt.k[it].e&&a(bt[v].pt.k[it].e[0])}K.ty===0?(K.layers=f(K.refId,W),A(K.layers,W)):K.ty===4?o(K.shapes):K.ty===5&&lt(K)}}function f(Y,W){for(var K=0,w=W.length;K<w;){if(W[K].id===Y)return W[K].layers.__used?JSON.parse(JSON.stringify(W[K].layers)):(W[K].layers.__used=!0,W[K].layers);K+=1}return null}function o(Y){var W,K=Y.length,w,d;for(W=K-1;W>=0;W-=1)if(Y[W].ty==="sh")if(Y[W].ks.k.i)a(Y[W].ks.k);else for(d=Y[W].ks.k.length,w=0;w<d;w+=1)Y[W].ks.k[w].s&&a(Y[W].ks.k[w].s[0]),Y[W].ks.k[w].e&&a(Y[W].ks.k[w].e[0]);else Y[W].ty==="gr"&&o(Y[W].it)}function a(Y){var W,K=Y.i.length;for(W=0;W<K;W+=1)Y.i[W][0]+=Y.v[W][0],Y.i[W][1]+=Y.v[W][1],Y.o[W][0]+=Y.v[W][0],Y.o[W][1]+=Y.v[W][1]}function l(Y,W){var K=W?W.split("."):[100,100,100];return Y[0]>K[0]?!0:K[0]>Y[0]?!1:Y[1]>K[1]?!0:K[1]>Y[1]?!1:Y[2]>K[2]?!0:K[2]>Y[2]?!1:null}var h=(function(){var Y=[4,4,14];function W(w){var d=w.t.d;w.t.d={k:[{s:d,t:0}]}}function K(w){var d,v=w.length;for(d=0;d<v;d+=1)w[d].ty===5&&W(w[d])}return function(w){if(l(Y,w.v)&&(K(w.layers),w.assets)){var d,v=w.assets.length;for(d=0;d<v;d+=1)w.assets[d].layers&&K(w.assets[d].layers)}}})(),g=(function(){var Y=[4,7,99];return function(W){if(W.chars&&!l(Y,W.v)){var K,w=W.chars.length,d,v,O,it;for(K=0;K<w;K+=1)if(W.chars[K].data&&W.chars[K].data.shapes)for(it=W.chars[K].data.shapes[0].it,v=it.length,d=0;d<v;d+=1)O=it[d].ks.k,O.__converted||(a(it[d].ks.k),O.__converted=!0)}}})(),m=(function(){var Y=[5,7,15];function W(w){var d=w.t.p;typeof d.a=="number"&&(d.a={a:0,k:d.a}),typeof d.p=="number"&&(d.p={a:0,k:d.p}),typeof d.r=="number"&&(d.r={a:0,k:d.r})}function K(w){var d,v=w.length;for(d=0;d<v;d+=1)w[d].ty===5&&W(w[d])}return function(w){if(l(Y,w.v)&&(K(w.layers),w.assets)){var d,v=w.assets.length;for(d=0;d<v;d+=1)w.assets[d].layers&&K(w.assets[d].layers)}}})(),B=(function(){var Y=[4,1,9];function W(w){var d,v=w.length,O,it;for(d=0;d<v;d+=1)if(w[d].ty==="gr")W(w[d].it);else if(w[d].ty==="fl"||w[d].ty==="st")if(w[d].c.k&&w[d].c.k[0].i)for(it=w[d].c.k.length,O=0;O<it;O+=1)w[d].c.k[O].s&&(w[d].c.k[O].s[0]/=255,w[d].c.k[O].s[1]/=255,w[d].c.k[O].s[2]/=255,w[d].c.k[O].s[3]/=255),w[d].c.k[O].e&&(w[d].c.k[O].e[0]/=255,w[d].c.k[O].e[1]/=255,w[d].c.k[O].e[2]/=255,w[d].c.k[O].e[3]/=255);else w[d].c.k[0]/=255,w[d].c.k[1]/=255,w[d].c.k[2]/=255,w[d].c.k[3]/=255}function K(w){var d,v=w.length;for(d=0;d<v;d+=1)w[d].ty===4&&W(w[d].shapes)}return function(w){if(l(Y,w.v)&&(K(w.layers),w.assets)){var d,v=w.assets.length;for(d=0;d<v;d+=1)w.assets[d].layers&&K(w.assets[d].layers)}}})(),Q=(function(){var Y=[4,4,18];function W(w){var d,v=w.length,O,it;for(d=v-1;d>=0;d-=1)if(w[d].ty==="sh")if(w[d].ks.k.i)w[d].ks.k.c=w[d].closed;else for(it=w[d].ks.k.length,O=0;O<it;O+=1)w[d].ks.k[O].s&&(w[d].ks.k[O].s[0].c=w[d].closed),w[d].ks.k[O].e&&(w[d].ks.k[O].e[0].c=w[d].closed);else w[d].ty==="gr"&&W(w[d].it)}function K(w){var d,v,O=w.length,it,G,bt,Mt;for(v=0;v<O;v+=1){if(d=w[v],d.hasMask){var St=d.masksProperties;for(G=St.length,it=0;it<G;it+=1)if(St[it].pt.k.i)St[it].pt.k.c=St[it].cl;else for(Mt=St[it].pt.k.length,bt=0;bt<Mt;bt+=1)St[it].pt.k[bt].s&&(St[it].pt.k[bt].s[0].c=St[it].cl),St[it].pt.k[bt].e&&(St[it].pt.k[bt].e[0].c=St[it].cl)}d.ty===4&&W(d.shapes)}}return function(w){if(l(Y,w.v)&&(K(w.layers),w.assets)){var d,v=w.assets.length;for(d=0;d<v;d+=1)w.assets[d].layers&&K(w.assets[d].layers)}}})();function at(Y){Y.__complete||(B(Y),h(Y),g(Y),m(Y),Q(Y),A(Y.layers,Y.assets),Y.__complete=!0)}function lt(Y){Y.t.a.length===0&&!("m"in Y.t.p)&&(Y.singleShape=!0)}var nt={};return nt.completeData=at,nt.checkColors=B,nt.checkChars=g,nt.checkPathProperties=m,nt.checkShapes=Q,nt.completeLayers=A,nt}if(r.dataManager||(r.dataManager=R()),r.assetLoader||(r.assetLoader=(function(){function A(o){var a=o.getResponseHeader("content-type");return a&&o.responseType==="json"&&a.indexOf("json")!==-1||o.response&&typeof o.response=="object"?o.response:o.response&&typeof o.response=="string"?JSON.parse(o.response):o.responseText?JSON.parse(o.responseText):null}function f(o,a,l,h){var g,m=new XMLHttpRequest;try{m.responseType="json"}catch{}m.onreadystatechange=function(){if(m.readyState===4)if(m.status===200)g=A(m),l(g);else try{g=A(m),l(g)}catch(B){h&&h(B)}};try{m.open("GET",o,!0)}catch{m.open("GET",a+"/"+o,!0)}m.send()}return{load:f}})()),F.data.type==="loadAnimation")r.assetLoader.load(F.data.path,F.data.fullPath,function(A){r.dataManager.completeData(A),r.postMessage({id:F.data.id,payload:A,status:"success"})},function(){r.postMessage({id:F.data.id,status:"error"})});else if(F.data.type==="complete"){var y=F.data.animation;r.dataManager.completeData(y),r.postMessage({id:F.data.id,payload:y,status:"success"})}else F.data.type==="loadData"&&r.assetLoader.load(F.data.path,F.data.fullPath,function(A){r.postMessage({id:F.data.id,payload:A,status:"success"})},function(){r.postMessage({id:F.data.id,status:"error"})})}),i.onmessage=function(b){var F=b.data,R=F.id,y=e[R];e[R]=null,F.status==="success"?y.onComplete(F.payload):y.onError&&y.onError()})}function u(b,F){t+=1;var R="processId_"+t;return e[R]={onComplete:b,onError:F},R}function I(b,F,R){S();var y=u(F,R);i.postMessage({type:"loadAnimation",path:b,fullPath:pt.location.origin+pt.location.pathname,id:y})}function T(b,F,R){S();var y=u(F,R);i.postMessage({type:"loadData",path:b,fullPath:pt.location.origin+pt.location.pathname,id:y})}function C(b,F,R){S();var y=u(F,R);i.postMessage({type:"complete",animation:b,id:y})}return{loadAnimation:I,loadData:T,completeAnimation:C}})();function V(t){for(var e=t.fStyle?t.fStyle.split(" "):[],n="normal",i="normal",s=e.length,r,c=0;c<s;c+=1)switch(r=e[c].toLowerCase(),r){case"italic":i="italic";break;case"bold":n="700";break;case"black":n="900";break;case"medium":n="500";break;case"regular":case"normal":n="400";break;case"light":case"thin":n="200";break;default:break}return{style:i,weight:t.fWeight||n}}var N=(function(){var t=5e3,e={w:0,size:0,shapes:[]},n=[];n=n.concat([2304,2305,2306,2307,2362,2363,2364,2364,2366,2367,2368,2369,2370,2371,2372,2373,2374,2375,2376,2377,2378,2379,2380,2381,2382,2383,2387,2388,2389,2390,2391,2402,2403]);var i=["d83cdffb","d83cdffc","d83cdffd","d83cdffe","d83cdfff"],s=[65039,8205];function r(a){var l=a.split(","),h,g=l.length,m=[];for(h=0;h<g;h+=1)l[h]!=="sans-serif"&&l[h]!=="monospace"&&m.push(l[h]);return m.join(",")}function c(a,l){var h=Tt("span");h.setAttribute("aria-hidden",!0),h.style.fontFamily=l;var g=Tt("span");g.innerText="giItT1WQy@!-/#",h.style.position="absolute",h.style.left="-10000px",h.style.top="-10000px",h.style.fontSize="300px",h.style.fontVariant="normal",h.style.fontStyle="normal",h.style.fontWeight="normal",h.style.letterSpacing="0",h.appendChild(g),document.body.appendChild(h);var m=g.offsetWidth;return g.style.fontFamily=r(a)+", "+l,{node:g,w:m,parent:h}}function S(){var a,l=this.fonts.length,h,g,m=l;for(a=0;a<l;a+=1)this.fonts[a].loaded?m-=1:this.fonts[a].fOrigin==="n"||this.fonts[a].origin===0?this.fonts[a].loaded=!0:(h=this.fonts[a].monoCase.node,g=this.fonts[a].monoCase.w,h.offsetWidth!==g?(m-=1,this.fonts[a].loaded=!0):(h=this.fonts[a].sansCase.node,g=this.fonts[a].sansCase.w,h.offsetWidth!==g&&(m-=1,this.fonts[a].loaded=!0)),this.fonts[a].loaded&&(this.fonts[a].sansCase.parent.parentNode.removeChild(this.fonts[a].sansCase.parent),this.fonts[a].monoCase.parent.parentNode.removeChild(this.fonts[a].monoCase.parent)));m!==0&&Date.now()-this.initTime<t?setTimeout(this.checkLoadedFontsBinded,20):setTimeout(this.setIsLoadedBinded,10)}function u(a,l){var h=Z("text");h.style.fontSize="100px";var g=V(l);h.setAttribute("font-family",l.fFamily),h.setAttribute("font-style",g.style),h.setAttribute("font-weight",g.weight),h.textContent="1",l.fClass?(h.style.fontFamily="inherit",h.setAttribute("class",l.fClass)):h.style.fontFamily=l.fFamily,a.appendChild(h);var m=Tt("canvas").getContext("2d");return m.font=l.fWeight+" "+l.fStyle+" 100px "+l.fFamily,h}function I(a,l){if(!a){this.isLoaded=!0;return}if(this.chars){this.isLoaded=!0,this.fonts=a.list;return}var h=a.list,g,m=h.length,B=m;for(g=0;g<m;g+=1){var Q=!0,at,lt;if(h[g].loaded=!1,h[g].monoCase=c(h[g].fFamily,"monospace"),h[g].sansCase=c(h[g].fFamily,"sans-serif"),!h[g].fPath)h[g].loaded=!0,B-=1;else if(h[g].fOrigin==="p"||h[g].origin===3){if(at=document.querySelectorAll('style[f-forigin="p"][f-family="'+h[g].fFamily+'"], style[f-origin="3"][f-family="'+h[g].fFamily+'"]'),at.length>0&&(Q=!1),Q){var nt=Tt("style");nt.setAttribute("f-forigin",h[g].fOrigin),nt.setAttribute("f-origin",h[g].origin),nt.setAttribute("f-family",h[g].fFamily),nt.type="text/css",nt.innerText="@font-face {font-family: "+h[g].fFamily+"; font-style: normal; src: url('"+h[g].fPath+"');}",l.appendChild(nt)}}else if(h[g].fOrigin==="g"||h[g].origin===1){for(at=document.querySelectorAll('link[f-forigin="g"], link[f-origin="1"]'),lt=0;lt<at.length;lt+=1)at[lt].href.indexOf(h[g].fPath)!==-1&&(Q=!1);if(Q){var Y=Tt("link");Y.setAttribute("f-forigin",h[g].fOrigin),Y.setAttribute("f-origin",h[g].origin),Y.type="text/css",Y.rel="stylesheet",Y.href=h[g].fPath,document.body.appendChild(Y)}}else if(h[g].fOrigin==="t"||h[g].origin===2){for(at=document.querySelectorAll('script[f-forigin="t"], script[f-origin="2"]'),lt=0;lt<at.length;lt+=1)h[g].fPath===at[lt].src&&(Q=!1);if(Q){var W=Tt("link");W.setAttribute("f-forigin",h[g].fOrigin),W.setAttribute("f-origin",h[g].origin),W.setAttribute("rel","stylesheet"),W.setAttribute("href",h[g].fPath),l.appendChild(W)}}h[g].helper=u(l,h[g]),h[g].cache={},this.fonts.push(h[g])}B===0?this.isLoaded=!0:setTimeout(this.checkLoadedFonts.bind(this),100)}function T(a){if(a){this.chars||(this.chars=[]);var l,h=a.length,g,m=this.chars.length,B;for(l=0;l<h;l+=1){for(g=0,B=!1;g<m;)this.chars[g].style===a[l].style&&this.chars[g].fFamily===a[l].fFamily&&this.chars[g].ch===a[l].ch&&(B=!0),g+=1;B||(this.chars.push(a[l]),m+=1)}}}function C(a,l,h){for(var g=0,m=this.chars.length;g<m;){if(this.chars[g].ch===a&&this.chars[g].style===l&&this.chars[g].fFamily===h)return this.chars[g];g+=1}return(typeof a=="string"&&a.charCodeAt(0)!==13||!a)&&console&&console.warn&&!this._warned&&(this._warned=!0,console.warn("Missing character from exported characters list: ",a,l,h)),e}function b(a,l,h){var g=this.getFontByName(l),m=a.charCodeAt(0);if(!g.cache[m+1]){var B=g.helper;if(a===" "){B.textContent="|"+a+"|";var Q=B.getComputedTextLength();B.textContent="||";var at=B.getComputedTextLength();g.cache[m+1]=(Q-at)/100}else B.textContent=a,g.cache[m+1]=B.getComputedTextLength()/100}return g.cache[m+1]*h}function F(a){for(var l=0,h=this.fonts.length;l<h;){if(this.fonts[l].fName===a)return this.fonts[l];l+=1}return this.fonts[0]}function R(a,l){var h=a.toString(16)+l.toString(16);return i.indexOf(h)!==-1}function y(a,l){return l?a===s[0]&&l===s[1]:a===s[1]}function A(a){return n.indexOf(a)!==-1}function f(){this.isLoaded=!0}var o=function(){this.fonts=[],this.chars=null,this.typekitLoaded=0,this.isLoaded=!1,this._warned=!1,this.initTime=Date.now(),this.setIsLoadedBinded=this.setIsLoaded.bind(this),this.checkLoadedFontsBinded=this.checkLoadedFonts.bind(this)};return o.isModifier=R,o.isZeroWidthJoiner=y,o.isCombinedCharacter=A,o.prototype={addChars:T,addFonts:I,getCharData:C,getFontByName:F,measureText:b,checkLoadedFonts:S,setIsLoaded:f},o})(),q=(function(){var t=kt,e=Math.abs;function n(y,A){var f=this.offsetTime,o;this.propType==="multidimensional"&&(o=ot("float32",this.pv.length));for(var a=A.lastIndex,l=a,h=this.keyframes.length-1,g=!0,m,B,Q;g;){if(m=this.keyframes[l],B=this.keyframes[l+1],l===h-1&&y>=B.t-f){m.h&&(m=B),a=0;break}if(B.t-f>y){a=l;break}l<h-1?l+=1:(a=0,g=!1)}Q=this.keyframesMetadata[l]||{};var at,lt,nt,Y,W,K,w=B.t-f,d=m.t-f,v;if(m.to){Q.bezierData||(Q.bezierData=E.buildBezierData(m.s,B.s||m.e,m.to,m.ti));var O=Q.bezierData;if(y>=w||y<d){var it=y>=w?O.points.length-1:0;for(lt=O.points[it].point.length,at=0;at<lt;at+=1)o[at]=O.points[it].point[at]}else{Q.__fnct?K=Q.__fnct:(K=z.getBezierEasing(m.o.x,m.o.y,m.i.x,m.i.y,m.n).get,Q.__fnct=K),nt=K((y-d)/(w-d));var G=O.segmentLength*nt,bt,Mt=A.lastFrame<y&&A._lastKeyframeIndex===l?A._lastAddedLength:0;for(W=A.lastFrame<y&&A._lastKeyframeIndex===l?A._lastPoint:0,g=!0,Y=O.points.length;g;){if(Mt+=O.points[W].partialLength,G===0||nt===0||W===O.points.length-1){for(lt=O.points[W].point.length,at=0;at<lt;at+=1)o[at]=O.points[W].point[at];break}else if(G>=Mt&&G<Mt+O.points[W+1].partialLength){for(bt=(G-Mt)/O.points[W+1].partialLength,lt=O.points[W].point.length,at=0;at<lt;at+=1)o[at]=O.points[W].point[at]+(O.points[W+1].point[at]-O.points[W].point[at])*bt;break}W<Y-1?W+=1:g=!1}A._lastPoint=W,A._lastAddedLength=Mt-O.points[W].partialLength,A._lastKeyframeIndex=l}}else{var St,Qt,ne,he,fe;if(h=m.s.length,v=B.s||m.e,this.sh&&m.h!==1)if(y>=w)o[0]=v[0],o[1]=v[1],o[2]=v[2];else if(y<=d)o[0]=m.s[0],o[1]=m.s[1],o[2]=m.s[2];else{var ge=r(m.s),oe=r(v),Kt=(y-d)/(w-d);s(o,i(ge,oe,Kt))}else for(l=0;l<h;l+=1)m.h!==1&&(y>=w?nt=1:y<d?nt=0:(m.o.x.constructor===Array?(Q.__fnct||(Q.__fnct=[]),Q.__fnct[l]?K=Q.__fnct[l]:(St=m.o.x[l]===void 0?m.o.x[0]:m.o.x[l],Qt=m.o.y[l]===void 0?m.o.y[0]:m.o.y[l],ne=m.i.x[l]===void 0?m.i.x[0]:m.i.x[l],he=m.i.y[l]===void 0?m.i.y[0]:m.i.y[l],K=z.getBezierEasing(St,Qt,ne,he).get,Q.__fnct[l]=K)):Q.__fnct?K=Q.__fnct:(St=m.o.x,Qt=m.o.y,ne=m.i.x,he=m.i.y,K=z.getBezierEasing(St,Qt,ne,he).get,m.keyframeMetadata=K),nt=K((y-d)/(w-d)))),v=B.s||m.e,fe=m.h===1?m.s[l]:m.s[l]+(v[l]-m.s[l])*nt,this.propType==="multidimensional"?o[l]=fe:o=fe}return A.lastIndex=a,o}function i(y,A,f){var o=[],a=y[0],l=y[1],h=y[2],g=y[3],m=A[0],B=A[1],Q=A[2],at=A[3],lt,nt,Y,W,K;return nt=a*m+l*B+h*Q+g*at,nt<0&&(nt=-nt,m=-m,B=-B,Q=-Q,at=-at),1-nt>1e-6?(lt=Math.acos(nt),Y=Math.sin(lt),W=Math.sin((1-f)*lt)/Y,K=Math.sin(f*lt)/Y):(W=1-f,K=f),o[0]=W*a+K*m,o[1]=W*l+K*B,o[2]=W*h+K*Q,o[3]=W*g+K*at,o}function s(y,A){var f=A[0],o=A[1],a=A[2],l=A[3],h=Math.atan2(2*o*l-2*f*a,1-2*o*o-2*a*a),g=Math.asin(2*f*o+2*a*l),m=Math.atan2(2*f*l-2*o*a,1-2*f*f-2*a*a);y[0]=h/Et,y[1]=g/Et,y[2]=m/Et}function r(y){var A=y[0]*Et,f=y[1]*Et,o=y[2]*Et,a=Math.cos(A/2),l=Math.cos(f/2),h=Math.cos(o/2),g=Math.sin(A/2),m=Math.sin(f/2),B=Math.sin(o/2),Q=a*l*h-g*m*B;return[g*m*h+a*l*B,g*l*h+a*m*B,a*m*h-g*l*B,Q]}function c(){var y=this.comp.renderedFrame-this.offsetTime,A=this.keyframes[0].t-this.offsetTime,f=this.keyframes[this.keyframes.length-1].t-this.offsetTime;if(!(y===this._caching.lastFrame||this._caching.lastFrame!==t&&(this._caching.lastFrame>=f&&y>=f||this._caching.lastFrame<A&&y<A))){this._caching.lastFrame>=y&&(this._caching._lastKeyframeIndex=-1,this._caching.lastIndex=0);var o=this.interpolateValue(y,this._caching);this.pv=o}return this._caching.lastFrame=y,this.pv}function S(y){var A;if(this.propType==="unidimensional")A=y*this.mult,e(this.v-A)>1e-5&&(this.v=A,this._mdf=!0);else for(var f=0,o=this.v.length;f<o;)A=y[f]*this.mult,e(this.v[f]-A)>1e-5&&(this.v[f]=A,this._mdf=!0),f+=1}function u(){if(!(this.elem.globalData.frameId===this.frameId||!this.effectsSequence.length)){if(this.lock){this.setVValue(this.pv);return}this.lock=!0,this._mdf=this._isFirstFrame;var y,A=this.effectsSequence.length,f=this.kf?this.pv:this.data.k;for(y=0;y<A;y+=1)f=this.effectsSequence[y](f);this.setVValue(f),this._isFirstFrame=!1,this.lock=!1,this.frameId=this.elem.globalData.frameId}}function I(y){this.effectsSequence.push(y),this.container.addDynamicProperty(this)}function T(y,A,f,o){this.propType="unidimensional",this.mult=f||1,this.data=A,this.v=f?A.k*f:A.k,this.pv=A.k,this._mdf=!1,this.elem=y,this.container=o,this.comp=y.comp,this.k=!1,this.kf=!1,this.vel=0,this.effectsSequence=[],this._isFirstFrame=!0,this.getValue=u,this.setVValue=S,this.addEffect=I}function C(y,A,f,o){this.propType="multidimensional",this.mult=f||1,this.data=A,this._mdf=!1,this.elem=y,this.container=o,this.comp=y.comp,this.k=!1,this.kf=!1,this.frameId=-1;var a,l=A.k.length;for(this.v=ot("float32",l),this.pv=ot("float32",l),this.vel=ot("float32",l),a=0;a<l;a+=1)this.v[a]=A.k[a]*this.mult,this.pv[a]=A.k[a];this._isFirstFrame=!0,this.effectsSequence=[],this.getValue=u,this.setVValue=S,this.addEffect=I}function b(y,A,f,o){this.propType="unidimensional",this.keyframes=A.k,this.keyframesMetadata=[],this.offsetTime=y.data.st,this.frameId=-1,this._caching={lastFrame:t,lastIndex:0,value:0,_lastKeyframeIndex:-1},this.k=!0,this.kf=!0,this.data=A,this.mult=f||1,this.elem=y,this.container=o,this.comp=y.comp,this.v=t,this.pv=t,this._isFirstFrame=!0,this.getValue=u,this.setVValue=S,this.interpolateValue=n,this.effectsSequence=[c.bind(this)],this.addEffect=I}function F(y,A,f,o){this.propType="multidimensional";var a,l=A.k.length,h,g,m,B;for(a=0;a<l-1;a+=1)A.k[a].to&&A.k[a].s&&A.k[a+1]&&A.k[a+1].s&&(h=A.k[a].s,g=A.k[a+1].s,m=A.k[a].to,B=A.k[a].ti,(h.length===2&&!(h[0]===g[0]&&h[1]===g[1])&&E.pointOnLine2D(h[0],h[1],g[0],g[1],h[0]+m[0],h[1]+m[1])&&E.pointOnLine2D(h[0],h[1],g[0],g[1],g[0]+B[0],g[1]+B[1])||h.length===3&&!(h[0]===g[0]&&h[1]===g[1]&&h[2]===g[2])&&E.pointOnLine3D(h[0],h[1],h[2],g[0],g[1],g[2],h[0]+m[0],h[1]+m[1],h[2]+m[2])&&E.pointOnLine3D(h[0],h[1],h[2],g[0],g[1],g[2],g[0]+B[0],g[1]+B[1],g[2]+B[2]))&&(A.k[a].to=null,A.k[a].ti=null),h[0]===g[0]&&h[1]===g[1]&&m[0]===0&&m[1]===0&&B[0]===0&&B[1]===0&&(h.length===2||h[2]===g[2]&&m[2]===0&&B[2]===0)&&(A.k[a].to=null,A.k[a].ti=null));this.effectsSequence=[c.bind(this)],this.data=A,this.keyframes=A.k,this.keyframesMetadata=[],this.offsetTime=y.data.st,this.k=!0,this.kf=!0,this._isFirstFrame=!0,this.mult=f||1,this.elem=y,this.container=o,this.comp=y.comp,this.getValue=u,this.setVValue=S,this.interpolateValue=n,this.frameId=-1;var Q=A.k[0].s.length;for(this.v=ot("float32",Q),this.pv=ot("float32",Q),a=0;a<Q;a+=1)this.v[a]=t,this.pv[a]=t;this._caching={lastFrame:t,lastIndex:0,value:ot("float32",Q)},this.addEffect=I}function R(y,A,f,o,a){var l;if(!A.k.length)l=new T(y,A,o,a);else if(typeof A.k[0]=="number")l=new C(y,A,o,a);else switch(f){case 0:l=new b(y,A,o,a);break;case 1:l=new F(y,A,o,a);break;default:break}return l.effectsSequence.length&&a.addDynamicProperty(l),l}return{getProp:R}})(),ht=(function(){var t=[0,0];function e(u){var I=this._mdf;this.iterateDynamicProperties(),this._mdf=this._mdf||I,this.a&&u.translate(-this.a.v[0],-this.a.v[1],this.a.v[2]),this.s&&u.scale(this.s.v[0],this.s.v[1],this.s.v[2]),this.sk&&u.skewFromAxis(-this.sk.v,this.sa.v),this.r?u.rotate(-this.r.v):u.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]),this.data.p.s?this.data.p.z?u.translate(this.px.v,this.py.v,-this.pz.v):u.translate(this.px.v,this.py.v,0):u.translate(this.p.v[0],this.p.v[1],-this.p.v[2])}function n(u){if(this.elem.globalData.frameId!==this.frameId){if(this._isDirty&&(this.precalculateMatrix(),this._isDirty=!1),this.iterateDynamicProperties(),this._mdf||u){var I;if(this.v.cloneFromProps(this.pre.props),this.appliedTransformations<1&&this.v.translate(-this.a.v[0],-this.a.v[1],this.a.v[2]),this.appliedTransformations<2&&this.v.scale(this.s.v[0],this.s.v[1],this.s.v[2]),this.sk&&this.appliedTransformations<3&&this.v.skewFromAxis(-this.sk.v,this.sa.v),this.r&&this.appliedTransformations<4?this.v.rotate(-this.r.v):!this.r&&this.appliedTransformations<4&&this.v.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]),this.autoOriented){var T,C;if(I=this.elem.globalData.frameRate,this.p&&this.p.keyframes&&this.p.getValueAtTime)this.p._caching.lastFrame+this.p.offsetTime<=this.p.keyframes[0].t?(T=this.p.getValueAtTime((this.p.keyframes[0].t+.01)/I,0),C=this.p.getValueAtTime(this.p.keyframes[0].t/I,0)):this.p._caching.lastFrame+this.p.offsetTime>=this.p.keyframes[this.p.keyframes.length-1].t?(T=this.p.getValueAtTime(this.p.keyframes[this.p.keyframes.length-1].t/I,0),C=this.p.getValueAtTime((this.p.keyframes[this.p.keyframes.length-1].t-.05)/I,0)):(T=this.p.pv,C=this.p.getValueAtTime((this.p._caching.lastFrame+this.p.offsetTime-.01)/I,this.p.offsetTime));else if(this.px&&this.px.keyframes&&this.py.keyframes&&this.px.getValueAtTime&&this.py.getValueAtTime){T=[],C=[];var b=this.px,F=this.py;b._caching.lastFrame+b.offsetTime<=b.keyframes[0].t?(T[0]=b.getValueAtTime((b.keyframes[0].t+.01)/I,0),T[1]=F.getValueAtTime((F.keyframes[0].t+.01)/I,0),C[0]=b.getValueAtTime(b.keyframes[0].t/I,0),C[1]=F.getValueAtTime(F.keyframes[0].t/I,0)):b._caching.lastFrame+b.offsetTime>=b.keyframes[b.keyframes.length-1].t?(T[0]=b.getValueAtTime(b.keyframes[b.keyframes.length-1].t/I,0),T[1]=F.getValueAtTime(F.keyframes[F.keyframes.length-1].t/I,0),C[0]=b.getValueAtTime((b.keyframes[b.keyframes.length-1].t-.01)/I,0),C[1]=F.getValueAtTime((F.keyframes[F.keyframes.length-1].t-.01)/I,0)):(T=[b.pv,F.pv],C[0]=b.getValueAtTime((b._caching.lastFrame+b.offsetTime-.01)/I,b.offsetTime),C[1]=F.getValueAtTime((F._caching.lastFrame+F.offsetTime-.01)/I,F.offsetTime))}else C=t,T=C;this.v.rotate(-Math.atan2(T[1]-C[1],T[0]-C[0]))}this.data.p&&this.data.p.s?this.data.p.z?this.v.translate(this.px.v,this.py.v,-this.pz.v):this.v.translate(this.px.v,this.py.v,0):this.v.translate(this.p.v[0],this.p.v[1],-this.p.v[2])}this.frameId=this.elem.globalData.frameId}}function i(){if(!this.a.k)this.pre.translate(-this.a.v[0],-this.a.v[1],this.a.v[2]),this.appliedTransformations=1;else return;if(!this.s.effectsSequence.length)this.pre.scale(this.s.v[0],this.s.v[1],this.s.v[2]),this.appliedTransformations=2;else return;if(this.sk)if(!this.sk.effectsSequence.length&&!this.sa.effectsSequence.length)this.pre.skewFromAxis(-this.sk.v,this.sa.v),this.appliedTransformations=3;else return;this.r?this.r.effectsSequence.length||(this.pre.rotate(-this.r.v),this.appliedTransformations=4):!this.rz.effectsSequence.length&&!this.ry.effectsSequence.length&&!this.rx.effectsSequence.length&&!this.or.effectsSequence.length&&(this.pre.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]),this.appliedTransformations=4)}function s(){}function r(u){this._addDynamicProperty(u),this.elem.addDynamicProperty(u),this._isDirty=!0}function c(u,I,T){if(this.elem=u,this.frameId=-1,this.propType="transform",this.data=I,this.v=new M,this.pre=new M,this.appliedTransformations=0,this.initDynamicPropertyContainer(T||u),I.p&&I.p.s?(this.px=q.getProp(u,I.p.x,0,0,this),this.py=q.getProp(u,I.p.y,0,0,this),I.p.z&&(this.pz=q.getProp(u,I.p.z,0,0,this))):this.p=q.getProp(u,I.p||{k:[0,0,0]},1,0,this),I.rx){if(this.rx=q.getProp(u,I.rx,0,Et,this),this.ry=q.getProp(u,I.ry,0,Et,this),this.rz=q.getProp(u,I.rz,0,Et,this),I.or.k[0].ti){var C,b=I.or.k.length;for(C=0;C<b;C+=1)I.or.k[C].to=null,I.or.k[C].ti=null}this.or=q.getProp(u,I.or,1,Et,this),this.or.sh=!0}else this.r=q.getProp(u,I.r||{k:0},0,Et,this);I.sk&&(this.sk=q.getProp(u,I.sk,0,Et,this),this.sa=q.getProp(u,I.sa,0,Et,this)),this.a=q.getProp(u,I.a||{k:[0,0,0]},1,0,this),this.s=q.getProp(u,I.s||{k:[100,100,100]},1,.01,this),I.o?this.o=q.getProp(u,I.o,0,.01,u):this.o={_mdf:!1,v:1},this._isDirty=!0,this.dynamicProperties.length||this.getValue(!0)}c.prototype={applyToMatrix:e,getValue:n,precalculateMatrix:i,autoOrient:s},P([H],c),c.prototype.addDynamicProperty=r,c.prototype._addDynamicProperty=H.prototype.addDynamicProperty;function S(u,I,T){return new c(u,I,T)}return{getTransformProperty:S}})();function X(){this.c=!1,this._length=0,this._maxLength=8,this.v=rt(this._maxLength),this.o=rt(this._maxLength),this.i=rt(this._maxLength)}X.prototype.setPathData=function(t,e){this.c=t,this.setLength(e);for(var n=0;n<e;)this.v[n]=ae.newElement(),this.o[n]=ae.newElement(),this.i[n]=ae.newElement(),n+=1},X.prototype.setLength=function(t){for(;this._maxLength<t;)this.doubleArrayLength();this._length=t},X.prototype.doubleArrayLength=function(){this.v=this.v.concat(rt(this._maxLength)),this.i=this.i.concat(rt(this._maxLength)),this.o=this.o.concat(rt(this._maxLength)),this._maxLength*=2},X.prototype.setXYAt=function(t,e,n,i,s){var r;switch(this._length=Math.max(this._length,i+1),this._length>=this._maxLength&&this.doubleArrayLength(),n){case"v":r=this.v;break;case"i":r=this.i;break;case"o":r=this.o;break;default:r=[];break}(!r[i]||r[i]&&!s)&&(r[i]=ae.newElement()),r[i][0]=t,r[i][1]=e},X.prototype.setTripleAt=function(t,e,n,i,s,r,c,S){this.setXYAt(t,e,"v",c,S),this.setXYAt(n,i,"o",c,S),this.setXYAt(s,r,"i",c,S)},X.prototype.reverse=function(){var t=new X;t.setPathData(this.c,this._length);var e=this.v,n=this.o,i=this.i,s=0;this.c&&(t.setTripleAt(e[0][0],e[0][1],i[0][0],i[0][1],n[0][0],n[0][1],0,!1),s=1);var r=this._length-1,c=this._length,S;for(S=s;S<c;S+=1)t.setTripleAt(e[r][0],e[r][1],i[r][0],i[r][1],n[r][0],n[r][1],S,!1),r-=1;return t};var dt=(function(){var t=-999999;function e(f,o,a){var l=a.lastIndex,h,g,m,B,Q,at,lt,nt,Y,W=this.keyframes;if(f<W[0].t-this.offsetTime)h=W[0].s[0],m=!0,l=0;else if(f>=W[W.length-1].t-this.offsetTime)h=W[W.length-1].s?W[W.length-1].s[0]:W[W.length-2].e[0],m=!0;else{for(var K=l,w=W.length-1,d=!0,v,O,it;d&&(v=W[K],O=W[K+1],!(O.t-this.offsetTime>f));)K<w-1?K+=1:d=!1;if(it=this.keyframesMetadata[K]||{},m=v.h===1,l=K,!m){if(f>=O.t-this.offsetTime)nt=1;else if(f<v.t-this.offsetTime)nt=0;else{var G;it.__fnct?G=it.__fnct:(G=z.getBezierEasing(v.o.x,v.o.y,v.i.x,v.i.y).get,it.__fnct=G),nt=G((f-(v.t-this.offsetTime))/(O.t-this.offsetTime-(v.t-this.offsetTime)))}g=O.s?O.s[0]:v.e[0]}h=v.s[0]}for(at=o._length,lt=h.i[0].length,a.lastIndex=l,B=0;B<at;B+=1)for(Q=0;Q<lt;Q+=1)Y=m?h.i[B][Q]:h.i[B][Q]+(g.i[B][Q]-h.i[B][Q])*nt,o.i[B][Q]=Y,Y=m?h.o[B][Q]:h.o[B][Q]+(g.o[B][Q]-h.o[B][Q])*nt,o.o[B][Q]=Y,Y=m?h.v[B][Q]:h.v[B][Q]+(g.v[B][Q]-h.v[B][Q])*nt,o.v[B][Q]=Y}function n(){var f=this.comp.renderedFrame-this.offsetTime,o=this.keyframes[0].t-this.offsetTime,a=this.keyframes[this.keyframes.length-1].t-this.offsetTime,l=this._caching.lastFrame;return l!==t&&(l<o&&f<o||l>a&&f>a)||(this._caching.lastIndex=l<f?this._caching.lastIndex:0,this.interpolateShape(f,this.pv,this._caching)),this._caching.lastFrame=f,this.pv}function i(){this.paths=this.localShapeCollection}function s(f,o){if(f._length!==o._length||f.c!==o.c)return!1;var a,l=f._length;for(a=0;a<l;a+=1)if(f.v[a][0]!==o.v[a][0]||f.v[a][1]!==o.v[a][1]||f.o[a][0]!==o.o[a][0]||f.o[a][1]!==o.o[a][1]||f.i[a][0]!==o.i[a][0]||f.i[a][1]!==o.i[a][1])return!1;return!0}function r(f){s(this.v,f)||(this.v=te.clone(f),this.localShapeCollection.releaseShapes(),this.localShapeCollection.addShape(this.v),this._mdf=!0,this.paths=this.localShapeCollection)}function c(){if(this.elem.globalData.frameId!==this.frameId){if(!this.effectsSequence.length){this._mdf=!1;return}if(this.lock){this.setVValue(this.pv);return}this.lock=!0,this._mdf=!1;var f;this.kf?f=this.pv:this.data.ks?f=this.data.ks.k:f=this.data.pt.k;var o,a=this.effectsSequence.length;for(o=0;o<a;o+=1)f=this.effectsSequence[o](f);this.setVValue(f),this.lock=!1,this.frameId=this.elem.globalData.frameId}}function S(f,o,a){this.propType="shape",this.comp=f.comp,this.container=f,this.elem=f,this.data=o,this.k=!1,this.kf=!1,this._mdf=!1;var l=a===3?o.pt.k:o.ks.k;this.v=te.clone(l),this.pv=te.clone(this.v),this.localShapeCollection=pe.newShapeCollection(),this.paths=this.localShapeCollection,this.paths.addShape(this.v),this.reset=i,this.effectsSequence=[]}function u(f){this.effectsSequence.push(f),this.container.addDynamicProperty(this)}S.prototype.interpolateShape=e,S.prototype.getValue=c,S.prototype.setVValue=r,S.prototype.addEffect=u;function I(f,o,a){this.propType="shape",this.comp=f.comp,this.elem=f,this.container=f,this.offsetTime=f.data.st,this.keyframes=a===3?o.pt.k:o.ks.k,this.keyframesMetadata=[],this.k=!0,this.kf=!0;var l=this.keyframes[0].s[0].i.length;this.v=te.newElement(),this.v.setPathData(this.keyframes[0].s[0].c,l),this.pv=te.clone(this.v),this.localShapeCollection=pe.newShapeCollection(),this.paths=this.localShapeCollection,this.paths.addShape(this.v),this.lastFrame=t,this.reset=i,this._caching={lastFrame:t,lastIndex:0},this.effectsSequence=[n.bind(this)]}I.prototype.getValue=c,I.prototype.interpolateShape=e,I.prototype.setVValue=r,I.prototype.addEffect=u;var T=(function(){var f=Jt;function o(a,l){this.v=te.newElement(),this.v.setPathData(!0,4),this.localShapeCollection=pe.newShapeCollection(),this.paths=this.localShapeCollection,this.localShapeCollection.addShape(this.v),this.d=l.d,this.elem=a,this.comp=a.comp,this.frameId=-1,this.initDynamicPropertyContainer(a),this.p=q.getProp(a,l.p,1,0,this),this.s=q.getProp(a,l.s,1,0,this),this.dynamicProperties.length?this.k=!0:(this.k=!1,this.convertEllToPath())}return o.prototype={reset:i,getValue:function(){this.elem.globalData.frameId!==this.frameId&&(this.frameId=this.elem.globalData.frameId,this.iterateDynamicProperties(),this._mdf&&this.convertEllToPath())},convertEllToPath:function(){var a=this.p.v[0],l=this.p.v[1],h=this.s.v[0]/2,g=this.s.v[1]/2,m=this.d!==3,B=this.v;B.v[0][0]=a,B.v[0][1]=l-g,B.v[1][0]=m?a+h:a-h,B.v[1][1]=l,B.v[2][0]=a,B.v[2][1]=l+g,B.v[3][0]=m?a-h:a+h,B.v[3][1]=l,B.i[0][0]=m?a-h*f:a+h*f,B.i[0][1]=l-g,B.i[1][0]=m?a+h:a-h,B.i[1][1]=l-g*f,B.i[2][0]=m?a+h*f:a-h*f,B.i[2][1]=l+g,B.i[3][0]=m?a-h:a+h,B.i[3][1]=l+g*f,B.o[0][0]=m?a+h*f:a-h*f,B.o[0][1]=l-g,B.o[1][0]=m?a+h:a-h,B.o[1][1]=l+g*f,B.o[2][0]=m?a-h*f:a+h*f,B.o[2][1]=l+g,B.o[3][0]=m?a-h:a+h,B.o[3][1]=l-g*f}},P([H],o),o})(),C=(function(){function f(o,a){this.v=te.newElement(),this.v.setPathData(!0,0),this.elem=o,this.comp=o.comp,this.data=a,this.frameId=-1,this.d=a.d,this.initDynamicPropertyContainer(o),a.sy===1?(this.ir=q.getProp(o,a.ir,0,0,this),this.is=q.getProp(o,a.is,0,.01,this),this.convertToPath=this.convertStarToPath):this.convertToPath=this.convertPolygonToPath,this.pt=q.getProp(o,a.pt,0,0,this),this.p=q.getProp(o,a.p,1,0,this),this.r=q.getProp(o,a.r,0,Et,this),this.or=q.getProp(o,a.or,0,0,this),this.os=q.getProp(o,a.os,0,.01,this),this.localShapeCollection=pe.newShapeCollection(),this.localShapeCollection.addShape(this.v),this.paths=this.localShapeCollection,this.dynamicProperties.length?this.k=!0:(this.k=!1,this.convertToPath())}return f.prototype={reset:i,getValue:function(){this.elem.globalData.frameId!==this.frameId&&(this.frameId=this.elem.globalData.frameId,this.iterateDynamicProperties(),this._mdf&&this.convertToPath())},convertStarToPath:function(){var o=Math.floor(this.pt.v)*2,a=Math.PI*2/o,l=!0,h=this.or.v,g=this.ir.v,m=this.os.v,B=this.is.v,Q=2*Math.PI*h/(o*2),at=2*Math.PI*g/(o*2),lt,nt,Y,W,K=-Math.PI/2;K+=this.r.v;var w=this.data.d===3?-1:1;for(this.v._length=0,lt=0;lt<o;lt+=1){nt=l?h:g,Y=l?m:B,W=l?Q:at;var d=nt*Math.cos(K),v=nt*Math.sin(K),O=d===0&&v===0?0:v/Math.sqrt(d*d+v*v),it=d===0&&v===0?0:-d/Math.sqrt(d*d+v*v);d+=+this.p.v[0],v+=+this.p.v[1],this.v.setTripleAt(d,v,d-O*W*Y*w,v-it*W*Y*w,d+O*W*Y*w,v+it*W*Y*w,lt,!0),l=!l,K+=a*w}},convertPolygonToPath:function(){var o=Math.floor(this.pt.v),a=Math.PI*2/o,l=this.or.v,h=this.os.v,g=2*Math.PI*l/(o*4),m,B=-Math.PI*.5,Q=this.data.d===3?-1:1;for(B+=this.r.v,this.v._length=0,m=0;m<o;m+=1){var at=l*Math.cos(B),lt=l*Math.sin(B),nt=at===0&&lt===0?0:lt/Math.sqrt(at*at+lt*lt),Y=at===0&&lt===0?0:-at/Math.sqrt(at*at+lt*lt);at+=+this.p.v[0],lt+=+this.p.v[1],this.v.setTripleAt(at,lt,at-nt*g*h*Q,lt-Y*g*h*Q,at+nt*g*h*Q,lt+Y*g*h*Q,m,!0),B+=a*Q}this.paths.length=0,this.paths[0]=this.v}},P([H],f),f})(),b=(function(){function f(o,a){this.v=te.newElement(),this.v.c=!0,this.localShapeCollection=pe.newShapeCollection(),this.localShapeCollection.addShape(this.v),this.paths=this.localShapeCollection,this.elem=o,this.comp=o.comp,this.frameId=-1,this.d=a.d,this.initDynamicPropertyContainer(o),this.p=q.getProp(o,a.p,1,0,this),this.s=q.getProp(o,a.s,1,0,this),this.r=q.getProp(o,a.r,0,0,this),this.dynamicProperties.length?this.k=!0:(this.k=!1,this.convertRectToPath())}return f.prototype={convertRectToPath:function(){var o=this.p.v[0],a=this.p.v[1],l=this.s.v[0]/2,h=this.s.v[1]/2,g=Ft(l,h,this.r.v),m=g*(1-Jt);this.v._length=0,this.d===2||this.d===1?(this.v.setTripleAt(o+l,a-h+g,o+l,a-h+g,o+l,a-h+m,0,!0),this.v.setTripleAt(o+l,a+h-g,o+l,a+h-m,o+l,a+h-g,1,!0),g!==0?(this.v.setTripleAt(o+l-g,a+h,o+l-g,a+h,o+l-m,a+h,2,!0),this.v.setTripleAt(o-l+g,a+h,o-l+m,a+h,o-l+g,a+h,3,!0),this.v.setTripleAt(o-l,a+h-g,o-l,a+h-g,o-l,a+h-m,4,!0),this.v.setTripleAt(o-l,a-h+g,o-l,a-h+m,o-l,a-h+g,5,!0),this.v.setTripleAt(o-l+g,a-h,o-l+g,a-h,o-l+m,a-h,6,!0),this.v.setTripleAt(o+l-g,a-h,o+l-m,a-h,o+l-g,a-h,7,!0)):(this.v.setTripleAt(o-l,a+h,o-l+m,a+h,o-l,a+h,2),this.v.setTripleAt(o-l,a-h,o-l,a-h+m,o-l,a-h,3))):(this.v.setTripleAt(o+l,a-h+g,o+l,a-h+m,o+l,a-h+g,0,!0),g!==0?(this.v.setTripleAt(o+l-g,a-h,o+l-g,a-h,o+l-m,a-h,1,!0),this.v.setTripleAt(o-l+g,a-h,o-l+m,a-h,o-l+g,a-h,2,!0),this.v.setTripleAt(o-l,a-h+g,o-l,a-h+g,o-l,a-h+m,3,!0),this.v.setTripleAt(o-l,a+h-g,o-l,a+h-m,o-l,a+h-g,4,!0),this.v.setTripleAt(o-l+g,a+h,o-l+g,a+h,o-l+m,a+h,5,!0),this.v.setTripleAt(o+l-g,a+h,o+l-m,a+h,o+l-g,a+h,6,!0),this.v.setTripleAt(o+l,a+h-g,o+l,a+h-g,o+l,a+h-m,7,!0)):(this.v.setTripleAt(o-l,a-h,o-l+m,a-h,o-l,a-h,1,!0),this.v.setTripleAt(o-l,a+h,o-l,a+h-m,o-l,a+h,2,!0),this.v.setTripleAt(o+l,a+h,o+l-m,a+h,o+l,a+h,3,!0)))},getValue:function(){this.elem.globalData.frameId!==this.frameId&&(this.frameId=this.elem.globalData.frameId,this.iterateDynamicProperties(),this._mdf&&this.convertRectToPath())},reset:i},P([H],f),f})();function F(f,o,a){var l;return a===3||a===4?(a===3?o.pt:o.ks).k.length?l=new I(f,o,a):l=new S(f,o,a):a===5?l=new b(f,o):a===6?l=new T(f,o):a===7&&(l=new C(f,o)),l.k&&f.addDynamicProperty(l),l}function R(){return S}function y(){return I}var A={};return A.getShapeProp=F,A.getConstructorFunction=R,A.getKeyframedConstructorFunction=y,A})(),mt=(function(){var t={},e={};t.registerModifier=n,t.getModifier=i;function n(s,r){e[s]||(e[s]=r)}function i(s,r,c){return new e[s](r,c)}return t})();function vt(){}vt.prototype.initModifierProperties=function(){},vt.prototype.addShapeToModifier=function(){},vt.prototype.addShape=function(t){if(!this.closed){t.sh.container.addDynamicProperty(t.sh);var e={shape:t.sh,data:t,localShapeCollection:pe.newShapeCollection()};this.shapes.push(e),this.addShapeToModifier(e),this._isAnimated&&t.setAsAnimated()}},vt.prototype.init=function(t,e){this.shapes=[],this.elem=t,this.initDynamicPropertyContainer(t),this.initModifierProperties(t,e),this.frameId=kt,this.closed=!1,this.k=!1,this.dynamicProperties.length?this.k=!0:this.getValue(!0)},vt.prototype.processKeys=function(){this.elem.globalData.frameId!==this.frameId&&(this.frameId=this.elem.globalData.frameId,this.iterateDynamicProperties())},P([H],vt);function At(){}P([vt],At),At.prototype.initModifierProperties=function(t,e){this.s=q.getProp(t,e.s,0,.01,this),this.e=q.getProp(t,e.e,0,.01,this),this.o=q.getProp(t,e.o,0,0,this),this.sValue=0,this.eValue=0,this.getValue=this.processKeys,this.m=e.m,this._isAnimated=!!this.s.effectsSequence.length||!!this.e.effectsSequence.length||!!this.o.effectsSequence.length},At.prototype.addShapeToModifier=function(t){t.pathsData=[]},At.prototype.calculateShapeEdges=function(t,e,n,i,s){var r=[];e<=1?r.push({s:t,e}):t>=1?r.push({s:t-1,e:e-1}):(r.push({s:t,e:1}),r.push({s:0,e:e-1}));var c=[],S,u=r.length,I;for(S=0;S<u;S+=1)if(I=r[S],!(I.e*s<i||I.s*s>i+n)){var T,C;I.s*s<=i?T=0:T=(I.s*s-i)/n,I.e*s>=i+n?C=1:C=(I.e*s-i)/n,c.push([T,C])}return c.length||c.push([0,0]),c},At.prototype.releasePathsData=function(t){var e,n=t.length;for(e=0;e<n;e+=1)Me.release(t[e]);return t.length=0,t},At.prototype.processShapes=function(t){var e,n;if(this._mdf||t){var i=this.o.v%360/360;if(i<0&&(i+=1),this.s.v>1?e=1+i:this.s.v<0?e=0+i:e=this.s.v+i,this.e.v>1?n=1+i:this.e.v<0?n=0+i:n=this.e.v+i,e>n){var s=e;e=n,n=s}e=Math.round(e*1e4)*1e-4,n=Math.round(n*1e4)*1e-4,this.sValue=e,this.eValue=n}else e=this.sValue,n=this.eValue;var r,c,S=this.shapes.length,u,I,T,C,b,F=0;if(n===e)for(c=0;c<S;c+=1)this.shapes[c].localShapeCollection.releaseShapes(),this.shapes[c].shape._mdf=!0,this.shapes[c].shape.paths=this.shapes[c].localShapeCollection,this._mdf&&(this.shapes[c].pathsData.length=0);else if(n===1&&e===0||n===0&&e===1){if(this._mdf)for(c=0;c<S;c+=1)this.shapes[c].pathsData.length=0,this.shapes[c].shape._mdf=!0}else{var R=[],y,A;for(c=0;c<S;c+=1)if(y=this.shapes[c],!y.shape._mdf&&!this._mdf&&!t&&this.m!==2)y.shape.paths=y.localShapeCollection;else{if(r=y.shape.paths,I=r._length,b=0,!y.shape._mdf&&y.pathsData.length)b=y.totalShapeLength;else{for(T=this.releasePathsData(y.pathsData),u=0;u<I;u+=1)C=E.getSegmentsLength(r.shapes[u]),T.push(C),b+=C.totalLength;y.totalShapeLength=b,y.pathsData=T}F+=b,y.shape._mdf=!0}var f=e,o=n,a=0,l;for(c=S-1;c>=0;c-=1)if(y=this.shapes[c],y.shape._mdf){for(A=y.localShapeCollection,A.releaseShapes(),this.m===2&&S>1?(l=this.calculateShapeEdges(e,n,y.totalShapeLength,a,F),a+=y.totalShapeLength):l=[[f,o]],I=l.length,u=0;u<I;u+=1){f=l[u][0],o=l[u][1],R.length=0,o<=1?R.push({s:y.totalShapeLength*f,e:y.totalShapeLength*o}):f>=1?R.push({s:y.totalShapeLength*(f-1),e:y.totalShapeLength*(o-1)}):(R.push({s:y.totalShapeLength*f,e:y.totalShapeLength}),R.push({s:0,e:y.totalShapeLength*(o-1)}));var h=this.addShapes(y,R[0]);if(R[0].s!==R[0].e){if(R.length>1)if(y.shape.paths.shapes[y.shape.paths._length-1].c){var g=h.pop();this.addPaths(h,A),h=this.addShapes(y,R[1],g)}else this.addPaths(h,A),h=this.addShapes(y,R[1]);this.addPaths(h,A)}}y.shape.paths=A}}},At.prototype.addPaths=function(t,e){var n,i=t.length;for(n=0;n<i;n+=1)e.addShape(t[n])},At.prototype.addSegment=function(t,e,n,i,s,r,c){s.setXYAt(e[0],e[1],"o",r),s.setXYAt(n[0],n[1],"i",r+1),c&&s.setXYAt(t[0],t[1],"v",r),s.setXYAt(i[0],i[1],"v",r+1)},At.prototype.addSegmentFromArray=function(t,e,n,i){e.setXYAt(t[1],t[5],"o",n),e.setXYAt(t[2],t[6],"i",n+1),i&&e.setXYAt(t[0],t[4],"v",n),e.setXYAt(t[3],t[7],"v",n+1)},At.prototype.addShapes=function(t,e,n){var i=t.pathsData,s=t.shape.paths.shapes,r,c=t.shape.paths._length,S,u,I=0,T,C,b,F,R=[],y,A=!0;for(n?(C=n._length,y=n._length):(n=te.newElement(),C=0,y=0),R.push(n),r=0;r<c;r+=1){for(b=i[r].lengths,n.c=s[r].c,u=s[r].c?b.length:b.length+1,S=1;S<u;S+=1)if(T=b[S-1],I+T.addedLength<e.s)I+=T.addedLength,n.c=!1;else if(I>e.e){n.c=!1;break}else e.s<=I&&e.e>=I+T.addedLength?(this.addSegment(s[r].v[S-1],s[r].o[S-1],s[r].i[S],s[r].v[S],n,C,A),A=!1):(F=E.getNewSegment(s[r].v[S-1],s[r].v[S],s[r].o[S-1],s[r].i[S],(e.s-I)/T.addedLength,(e.e-I)/T.addedLength,b[S-1]),this.addSegmentFromArray(F,n,C,A),A=!1,n.c=!1),I+=T.addedLength,C+=1;if(s[r].c&&b.length){if(T=b[S-1],I<=e.e){var f=b[S-1].addedLength;e.s<=I&&e.e>=I+f?(this.addSegment(s[r].v[S-1],s[r].o[S-1],s[r].i[0],s[r].v[0],n,C,A),A=!1):(F=E.getNewSegment(s[r].v[S-1],s[r].v[0],s[r].o[S-1],s[r].i[0],(e.s-I)/f,(e.e-I)/f,b[S-1]),this.addSegmentFromArray(F,n,C,A),A=!1,n.c=!1)}else n.c=!1;I+=T.addedLength,C+=1}if(n._length&&(n.setXYAt(n.v[y][0],n.v[y][1],"i",y),n.setXYAt(n.v[n._length-1][0],n.v[n._length-1][1],"o",n._length-1)),I>e.e)break;r<c-1&&(n=te.newElement(),A=!0,R.push(n),C=0)}return R},mt.registerModifier("tm",At);function gt(){}P([vt],gt),gt.prototype.initModifierProperties=function(t,e){this.getValue=this.processKeys,this.rd=q.getProp(t,e.r,0,null,this),this._isAnimated=!!this.rd.effectsSequence.length},gt.prototype.processPath=function(t,e){var n=te.newElement();n.c=t.c;var i,s=t._length,r,c,S,u,I,T,C=0,b,F,R,y,A,f;for(i=0;i<s;i+=1)r=t.v[i],S=t.o[i],c=t.i[i],r[0]===S[0]&&r[1]===S[1]&&r[0]===c[0]&&r[1]===c[1]?(i===0||i===s-1)&&!t.c?(n.setTripleAt(r[0],r[1],S[0],S[1],c[0],c[1],C),C+=1):(i===0?u=t.v[s-1]:u=t.v[i-1],I=Math.sqrt(Math.pow(r[0]-u[0],2)+Math.pow(r[1]-u[1],2)),T=I?Math.min(I/2,e)/I:0,A=r[0]+(u[0]-r[0])*T,b=A,f=r[1]-(r[1]-u[1])*T,F=f,R=b-(b-r[0])*Jt,y=F-(F-r[1])*Jt,n.setTripleAt(b,F,R,y,A,f,C),C+=1,i===s-1?u=t.v[0]:u=t.v[i+1],I=Math.sqrt(Math.pow(r[0]-u[0],2)+Math.pow(r[1]-u[1],2)),T=I?Math.min(I/2,e)/I:0,R=r[0]+(u[0]-r[0])*T,b=R,y=r[1]+(u[1]-r[1])*T,F=y,A=b-(b-r[0])*Jt,f=F-(F-r[1])*Jt,n.setTripleAt(b,F,R,y,A,f,C),C+=1):(n.setTripleAt(t.v[i][0],t.v[i][1],t.o[i][0],t.o[i][1],t.i[i][0],t.i[i][1],C),C+=1);return n},gt.prototype.processShapes=function(t){var e,n,i=this.shapes.length,s,r,c=this.rd.v;if(c!==0){var S,u;for(n=0;n<i;n+=1){if(S=this.shapes[n],u=S.localShapeCollection,!(!S.shape._mdf&&!this._mdf&&!t))for(u.releaseShapes(),S.shape._mdf=!0,e=S.shape.paths.shapes,r=S.shape.paths._length,s=0;s<r;s+=1)u.addShape(this.processPath(e[s],c));S.shape.paths=S.localShapeCollection}}this.dynamicProperties.length||(this._mdf=!1)},mt.registerModifier("rd",gt);function wt(){}P([vt],wt),wt.prototype.initModifierProperties=function(t,e){this.getValue=this.processKeys,this.amount=q.getProp(t,e.a,0,null,this),this._isAnimated=!!this.amount.effectsSequence.length},wt.prototype.processPath=function(t,e){var n=e/100,i=[0,0],s=t._length,r=0;for(r=0;r<s;r+=1)i[0]+=t.v[r][0],i[1]+=t.v[r][1];i[0]/=s,i[1]/=s;var c=te.newElement();c.c=t.c;var S,u,I,T,C,b;for(r=0;r<s;r+=1)S=t.v[r][0]+(i[0]-t.v[r][0])*n,u=t.v[r][1]+(i[1]-t.v[r][1])*n,I=t.o[r][0]+(i[0]-t.o[r][0])*-n,T=t.o[r][1]+(i[1]-t.o[r][1])*-n,C=t.i[r][0]+(i[0]-t.i[r][0])*-n,b=t.i[r][1]+(i[1]-t.i[r][1])*-n,c.setTripleAt(S,u,I,T,C,b,r);return c},wt.prototype.processShapes=function(t){var e,n,i=this.shapes.length,s,r,c=this.amount.v;if(c!==0){var S,u;for(n=0;n<i;n+=1){if(S=this.shapes[n],u=S.localShapeCollection,!(!S.shape._mdf&&!this._mdf&&!t))for(u.releaseShapes(),S.shape._mdf=!0,e=S.shape.paths.shapes,r=S.shape.paths._length,s=0;s<r;s+=1)u.addShape(this.processPath(e[s],c));S.shape.paths=S.localShapeCollection}}this.dynamicProperties.length||(this._mdf=!1)},mt.registerModifier("pb",wt);function ft(){}P([vt],ft),ft.prototype.initModifierProperties=function(t,e){this.getValue=this.processKeys,this.c=q.getProp(t,e.c,0,null,this),this.o=q.getProp(t,e.o,0,null,this),this.tr=ht.getTransformProperty(t,e.tr,this),this.so=q.getProp(t,e.tr.so,0,.01,this),this.eo=q.getProp(t,e.tr.eo,0,.01,this),this.data=e,this.dynamicProperties.length||this.getValue(!0),this._isAnimated=!!this.dynamicProperties.length,this.pMatrix=new M,this.rMatrix=new M,this.sMatrix=new M,this.tMatrix=new M,this.matrix=new M},ft.prototype.applyTransforms=function(t,e,n,i,s,r){var c=r?-1:1,S=i.s.v[0]+(1-i.s.v[0])*(1-s),u=i.s.v[1]+(1-i.s.v[1])*(1-s);t.translate(i.p.v[0]*c*s,i.p.v[1]*c*s,i.p.v[2]),e.translate(-i.a.v[0],-i.a.v[1],i.a.v[2]),e.rotate(-i.r.v*c*s),e.translate(i.a.v[0],i.a.v[1],i.a.v[2]),n.translate(-i.a.v[0],-i.a.v[1],i.a.v[2]),n.scale(r?1/S:S,r?1/u:u),n.translate(i.a.v[0],i.a.v[1],i.a.v[2])},ft.prototype.init=function(t,e,n,i){for(this.elem=t,this.arr=e,this.pos=n,this.elemsData=i,this._currentCopies=0,this._elements=[],this._groups=[],this.frameId=-1,this.initDynamicPropertyContainer(t),this.initModifierProperties(t,e[n]);n>0;)n-=1,this._elements.unshift(e[n]);this.dynamicProperties.length?this.k=!0:this.getValue(!0)},ft.prototype.resetElements=function(t){var e,n=t.length;for(e=0;e<n;e+=1)t[e]._processed=!1,t[e].ty==="gr"&&this.resetElements(t[e].it)},ft.prototype.cloneElements=function(t){var e=JSON.parse(JSON.stringify(t));return this.resetElements(e),e},ft.prototype.changeGroupRender=function(t,e){var n,i=t.length;for(n=0;n<i;n+=1)t[n]._render=e,t[n].ty==="gr"&&this.changeGroupRender(t[n].it,e)},ft.prototype.processShapes=function(t){var e,n,i,s,r,c=!1;if(this._mdf||t){var S=Math.ceil(this.c.v);if(this._groups.length<S){for(;this._groups.length<S;){var u={it:this.cloneElements(this._elements),ty:"gr"};u.it.push({a:{a:0,ix:1,k:[0,0]},nm:"Transform",o:{a:0,ix:7,k:100},p:{a:0,ix:2,k:[0,0]},r:{a:1,ix:6,k:[{s:0,e:0,t:0},{s:0,e:0,t:1}]},s:{a:0,ix:3,k:[100,100]},sa:{a:0,ix:5,k:0},sk:{a:0,ix:4,k:0},ty:"tr"}),this.arr.splice(0,0,u),this._groups.splice(0,0,u),this._currentCopies+=1}this.elem.reloadShapes(),c=!0}r=0;var I;for(i=0;i<=this._groups.length-1;i+=1){if(I=r<S,this._groups[i]._render=I,this.changeGroupRender(this._groups[i].it,I),!I){var T=this.elemsData[i].it,C=T[T.length-1];C.transform.op.v!==0?(C.transform.op._mdf=!0,C.transform.op.v=0):C.transform.op._mdf=!1}r+=1}this._currentCopies=S;var b=this.o.v,F=b%1,R=b>0?Math.floor(b):Math.ceil(b),y=this.pMatrix.props,A=this.rMatrix.props,f=this.sMatrix.props;this.pMatrix.reset(),this.rMatrix.reset(),this.sMatrix.reset(),this.tMatrix.reset(),this.matrix.reset();var o=0;if(b>0){for(;o<R;)this.applyTransforms(this.pMatrix,this.rMatrix,this.sMatrix,this.tr,1,!1),o+=1;F&&(this.applyTransforms(this.pMatrix,this.rMatrix,this.sMatrix,this.tr,F,!1),o+=F)}else if(b<0){for(;o>R;)this.applyTransforms(this.pMatrix,this.rMatrix,this.sMatrix,this.tr,1,!0),o-=1;F&&(this.applyTransforms(this.pMatrix,this.rMatrix,this.sMatrix,this.tr,-F,!0),o-=F)}i=this.data.m===1?0:this._currentCopies-1,s=this.data.m===1?1:-1,r=this._currentCopies;for(var a,l;r;){if(e=this.elemsData[i].it,n=e[e.length-1].transform.mProps.v.props,l=n.length,e[e.length-1].transform.mProps._mdf=!0,e[e.length-1].transform.op._mdf=!0,e[e.length-1].transform.op.v=this._currentCopies===1?this.so.v:this.so.v+(this.eo.v-this.so.v)*(i/(this._currentCopies-1)),o!==0){for((i!==0&&s===1||i!==this._currentCopies-1&&s===-1)&&this.applyTransforms(this.pMatrix,this.rMatrix,this.sMatrix,this.tr,1,!1),this.matrix.transform(A[0],A[1],A[2],A[3],A[4],A[5],A[6],A[7],A[8],A[9],A[10],A[11],A[12],A[13],A[14],A[15]),this.matrix.transform(f[0],f[1],f[2],f[3],f[4],f[5],f[6],f[7],f[8],f[9],f[10],f[11],f[12],f[13],f[14],f[15]),this.matrix.transform(y[0],y[1],y[2],y[3],y[4],y[5],y[6],y[7],y[8],y[9],y[10],y[11],y[12],y[13],y[14],y[15]),a=0;a<l;a+=1)n[a]=this.matrix.props[a];this.matrix.reset()}else for(this.matrix.reset(),a=0;a<l;a+=1)n[a]=this.matrix.props[a];o+=1,r-=1,i+=s}}else for(r=this._currentCopies,i=0,s=1;r;)e=this.elemsData[i].it,n=e[e.length-1].transform.mProps.v.props,e[e.length-1].transform.mProps._mdf=!1,e[e.length-1].transform.op._mdf=!1,r-=1,i+=s;return c},ft.prototype.addShape=function(){},mt.registerModifier("rp",ft);function xt(){this._length=0,this._maxLength=4,this.shapes=rt(this._maxLength)}xt.prototype.addShape=function(t){this._length===this._maxLength&&(this.shapes=this.shapes.concat(rt(this._maxLength)),this._maxLength*=2),this.shapes[this._length]=t,this._length+=1},xt.prototype.releaseShapes=function(){var t;for(t=0;t<this._length;t+=1)te.release(this.shapes[t]);this._length=0};function Xt(t,e,n,i){this.elem=t,this.frameId=-1,this.dataProps=rt(e.length),this.renderer=n,this.k=!1,this.dashStr="",this.dashArray=ot("float32",e.length?e.length-1:0),this.dashoffset=ot("float32",1),this.initDynamicPropertyContainer(i);var s,r=e.length||0,c;for(s=0;s<r;s+=1)c=q.getProp(t,e[s].v,0,0,this),this.k=c.k||this.k,this.dataProps[s]={n:e[s].n,p:c};this.k||this.getValue(!0),this._isAnimated=this.k}Xt.prototype.getValue=function(t){if(!(this.elem.globalData.frameId===this.frameId&&!t)&&(this.frameId=this.elem.globalData.frameId,this.iterateDynamicProperties(),this._mdf=this._mdf||t,this._mdf)){var e=0,n=this.dataProps.length;for(this.renderer==="svg"&&(this.dashStr=""),e=0;e<n;e+=1)this.dataProps[e].n!=="o"?this.renderer==="svg"?this.dashStr+=" "+this.dataProps[e].p.v:this.dashArray[e]=this.dataProps[e].p.v:this.dashoffset[0]=this.dataProps[e].p.v}},P([H],Xt);function It(t,e,n){this.data=e,this.c=ot("uint8c",e.p*4);var i=e.k.k[0].s?e.k.k[0].s.length-e.p*4:e.k.k.length-e.p*4;this.o=ot("float32",i),this._cmdf=!1,this._omdf=!1,this._collapsable=this.checkCollapsable(),this._hasOpacity=i,this.initDynamicPropertyContainer(n),this.prop=q.getProp(t,e.k,1,null,this),this.k=this.prop.k,this.getValue(!0)}It.prototype.comparePoints=function(t,e){for(var n=0,i=this.o.length/2,s;n<i;){if(s=Math.abs(t[n*4]-t[e*4+n*2]),s>.01)return!1;n+=1}return!0},It.prototype.checkCollapsable=function(){if(this.o.length/2!==this.c.length/4)return!1;if(this.data.k.k[0].s)for(var t=0,e=this.data.k.k.length;t<e;){if(!this.comparePoints(this.data.k.k[t].s,this.data.p))return!1;t+=1}else if(!this.comparePoints(this.data.k.k,this.data.p))return!1;return!0},It.prototype.getValue=function(t){if(this.prop.getValue(),this._mdf=!1,this._cmdf=!1,this._omdf=!1,this.prop._mdf||t){var e,n=this.data.p*4,i,s;for(e=0;e<n;e+=1)i=e%4===0?100:255,s=Math.round(this.prop.v[e]*i),this.c[e]!==s&&(this.c[e]=s,this._cmdf=!t);if(this.o.length)for(n=this.prop.v.length,e=this.data.p*4;e<n;e+=1)i=e%2===0?100:1,s=e%2===0?Math.round(this.prop.v[e]*100):this.prop.v[e],this.o[e-this.data.p*4]!==s&&(this.o[e-this.data.p*4]=s,this._omdf=!t);this._mdf=!t}},P([H],It);var Ct=function(t,e,n,i){if(e===0)return"";var s=t.o,r=t.i,c=t.v,S,u=" M"+i.applyToPointStringified(c[0][0],c[0][1]);for(S=1;S<e;S+=1)u+=" C"+i.applyToPointStringified(s[S-1][0],s[S-1][1])+" "+i.applyToPointStringified(r[S][0],r[S][1])+" "+i.applyToPointStringified(c[S][0],c[S][1]);return n&&e&&(u+=" C"+i.applyToPointStringified(s[S-1][0],s[S-1][1])+" "+i.applyToPointStringified(r[0][0],r[0][1])+" "+i.applyToPointStringified(c[0][0],c[0][1]),u+="z"),u},Ot=(function(){function t(e){this.audios=[],this.audioFactory=e,this._volume=1,this._isMuted=!1}return t.prototype={addAudio:function(e){this.audios.push(e)},pause:function(){var e,n=this.audios.length;for(e=0;e<n;e+=1)this.audios[e].pause()},resume:function(){var e,n=this.audios.length;for(e=0;e<n;e+=1)this.audios[e].resume()},setRate:function(e){var n,i=this.audios.length;for(n=0;n<i;n+=1)this.audios[n].setRate(e)},createAudio:function(e){return this.audioFactory?this.audioFactory(e):Howl?new Howl({src:[e]}):{isPlaying:!1,play:function(){this.isPlaying=!0},seek:function(){this.isPlaying=!1},playing:function(){},rate:function(){},setVolume:function(){}}},setAudioFactory:function(e){this.audioFactory=e},setVolume:function(e){this._volume=e,this._updateVolume()},mute:function(){this._isMuted=!0,this._updateVolume()},unmute:function(){this._isMuted=!1,this._updateVolume()},getVolume:function(){return this._volume},_updateVolume:function(){var e,n=this.audios.length;for(e=0;e<n;e+=1)this.audios[e].volume(this._volume*(this._isMuted?0:1))}},function(){return new t}})(),Pt=(function(){var t=(function(){var f=Tt("canvas");f.width=1,f.height=1;var o=f.getContext("2d");return o.fillStyle="rgba(0,0,0,0)",o.fillRect(0,0,1,1),f})();function e(){this.loadedAssets+=1,this.loadedAssets===this.totalImages&&this.loadedFootagesCount===this.totalFootages&&this.imagesLoadedCb&&this.imagesLoadedCb(null)}function n(){this.loadedFootagesCount+=1,this.loadedAssets===this.totalImages&&this.loadedFootagesCount===this.totalFootages&&this.imagesLoadedCb&&this.imagesLoadedCb(null)}function i(f,o,a){var l="";if(f.e)l=f.p;else if(o){var h=f.p;h.indexOf("images/")!==-1&&(h=h.split("/")[1]),l=o+h}else l=a,l+=f.u?f.u:"",l+=f.p;return l}function s(f){var o=0,a=setInterval(function(){(f.getBBox().width||o>500)&&(this._imageLoaded(),clearInterval(a)),o+=1}.bind(this),50)}function r(f){var o=i(f,this.assetsPath,this.path),a=Z("image");le?this.testImageLoaded(a):a.addEventListener("load",this._imageLoaded,!1),a.addEventListener("error",function(){l.img=t,this._imageLoaded()}.bind(this),!1),a.setAttributeNS("http://www.w3.org/1999/xlink","href",o),this._elementHelper.append?this._elementHelper.append(a):this._elementHelper.appendChild(a);var l={img:a,assetData:f};return l}function c(f){var o=i(f,this.assetsPath,this.path),a=Tt("img");a.crossOrigin="anonymous",a.addEventListener("load",this._imageLoaded,!1),a.addEventListener("error",function(){l.img=t,this._imageLoaded()}.bind(this),!1),a.src=o;var l={img:a,assetData:f};return l}function S(f){var o={assetData:f},a=i(f,this.assetsPath,this.path);return k.loadData(a,function(l){o.img=l,this._footageLoaded()}.bind(this),function(){o.img={},this._footageLoaded()}.bind(this)),o}function u(f,o){this.imagesLoadedCb=o;var a,l=f.length;for(a=0;a<l;a+=1)f[a].layers||(!f[a].t||f[a].t==="seq"?(this.totalImages+=1,this.images.push(this._createImageData(f[a]))):f[a].t===3&&(this.totalFootages+=1,this.images.push(this.createFootageData(f[a]))))}function I(f){this.path=f||""}function T(f){this.assetsPath=f||""}function C(f){for(var o=0,a=this.images.length;o<a;){if(this.images[o].assetData===f)return this.images[o].img;o+=1}return null}function b(){this.imagesLoadedCb=null,this.images.length=0}function F(){return this.totalImages===this.loadedAssets}function R(){return this.totalFootages===this.loadedFootagesCount}function y(f,o){f==="svg"?(this._elementHelper=o,this._createImageData=this.createImageData.bind(this)):this._createImageData=this.createImgData.bind(this)}function A(){this._imageLoaded=e.bind(this),this._footageLoaded=n.bind(this),this.testImageLoaded=s.bind(this),this.createFootageData=S.bind(this),this.assetsPath="",this.path="",this.totalImages=0,this.totalFootages=0,this.loadedAssets=0,this.loadedFootagesCount=0,this.imagesLoadedCb=null,this.images=[]}return A.prototype={loadAssets:u,setAssetsPath:T,setPath:I,loadedImages:F,loadedFootages:R,destroy:b,getAsset:C,createImgData:c,createImageData:r,imageLoaded:e,footageLoaded:n,setCacheType:y},A})(),qt=(function(){var t={maskType:!0};return(/MSIE 10/i.test(navigator.userAgent)||/MSIE 9/i.test(navigator.userAgent)||/rv:11.0/i.test(navigator.userAgent)||/Edge\/\d./i.test(navigator.userAgent))&&(t.maskType=!1),t})(),Ht=(function(){var t={};t.createFilter=e,t.createAlphaToLuminanceFilter=n;function e(i,s){var r=Z("filter");return r.setAttribute("id",i),s!==!0&&(r.setAttribute("filterUnits","objectBoundingBox"),r.setAttribute("x","0%"),r.setAttribute("y","0%"),r.setAttribute("width","100%"),r.setAttribute("height","100%")),r}function n(){var i=Z("feColorMatrix");return i.setAttribute("type","matrix"),i.setAttribute("color-interpolation-filters","sRGB"),i.setAttribute("values","0 0 0 1 0  0 0 0 1 0  0 0 0 1 0  0 0 0 1 1"),i}return t})();function Rt(t,e,n){this._isFirstFrame=!0,this._hasMaskedPath=!1,this._frameId=-1,this._textData=t,this._renderType=e,this._elem=n,this._animatorsData=rt(this._textData.a.length),this._pathData={},this._moreOptions={alignment:{}},this.renderedLetters=[],this.lettersChangedFlag=!1,this.initDynamicPropertyContainer(n)}Rt.prototype.searchProperties=function(){var t,e=this._textData.a.length,n,i=q.getProp;for(t=0;t<e;t+=1)n=this._textData.a[t],this._animatorsData[t]=new ie(this._elem,n,this);this._textData.p&&"m"in this._textData.p?(this._pathData={a:i(this._elem,this._textData.p.a,0,0,this),f:i(this._elem,this._textData.p.f,0,0,this),l:i(this._elem,this._textData.p.l,0,0,this),r:i(this._elem,this._textData.p.r,0,0,this),p:i(this._elem,this._textData.p.p,0,0,this),m:this._elem.maskManager.getMaskProperty(this._textData.p.m)},this._hasMaskedPath=!0):this._hasMaskedPath=!1,this._moreOptions.alignment=i(this._elem,this._textData.m.a,1,0,this)},Rt.prototype.getMeasures=function(t,e){if(this.lettersChangedFlag=e,!(!this._mdf&&!this._isFirstFrame&&!e&&(!this._hasMaskedPath||!this._pathData.m._mdf))){this._isFirstFrame=!1;var n=this._moreOptions.alignment.v,i=this._animatorsData,s=this._textData,r=this.mHelper,c=this._renderType,S=this.renderedLetters.length,u,I,T,C,b=t.l,F,R,y,A,f,o,a,l,h,g,m,B,Q,at,lt;if(this._hasMaskedPath){if(lt=this._pathData.m,!this._pathData.n||this._pathData._mdf){var nt=lt.v;this._pathData.r.v&&(nt=nt.reverse()),F={tLength:0,segments:[]},C=nt._length-1;var Y;for(B=0,T=0;T<C;T+=1)Y=E.buildBezierData(nt.v[T],nt.v[T+1],[nt.o[T][0]-nt.v[T][0],nt.o[T][1]-nt.v[T][1]],[nt.i[T+1][0]-nt.v[T+1][0],nt.i[T+1][1]-nt.v[T+1][1]]),F.tLength+=Y.segmentLength,F.segments.push(Y),B+=Y.segmentLength;T=C,lt.v.c&&(Y=E.buildBezierData(nt.v[T],nt.v[0],[nt.o[T][0]-nt.v[T][0],nt.o[T][1]-nt.v[T][1]],[nt.i[0][0]-nt.v[0][0],nt.i[0][1]-nt.v[0][1]]),F.tLength+=Y.segmentLength,F.segments.push(Y),B+=Y.segmentLength),this._pathData.pi=F}if(F=this._pathData.pi,R=this._pathData.f.v,a=0,o=1,A=0,f=!0,g=F.segments,R<0&&lt.v.c)for(F.tLength<Math.abs(R)&&(R=-Math.abs(R)%F.tLength),a=g.length-1,h=g[a].points,o=h.length-1;R<0;)R+=h[o].partialLength,o-=1,o<0&&(a-=1,h=g[a].points,o=h.length-1);h=g[a].points,l=h[o-1],y=h[o],m=y.partialLength}C=b.length,u=0,I=0;var W=t.finalSize*1.2*.714,K=!0,w,d,v,O,it;O=i.length;var G,bt=-1,Mt,St,Qt,ne=R,he=a,fe=o,ge=-1,oe,Kt,ue,ct,Zt,Fe,De,Te,Se="",Ie=this.defaultPropsArray,ze;if(t.j===2||t.j===1){var ce=0,He=0,Ne=t.j===2?-.5:-1,xe=0,Ze=!0;for(T=0;T<C;T+=1)if(b[T].n){for(ce&&(ce+=He);xe<T;)b[xe].animatorJustifyOffset=ce,xe+=1;ce=0,Ze=!0}else{for(v=0;v<O;v+=1)w=i[v].a,w.t.propType&&(Ze&&t.j===2&&(He+=w.t.v*Ne),d=i[v].s,G=d.getMult(b[T].anIndexes[v],s.a[v].s.totalChars),G.length?ce+=w.t.v*G[0]*Ne:ce+=w.t.v*G*Ne);Ze=!1}for(ce&&(ce+=He);xe<T;)b[xe].animatorJustifyOffset=ce,xe+=1}for(T=0;T<C;T+=1){if(r.reset(),oe=1,b[T].n)u=0,I+=t.yOffset,I+=K?1:0,R=ne,K=!1,this._hasMaskedPath&&(a=he,o=fe,h=g[a].points,l=h[o-1],y=h[o],m=y.partialLength,A=0),Se="",Te="",Fe="",ze="",Ie=this.defaultPropsArray;else{if(this._hasMaskedPath){if(ge!==b[T].line){switch(t.j){case 1:R+=B-t.lineWidths[b[T].line];break;case 2:R+=(B-t.lineWidths[b[T].line])/2;break;default:break}ge=b[T].line}bt!==b[T].ind&&(b[bt]&&(R+=b[bt].extra),R+=b[T].an/2,bt=b[T].ind),R+=n[0]*b[T].an*.005;var Ce=0;for(v=0;v<O;v+=1)w=i[v].a,w.p.propType&&(d=i[v].s,G=d.getMult(b[T].anIndexes[v],s.a[v].s.totalChars),G.length?Ce+=w.p.v[0]*G[0]:Ce+=w.p.v[0]*G),w.a.propType&&(d=i[v].s,G=d.getMult(b[T].anIndexes[v],s.a[v].s.totalChars),G.length?Ce+=w.a.v[0]*G[0]:Ce+=w.a.v[0]*G);for(f=!0,this._pathData.a.v&&(R=b[0].an*.5+(B-this._pathData.f.v-b[0].an*.5-b[b.length-1].an*.5)*bt/(C-1),R+=this._pathData.f.v);f;)A+m>=R+Ce||!h?(Q=(R+Ce-A)/y.partialLength,St=l.point[0]+(y.point[0]-l.point[0])*Q,Qt=l.point[1]+(y.point[1]-l.point[1])*Q,r.translate(-n[0]*b[T].an*.005,-(n[1]*W)*.01),f=!1):h&&(A+=y.partialLength,o+=1,o>=h.length&&(o=0,a+=1,g[a]?h=g[a].points:lt.v.c?(o=0,a=0,h=g[a].points):(A-=y.partialLength,h=null)),h&&(l=y,y=h[o],m=y.partialLength));Mt=b[T].an/2-b[T].add,r.translate(-Mt,0,0)}else Mt=b[T].an/2-b[T].add,r.translate(-Mt,0,0),r.translate(-n[0]*b[T].an*.005,-n[1]*W*.01,0);for(v=0;v<O;v+=1)w=i[v].a,w.t.propType&&(d=i[v].s,G=d.getMult(b[T].anIndexes[v],s.a[v].s.totalChars),(u!==0||t.j!==0)&&(this._hasMaskedPath?G.length?R+=w.t.v*G[0]:R+=w.t.v*G:G.length?u+=w.t.v*G[0]:u+=w.t.v*G));for(t.strokeWidthAnim&&(ue=t.sw||0),t.strokeColorAnim&&(t.sc?Kt=[t.sc[0],t.sc[1],t.sc[2]]:Kt=[0,0,0]),t.fillColorAnim&&t.fc&&(ct=[t.fc[0],t.fc[1],t.fc[2]]),v=0;v<O;v+=1)w=i[v].a,w.a.propType&&(d=i[v].s,G=d.getMult(b[T].anIndexes[v],s.a[v].s.totalChars),G.length?r.translate(-w.a.v[0]*G[0],-w.a.v[1]*G[1],w.a.v[2]*G[2]):r.translate(-w.a.v[0]*G,-w.a.v[1]*G,w.a.v[2]*G));for(v=0;v<O;v+=1)w=i[v].a,w.s.propType&&(d=i[v].s,G=d.getMult(b[T].anIndexes[v],s.a[v].s.totalChars),G.length?r.scale(1+(w.s.v[0]-1)*G[0],1+(w.s.v[1]-1)*G[1],1):r.scale(1+(w.s.v[0]-1)*G,1+(w.s.v[1]-1)*G,1));for(v=0;v<O;v+=1){if(w=i[v].a,d=i[v].s,G=d.getMult(b[T].anIndexes[v],s.a[v].s.totalChars),w.sk.propType&&(G.length?r.skewFromAxis(-w.sk.v*G[0],w.sa.v*G[1]):r.skewFromAxis(-w.sk.v*G,w.sa.v*G)),w.r.propType&&(G.length?r.rotateZ(-w.r.v*G[2]):r.rotateZ(-w.r.v*G)),w.ry.propType&&(G.length?r.rotateY(w.ry.v*G[1]):r.rotateY(w.ry.v*G)),w.rx.propType&&(G.length?r.rotateX(w.rx.v*G[0]):r.rotateX(w.rx.v*G)),w.o.propType&&(G.length?oe+=(w.o.v*G[0]-oe)*G[0]:oe+=(w.o.v*G-oe)*G),t.strokeWidthAnim&&w.sw.propType&&(G.length?ue+=w.sw.v*G[0]:ue+=w.sw.v*G),t.strokeColorAnim&&w.sc.propType)for(Zt=0;Zt<3;Zt+=1)G.length?Kt[Zt]+=(w.sc.v[Zt]-Kt[Zt])*G[0]:Kt[Zt]+=(w.sc.v[Zt]-Kt[Zt])*G;if(t.fillColorAnim&&t.fc){if(w.fc.propType)for(Zt=0;Zt<3;Zt+=1)G.length?ct[Zt]+=(w.fc.v[Zt]-ct[Zt])*G[0]:ct[Zt]+=(w.fc.v[Zt]-ct[Zt])*G;w.fh.propType&&(G.length?ct=U(ct,w.fh.v*G[0]):ct=U(ct,w.fh.v*G)),w.fs.propType&&(G.length?ct=J(ct,w.fs.v*G[0]):ct=J(ct,w.fs.v*G)),w.fb.propType&&(G.length?ct=$(ct,w.fb.v*G[0]):ct=$(ct,w.fb.v*G))}}for(v=0;v<O;v+=1)w=i[v].a,w.p.propType&&(d=i[v].s,G=d.getMult(b[T].anIndexes[v],s.a[v].s.totalChars),this._hasMaskedPath?G.length?r.translate(0,w.p.v[1]*G[0],-w.p.v[2]*G[1]):r.translate(0,w.p.v[1]*G,-w.p.v[2]*G):G.length?r.translate(w.p.v[0]*G[0],w.p.v[1]*G[1],-w.p.v[2]*G[2]):r.translate(w.p.v[0]*G,w.p.v[1]*G,-w.p.v[2]*G));if(t.strokeWidthAnim&&(Fe=ue<0?0:ue),t.strokeColorAnim&&(De="rgb("+Math.round(Kt[0]*255)+","+Math.round(Kt[1]*255)+","+Math.round(Kt[2]*255)+")"),t.fillColorAnim&&t.fc&&(Te="rgb("+Math.round(ct[0]*255)+","+Math.round(ct[1]*255)+","+Math.round(ct[2]*255)+")"),this._hasMaskedPath){if(r.translate(0,-t.ls),r.translate(0,n[1]*W*.01+I,0),this._pathData.p.v){at=(y.point[1]-l.point[1])/(y.point[0]-l.point[0]);var Qe=Math.atan(at)*180/Math.PI;y.point[0]<l.point[0]&&(Qe+=180),r.rotate(-Qe*Math.PI/180)}r.translate(St,Qt,0),R-=n[0]*b[T].an*.005,b[T+1]&&bt!==b[T+1].ind&&(R+=b[T].an/2,R+=t.tr*.001*t.finalSize)}else{switch(r.translate(u,I,0),t.ps&&r.translate(t.ps[0],t.ps[1]+t.ascent,0),t.j){case 1:r.translate(b[T].animatorJustifyOffset+t.justifyOffset+(t.boxWidth-t.lineWidths[b[T].line]),0,0);break;case 2:r.translate(b[T].animatorJustifyOffset+t.justifyOffset+(t.boxWidth-t.lineWidths[b[T].line])/2,0,0);break;default:break}r.translate(0,-t.ls),r.translate(Mt,0,0),r.translate(n[0]*b[T].an*.005,n[1]*W*.01,0),u+=b[T].l+t.tr*.001*t.finalSize}c==="html"?Se=r.toCSS():c==="svg"?Se=r.to2dCSS():Ie=[r.props[0],r.props[1],r.props[2],r.props[3],r.props[4],r.props[5],r.props[6],r.props[7],r.props[8],r.props[9],r.props[10],r.props[11],r.props[12],r.props[13],r.props[14],r.props[15]],ze=oe}S<=T?(it=new be(ze,Fe,De,Te,Se,Ie),this.renderedLetters.push(it),S+=1,this.lettersChangedFlag=!0):(it=this.renderedLetters[T],this.lettersChangedFlag=it.update(ze,Fe,De,Te,Se,Ie)||this.lettersChangedFlag)}}},Rt.prototype.getValue=function(){this._elem.globalData.frameId!==this._frameId&&(this._frameId=this._elem.globalData.frameId,this.iterateDynamicProperties())},Rt.prototype.mHelper=new M,Rt.prototype.defaultPropsArray=[],P([H],Rt);function ie(t,e,n){var i={propType:!1},s=q.getProp,r=e.a;this.a={r:r.r?s(t,r.r,0,Et,n):i,rx:r.rx?s(t,r.rx,0,Et,n):i,ry:r.ry?s(t,r.ry,0,Et,n):i,sk:r.sk?s(t,r.sk,0,Et,n):i,sa:r.sa?s(t,r.sa,0,Et,n):i,s:r.s?s(t,r.s,1,.01,n):i,a:r.a?s(t,r.a,1,0,n):i,o:r.o?s(t,r.o,0,.01,n):i,p:r.p?s(t,r.p,1,0,n):i,sw:r.sw?s(t,r.sw,0,0,n):i,sc:r.sc?s(t,r.sc,1,0,n):i,fc:r.fc?s(t,r.fc,1,0,n):i,fh:r.fh?s(t,r.fh,0,0,n):i,fs:r.fs?s(t,r.fs,0,.01,n):i,fb:r.fb?s(t,r.fb,0,.01,n):i,t:r.t?s(t,r.t,0,0,n):i},this.s=Ee.getTextSelectorProp(t,e.s,n),this.s.t=e.s.t}function be(t,e,n,i,s,r){this.o=t,this.sw=e,this.sc=n,this.fc=i,this.m=s,this.p=r,this._mdf={o:!0,sw:!!e,sc:!!n,fc:!!i,m:!0,p:!0}}be.prototype.update=function(t,e,n,i,s,r){this._mdf.o=!1,this._mdf.sw=!1,this._mdf.sc=!1,this._mdf.fc=!1,this._mdf.m=!1,this._mdf.p=!1;var c=!1;return this.o!==t&&(this.o=t,this._mdf.o=!0,c=!0),this.sw!==e&&(this.sw=e,this._mdf.sw=!0,c=!0),this.sc!==n&&(this.sc=n,this._mdf.sc=!0,c=!0),this.fc!==i&&(this.fc=i,this._mdf.fc=!0,c=!0),this.m!==s&&(this.m=s,this._mdf.m=!0,c=!0),r.length&&(this.p[0]!==r[0]||this.p[1]!==r[1]||this.p[4]!==r[4]||this.p[5]!==r[5]||this.p[12]!==r[12]||this.p[13]!==r[13])&&(this.p=r,this._mdf.p=!0,c=!0),c};function re(t,e){this._frameId=kt,this.pv="",this.v="",this.kf=!1,this._isFirstFrame=!0,this._mdf=!1,this.data=e,this.elem=t,this.comp=this.elem.comp,this.keysIndex=0,this.canResize=!1,this.minimumFontSize=1,this.effectsSequence=[],this.currentData={ascent:0,boxWidth:this.defaultBoxWidth,f:"",fStyle:"",fWeight:"",fc:"",j:"",justifyOffset:"",l:[],lh:0,lineWidths:[],ls:"",of:"",s:"",sc:"",sw:0,t:0,tr:0,sz:0,ps:null,fillColorAnim:!1,strokeColorAnim:!1,strokeWidthAnim:!1,yOffset:0,finalSize:0,finalText:[],finalLineHeight:0,__complete:!1},this.copyData(this.currentData,this.data.d.k[0].s),this.searchProperty()||this.completeTextData(this.currentData)}re.prototype.defaultBoxWidth=[0,0],re.prototype.copyData=function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t},re.prototype.setCurrentData=function(t){t.__complete||this.completeTextData(t),this.currentData=t,this.currentData.boxWidth=this.currentData.boxWidth||this.defaultBoxWidth,this._mdf=!0},re.prototype.searchProperty=function(){return this.searchKeyframes()},re.prototype.searchKeyframes=function(){return this.kf=this.data.d.k.length>1,this.kf&&this.addEffect(this.getKeyframeValue.bind(this)),this.kf},re.prototype.addEffect=function(t){this.effectsSequence.push(t),this.elem.addDynamicProperty(this)},re.prototype.getValue=function(t){if(!((this.elem.globalData.frameId===this.frameId||!this.effectsSequence.length)&&!t)){this.currentData.t=this.data.d.k[this.keysIndex].s.t;var e=this.currentData,n=this.keysIndex;if(this.lock){this.setCurrentData(this.currentData);return}this.lock=!0,this._mdf=!1;var i,s=this.effectsSequence.length,r=t||this.data.d.k[this.keysIndex].s;for(i=0;i<s;i+=1)n!==this.keysIndex?r=this.effectsSequence[i](r,r.t):r=this.effectsSequence[i](this.currentData,r.t);e!==r&&this.setCurrentData(r),this.v=this.currentData,this.pv=this.v,this.lock=!1,this.frameId=this.elem.globalData.frameId}},re.prototype.getKeyframeValue=function(){for(var t=this.data.d.k,e=this.elem.comp.renderedFrame,n=0,i=t.length;n<=i-1&&!(n===i-1||t[n+1].t>e);)n+=1;return this.keysIndex!==n&&(this.keysIndex=n),this.data.d.k[this.keysIndex].s},re.prototype.buildFinalText=function(t){for(var e=[],n=0,i=t.length,s,r,c=!1;n<i;)s=t.charCodeAt(n),N.isCombinedCharacter(s)?e[e.length-1]+=t.charAt(n):s>=55296&&s<=56319?(r=t.charCodeAt(n+1),r>=56320&&r<=57343?(c||N.isModifier(s,r)?(e[e.length-1]+=t.substr(n,2),c=!1):e.push(t.substr(n,2)),n+=1):e.push(t.charAt(n))):s>56319?(r=t.charCodeAt(n+1),N.isZeroWidthJoiner(s,r)?(c=!0,e[e.length-1]+=t.substr(n,2),n+=1):e.push(t.charAt(n))):N.isZeroWidthJoiner(s)?(e[e.length-1]+=t.charAt(n),c=!0):e.push(t.charAt(n)),n+=1;return e},re.prototype.completeTextData=function(t){t.__complete=!0;var e=this.elem.globalData.fontManager,n=this.data,i=[],s,r,c,S=0,u,I=n.m.g,T=0,C=0,b=0,F=[],R=0,y=0,A,f,o=e.getFontByName(t.f),a,l=0,h=V(o);t.fWeight=h.weight,t.fStyle=h.style,t.finalSize=t.s,t.finalText=this.buildFinalText(t.t),r=t.finalText.length,t.finalLineHeight=t.lh;var g=t.tr/1e3*t.finalSize,m;if(t.sz)for(var B=!0,Q=t.sz[0],at=t.sz[1],lt,nt;B;){nt=this.buildFinalText(t.t),lt=0,R=0,r=nt.length,g=t.tr/1e3*t.finalSize;var Y=-1;for(s=0;s<r;s+=1)m=nt[s].charCodeAt(0),c=!1,nt[s]===" "?Y=s:(m===13||m===3)&&(R=0,c=!0,lt+=t.finalLineHeight||t.finalSize*1.2),e.chars?(a=e.getCharData(nt[s],o.fStyle,o.fFamily),l=c?0:a.w*t.finalSize/100):l=e.measureText(nt[s],t.f,t.finalSize),R+l>Q&&nt[s]!==" "?(Y===-1?r+=1:s=Y,lt+=t.finalLineHeight||t.finalSize*1.2,nt.splice(s,Y===s?1:0,"\r"),Y=-1,R=0):(R+=l,R+=g);lt+=o.ascent*t.finalSize/100,this.canResize&&t.finalSize>this.minimumFontSize&&at<lt?(t.finalSize-=1,t.finalLineHeight=t.finalSize*t.lh/t.s):(t.finalText=nt,r=t.finalText.length,B=!1)}R=-g,l=0;var W=0,K;for(s=0;s<r;s+=1)if(c=!1,K=t.finalText[s],m=K.charCodeAt(0),m===13||m===3?(W=0,F.push(R),y=R>y?R:y,R=-2*g,u="",c=!0,b+=1):u=K,e.chars?(a=e.getCharData(K,o.fStyle,e.getFontByName(t.f).fFamily),l=c?0:a.w*t.finalSize/100):l=e.measureText(u,t.f,t.finalSize),K===" "?W+=l+g:(R+=l+g+W,W=0),i.push({l,an:l,add:T,n:c,anIndexes:[],val:u,line:b,animatorJustifyOffset:0}),I==2){if(T+=l,u===""||u===" "||s===r-1){for((u===""||u===" ")&&(T-=l);C<=s;)i[C].an=T,i[C].ind=S,i[C].extra=l,C+=1;S+=1,T=0}}else if(I==3){if(T+=l,u===""||s===r-1){for(u===""&&(T-=l);C<=s;)i[C].an=T,i[C].ind=S,i[C].extra=l,C+=1;T=0,S+=1}}else i[S].ind=S,i[S].extra=0,S+=1;if(t.l=i,y=R>y?R:y,F.push(R),t.sz)t.boxWidth=t.sz[0],t.justifyOffset=0;else switch(t.boxWidth=y,t.j){case 1:t.justifyOffset=-t.boxWidth;break;case 2:t.justifyOffset=-t.boxWidth/2;break;default:t.justifyOffset=0}t.lineWidths=F;var w=n.a,d,v;f=w.length;var O,it,G=[];for(A=0;A<f;A+=1){for(d=w[A],d.a.sc&&(t.strokeColorAnim=!0),d.a.sw&&(t.strokeWidthAnim=!0),(d.a.fc||d.a.fh||d.a.fs||d.a.fb)&&(t.fillColorAnim=!0),it=0,O=d.s.b,s=0;s<r;s+=1)v=i[s],v.anIndexes[A]=it,(O==1&&v.val!==""||O==2&&v.val!==""&&v.val!==" "||O==3&&(v.n||v.val==" "||s==r-1)||O==4&&(v.n||s==r-1))&&(d.s.rn===1&&G.push(it),it+=1);n.a[A].s.totalChars=it;var bt=-1,Mt;if(d.s.rn===1)for(s=0;s<r;s+=1)v=i[s],bt!=v.anIndexes[A]&&(bt=v.anIndexes[A],Mt=G.splice(Math.floor(Math.random()*G.length),1)[0]),v.anIndexes[A]=Mt}t.yOffset=t.finalLineHeight||t.finalSize*1.2,t.ls=t.ls||0,t.ascent=o.ascent*t.finalSize/100},re.prototype.updateDocumentData=function(t,e){e=e===void 0?this.keysIndex:e;var n=this.copyData({},this.data.d.k[e].s);n=this.copyData(n,t),this.data.d.k[e].s=n,this.recalculate(e),this.elem.addDynamicProperty(this)},re.prototype.recalculate=function(t){var e=this.data.d.k[t].s;e.__complete=!1,this.keysIndex=0,this._isFirstFrame=!0,this.getValue(e)},re.prototype.canResizeFont=function(t){this.canResize=t,this.recalculate(this.keysIndex),this.elem.addDynamicProperty(this)},re.prototype.setMinimumFontSize=function(t){this.minimumFontSize=Math.floor(t)||1,this.recalculate(this.keysIndex),this.elem.addDynamicProperty(this)};var Ee=(function(){var t=Math.max,e=Math.min,n=Math.floor;function i(r,c){this._currentTextLength=-1,this.k=!1,this.data=c,this.elem=r,this.comp=r.comp,this.finalS=0,this.finalE=0,this.initDynamicPropertyContainer(r),this.s=q.getProp(r,c.s||{k:0},0,0,this),"e"in c?this.e=q.getProp(r,c.e,0,0,this):this.e={v:100},this.o=q.getProp(r,c.o||{k:0},0,0,this),this.xe=q.getProp(r,c.xe||{k:0},0,0,this),this.ne=q.getProp(r,c.ne||{k:0},0,0,this),this.sm=q.getProp(r,c.sm||{k:100},0,0,this),this.a=q.getProp(r,c.a,0,.01,this),this.dynamicProperties.length||this.getValue()}i.prototype={getMult:function(r){this._currentTextLength!==this.elem.textProperty.currentData.l.length&&this.getValue();var c=0,S=0,u=1,I=1;this.ne.v>0?c=this.ne.v/100:S=-this.ne.v/100,this.xe.v>0?u=1-this.xe.v/100:I=1+this.xe.v/100;var T=z.getBezierEasing(c,S,u,I).get,C=0,b=this.finalS,F=this.finalE,R=this.data.sh;if(R===2)F===b?C=r>=F?1:0:C=t(0,e(.5/(F-b)+(r-b)/(F-b),1)),C=T(C);else if(R===3)F===b?C=r>=F?0:1:C=1-t(0,e(.5/(F-b)+(r-b)/(F-b),1)),C=T(C);else if(R===4)F===b?C=0:(C=t(0,e(.5/(F-b)+(r-b)/(F-b),1)),C<.5?C*=2:C=1-2*(C-.5)),C=T(C);else if(R===5){if(F===b)C=0;else{var y=F-b;r=e(t(0,r+.5-b),F-b);var A=-y/2+r,f=y/2;C=Math.sqrt(1-A*A/(f*f))}C=T(C)}else R===6?(F===b?C=0:(r=e(t(0,r+.5-b),F-b),C=(1+Math.cos(Math.PI+Math.PI*2*r/(F-b)))/2),C=T(C)):(r>=n(b)&&(r-b<0?C=t(0,e(e(F,1)-(b-r),1)):C=t(0,e(F-r,1))),C=T(C));if(this.sm.v!==100){var o=this.sm.v*.01;o===0&&(o=1e-8);var a=.5-o*.5;C<a?C=0:(C=(C-a)/o,C>1&&(C=1))}return C*this.a.v},getValue:function(r){this.iterateDynamicProperties(),this._mdf=r||this._mdf,this._currentTextLength=this.elem.textProperty.currentData.l.length||0,r&&this.data.r===2&&(this.e.v=this._currentTextLength);var c=this.data.r===2?1:100/this.data.totalChars,S=this.o.v/c,u=this.s.v/c+S,I=this.e.v/c+S;if(u>I){var T=u;u=I,I=T}this.finalS=u,this.finalE=I}},P([H],i);function s(r,c,S){return new i(r,c,S)}return{getTextSelectorProp:s}})(),Oe=(function(){return function(t,e,n){var i=0,s=t,r=rt(s),c={newElement:S,release:u};function S(){var I;return i?(i-=1,I=r[i]):I=e(),I}function u(I){i===s&&(r=pn.double(r),s*=2),n&&n(I),r[i]=I,i+=1}return c}})(),pn=(function(){function t(e){return e.concat(rt(e.length))}return{double:t}})(),ae=(function(){function t(){return ot("float32",2)}return Oe(8,t)})(),te=(function(){function t(){return new X}function e(s){var r=s._length,c;for(c=0;c<r;c+=1)ae.release(s.v[c]),ae.release(s.i[c]),ae.release(s.o[c]),s.v[c]=null,s.i[c]=null,s.o[c]=null;s._length=0,s.c=!1}function n(s){var r=i.newElement(),c,S=s._length===void 0?s.v.length:s._length;for(r.setLength(S),r.c=s.c,c=0;c<S;c+=1)r.setTripleAt(s.v[c][0],s.v[c][1],s.o[c][0],s.o[c][1],s.i[c][0],s.i[c][1],c);return r}var i=Oe(4,t,e);return i.clone=n,i})(),pe=(function(){var t={newShapeCollection:s,release:r},e=0,n=4,i=rt(n);function s(){var c;return e?(e-=1,c=i[e]):c=new xt,c}function r(c){var S,u=c._length;for(S=0;S<u;S+=1)te.release(c.shapes[S]);c._length=0,e===n&&(i=pn.double(i),n*=2),i[e]=c,e+=1}return t})(),Me=(function(){function t(){return{lengths:[],totalLength:0}}function e(n){var i,s=n.lengths.length;for(i=0;i<s;i+=1)Je.release(n.lengths[i]);n.lengths.length=0}return Oe(8,t,e)})(),Je=(function(){function t(){return{addedLength:0,percents:ot("float32",Vt),lengths:ot("float32",Vt)}}return Oe(8,t)})(),rn=(function(){function t(e){for(var n=e.split(`\r
`),i={},s,r=0,c=0;c<n.length;c+=1)s=n[c].split(":"),s.length===2&&(i[s[0]]=s[1].trim(),r+=1);if(r===0)throw new Error;return i}return function(e){for(var n=[],i=0;i<e.length;i+=1){var s=e[i],r={time:s.tm,duration:s.dr};try{r.payload=JSON.parse(e[i].cm)}catch{try{r.payload=t(e[i].cm)}catch{r.payload={name:e[i]}}}n.push(r)}return n}})();function Wt(){}Wt.prototype.checkLayers=function(t){var e,n=this.layers.length,i;for(this.completeLayers=!0,e=n-1;e>=0;e-=1)this.elements[e]||(i=this.layers[e],i.ip-i.st<=t-this.layers[e].st&&i.op-i.st>t-this.layers[e].st&&this.buildItem(e)),this.completeLayers=this.elements[e]?this.completeLayers:!1;this.checkPendingElements()},Wt.prototype.createItem=function(t){switch(t.ty){case 2:return this.createImage(t);case 0:return this.createComp(t);case 1:return this.createSolid(t);case 3:return this.createNull(t);case 4:return this.createShape(t);case 5:return this.createText(t);case 6:return this.createAudio(t);case 13:return this.createCamera(t);case 15:return this.createFootage(t);default:return this.createNull(t)}},Wt.prototype.createCamera=function(){throw new Error("You're using a 3d camera. Try the html renderer.")},Wt.prototype.createAudio=function(t){return new de(t,this.globalData,this)},Wt.prototype.createFootage=function(t){return new FootageElement(t,this.globalData,this)},Wt.prototype.buildAllItems=function(){var t,e=this.layers.length;for(t=0;t<e;t+=1)this.buildItem(t);this.checkPendingElements()},Wt.prototype.includeLayers=function(t){this.completeLayers=!1;var e,n=t.length,i,s=this.layers.length;for(e=0;e<n;e+=1)for(i=0;i<s;){if(this.layers[i].id===t[e].id){this.layers[i]=t[e];break}i+=1}},Wt.prototype.setProjectInterface=function(t){this.globalData.projectInterface=t},Wt.prototype.initItems=function(){this.globalData.progressiveLoad||this.buildAllItems()},Wt.prototype.buildElementParenting=function(t,e,n){for(var i=this.elements,s=this.layers,r=0,c=s.length;r<c;)s[r].ind==e&&(!i[r]||i[r]===!0?(this.buildItem(r),this.addPendingElement(t)):(n.push(i[r]),i[r].setAsParent(),s[r].parent!==void 0?this.buildElementParenting(t,s[r].parent,n):t.setHierarchy(n))),r+=1},Wt.prototype.addPendingElement=function(t){this.pendingElements.push(t)},Wt.prototype.searchExtraCompositions=function(t){var e,n=t.length;for(e=0;e<n;e+=1)if(t[e].xt){var i=this.createComp(t[e]);i.initExpressions(),this.globalData.projectInterface.registerComposition(i)}},Wt.prototype.setupGlobalData=function(t,e){this.globalData.fontManager=new N,this.globalData.fontManager.addChars(t.chars),this.globalData.fontManager.addFonts(t.fonts,e),this.globalData.getAssetData=this.animationItem.getAssetData.bind(this.animationItem),this.globalData.getAssetsPath=this.animationItem.getAssetsPath.bind(this.animationItem),this.globalData.imageLoader=this.animationItem.imagePreloader,this.globalData.audioController=this.animationItem.audioController,this.globalData.frameId=0,this.globalData.frameRate=t.fr,this.globalData.nm=t.nm,this.globalData.compSize={w:t.w,h:t.h}};function ee(t,e){this.animationItem=t,this.layers=null,this.renderedFrame=-1,this.svgElement=Z("svg");var n="";if(e&&e.title){var i=Z("title"),s=Gt();i.setAttribute("id",s),i.textContent=e.title,this.svgElement.appendChild(i),n+=s}if(e&&e.description){var r=Z("desc"),c=Gt();r.setAttribute("id",c),r.textContent=e.description,this.svgElement.appendChild(r),n+=" "+c}n&&this.svgElement.setAttribute("aria-labelledby",n);var S=Z("defs");this.svgElement.appendChild(S);var u=Z("g");this.svgElement.appendChild(u),this.layerElement=u,this.renderConfig={preserveAspectRatio:e&&e.preserveAspectRatio||"xMidYMid meet",imagePreserveAspectRatio:e&&e.imagePreserveAspectRatio||"xMidYMid slice",contentVisibility:e&&e.contentVisibility||"visible",progressiveLoad:e&&e.progressiveLoad||!1,hideOnTransparent:!(e&&e.hideOnTransparent===!1),viewBoxOnly:e&&e.viewBoxOnly||!1,viewBoxSize:e&&e.viewBoxSize||!1,className:e&&e.className||"",id:e&&e.id||"",focusable:e&&e.focusable,filterSize:{width:e&&e.filterSize&&e.filterSize.width||"100%",height:e&&e.filterSize&&e.filterSize.height||"100%",x:e&&e.filterSize&&e.filterSize.x||"0%",y:e&&e.filterSize&&e.filterSize.y||"0%"}},this.globalData={_mdf:!1,frameNum:-1,defs:S,renderConfig:this.renderConfig},this.elements=[],this.pendingElements=[],this.destroyed=!1,this.rendererType="svg"}P([Wt],ee),ee.prototype.createNull=function(t){return new qe(t,this.globalData,this)},ee.prototype.createShape=function(t){return new Yt(t,this.globalData,this)},ee.prototype.createText=function(t){return new $e(t,this.globalData,this)},ee.prototype.createImage=function(t){return new on(t,this.globalData,this)},ee.prototype.createComp=function(t){return new zn(t,this.globalData,this)},ee.prototype.createSolid=function(t){return new _n(t,this.globalData,this)},ee.prototype.configAnimation=function(t){this.svgElement.setAttribute("xmlns","http://www.w3.org/2000/svg"),this.renderConfig.viewBoxSize?this.svgElement.setAttribute("viewBox",this.renderConfig.viewBoxSize):this.svgElement.setAttribute("viewBox","0 0 "+t.w+" "+t.h),this.renderConfig.viewBoxOnly||(this.svgElement.setAttribute("width",t.w),this.svgElement.setAttribute("height",t.h),this.svgElement.style.width="100%",this.svgElement.style.height="100%",this.svgElement.style.transform="translate3d(0,0,0)",this.svgElement.style.contentVisibility=this.renderConfig.contentVisibility),this.renderConfig.className&&this.svgElement.setAttribute("class",this.renderConfig.className),this.renderConfig.id&&this.svgElement.setAttribute("id",this.renderConfig.id),this.renderConfig.focusable!==void 0&&this.svgElement.setAttribute("focusable",this.renderConfig.focusable),this.svgElement.setAttribute("preserveAspectRatio",this.renderConfig.preserveAspectRatio),this.animationItem.wrapper.appendChild(this.svgElement);var e=this.globalData.defs;this.setupGlobalData(t,e),this.globalData.progressiveLoad=this.renderConfig.progressiveLoad,this.data=t;var n=Z("clipPath"),i=Z("rect");i.setAttribute("width",t.w),i.setAttribute("height",t.h),i.setAttribute("x",0),i.setAttribute("y",0);var s=Gt();n.setAttribute("id",s),n.appendChild(i),this.layerElement.setAttribute("clip-path","url("+_t+"#"+s+")"),e.appendChild(n),this.layers=t.layers,this.elements=rt(t.layers.length)},ee.prototype.destroy=function(){this.animationItem.wrapper&&(this.animationItem.wrapper.innerText=""),this.layerElement=null,this.globalData.defs=null;var t,e=this.layers?this.layers.length:0;for(t=0;t<e;t+=1)this.elements[t]&&this.elements[t].destroy();this.elements.length=0,this.destroyed=!0,this.animationItem=null},ee.prototype.updateContainerSize=function(){},ee.prototype.buildItem=function(t){var e=this.elements;if(!(e[t]||this.layers[t].ty===99)){e[t]=!0;var n=this.createItem(this.layers[t]);e[t]=n,ve&&(this.layers[t].ty===0&&this.globalData.projectInterface.registerComposition(n),n.initExpressions()),this.appendElementInPos(n,t),this.layers[t].tt&&(!this.elements[t-1]||this.elements[t-1]===!0?(this.buildItem(t-1),this.addPendingElement(n)):n.setMatte(e[t-1].layerId))}},ee.prototype.checkPendingElements=function(){for(;this.pendingElements.length;){var t=this.pendingElements.pop();if(t.checkParenting(),t.data.tt)for(var e=0,n=this.elements.length;e<n;){if(this.elements[e]===t){t.setMatte(this.elements[e-1].layerId);break}e+=1}}},ee.prototype.renderFrame=function(t){if(!(this.renderedFrame===t||this.destroyed)){t===null?t=this.renderedFrame:this.renderedFrame=t,this.globalData.frameNum=t,this.globalData.frameId+=1,this.globalData.projectInterface.currentFrame=t,this.globalData._mdf=!1;var e,n=this.layers.length;for(this.completeLayers||this.checkLayers(t),e=n-1;e>=0;e-=1)(this.completeLayers||this.elements[e])&&this.elements[e].prepareFrame(t-this.layers[e].st);if(this.globalData._mdf)for(e=0;e<n;e+=1)(this.completeLayers||this.elements[e])&&this.elements[e].renderFrame()}},ee.prototype.appendElementInPos=function(t,e){var n=t.getBaseElement();if(n){for(var i=0,s;i<e;)this.elements[i]&&this.elements[i]!==!0&&this.elements[i].getBaseElement()&&(s=this.elements[i].getBaseElement()),i+=1;s?this.layerElement.insertBefore(n,s):this.layerElement.appendChild(n)}},ee.prototype.hide=function(){this.layerElement.style.display="none"},ee.prototype.show=function(){this.layerElement.style.display="block"};function Ue(t,e,n){this.data=t,this.element=e,this.globalData=n,this.storedData=[],this.masksProperties=this.data.masksProperties||[],this.maskElement=null;var i=this.globalData.defs,s,r=this.masksProperties?this.masksProperties.length:0;this.viewData=rt(r),this.solidPath="";var c,S=this.masksProperties,u=0,I=[],T,C,b=Gt(),F,R,y,A,f="clipPath",o="clip-path";for(s=0;s<r;s+=1)if((S[s].mode!=="a"&&S[s].mode!=="n"||S[s].inv||S[s].o.k!==100||S[s].o.x)&&(f="mask",o="mask"),(S[s].mode==="s"||S[s].mode==="i")&&u===0?(F=Z("rect"),F.setAttribute("fill","#ffffff"),F.setAttribute("width",this.element.comp.data.w||0),F.setAttribute("height",this.element.comp.data.h||0),I.push(F)):F=null,c=Z("path"),S[s].mode==="n")this.viewData[s]={op:q.getProp(this.element,S[s].o,0,.01,this.element),prop:dt.getShapeProp(this.element,S[s],3),elem:c,lastPath:""},i.appendChild(c);else{u+=1,c.setAttribute("fill",S[s].mode==="s"?"#000000":"#ffffff"),c.setAttribute("clip-rule","nonzero");var a;if(S[s].x.k!==0?(f="mask",o="mask",A=q.getProp(this.element,S[s].x,0,null,this.element),a=Gt(),R=Z("filter"),R.setAttribute("id",a),y=Z("feMorphology"),y.setAttribute("operator","erode"),y.setAttribute("in","SourceGraphic"),y.setAttribute("radius","0"),R.appendChild(y),i.appendChild(R),c.setAttribute("stroke",S[s].mode==="s"?"#000000":"#ffffff")):(y=null,A=null),this.storedData[s]={elem:c,x:A,expan:y,lastPath:"",lastOperator:"",filterId:a,lastRadius:0},S[s].mode==="i"){C=I.length;var l=Z("g");for(T=0;T<C;T+=1)l.appendChild(I[T]);var h=Z("mask");h.setAttribute("mask-type","alpha"),h.setAttribute("id",b+"_"+u),h.appendChild(c),i.appendChild(h),l.setAttribute("mask","url("+_t+"#"+b+"_"+u+")"),I.length=0,I.push(l)}else I.push(c);S[s].inv&&!this.solidPath&&(this.solidPath=this.createLayerSolidPath()),this.viewData[s]={elem:c,lastPath:"",op:q.getProp(this.element,S[s].o,0,.01,this.element),prop:dt.getShapeProp(this.element,S[s],3),invRect:F},this.viewData[s].prop.k||this.drawPath(S[s],this.viewData[s].prop.v,this.viewData[s])}for(this.maskElement=Z(f),r=I.length,s=0;s<r;s+=1)this.maskElement.appendChild(I[s]);u>0&&(this.maskElement.setAttribute("id",b),this.element.maskedElement.setAttribute(o,"url("+_t+"#"+b+")"),i.appendChild(this.maskElement)),this.viewData.length&&this.element.addRenderableComponent(this)}Ue.prototype.getMaskProperty=function(t){return this.viewData[t].prop},Ue.prototype.renderFrame=function(t){var e=this.element.finalTransform.mat,n,i=this.masksProperties.length;for(n=0;n<i;n+=1)if((this.viewData[n].prop._mdf||t)&&this.drawPath(this.masksProperties[n],this.viewData[n].prop.v,this.viewData[n]),(this.viewData[n].op._mdf||t)&&this.viewData[n].elem.setAttribute("fill-opacity",this.viewData[n].op.v),this.masksProperties[n].mode!=="n"&&(this.viewData[n].invRect&&(this.element.finalTransform.mProp._mdf||t)&&this.viewData[n].invRect.setAttribute("transform",e.getInverseMatrix().to2dCSS()),this.storedData[n].x&&(this.storedData[n].x._mdf||t))){var s=this.storedData[n].expan;this.storedData[n].x.v<0?(this.storedData[n].lastOperator!=="erode"&&(this.storedData[n].lastOperator="erode",this.storedData[n].elem.setAttribute("filter","url("+_t+"#"+this.storedData[n].filterId+")")),s.setAttribute("radius",-this.storedData[n].x.v)):(this.storedData[n].lastOperator!=="dilate"&&(this.storedData[n].lastOperator="dilate",this.storedData[n].elem.setAttribute("filter",null)),this.storedData[n].elem.setAttribute("stroke-width",this.storedData[n].x.v*2))}},Ue.prototype.getMaskelement=function(){return this.maskElement},Ue.prototype.createLayerSolidPath=function(){var t="M0,0 ";return t+=" h"+this.globalData.compSize.w,t+=" v"+this.globalData.compSize.h,t+=" h-"+this.globalData.compSize.w,t+=" v-"+this.globalData.compSize.h+" ",t},Ue.prototype.drawPath=function(t,e,n){var i=" M"+e.v[0][0]+","+e.v[0][1],s,r=e._length;for(s=1;s<r;s+=1)i+=" C"+e.o[s-1][0]+","+e.o[s-1][1]+" "+e.i[s][0]+","+e.i[s][1]+" "+e.v[s][0]+","+e.v[s][1];if(e.c&&r>1&&(i+=" C"+e.o[s-1][0]+","+e.o[s-1][1]+" "+e.i[0][0]+","+e.i[0][1]+" "+e.v[0][0]+","+e.v[0][1]),n.lastPath!==i){var c="";n.elem&&(e.c&&(c=t.inv?this.solidPath+i:i),n.elem.setAttribute("d",c)),n.lastPath=i}},Ue.prototype.destroy=function(){this.element=null,this.globalData=null,this.maskElement=null,this.data=null,this.masksProperties=null};function tn(){}tn.prototype={initHierarchy:function(){this.hierarchy=[],this._isParent=!1,this.checkParenting()},setHierarchy:function(t){this.hierarchy=t},setAsParent:function(){this._isParent=!0},checkParenting:function(){this.data.parent!==void 0&&this.comp.buildElementParenting(this,this.data.parent,[])}};function Xe(){}Xe.prototype={initFrame:function(){this._isFirstFrame=!1,this.dynamicProperties=[],this._mdf=!1},prepareProperties:function(t,e){var n,i=this.dynamicProperties.length;for(n=0;n<i;n+=1)(e||this._isParent&&this.dynamicProperties[n].propType==="transform")&&(this.dynamicProperties[n].getValue(),this.dynamicProperties[n]._mdf&&(this.globalData._mdf=!0,this._mdf=!0))},addDynamicProperty:function(t){this.dynamicProperties.indexOf(t)===-1&&this.dynamicProperties.push(t)}};function en(){}en.prototype={initTransform:function(){this.finalTransform={mProp:this.data.ks?ht.getTransformProperty(this,this.data.ks,this):{o:0},_matMdf:!1,_opMdf:!1,mat:new M},this.data.ao&&(this.finalTransform.mProp.autoOriented=!0),this.data.ty},renderTransform:function(){if(this.finalTransform._opMdf=this.finalTransform.mProp.o._mdf||this._isFirstFrame,this.finalTransform._matMdf=this.finalTransform.mProp._mdf||this._isFirstFrame,this.hierarchy){var t,e=this.finalTransform.mat,n=0,i=this.hierarchy.length;if(!this.finalTransform._matMdf)for(;n<i;){if(this.hierarchy[n].finalTransform.mProp._mdf){this.finalTransform._matMdf=!0;break}n+=1}if(this.finalTransform._matMdf)for(t=this.finalTransform.mProp.v.props,e.cloneFromProps(t),n=0;n<i;n+=1)t=this.hierarchy[n].finalTransform.mProp.v.props,e.transform(t[0],t[1],t[2],t[3],t[4],t[5],t[6],t[7],t[8],t[9],t[10],t[11],t[12],t[13],t[14],t[15])}},globalToLocal:function(t){var e=[];e.push(this.finalTransform);for(var n=!0,i=this.comp;n;)i.finalTransform?(i.data.hasMask&&e.splice(0,0,i.finalTransform),i=i.comp):n=!1;var s,r=e.length,c;for(s=0;s<r;s+=1)c=e[s].mat.applyToPointArray(0,0,0),t=[t[0]-c[0],t[1]-c[1],0];return t},mHelper:new M};function bn(){}bn.prototype={initRenderable:function(){this.isInRange=!1,this.hidden=!1,this.isTransparent=!1,this.renderableComponents=[]},addRenderableComponent:function(t){this.renderableComponents.indexOf(t)===-1&&this.renderableComponents.push(t)},removeRenderableComponent:function(t){this.renderableComponents.indexOf(t)!==-1&&this.renderableComponents.splice(this.renderableComponents.indexOf(t),1)},prepareRenderableFrame:function(t){this.checkLayerLimits(t)},checkTransparency:function(){this.finalTransform.mProp.o.v<=0?!this.isTransparent&&this.globalData.renderConfig.hideOnTransparent&&(this.isTransparent=!0,this.hide()):this.isTransparent&&(this.isTransparent=!1,this.show())},checkLayerLimits:function(t){this.data.ip-this.data.st<=t&&this.data.op-this.data.st>t?this.isInRange!==!0&&(this.globalData._mdf=!0,this._mdf=!0,this.isInRange=!0,this.show()):this.isInRange!==!1&&(this.globalData._mdf=!0,this.isInRange=!1,this.hide())},renderRenderable:function(){var t,e=this.renderableComponents.length;for(t=0;t<e;t+=1)this.renderableComponents[t].renderFrame(this._isFirstFrame)},sourceRectAtTime:function(){return{top:0,left:0,width:100,height:100}},getLayerSize:function(){return this.data.ty===5?{w:this.data.textData.width,h:this.data.textData.height}:{w:this.data.width,h:this.data.height}}};function an(){}(function(){P([bn,j({initElement:function(t,e,n){this.initFrame(),this.initBaseData(t,e,n),this.initTransform(t,e,n),this.initHierarchy(),this.initRenderable(),this.initRendererElement(),this.createContainerElements(),this.createRenderableComponents(),this.createContent(),this.hide()},hide:function(){if(!this.hidden&&(!this.isInRange||this.isTransparent)){var t=this.baseElement||this.layerElement;t.style.display="none",this.hidden=!0}},show:function(){if(this.isInRange&&!this.isTransparent){if(!this.data.hd){var t=this.baseElement||this.layerElement;t.style.display="block"}this.hidden=!1,this._isFirstFrame=!0}},renderFrame:function(){this.data.hd||this.hidden||(this.renderTransform(),this.renderRenderable(),this.renderElement(),this.renderInnerContent(),this._isFirstFrame&&(this._isFirstFrame=!1))},renderInnerContent:function(){},prepareFrame:function(t){this._mdf=!1,this.prepareRenderableFrame(t),this.prepareProperties(t,this.isInRange),this.checkTransparency()},destroy:function(){this.innerElem=null,this.destroyBaseElement()}})],an)})();function fi(t,e){this.elem=t,this.pos=e}function Ln(t,e){this.data=t,this.type=t.ty,this.d="",this.lvl=e,this._mdf=!1,this.closed=t.hd===!0,this.pElem=Z("path"),this.msElem=null}Ln.prototype.reset=function(){this.d="",this._mdf=!1};function En(t,e,n){this.caches=[],this.styles=[],this.transformers=t,this.lStr="",this.sh=n,this.lvl=e,this._isAnimated=!!n.k;for(var i=0,s=t.length;i<s;){if(t[i].mProps.dynamicProperties.length){this._isAnimated=!0;break}i+=1}}En.prototype.setAsAnimated=function(){this._isAnimated=!0};function ui(t,e,n){this.transform={mProps:t,op:e,container:n},this.elements=[],this._isAnimated=this.transform.mProps.dynamicProperties.length||this.transform.op.effectsSequence.length}function Pn(t,e,n){this.initDynamicPropertyContainer(t),this.getValue=this.iterateDynamicProperties,this.o=q.getProp(t,e.o,0,.01,this),this.w=q.getProp(t,e.w,0,null,this),this.d=new Xt(t,e.d||{},"svg",this),this.c=q.getProp(t,e.c,1,255,this),this.style=n,this._isAnimated=!!this._isAnimated}P([H],Pn);function Fn(t,e,n){this.initDynamicPropertyContainer(t),this.getValue=this.iterateDynamicProperties,this.o=q.getProp(t,e.o,0,.01,this),this.c=q.getProp(t,e.c,1,255,this),this.style=n}P([H],Fn);function nn(t,e,n){this.initDynamicPropertyContainer(t),this.getValue=this.iterateDynamicProperties,this.initGradientData(t,e,n)}nn.prototype.initGradientData=function(t,e,n){this.o=q.getProp(t,e.o,0,.01,this),this.s=q.getProp(t,e.s,1,null,this),this.e=q.getProp(t,e.e,1,null,this),this.h=q.getProp(t,e.h||{k:0},0,.01,this),this.a=q.getProp(t,e.a||{k:0},0,Et,this),this.g=new It(t,e.g,this),this.style=n,this.stops=[],this.setGradientData(n.pElem,e),this.setGradientOpacity(e,n),this._isAnimated=!!this._isAnimated},nn.prototype.setGradientData=function(t,e){var n=Gt(),i=Z(e.t===1?"linearGradient":"radialGradient");i.setAttribute("id",n),i.setAttribute("spreadMethod","pad"),i.setAttribute("gradientUnits","userSpaceOnUse");var s=[],r,c,S=e.g.p*4;for(c=0;c<S;c+=4)r=Z("stop"),i.appendChild(r),s.push(r);t.setAttribute(e.ty==="gf"?"fill":"stroke","url("+_t+"#"+n+")"),this.gf=i,this.cst=s},nn.prototype.setGradientOpacity=function(t,e){if(this.g._hasOpacity&&!this.g._collapsable){var n,i,s,r=Z("mask"),c=Z("path");r.appendChild(c);var S=Gt(),u=Gt();r.setAttribute("id",u);var I=Z(t.t===1?"linearGradient":"radialGradient");I.setAttribute("id",S),I.setAttribute("spreadMethod","pad"),I.setAttribute("gradientUnits","userSpaceOnUse"),s=t.g.k.k[0].s?t.g.k.k[0].s.length:t.g.k.k.length;var T=this.stops;for(i=t.g.p*4;i<s;i+=2)n=Z("stop"),n.setAttribute("stop-color","rgb(255,255,255)"),I.appendChild(n),T.push(n);c.setAttribute(t.ty==="gf"?"fill":"stroke","url("+_t+"#"+S+")"),t.ty==="gs"&&(c.setAttribute("stroke-linecap",_[t.lc||2]),c.setAttribute("stroke-linejoin",x[t.lj||2]),t.lj===1&&c.setAttribute("stroke-miterlimit",t.ml)),this.of=I,this.ms=r,this.ost=T,this.maskId=u,e.msElem=c}},P([H],nn);function Tn(t,e,n){this.initDynamicPropertyContainer(t),this.getValue=this.iterateDynamicProperties,this.w=q.getProp(t,e.w,0,null,this),this.d=new Xt(t,e.d||{},"svg",this),this.initGradientData(t,e,n),this._isAnimated=!!this._isAnimated}P([nn,H],Tn);function mi(){this.it=[],this.prevViewData=[],this.gr=Z("g")}var gi=(function(){var t=new M,e=new M,n={createRenderFunction:i};function i(T){switch(T.ty){case"fl":return c;case"gf":return u;case"gs":return S;case"st":return I;case"sh":case"el":case"rc":case"sr":return r;case"tr":return s;default:return null}}function s(T,C,b){(b||C.transform.op._mdf)&&C.transform.container.setAttribute("opacity",C.transform.op.v),(b||C.transform.mProps._mdf)&&C.transform.container.setAttribute("transform",C.transform.mProps.v.to2dCSS())}function r(T,C,b){var F,R,y,A,f,o,a=C.styles.length,l=C.lvl,h,g,m,B,Q;for(o=0;o<a;o+=1){if(A=C.sh._mdf||b,C.styles[o].lvl<l){for(g=e.reset(),B=l-C.styles[o].lvl,Q=C.transformers.length-1;!A&&B>0;)A=C.transformers[Q].mProps._mdf||A,B-=1,Q-=1;if(A)for(B=l-C.styles[o].lvl,Q=C.transformers.length-1;B>0;)m=C.transformers[Q].mProps.v.props,g.transform(m[0],m[1],m[2],m[3],m[4],m[5],m[6],m[7],m[8],m[9],m[10],m[11],m[12],m[13],m[14],m[15]),B-=1,Q-=1}else g=t;if(h=C.sh.paths,R=h._length,A){for(y="",F=0;F<R;F+=1)f=h.shapes[F],f&&f._length&&(y+=Ct(f,f._length,f.c,g));C.caches[o]=y}else y=C.caches[o];C.styles[o].d+=T.hd===!0?"":y,C.styles[o]._mdf=A||C.styles[o]._mdf}}function c(T,C,b){var F=C.style;(C.c._mdf||b)&&F.pElem.setAttribute("fill","rgb("+Nt(C.c.v[0])+","+Nt(C.c.v[1])+","+Nt(C.c.v[2])+")"),(C.o._mdf||b)&&F.pElem.setAttribute("fill-opacity",C.o.v)}function S(T,C,b){u(T,C,b),I(T,C,b)}function u(T,C,b){var F=C.gf,R=C.g._hasOpacity,y=C.s.v,A=C.e.v;if(C.o._mdf||b){var f=T.ty==="gf"?"fill-opacity":"stroke-opacity";C.style.pElem.setAttribute(f,C.o.v)}if(C.s._mdf||b){var o=T.t===1?"x1":"cx",a=o==="x1"?"y1":"cy";F.setAttribute(o,y[0]),F.setAttribute(a,y[1]),R&&!C.g._collapsable&&(C.of.setAttribute(o,y[0]),C.of.setAttribute(a,y[1]))}var l,h,g,m;if(C.g._cmdf||b){l=C.cst;var B=C.g.c;for(g=l.length,h=0;h<g;h+=1)m=l[h],m.setAttribute("offset",B[h*4]+"%"),m.setAttribute("stop-color","rgb("+B[h*4+1]+","+B[h*4+2]+","+B[h*4+3]+")")}if(R&&(C.g._omdf||b)){var Q=C.g.o;for(C.g._collapsable?l=C.cst:l=C.ost,g=l.length,h=0;h<g;h+=1)m=l[h],C.g._collapsable||m.setAttribute("offset",Q[h*2]+"%"),m.setAttribute("stop-opacity",Q[h*2+1])}if(T.t===1)(C.e._mdf||b)&&(F.setAttribute("x2",A[0]),F.setAttribute("y2",A[1]),R&&!C.g._collapsable&&(C.of.setAttribute("x2",A[0]),C.of.setAttribute("y2",A[1])));else{var at;if((C.s._mdf||C.e._mdf||b)&&(at=Math.sqrt(Math.pow(y[0]-A[0],2)+Math.pow(y[1]-A[1],2)),F.setAttribute("r",at),R&&!C.g._collapsable&&C.of.setAttribute("r",at)),C.e._mdf||C.h._mdf||C.a._mdf||b){at||(at=Math.sqrt(Math.pow(y[0]-A[0],2)+Math.pow(y[1]-A[1],2)));var lt=Math.atan2(A[1]-y[1],A[0]-y[0]),nt=C.h.v;nt>=1?nt=.99:nt<=-1&&(nt=-.99);var Y=at*nt,W=Math.cos(lt+C.a.v)*Y+y[0],K=Math.sin(lt+C.a.v)*Y+y[1];F.setAttribute("fx",W),F.setAttribute("fy",K),R&&!C.g._collapsable&&(C.of.setAttribute("fx",W),C.of.setAttribute("fy",K))}}}function I(T,C,b){var F=C.style,R=C.d;R&&(R._mdf||b)&&R.dashStr&&(F.pElem.setAttribute("stroke-dasharray",R.dashStr),F.pElem.setAttribute("stroke-dashoffset",R.dashoffset[0])),C.c&&(C.c._mdf||b)&&F.pElem.setAttribute("stroke","rgb("+Nt(C.c.v[0])+","+Nt(C.c.v[1])+","+Nt(C.c.v[2])+")"),(C.o._mdf||b)&&F.pElem.setAttribute("stroke-opacity",C.o.v),(C.w._mdf||b)&&(F.pElem.setAttribute("stroke-width",C.w.v),F.msElem&&F.msElem.setAttribute("stroke-width",C.w.v))}return n})();function vi(){this.sequences={},this.sequenceList=[],this.transform_key_count=0}vi.prototype={addTransformSequence:function(t){var e,n=t.length,i="_";for(e=0;e<n;e+=1)i+=t[e].transform.key+"_";var s=this.sequences[i];return s||(s={transforms:[].concat(t),finalTransform:new M,_mdf:!1},this.sequences[i]=s,this.sequenceList.push(s)),s},processSequence:function(t,e){for(var n=0,i=t.transforms.length,s=e;n<i&&!e;){if(t.transforms[n].transform.mProps._mdf){s=!0;break}n+=1}if(s){var r;for(t.finalTransform.reset(),n=i-1;n>=0;n-=1)r=t.transforms[n].transform.mProps.v.props,t.finalTransform.transform(r[0],r[1],r[2],r[3],r[4],r[5],r[6],r[7],r[8],r[9],r[10],r[11],r[12],r[13],r[14],r[15])}t._mdf=s},processSequences:function(t){var e,n=this.sequenceList.length;for(e=0;e<n;e+=1)this.processSequence(this.sequenceList[e],t)},getNewKey:function(){return this.transform_key_count+=1,"_"+this.transform_key_count}};function Ye(){}Ye.prototype={checkMasks:function(){if(!this.data.hasMask)return!1;for(var t=0,e=this.data.masksProperties.length;t<e;){if(this.data.masksProperties[t].mode!=="n"&&this.data.masksProperties[t].cl!==!1)return!0;t+=1}return!1},initExpressions:function(){this.layerInterface=LayerExpressionInterface(this),this.data.hasMask&&this.maskManager&&this.layerInterface.registerMaskInterface(this.maskManager);var t=EffectsExpressionInterface.createEffectsInterface(this,this.layerInterface);this.layerInterface.registerEffectsInterface(t),this.data.ty===0||this.data.xt?this.compInterface=CompExpressionInterface(this):this.data.ty===4?(this.layerInterface.shapeInterface=ShapeExpressionInterface(this.shapesData,this.itemsData,this.layerInterface),this.layerInterface.content=this.layerInterface.shapeInterface):this.data.ty===5&&(this.layerInterface.textInterface=TextExpressionInterface(this),this.layerInterface.text=this.layerInterface.textInterface)},setBlendMode:function(){var t=p(this.data.bm),e=this.baseElement||this.layerElement;e.style["mix-blend-mode"]=t},initBaseData:function(t,e,n){this.globalData=e,this.comp=n,this.data=t,this.layerId=Gt(),this.data.sr||(this.data.sr=1),this.effectsManager=new ki(this.data,this,this.dynamicProperties)},getType:function(){return this.type},sourceRectAtTime:function(){}};function qe(t,e,n){this.initFrame(),this.initBaseData(t,e,n),this.initFrame(),this.initTransform(t,e,n),this.initHierarchy()}qe.prototype.prepareFrame=function(t){this.prepareProperties(t,!0)},qe.prototype.renderFrame=function(){},qe.prototype.getBaseElement=function(){return null},qe.prototype.destroy=function(){},qe.prototype.sourceRectAtTime=function(){},qe.prototype.hide=function(){},P([Ye,en,tn,Xe],qe);function sn(){}sn.prototype={initRendererElement:function(){this.layerElement=Z("g")},createContainerElements:function(){this.matteElement=Z("g"),this.transformedElement=this.layerElement,this.maskedElement=this.layerElement,this._sizeChanged=!1;var t=null,e,n,i;if(this.data.td){if(this.data.td==3||this.data.td==1){var s=Z("mask");s.setAttribute("id",this.layerId),s.setAttribute("mask-type",this.data.td==3?"luminance":"alpha"),s.appendChild(this.layerElement),t=s,this.globalData.defs.appendChild(s),!qt.maskType&&this.data.td==1&&(s.setAttribute("mask-type","luminance"),e=Gt(),n=Ht.createFilter(e),this.globalData.defs.appendChild(n),n.appendChild(Ht.createAlphaToLuminanceFilter()),i=Z("g"),i.appendChild(this.layerElement),t=i,s.appendChild(i),i.setAttribute("filter","url("+_t+"#"+e+")"))}else if(this.data.td==2){var r=Z("mask");r.setAttribute("id",this.layerId),r.setAttribute("mask-type","alpha");var c=Z("g");r.appendChild(c),e=Gt(),n=Ht.createFilter(e);var S=Z("feComponentTransfer");S.setAttribute("in","SourceGraphic"),n.appendChild(S);var u=Z("feFuncA");u.setAttribute("type","table"),u.setAttribute("tableValues","1.0 0.0"),S.appendChild(u),this.globalData.defs.appendChild(n);var I=Z("rect");I.setAttribute("width",this.comp.data.w),I.setAttribute("height",this.comp.data.h),I.setAttribute("x","0"),I.setAttribute("y","0"),I.setAttribute("fill","#ffffff"),I.setAttribute("opacity","0"),c.setAttribute("filter","url("+_t+"#"+e+")"),c.appendChild(I),c.appendChild(this.layerElement),t=c,qt.maskType||(r.setAttribute("mask-type","luminance"),n.appendChild(Ht.createAlphaToLuminanceFilter()),i=Z("g"),c.appendChild(I),i.appendChild(this.layerElement),t=i,c.appendChild(i)),this.globalData.defs.appendChild(r)}}else this.data.tt?(this.matteElement.appendChild(this.layerElement),t=this.matteElement,this.baseElement=this.matteElement):this.baseElement=this.layerElement;if(this.data.ln&&this.layerElement.setAttribute("id",this.data.ln),this.data.cl&&this.layerElement.setAttribute("class",this.data.cl),this.data.ty===0&&!this.data.hd){var T=Z("clipPath"),C=Z("path");C.setAttribute("d","M0,0 L"+this.data.w+",0 L"+this.data.w+","+this.data.h+" L0,"+this.data.h+"z");var b=Gt();if(T.setAttribute("id",b),T.appendChild(C),this.globalData.defs.appendChild(T),this.checkMasks()){var F=Z("g");F.setAttribute("clip-path","url("+_t+"#"+b+")"),F.appendChild(this.layerElement),this.transformedElement=F,t?t.appendChild(this.transformedElement):this.baseElement=this.transformedElement}else this.layerElement.setAttribute("clip-path","url("+_t+"#"+b+")")}this.data.bm!==0&&this.setBlendMode()},renderElement:function(){this.finalTransform._matMdf&&this.transformedElement.setAttribute("transform",this.finalTransform.mat.to2dCSS()),this.finalTransform._opMdf&&this.transformedElement.setAttribute("opacity",this.finalTransform.mProp.o.v)},destroyBaseElement:function(){this.layerElement=null,this.matteElement=null,this.maskManager.destroy()},getBaseElement:function(){return this.data.hd?null:this.baseElement},createRenderableComponents:function(){this.maskManager=new Ue(this.data,this,this.globalData),this.renderableEffectsManager=new Ci(this)},setMatte:function(t){this.matteElement&&this.matteElement.setAttribute("mask","url("+_t+"#"+t+")")}};function In(){}In.prototype={addShapeToModifiers:function(t){var e,n=this.shapeModifiers.length;for(e=0;e<n;e+=1)this.shapeModifiers[e].addShape(t)},isShapeInAnimatedModifiers:function(t){for(var e=0,n=this.shapeModifiers.length;e<n;)if(this.shapeModifiers[e].isAnimatedWithShape(t))return!0;return!1},renderModifiers:function(){if(this.shapeModifiers.length){var t,e=this.shapes.length;for(t=0;t<e;t+=1)this.shapes[t].sh.reset();e=this.shapeModifiers.length;var n;for(t=e-1;t>=0&&(n=this.shapeModifiers[t].processShapes(this._isFirstFrame),!n);t-=1);}},searchProcessedElement:function(t){for(var e=this.processedElements,n=0,i=e.length;n<i;){if(e[n].elem===t)return e[n].pos;n+=1}return 0},addProcessedElement:function(t,e){for(var n=this.processedElements,i=n.length;i;)if(i-=1,n[i].elem===t){n[i].pos=e;return}n.push(new fi(t,e))},prepareFrame:function(t){this.prepareRenderableFrame(t),this.prepareProperties(t,this.isInRange)}};function _e(){}_e.prototype.initElement=function(t,e,n){this.lettersChangedFlag=!0,this.initFrame(),this.initBaseData(t,e,n),this.textProperty=new re(this,t.t,this.dynamicProperties),this.textAnimator=new Rt(t.t,this.renderType,this),this.initTransform(t,e,n),this.initHierarchy(),this.initRenderable(),this.initRendererElement(),this.createContainerElements(),this.createRenderableComponents(),this.createContent(),this.hide(),this.textAnimator.searchProperties(this.dynamicProperties)},_e.prototype.prepareFrame=function(t){this._mdf=!1,this.prepareRenderableFrame(t),this.prepareProperties(t,this.isInRange),(this.textProperty._mdf||this.textProperty._isFirstFrame)&&(this.buildNewText(),this.textProperty._isFirstFrame=!1,this.textProperty._mdf=!1)},_e.prototype.createPathShape=function(t,e){var n,i=e.length,s,r="";for(n=0;n<i;n+=1)s=e[n].ks.k,r+=Ct(s,s.i.length,!0,t);return r},_e.prototype.updateDocumentData=function(t,e){this.textProperty.updateDocumentData(t,e)},_e.prototype.canResizeFont=function(t){this.textProperty.canResizeFont(t)},_e.prototype.setMinimumFontSize=function(t){this.textProperty.setMinimumFontSize(t)},_e.prototype.applyTextPropertiesToMatrix=function(t,e,n,i,s){switch(t.ps&&e.translate(t.ps[0],t.ps[1]+t.ascent,0),e.translate(0,-t.ls,0),t.j){case 1:e.translate(t.justifyOffset+(t.boxWidth-t.lineWidths[n]),0,0);break;case 2:e.translate(t.justifyOffset+(t.boxWidth-t.lineWidths[n])/2,0,0);break;default:break}e.translate(i,s,0)},_e.prototype.buildColor=function(t){return"rgb("+Math.round(t[0]*255)+","+Math.round(t[1]*255)+","+Math.round(t[2]*255)+")"},_e.prototype.emptyProp=new be,_e.prototype.destroy=function(){};function Pe(){}P([Ye,en,tn,Xe,an],Pe),Pe.prototype.initElement=function(t,e,n){this.initFrame(),this.initBaseData(t,e,n),this.initTransform(t,e,n),this.initRenderable(),this.initHierarchy(),this.initRendererElement(),this.createContainerElements(),this.createRenderableComponents(),(this.data.xt||!e.progressiveLoad)&&this.buildAllItems(),this.hide()},Pe.prototype.prepareFrame=function(t){if(this._mdf=!1,this.prepareRenderableFrame(t),this.prepareProperties(t,this.isInRange),!(!this.isInRange&&!this.data.xt)){if(this.tm._placeholder)this.renderedFrame=t/this.data.sr;else{var e=this.tm.v;e===this.data.op&&(e=this.data.op-1),this.renderedFrame=e}var n,i=this.elements.length;for(this.completeLayers||this.checkLayers(this.renderedFrame),n=i-1;n>=0;n-=1)(this.completeLayers||this.elements[n])&&(this.elements[n].prepareFrame(this.renderedFrame-this.layers[n].st),this.elements[n]._mdf&&(this._mdf=!0))}},Pe.prototype.renderInnerContent=function(){var t,e=this.layers.length;for(t=0;t<e;t+=1)(this.completeLayers||this.elements[t])&&this.elements[t].renderFrame()},Pe.prototype.setElements=function(t){this.elements=t},Pe.prototype.getElements=function(){return this.elements},Pe.prototype.destroyElements=function(){var t,e=this.layers.length;for(t=0;t<e;t+=1)this.elements[t]&&this.elements[t].destroy()},Pe.prototype.destroy=function(){this.destroyElements(),this.destroyBaseElement()};function on(t,e,n){this.assetData=e.getAssetData(t.refId),this.initElement(t,e,n),this.sourceRect={top:0,left:0,width:this.assetData.w,height:this.assetData.h}}P([Ye,en,sn,tn,Xe,an],on),on.prototype.createContent=function(){var t=this.globalData.getAssetsPath(this.assetData);this.innerElem=Z("image"),this.innerElem.setAttribute("width",this.assetData.w+"px"),this.innerElem.setAttribute("height",this.assetData.h+"px"),this.innerElem.setAttribute("preserveAspectRatio",this.assetData.pr||this.globalData.renderConfig.imagePreserveAspectRatio),this.innerElem.setAttributeNS("http://www.w3.org/1999/xlink","href",t),this.layerElement.appendChild(this.innerElem)},on.prototype.sourceRectAtTime=function(){return this.sourceRect};function _n(t,e,n){this.initElement(t,e,n)}P([on],_n),_n.prototype.createContent=function(){var t=Z("rect");t.setAttribute("width",this.data.sw),t.setAttribute("height",this.data.sh),t.setAttribute("fill",this.data.sc),this.layerElement.appendChild(t)};function de(t,e,n){this.initFrame(),this.initRenderable(),this.assetData=e.getAssetData(t.refId),this.initBaseData(t,e,n),this._isPlaying=!1,this._canPlay=!1;var i=this.globalData.getAssetsPath(this.assetData);this.audio=this.globalData.audioController.createAudio(i),this._currentTime=0,this.globalData.audioController.addAudio(this),this.tm=t.tm?q.getProp(this,t.tm,0,e.frameRate,this):{_placeholder:!0}}de.prototype.prepareFrame=function(t){if(this.prepareRenderableFrame(t,!0),this.prepareProperties(t,!0),this.tm._placeholder)this._currentTime=t/this.data.sr;else{var e=this.tm.v;this._currentTime=e}},P([bn,Ye,Xe],de),de.prototype.renderFrame=function(){this.isInRange&&this._canPlay&&(this._isPlaying?(!this.audio.playing()||Math.abs(this._currentTime/this.globalData.frameRate-this.audio.seek())>.1)&&this.audio.seek(this._currentTime/this.globalData.frameRate):(this.audio.play(),this.audio.seek(this._currentTime/this.globalData.frameRate),this._isPlaying=!0))},de.prototype.show=function(){},de.prototype.hide=function(){this.audio.pause(),this._isPlaying=!1},de.prototype.pause=function(){this.audio.pause(),this._isPlaying=!1,this._canPlay=!1},de.prototype.resume=function(){this._canPlay=!0},de.prototype.setRate=function(t){this.audio.rate(t)},de.prototype.volume=function(t){this.audio.volume(t)},de.prototype.getBaseElement=function(){return null},de.prototype.destroy=function(){},de.prototype.sourceRectAtTime=function(){},de.prototype.initExpressions=function(){};function zn(t,e,n){this.layers=t.layers,this.supports3d=!0,this.completeLayers=!1,this.pendingElements=[],this.elements=this.layers?rt(this.layers.length):[],this.initElement(t,e,n),this.tm=t.tm?q.getProp(this,t.tm,0,e.frameRate,this):{_placeholder:!0}}P([ee,Pe,sn],zn);function $e(t,e,n){this.textSpans=[],this.renderType="svg",this.initElement(t,e,n)}P([Ye,en,sn,tn,Xe,an,_e],$e),$e.prototype.createContent=function(){this.data.singleShape&&!this.globalData.fontManager.chars&&(this.textContainer=Z("text"))},$e.prototype.buildTextContents=function(t){for(var e=0,n=t.length,i=[],s="";e<n;)t[e]==="\r"||t[e]===""?(i.push(s),s=""):s+=t[e],e+=1;return i.push(s),i},$e.prototype.buildNewText=function(){var t,e,n=this.textProperty.currentData;this.renderedLetters=rt(n?n.l.length:0),n.fc?this.layerElement.setAttribute("fill",this.buildColor(n.fc)):this.layerElement.setAttribute("fill","rgba(0,0,0,0)"),n.sc&&(this.layerElement.setAttribute("stroke",this.buildColor(n.sc)),this.layerElement.setAttribute("stroke-width",n.sw)),this.layerElement.setAttribute("font-size",n.finalSize);var i=this.globalData.fontManager.getFontByName(n.f);if(i.fClass)this.layerElement.setAttribute("class",i.fClass);else{this.layerElement.setAttribute("font-family",i.fFamily);var s=n.fWeight,r=n.fStyle;this.layerElement.setAttribute("font-style",r),this.layerElement.setAttribute("font-weight",s)}this.layerElement.setAttribute("aria-label",n.t);var c=n.l||[],S=!!this.globalData.fontManager.chars;e=c.length;var u,I=this.mHelper,T,C="",b=this.data.singleShape,F=0,R=0,y=!0,A=n.tr*.001*n.finalSize;if(b&&!S&&!n.sz){var f=this.textContainer,o="start";switch(n.j){case 1:o="end";break;case 2:o="middle";break;default:o="start";break}f.setAttribute("text-anchor",o),f.setAttribute("letter-spacing",A);var a=this.buildTextContents(n.finalText);for(e=a.length,R=n.ps?n.ps[1]+n.ascent:0,t=0;t<e;t+=1)u=this.textSpans[t]||Z("tspan"),u.textContent=a[t],u.setAttribute("x",0),u.setAttribute("y",R),u.style.display="inherit",f.appendChild(u),this.textSpans[t]=u,R+=n.finalLineHeight;this.layerElement.appendChild(f)}else{var l=this.textSpans.length,h,g;for(t=0;t<e;t+=1)(!S||!b||t===0)&&(u=l>t?this.textSpans[t]:Z(S?"path":"text"),l<=t&&(u.setAttribute("stroke-linecap","butt"),u.setAttribute("stroke-linejoin","round"),u.setAttribute("stroke-miterlimit","4"),this.textSpans[t]=u,this.layerElement.appendChild(u)),u.style.display="inherit"),I.reset(),I.scale(n.finalSize/100,n.finalSize/100),b&&(c[t].n&&(F=-A,R+=n.yOffset,R+=y?1:0,y=!1),this.applyTextPropertiesToMatrix(n,I,c[t].line,F,R),F+=c[t].l||0,F+=A),S?(g=this.globalData.fontManager.getCharData(n.finalText[t],i.fStyle,this.globalData.fontManager.getFontByName(n.f).fFamily),h=g&&g.data||{},T=h.shapes?h.shapes[0].it:[],b?C+=this.createPathShape(I,T):u.setAttribute("d",this.createPathShape(I,T))):(b&&u.setAttribute("transform","translate("+I.props[12]+","+I.props[13]+")"),u.textContent=c[t].val,u.setAttributeNS("http://www.w3.org/XML/1998/namespace","xml:space","preserve"));b&&u&&u.setAttribute("d",C)}for(;t<this.textSpans.length;)this.textSpans[t].style.display="none",t+=1;this._sizeChanged=!0},$e.prototype.sourceRectAtTime=function(){if(this.prepareFrame(this.comp.renderedFrame-this.data.st),this.renderInnerContent(),this._sizeChanged){this._sizeChanged=!1;var t=this.layerElement.getBBox();this.bbox={top:t.y,left:t.x,width:t.width,height:t.height}}return this.bbox},$e.prototype.renderInnerContent=function(){if(!this.data.singleShape&&(this.textAnimator.getMeasures(this.textProperty.currentData,this.lettersChangedFlag),this.lettersChangedFlag||this.textAnimator.lettersChangedFlag)){this._sizeChanged=!0;var t,e,n=this.textAnimator.renderedLetters,i=this.textProperty.currentData.l;e=i.length;var s,r;for(t=0;t<e;t+=1)i[t].n||(s=n[t],r=this.textSpans[t],s._mdf.m&&r.setAttribute("transform",s.m),s._mdf.o&&r.setAttribute("opacity",s.o),s._mdf.sw&&r.setAttribute("stroke-width",s.sw),s._mdf.sc&&r.setAttribute("stroke",s.sc),s._mdf.fc&&r.setAttribute("fill",s.fc))}};function Yt(t,e,n){this.shapes=[],this.shapesData=t.shapes,this.stylesList=[],this.shapeModifiers=[],this.itemsData=[],this.processedElements=[],this.animatedContents=[],this.initElement(t,e,n),this.prevViewData=[]}P([Ye,en,sn,In,tn,Xe,an],Yt),Yt.prototype.initSecondaryElement=function(){},Yt.prototype.identityMatrix=new M,Yt.prototype.buildExpressionInterface=function(){},Yt.prototype.createContent=function(){this.searchShapes(this.shapesData,this.itemsData,this.prevViewData,this.layerElement,0,[],!0),this.filterUniqueShapes()},Yt.prototype.filterUniqueShapes=function(){var t,e=this.shapes.length,n,i,s=this.stylesList.length,r,c=[],S=!1;for(i=0;i<s;i+=1){for(r=this.stylesList[i],S=!1,c.length=0,t=0;t<e;t+=1)n=this.shapes[t],n.styles.indexOf(r)!==-1&&(c.push(n),S=n._isAnimated||S);c.length>1&&S&&this.setShapesAsAnimated(c)}},Yt.prototype.setShapesAsAnimated=function(t){var e,n=t.length;for(e=0;e<n;e+=1)t[e].setAsAnimated()},Yt.prototype.createStyleElement=function(t,e){var n,i=new Ln(t,e),s=i.pElem;return t.ty==="st"?n=new Pn(this,t,i):t.ty==="fl"?n=new Fn(this,t,i):(t.ty==="gf"||t.ty==="gs")&&(n=new(t.ty==="gf"?nn:Tn)(this,t,i),this.globalData.defs.appendChild(n.gf),n.maskId&&(this.globalData.defs.appendChild(n.ms),this.globalData.defs.appendChild(n.of),s.setAttribute("mask","url("+_t+"#"+n.maskId+")"))),(t.ty==="st"||t.ty==="gs")&&(s.setAttribute("stroke-linecap",_[t.lc||2]),s.setAttribute("stroke-linejoin",x[t.lj||2]),s.setAttribute("fill-opacity","0"),t.lj===1&&s.setAttribute("stroke-miterlimit",t.ml)),t.r===2&&s.setAttribute("fill-rule","evenodd"),t.ln&&s.setAttribute("id",t.ln),t.cl&&s.setAttribute("class",t.cl),t.bm&&(s.style["mix-blend-mode"]=p(t.bm)),this.stylesList.push(i),this.addToAnimatedContents(t,n),n},Yt.prototype.createGroupElement=function(t){var e=new mi;return t.ln&&e.gr.setAttribute("id",t.ln),t.cl&&e.gr.setAttribute("class",t.cl),t.bm&&(e.gr.style["mix-blend-mode"]=p(t.bm)),e},Yt.prototype.createTransformElement=function(t,e){var n=ht.getTransformProperty(this,t,this),i=new ui(n,n.o,e);return this.addToAnimatedContents(t,i),i},Yt.prototype.createShapeElement=function(t,e,n){var i=4;t.ty==="rc"?i=5:t.ty==="el"?i=6:t.ty==="sr"&&(i=7);var s=new En(e,n,dt.getShapeProp(this,t,i,this));return this.shapes.push(s),this.addShapeToModifiers(s),this.addToAnimatedContents(t,s),s},Yt.prototype.addToAnimatedContents=function(t,e){for(var n=0,i=this.animatedContents.length;n<i;){if(this.animatedContents[n].element===e)return;n+=1}this.animatedContents.push({fn:gi.createRenderFunction(t),element:e,data:t})},Yt.prototype.setElementStyles=function(t){var e=t.styles,n,i=this.stylesList.length;for(n=0;n<i;n+=1)this.stylesList[n].closed||e.push(this.stylesList[n])},Yt.prototype.reloadShapes=function(){this._isFirstFrame=!0;var t,e=this.itemsData.length;for(t=0;t<e;t+=1)this.prevViewData[t]=this.itemsData[t];for(this.searchShapes(this.shapesData,this.itemsData,this.prevViewData,this.layerElement,0,[],!0),this.filterUniqueShapes(),e=this.dynamicProperties.length,t=0;t<e;t+=1)this.dynamicProperties[t].getValue();this.renderModifiers()},Yt.prototype.searchShapes=function(t,e,n,i,s,r,c){var S=[].concat(r),u,I=t.length-1,T,C,b=[],F=[],R,y,A;for(u=I;u>=0;u-=1){if(A=this.searchProcessedElement(t[u]),A?e[u]=n[A-1]:t[u]._render=c,t[u].ty==="fl"||t[u].ty==="st"||t[u].ty==="gf"||t[u].ty==="gs")A?e[u].style.closed=!1:e[u]=this.createStyleElement(t[u],s),t[u]._render&&e[u].style.pElem.parentNode!==i&&i.appendChild(e[u].style.pElem),b.push(e[u].style);else if(t[u].ty==="gr"){if(!A)e[u]=this.createGroupElement(t[u]);else for(C=e[u].it.length,T=0;T<C;T+=1)e[u].prevViewData[T]=e[u].it[T];this.searchShapes(t[u].it,e[u].it,e[u].prevViewData,e[u].gr,s+1,S,c),t[u]._render&&e[u].gr.parentNode!==i&&i.appendChild(e[u].gr)}else t[u].ty==="tr"?(A||(e[u]=this.createTransformElement(t[u],i)),R=e[u].transform,S.push(R)):t[u].ty==="sh"||t[u].ty==="rc"||t[u].ty==="el"||t[u].ty==="sr"?(A||(e[u]=this.createShapeElement(t[u],S,s)),this.setElementStyles(e[u])):t[u].ty==="tm"||t[u].ty==="rd"||t[u].ty==="ms"||t[u].ty==="pb"?(A?(y=e[u],y.closed=!1):(y=mt.getModifier(t[u].ty),y.init(this,t[u]),e[u]=y,this.shapeModifiers.push(y)),F.push(y)):t[u].ty==="rp"&&(A?(y=e[u],y.closed=!0):(y=mt.getModifier(t[u].ty),e[u]=y,y.init(this,t,u,e),this.shapeModifiers.push(y),c=!1),F.push(y));this.addProcessedElement(t[u],u+1)}for(I=b.length,u=0;u<I;u+=1)b[u].closed=!0;for(I=F.length,u=0;u<I;u+=1)F[u].closed=!0},Yt.prototype.renderInnerContent=function(){this.renderModifiers();var t,e=this.stylesList.length;for(t=0;t<e;t+=1)this.stylesList[t].reset();for(this.renderShape(),t=0;t<e;t+=1)(this.stylesList[t]._mdf||this._isFirstFrame)&&(this.stylesList[t].msElem&&(this.stylesList[t].msElem.setAttribute("d",this.stylesList[t].d),this.stylesList[t].d="M0 0"+this.stylesList[t].d),this.stylesList[t].pElem.setAttribute("d",this.stylesList[t].d||"M0 0"))},Yt.prototype.renderShape=function(){var t,e=this.animatedContents.length,n;for(t=0;t<e;t+=1)n=this.animatedContents[t],(this._isFirstFrame||n.element._isAnimated)&&n.data!==!0&&n.fn(n.data,n.element,this._isFirstFrame)},Yt.prototype.destroy=function(){this.destroyBaseElement(),this.shapesData=null,this.itemsData=null};function wi(t,e){this.filterManager=e;var n=Z("feColorMatrix");if(n.setAttribute("type","matrix"),n.setAttribute("color-interpolation-filters","linearRGB"),n.setAttribute("values","0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0"),n.setAttribute("result","f1"),t.appendChild(n),n=Z("feColorMatrix"),n.setAttribute("type","matrix"),n.setAttribute("color-interpolation-filters","sRGB"),n.setAttribute("values","1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"),n.setAttribute("result","f2"),t.appendChild(n),this.matrixFilter=n,e.effectElements[2].p.v!==100||e.effectElements[2].p.k){var i=Z("feMerge");t.appendChild(i);var s=Z("feMergeNode");s.setAttribute("in","SourceGraphic"),i.appendChild(s),s=Z("feMergeNode"),s.setAttribute("in","f2"),i.appendChild(s)}}wi.prototype.renderFrame=function(t){if(t||this.filterManager._mdf){var e=this.filterManager.effectElements[0].p.v,n=this.filterManager.effectElements[1].p.v,i=this.filterManager.effectElements[2].p.v/100;this.matrixFilter.setAttribute("values",n[0]-e[0]+" 0 0 0 "+e[0]+" "+(n[1]-e[1])+" 0 0 0 "+e[1]+" "+(n[2]-e[2])+" 0 0 0 "+e[2]+" 0 0 0 "+i+" 0")}};function yi(t,e){this.filterManager=e;var n=Z("feColorMatrix");n.setAttribute("type","matrix"),n.setAttribute("color-interpolation-filters","sRGB"),n.setAttribute("values","1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"),t.appendChild(n),this.matrixFilter=n}yi.prototype.renderFrame=function(t){if(t||this.filterManager._mdf){var e=this.filterManager.effectElements[2].p.v,n=this.filterManager.effectElements[6].p.v;this.matrixFilter.setAttribute("values","0 0 0 0 "+e[0]+" 0 0 0 0 "+e[1]+" 0 0 0 0 "+e[2]+" 0 0 0 "+n+" 0")}};function bi(t,e){t.setAttribute("x","-100%"),t.setAttribute("y","-100%"),t.setAttribute("width","300%"),t.setAttribute("height","300%"),this.filterManager=e;var n=Z("feGaussianBlur");t.appendChild(n),this.feGaussianBlur=n}bi.prototype.renderFrame=function(t){if(t||this.filterManager._mdf){var e=this.filterManager.effectElements[0].p.v*.3,n=this.filterManager.effectElements[1].p.v,i=n==3?0:e,s=n==2?0:e;this.feGaussianBlur.setAttribute("stdDeviation",i+" "+s);var r=this.filterManager.effectElements[2].p.v==1?"wrap":"duplicate";this.feGaussianBlur.setAttribute("edgeMode",r)}};function Bn(t,e){this.initialized=!1,this.filterManager=e,this.elem=t,this.paths=[]}Bn.prototype.initialize=function(){var t=this.elem.layerElement.children||this.elem.layerElement.childNodes,e,n,i,s;for(this.filterManager.effectElements[1].p.v===1?(s=this.elem.maskManager.masksProperties.length,i=0):(i=this.filterManager.effectElements[0].p.v-1,s=i+1),n=Z("g"),n.setAttribute("fill","none"),n.setAttribute("stroke-linecap","round"),n.setAttribute("stroke-dashoffset",1);i<s;i+=1)e=Z("path"),n.appendChild(e),this.paths.push({p:e,m:i});if(this.filterManager.effectElements[10].p.v===3){var r=Z("mask"),c=Gt();r.setAttribute("id",c),r.setAttribute("mask-type","alpha"),r.appendChild(n),this.elem.globalData.defs.appendChild(r);var S=Z("g");for(S.setAttribute("mask","url("+_t+"#"+c+")");t[0];)S.appendChild(t[0]);this.elem.layerElement.appendChild(S),this.masker=r,n.setAttribute("stroke","#fff")}else if(this.filterManager.effectElements[10].p.v===1||this.filterManager.effectElements[10].p.v===2){if(this.filterManager.effectElements[10].p.v===2)for(t=this.elem.layerElement.children||this.elem.layerElement.childNodes;t.length;)this.elem.layerElement.removeChild(t[0]);this.elem.layerElement.appendChild(n),this.elem.layerElement.removeAttribute("mask"),n.setAttribute("stroke","#fff")}this.initialized=!0,this.pathMasker=n},Bn.prototype.renderFrame=function(t){this.initialized||this.initialize();var e,n=this.paths.length,i,s;for(e=0;e<n;e+=1)if(this.paths[e].m!==-1&&(i=this.elem.maskManager.viewData[this.paths[e].m],s=this.paths[e].p,(t||this.filterManager._mdf||i.prop._mdf)&&s.setAttribute("d",i.lastPath),t||this.filterManager.effectElements[9].p._mdf||this.filterManager.effectElements[4].p._mdf||this.filterManager.effectElements[7].p._mdf||this.filterManager.effectElements[8].p._mdf||i.prop._mdf)){var r;if(this.filterManager.effectElements[7].p.v!==0||this.filterManager.effectElements[8].p.v!==100){var c=Math.min(this.filterManager.effectElements[7].p.v,this.filterManager.effectElements[8].p.v)*.01,S=Math.max(this.filterManager.effectElements[7].p.v,this.filterManager.effectElements[8].p.v)*.01,u=s.getTotalLength();r="0 0 0 "+u*c+" ";var I=u*(S-c),T=1+this.filterManager.effectElements[4].p.v*2*this.filterManager.effectElements[9].p.v*.01,C=Math.floor(I/T),b;for(b=0;b<C;b+=1)r+="1 "+this.filterManager.effectElements[4].p.v*2*this.filterManager.effectElements[9].p.v*.01+" ";r+="0 "+u*10+" 0 0"}else r="1 "+this.filterManager.effectElements[4].p.v*2*this.filterManager.effectElements[9].p.v*.01;s.setAttribute("stroke-dasharray",r)}if((t||this.filterManager.effectElements[4].p._mdf)&&this.pathMasker.setAttribute("stroke-width",this.filterManager.effectElements[4].p.v*2),(t||this.filterManager.effectElements[6].p._mdf)&&this.pathMasker.setAttribute("opacity",this.filterManager.effectElements[6].p.v),(this.filterManager.effectElements[10].p.v===1||this.filterManager.effectElements[10].p.v===2)&&(t||this.filterManager.effectElements[3].p._mdf)){var F=this.filterManager.effectElements[3].p.v;this.pathMasker.setAttribute("stroke","rgb("+Nt(F[0]*255)+","+Nt(F[1]*255)+","+Nt(F[2]*255)+")")}};function _i(t,e){this.filterManager=e;var n=Z("feColorMatrix");n.setAttribute("type","matrix"),n.setAttribute("color-interpolation-filters","linearRGB"),n.setAttribute("values","0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0"),n.setAttribute("result","f1"),t.appendChild(n);var i=Z("feComponentTransfer");i.setAttribute("color-interpolation-filters","sRGB"),t.appendChild(i),this.matrixFilter=i;var s=Z("feFuncR");s.setAttribute("type","table"),i.appendChild(s),this.feFuncR=s;var r=Z("feFuncG");r.setAttribute("type","table"),i.appendChild(r),this.feFuncG=r;var c=Z("feFuncB");c.setAttribute("type","table"),i.appendChild(c),this.feFuncB=c}_i.prototype.renderFrame=function(t){if(t||this.filterManager._mdf){var e=this.filterManager.effectElements[0].p.v,n=this.filterManager.effectElements[1].p.v,i=this.filterManager.effectElements[2].p.v,s=i[0]+" "+n[0]+" "+e[0],r=i[1]+" "+n[1]+" "+e[1],c=i[2]+" "+n[2]+" "+e[2];this.feFuncR.setAttribute("tableValues",s),this.feFuncG.setAttribute("tableValues",r),this.feFuncB.setAttribute("tableValues",c)}};function xn(t,e){this.filterManager=e;var n=this.filterManager.effectElements,i=Z("feComponentTransfer");(n[10].p.k||n[10].p.v!==0||n[11].p.k||n[11].p.v!==1||n[12].p.k||n[12].p.v!==1||n[13].p.k||n[13].p.v!==0||n[14].p.k||n[14].p.v!==1)&&(this.feFuncR=this.createFeFunc("feFuncR",i)),(n[17].p.k||n[17].p.v!==0||n[18].p.k||n[18].p.v!==1||n[19].p.k||n[19].p.v!==1||n[20].p.k||n[20].p.v!==0||n[21].p.k||n[21].p.v!==1)&&(this.feFuncG=this.createFeFunc("feFuncG",i)),(n[24].p.k||n[24].p.v!==0||n[25].p.k||n[25].p.v!==1||n[26].p.k||n[26].p.v!==1||n[27].p.k||n[27].p.v!==0||n[28].p.k||n[28].p.v!==1)&&(this.feFuncB=this.createFeFunc("feFuncB",i)),(n[31].p.k||n[31].p.v!==0||n[32].p.k||n[32].p.v!==1||n[33].p.k||n[33].p.v!==1||n[34].p.k||n[34].p.v!==0||n[35].p.k||n[35].p.v!==1)&&(this.feFuncA=this.createFeFunc("feFuncA",i)),(this.feFuncR||this.feFuncG||this.feFuncB||this.feFuncA)&&(i.setAttribute("color-interpolation-filters","sRGB"),t.appendChild(i),i=Z("feComponentTransfer")),(n[3].p.k||n[3].p.v!==0||n[4].p.k||n[4].p.v!==1||n[5].p.k||n[5].p.v!==1||n[6].p.k||n[6].p.v!==0||n[7].p.k||n[7].p.v!==1)&&(i.setAttribute("color-interpolation-filters","sRGB"),t.appendChild(i),this.feFuncRComposed=this.createFeFunc("feFuncR",i),this.feFuncGComposed=this.createFeFunc("feFuncG",i),this.feFuncBComposed=this.createFeFunc("feFuncB",i))}xn.prototype.createFeFunc=function(t,e){var n=Z(t);return n.setAttribute("type","table"),e.appendChild(n),n},xn.prototype.getTableValue=function(t,e,n,i,s){for(var r=0,c=256,S,u=Math.min(t,e),I=Math.max(t,e),T=Array.call(null,{length:c}),C,b=0,F=s-i,R=e-t;r<=256;)S=r/256,S<=u?C=R<0?s:i:S>=I?C=R<0?i:s:C=i+F*Math.pow((S-t)/R,1/n),T[b]=C,b+=1,r+=256/(c-1);return T.join(" ")},xn.prototype.renderFrame=function(t){if(t||this.filterManager._mdf){var e,n=this.filterManager.effectElements;this.feFuncRComposed&&(t||n[3].p._mdf||n[4].p._mdf||n[5].p._mdf||n[6].p._mdf||n[7].p._mdf)&&(e=this.getTableValue(n[3].p.v,n[4].p.v,n[5].p.v,n[6].p.v,n[7].p.v),this.feFuncRComposed.setAttribute("tableValues",e),this.feFuncGComposed.setAttribute("tableValues",e),this.feFuncBComposed.setAttribute("tableValues",e)),this.feFuncR&&(t||n[10].p._mdf||n[11].p._mdf||n[12].p._mdf||n[13].p._mdf||n[14].p._mdf)&&(e=this.getTableValue(n[10].p.v,n[11].p.v,n[12].p.v,n[13].p.v,n[14].p.v),this.feFuncR.setAttribute("tableValues",e)),this.feFuncG&&(t||n[17].p._mdf||n[18].p._mdf||n[19].p._mdf||n[20].p._mdf||n[21].p._mdf)&&(e=this.getTableValue(n[17].p.v,n[18].p.v,n[19].p.v,n[20].p.v,n[21].p.v),this.feFuncG.setAttribute("tableValues",e)),this.feFuncB&&(t||n[24].p._mdf||n[25].p._mdf||n[26].p._mdf||n[27].p._mdf||n[28].p._mdf)&&(e=this.getTableValue(n[24].p.v,n[25].p.v,n[26].p.v,n[27].p.v,n[28].p.v),this.feFuncB.setAttribute("tableValues",e)),this.feFuncA&&(t||n[31].p._mdf||n[32].p._mdf||n[33].p._mdf||n[34].p._mdf||n[35].p._mdf)&&(e=this.getTableValue(n[31].p.v,n[32].p.v,n[33].p.v,n[34].p.v,n[35].p.v),this.feFuncA.setAttribute("tableValues",e))}};function xi(t,e){var n=e.container.globalData.renderConfig.filterSize;t.setAttribute("x",n.x),t.setAttribute("y",n.y),t.setAttribute("width",n.width),t.setAttribute("height",n.height),this.filterManager=e;var i=Z("feGaussianBlur");i.setAttribute("in","SourceAlpha"),i.setAttribute("result","drop_shadow_1"),i.setAttribute("stdDeviation","0"),this.feGaussianBlur=i,t.appendChild(i);var s=Z("feOffset");s.setAttribute("dx","25"),s.setAttribute("dy","0"),s.setAttribute("in","drop_shadow_1"),s.setAttribute("result","drop_shadow_2"),this.feOffset=s,t.appendChild(s);var r=Z("feFlood");r.setAttribute("flood-color","#00ff00"),r.setAttribute("flood-opacity","1"),r.setAttribute("result","drop_shadow_3"),this.feFlood=r,t.appendChild(r);var c=Z("feComposite");c.setAttribute("in","drop_shadow_3"),c.setAttribute("in2","drop_shadow_2"),c.setAttribute("operator","in"),c.setAttribute("result","drop_shadow_4"),t.appendChild(c);var S=Z("feMerge");t.appendChild(S);var u=Z("feMergeNode");S.appendChild(u),u=Z("feMergeNode"),u.setAttribute("in","SourceGraphic"),this.feMergeNode=u,this.feMerge=S,this.originalNodeAdded=!1,S.appendChild(u)}xi.prototype.renderFrame=function(t){if(t||this.filterManager._mdf){if((t||this.filterManager.effectElements[4].p._mdf)&&this.feGaussianBlur.setAttribute("stdDeviation",this.filterManager.effectElements[4].p.v/4),t||this.filterManager.effectElements[0].p._mdf){var e=this.filterManager.effectElements[0].p.v;this.feFlood.setAttribute("flood-color",D(Math.round(e[0]*255),Math.round(e[1]*255),Math.round(e[2]*255)))}if((t||this.filterManager.effectElements[1].p._mdf)&&this.feFlood.setAttribute("flood-opacity",this.filterManager.effectElements[1].p.v/255),t||this.filterManager.effectElements[2].p._mdf||this.filterManager.effectElements[3].p._mdf){var n=this.filterManager.effectElements[3].p.v,i=(this.filterManager.effectElements[2].p.v-90)*Et,s=n*Math.cos(i),r=n*Math.sin(i);this.feOffset.setAttribute("dx",s),this.feOffset.setAttribute("dy",r)}}};var dn=[];function ln(t,e,n){this.initialized=!1,this.filterManager=e,this.filterElem=t,this.elem=n,n.matteElement=Z("g"),n.matteElement.appendChild(n.layerElement),n.matteElement.appendChild(n.transformedElement),n.baseElement=n.matteElement}ln.prototype.findSymbol=function(t){for(var e=0,n=dn.length;e<n;){if(dn[e]===t)return dn[e];e+=1}return null},ln.prototype.replaceInParent=function(t,e){var n=t.layerElement.parentNode;if(n){for(var i=n.children,s=0,r=i.length;s<r&&i[s]!==t.layerElement;)s+=1;var c;s<=r-2&&(c=i[s+1]);var S=Z("use");S.setAttribute("href","#"+e),c?n.insertBefore(S,c):n.appendChild(S)}},ln.prototype.setElementAsMask=function(t,e){if(!this.findSymbol(e)){var n=Gt(),i=Z("mask");i.setAttribute("id",e.layerId),i.setAttribute("mask-type","alpha"),dn.push(e);var s=t.globalData.defs;s.appendChild(i);var r=Z("symbol");r.setAttribute("id",n),this.replaceInParent(e,n),r.appendChild(e.layerElement),s.appendChild(r);var c=Z("use");c.setAttribute("href","#"+n),i.appendChild(c),e.data.hd=!1,e.show()}t.setMatte(e.layerId)},ln.prototype.initialize=function(){for(var t=this.filterManager.effectElements[0].p.v,e=this.elem.comp.elements,n=0,i=e.length;n<i;)e[n]&&e[n].data.ind===t&&this.setElementAsMask(this.elem,e[n]),n+=1;this.initialized=!0},ln.prototype.renderFrame=function(){this.initialized||this.initialize()};function Ci(){}var $t=(function(){var t={},e=[],n=0,i=0,s=0,r=!0,c=!1;function S(w){for(var d=0,v=w.target;d<i;)e[d].animation===v&&(e.splice(d,1),d-=1,i-=1,v.isPaused||C()),d+=1}function u(w,d){if(!w)return null;for(var v=0;v<i;){if(e[v].elem===w&&e[v].elem!==null)return e[v].animation;v+=1}var O=new yt;return b(O,w),O.setData(w,d),O}function I(){var w,d=e.length,v=[];for(w=0;w<d;w+=1)v.push(e[w].animation);return v}function T(){s+=1,at()}function C(){s-=1}function b(w,d){w.addEventListener("destroy",S),w.addEventListener("_active",T),w.addEventListener("_idle",C),e.push({elem:d,animation:w}),i+=1}function F(w){var d=new yt;return b(d,null),d.setParams(w),d}function R(w,d){var v;for(v=0;v<i;v+=1)e[v].animation.setSpeed(w,d)}function y(w,d){var v;for(v=0;v<i;v+=1)e[v].animation.setDirection(w,d)}function A(w){var d;for(d=0;d<i;d+=1)e[d].animation.play(w)}function f(w){var d=w-n,v;for(v=0;v<i;v+=1)e[v].animation.advanceTime(d);n=w,s&&!c?pt.requestAnimationFrame(f):r=!0}function o(w){n=w,pt.requestAnimationFrame(f)}function a(w){var d;for(d=0;d<i;d+=1)e[d].animation.pause(w)}function l(w,d,v){var O;for(O=0;O<i;O+=1)e[O].animation.goToAndStop(w,d,v)}function h(w){var d;for(d=0;d<i;d+=1)e[d].animation.stop(w)}function g(w){var d;for(d=0;d<i;d+=1)e[d].animation.togglePause(w)}function m(w){var d;for(d=i-1;d>=0;d-=1)e[d].animation.destroy(w)}function B(w,d,v){var O=[].concat([].slice.call(document.getElementsByClassName("lottie")),[].slice.call(document.getElementsByClassName("bodymovin"))),it,G=O.length;for(it=0;it<G;it+=1)v&&O[it].setAttribute("data-bm-type",v),u(O[it],w);if(d&&G===0){v||(v="svg");var bt=document.getElementsByTagName("body")[0];bt.innerText="";var Mt=Tt("div");Mt.style.width="100%",Mt.style.height="100%",Mt.setAttribute("data-bm-type",v),bt.appendChild(Mt),u(Mt,w)}}function Q(){var w;for(w=0;w<i;w+=1)e[w].animation.resize()}function at(){!c&&s&&r&&(pt.requestAnimationFrame(o),r=!1)}function lt(){c=!0}function nt(){c=!1,at()}function Y(w,d){var v;for(v=0;v<i;v+=1)e[v].animation.setVolume(w,d)}function W(w){var d;for(d=0;d<i;d+=1)e[d].animation.mute(w)}function K(w){var d;for(d=0;d<i;d+=1)e[d].animation.unmute(w)}return t.registerAnimation=u,t.loadAnimation=F,t.setSpeed=R,t.setDirection=y,t.play=A,t.pause=a,t.stop=h,t.togglePause=g,t.searchAnimations=B,t.resize=Q,t.goToAndStop=l,t.destroy=m,t.freeze=lt,t.unfreeze=nt,t.setVolume=Y,t.mute=W,t.unmute=K,t.getRegisteredAnimations=I,t})(),yt=function(){this._cbs=[],this.name="",this.path="",this.isLoaded=!1,this.currentFrame=0,this.currentRawFrame=0,this.firstFrame=0,this.totalFrames=0,this.frameRate=0,this.frameMult=0,this.playSpeed=1,this.playDirection=1,this.playCount=0,this.animationData={},this.assets=[],this.isPaused=!0,this.autoplay=!1,this.loop=!0,this.renderer=null,this.animationID=Gt(),this.assetsPath="",this.timeCompleted=0,this.segmentPos=0,this.isSubframeEnabled=Ut,this.segments=[],this._idle=!0,this._completedLoop=!1,this.projectInterface=we(),this.imagePreloader=new Pt,this.audioController=Ot(),this.markers=[],this.configAnimation=this.configAnimation.bind(this),this.onSetupError=this.onSetupError.bind(this),this.onSegmentComplete=this.onSegmentComplete.bind(this)};P([st],yt),yt.prototype.setParams=function(t){(t.wrapper||t.container)&&(this.wrapper=t.wrapper||t.container);var e="svg";switch(t.animType?e=t.animType:t.renderer&&(e=t.renderer),e){case"canvas":this.renderer=new CanvasRenderer(this,t.rendererSettings);break;case"svg":this.renderer=new ee(this,t.rendererSettings);break;default:this.renderer=new HybridRenderer(this,t.rendererSettings);break}this.imagePreloader.setCacheType(e,this.renderer.globalData.defs),this.renderer.setProjectInterface(this.projectInterface),this.animType=e,t.loop===""||t.loop===null||t.loop===void 0||t.loop===!0?this.loop=!0:t.loop===!1?this.loop=!1:this.loop=parseInt(t.loop,10),this.autoplay="autoplay"in t?t.autoplay:!0,this.name=t.name?t.name:"",this.autoloadSegments=Object.prototype.hasOwnProperty.call(t,"autoloadSegments")?t.autoloadSegments:!0,this.assetsPath=t.assetsPath,this.initialSegment=t.initialSegment,t.audioFactory&&this.audioController.setAudioFactory(t.audioFactory),t.animationData?this.setupAnimation(t.animationData):t.path&&(t.path.lastIndexOf("\\")!==-1?this.path=t.path.substr(0,t.path.lastIndexOf("\\")+1):this.path=t.path.substr(0,t.path.lastIndexOf("/")+1),this.fileName=t.path.substr(t.path.lastIndexOf("/")+1),this.fileName=this.fileName.substr(0,this.fileName.lastIndexOf(".json")),k.loadAnimation(t.path,this.configAnimation,this.onSetupError))},yt.prototype.onSetupError=function(){this.trigger("data_failed")},yt.prototype.setupAnimation=function(t){k.completeAnimation(t,this.configAnimation)},yt.prototype.setData=function(t,e){e&&typeof e!="object"&&(e=JSON.parse(e));var n={wrapper:t,animationData:e},i=t.attributes;n.path=i.getNamedItem("data-animation-path")?i.getNamedItem("data-animation-path").value:i.getNamedItem("data-bm-path")?i.getNamedItem("data-bm-path").value:i.getNamedItem("bm-path")?i.getNamedItem("bm-path").value:"",n.animType=i.getNamedItem("data-anim-type")?i.getNamedItem("data-anim-type").value:i.getNamedItem("data-bm-type")?i.getNamedItem("data-bm-type").value:i.getNamedItem("bm-type")?i.getNamedItem("bm-type").value:i.getNamedItem("data-bm-renderer")?i.getNamedItem("data-bm-renderer").value:i.getNamedItem("bm-renderer")?i.getNamedItem("bm-renderer").value:"canvas";var s=i.getNamedItem("data-anim-loop")?i.getNamedItem("data-anim-loop").value:i.getNamedItem("data-bm-loop")?i.getNamedItem("data-bm-loop").value:i.getNamedItem("bm-loop")?i.getNamedItem("bm-loop").value:"";s==="false"?n.loop=!1:s==="true"?n.loop=!0:s!==""&&(n.loop=parseInt(s,10)),n.autoplay=(i.getNamedItem("data-anim-autoplay")?i.getNamedItem("data-anim-autoplay").value:i.getNamedItem("data-bm-autoplay")?i.getNamedItem("data-bm-autoplay").value:i.getNamedItem("bm-autoplay")?i.getNamedItem("bm-autoplay").value:!0)!=="false",n.name=i.getNamedItem("data-name")?i.getNamedItem("data-name").value:i.getNamedItem("data-bm-name")?i.getNamedItem("data-bm-name").value:i.getNamedItem("bm-name")?i.getNamedItem("bm-name").value:"",(i.getNamedItem("data-anim-prerender")?i.getNamedItem("data-anim-prerender").value:i.getNamedItem("data-bm-prerender")?i.getNamedItem("data-bm-prerender").value:i.getNamedItem("bm-prerender")?i.getNamedItem("bm-prerender").value:"")==="false"&&(n.prerender=!1),this.setParams(n)},yt.prototype.includeLayers=function(t){t.op>this.animationData.op&&(this.animationData.op=t.op,this.totalFrames=Math.floor(t.op-this.animationData.ip));var e=this.animationData.layers,n,i=e.length,s=t.layers,r,c=s.length;for(r=0;r<c;r+=1)for(n=0;n<i;){if(e[n].id===s[r].id){e[n]=s[r];break}n+=1}if((t.chars||t.fonts)&&(this.renderer.globalData.fontManager.addChars(t.chars),this.renderer.globalData.fontManager.addFonts(t.fonts,this.renderer.globalData.defs)),t.assets)for(i=t.assets.length,n=0;n<i;n+=1)this.animationData.assets.push(t.assets[n]);this.animationData.__complete=!1,k.completeAnimation(this.animationData,this.onSegmentComplete)},yt.prototype.onSegmentComplete=function(t){this.animationData=t,ve&&ve.initExpressions(this),this.loadNextSegment()},yt.prototype.loadNextSegment=function(){var t=this.animationData.segments;if(!t||t.length===0||!this.autoloadSegments){this.trigger("data_ready"),this.timeCompleted=this.totalFrames;return}var e=t.shift();this.timeCompleted=e.time*this.frameRate;var n=this.path+this.fileName+"_"+this.segmentPos+".json";this.segmentPos+=1,k.loadData(n,this.includeLayers.bind(this),function(){this.trigger("data_failed")}.bind(this))},yt.prototype.loadSegments=function(){this.animationData.segments||(this.timeCompleted=this.totalFrames),this.loadNextSegment()},yt.prototype.imagesLoaded=function(){this.trigger("loaded_images"),this.checkLoaded()},yt.prototype.preloadImages=function(){this.imagePreloader.setAssetsPath(this.assetsPath),this.imagePreloader.setPath(this.path),this.imagePreloader.loadAssets(this.animationData.assets,this.imagesLoaded.bind(this))},yt.prototype.configAnimation=function(t){if(this.renderer)try{this.animationData=t,this.initialSegment?(this.totalFrames=Math.floor(this.initialSegment[1]-this.initialSegment[0]),this.firstFrame=Math.round(this.initialSegment[0])):(this.totalFrames=Math.floor(this.animationData.op-this.animationData.ip),this.firstFrame=Math.round(this.animationData.ip)),this.renderer.configAnimation(t),t.assets||(t.assets=[]),this.assets=this.animationData.assets,this.frameRate=this.animationData.fr,this.frameMult=this.animationData.fr/1e3,this.renderer.searchExtraCompositions(t.assets),this.markers=rn(t.markers||[]),this.trigger("config_ready"),this.preloadImages(),this.loadSegments(),this.updaFrameModifier(),this.waitForFontsLoaded(),this.isPaused&&this.audioController.pause()}catch(e){this.triggerConfigError(e)}},yt.prototype.waitForFontsLoaded=function(){this.renderer&&(this.renderer.globalData.fontManager.isLoaded?this.checkLoaded():setTimeout(this.waitForFontsLoaded.bind(this),20))},yt.prototype.checkLoaded=function(){!this.isLoaded&&this.renderer.globalData.fontManager.isLoaded&&(this.imagePreloader.loadedImages()||this.renderer.rendererType!=="canvas")&&this.imagePreloader.loadedFootages()&&(this.isLoaded=!0,ve&&ve.initExpressions(this),this.renderer.initItems(),setTimeout(function(){this.trigger("DOMLoaded")}.bind(this),0),this.gotoFrame(),this.autoplay&&this.play())},yt.prototype.resize=function(){this.renderer.updateContainerSize()},yt.prototype.setSubframe=function(t){this.isSubframeEnabled=!!t},yt.prototype.gotoFrame=function(){this.currentFrame=this.isSubframeEnabled?this.currentRawFrame:~~this.currentRawFrame,this.timeCompleted!==this.totalFrames&&this.currentFrame>this.timeCompleted&&(this.currentFrame=this.timeCompleted),this.trigger("enterFrame"),this.renderFrame(),this.trigger("drawnFrame")},yt.prototype.renderFrame=function(){if(!(this.isLoaded===!1||!this.renderer))try{this.renderer.renderFrame(this.currentFrame+this.firstFrame)}catch(t){this.triggerRenderFrameError(t)}},yt.prototype.play=function(t){t&&this.name!==t||this.isPaused===!0&&(this.isPaused=!1,this.audioController.resume(),this._idle&&(this._idle=!1,this.trigger("_active")))},yt.prototype.pause=function(t){t&&this.name!==t||this.isPaused===!1&&(this.isPaused=!0,this._idle=!0,this.trigger("_idle"),this.audioController.pause())},yt.prototype.togglePause=function(t){t&&this.name!==t||(this.isPaused===!0?this.play():this.pause())},yt.prototype.stop=function(t){t&&this.name!==t||(this.pause(),this.playCount=0,this._completedLoop=!1,this.setCurrentRawFrameValue(0))},yt.prototype.getMarkerData=function(t){for(var e,n=0;n<this.markers.length;n+=1)if(e=this.markers[n],e.payload&&e.payload.name===t)return e;return null},yt.prototype.goToAndStop=function(t,e,n){if(!(n&&this.name!==n)){var i=Number(t);if(isNaN(i)){var s=this.getMarkerData(t);s&&this.goToAndStop(s.time,!0)}else e?this.setCurrentRawFrameValue(t):this.setCurrentRawFrameValue(t*this.frameModifier);this.pause()}},yt.prototype.goToAndPlay=function(t,e,n){if(!(n&&this.name!==n)){var i=Number(t);if(isNaN(i)){var s=this.getMarkerData(t);s&&(s.duration?this.playSegments([s.time,s.time+s.duration],!0):this.goToAndStop(s.time,!0))}else this.goToAndStop(i,e,n);this.play()}},yt.prototype.advanceTime=function(t){if(!(this.isPaused===!0||this.isLoaded===!1)){var e=this.currentRawFrame+t*this.frameModifier,n=!1;e>=this.totalFrames-1&&this.frameModifier>0?!this.loop||this.playCount===this.loop?this.checkSegments(e>this.totalFrames?e%this.totalFrames:0)||(n=!0,e=this.totalFrames-1):e>=this.totalFrames?(this.playCount+=1,this.checkSegments(e%this.totalFrames)||(this.setCurrentRawFrameValue(e%this.totalFrames),this._completedLoop=!0,this.trigger("loopComplete"))):this.setCurrentRawFrameValue(e):e<0?this.checkSegments(e%this.totalFrames)||(this.loop&&!(this.playCount--<=0&&this.loop!==!0)?(this.setCurrentRawFrameValue(this.totalFrames+e%this.totalFrames),this._completedLoop?this.trigger("loopComplete"):this._completedLoop=!0):(n=!0,e=0)):this.setCurrentRawFrameValue(e),n&&(this.setCurrentRawFrameValue(e),this.pause(),this.trigger("complete"))}},yt.prototype.adjustSegment=function(t,e){this.playCount=0,t[1]<t[0]?(this.frameModifier>0&&(this.playSpeed<0?this.setSpeed(-this.playSpeed):this.setDirection(-1)),this.totalFrames=t[0]-t[1],this.timeCompleted=this.totalFrames,this.firstFrame=t[1],this.setCurrentRawFrameValue(this.totalFrames-.001-e)):t[1]>t[0]&&(this.frameModifier<0&&(this.playSpeed<0?this.setSpeed(-this.playSpeed):this.setDirection(1)),this.totalFrames=t[1]-t[0],this.timeCompleted=this.totalFrames,this.firstFrame=t[0],this.setCurrentRawFrameValue(.001+e)),this.trigger("segmentStart")},yt.prototype.setSegment=function(t,e){var n=-1;this.isPaused&&(this.currentRawFrame+this.firstFrame<t?n=t:this.currentRawFrame+this.firstFrame>e&&(n=e-t)),this.firstFrame=t,this.totalFrames=e-t,this.timeCompleted=this.totalFrames,n!==-1&&this.goToAndStop(n,!0)},yt.prototype.playSegments=function(t,e){if(e&&(this.segments.length=0),typeof t[0]=="object"){var n,i=t.length;for(n=0;n<i;n+=1)this.segments.push(t[n])}else this.segments.push(t);this.segments.length&&e&&this.adjustSegment(this.segments.shift(),0),this.isPaused&&this.play()},yt.prototype.resetSegments=function(t){this.segments.length=0,this.segments.push([this.animationData.ip,this.animationData.op]),t&&this.checkSegments(0)},yt.prototype.checkSegments=function(t){return this.segments.length?(this.adjustSegment(this.segments.shift(),t),!0):!1},yt.prototype.destroy=function(t){t&&this.name!==t||!this.renderer||(this.renderer.destroy(),this.imagePreloader.destroy(),this.trigger("destroy"),this._cbs=null,this.onEnterFrame=null,this.onLoopComplete=null,this.onComplete=null,this.onSegmentStart=null,this.onDestroy=null,this.renderer=null,this.renderer=null,this.imagePreloader=null,this.projectInterface=null)},yt.prototype.setCurrentRawFrameValue=function(t){this.currentRawFrame=t,this.gotoFrame()},yt.prototype.setSpeed=function(t){this.playSpeed=t,this.updaFrameModifier()},yt.prototype.setDirection=function(t){this.playDirection=t<0?-1:1,this.updaFrameModifier()},yt.prototype.setVolume=function(t,e){e&&this.name!==e||this.audioController.setVolume(t)},yt.prototype.getVolume=function(){return this.audioController.getVolume()},yt.prototype.mute=function(t){t&&this.name!==t||this.audioController.mute()},yt.prototype.unmute=function(t){t&&this.name!==t||this.audioController.unmute()},yt.prototype.updaFrameModifier=function(){this.frameModifier=this.frameMult*this.playSpeed*this.playDirection,this.audioController.setRate(this.playSpeed*this.playDirection)},yt.prototype.getPath=function(){return this.path},yt.prototype.getAssetsPath=function(t){var e="";if(t.e)e=t.p;else if(this.assetsPath){var n=t.p;n.indexOf("images/")!==-1&&(n=n.split("/")[1]),e=this.assetsPath+n}else e=this.path,e+=t.u?t.u:"",e+=t.p;return e},yt.prototype.getAssetData=function(t){for(var e=0,n=this.assets.length;e<n;){if(t===this.assets[e].id)return this.assets[e];e+=1}return null},yt.prototype.hide=function(){this.renderer.hide()},yt.prototype.show=function(){this.renderer.show()},yt.prototype.getDuration=function(t){return t?this.totalFrames:this.totalFrames/this.frameRate},yt.prototype.trigger=function(t){if(this._cbs&&this._cbs[t])switch(t){case"enterFrame":case"drawnFrame":this.triggerEvent(t,new je(t,this.currentFrame,this.totalFrames,this.frameModifier));break;case"loopComplete":this.triggerEvent(t,new We(t,this.loop,this.playCount,this.frameMult));break;case"complete":this.triggerEvent(t,new Ae(t,this.frameMult));break;case"segmentStart":this.triggerEvent(t,new Ge(t,this.firstFrame,this.totalFrames));break;case"destroy":this.triggerEvent(t,new me(t,this));break;default:this.triggerEvent(t)}t==="enterFrame"&&this.onEnterFrame&&this.onEnterFrame.call(this,new je(t,this.currentFrame,this.totalFrames,this.frameMult)),t==="loopComplete"&&this.onLoopComplete&&this.onLoopComplete.call(this,new We(t,this.loop,this.playCount,this.frameMult)),t==="complete"&&this.onComplete&&this.onComplete.call(this,new Ae(t,this.frameMult)),t==="segmentStart"&&this.onSegmentStart&&this.onSegmentStart.call(this,new Ge(t,this.firstFrame,this.totalFrames)),t==="destroy"&&this.onDestroy&&this.onDestroy.call(this,new me(t,this))},yt.prototype.triggerRenderFrameError=function(t){var e=new ye(t,this.currentFrame);this.triggerEvent("error",e),this.onError&&this.onError.call(this,e)},yt.prototype.triggerConfigError=function(t){var e=new Ke(t,this.currentFrame);this.triggerEvent("error",e),this.onError&&this.onError.call(this,e)};function ki(){this.effectElements=[]}var Bt={};function Ai(t){_t=t}function Vn(){cn===!0?$t.searchAnimations(Rn,cn,On):$t.searchAnimations()}function Mi(t){Ut=t}function Si(t){Ve=t}function Li(t){return cn===!0&&(t.animationData=JSON.parse(Rn)),$t.loadAnimation(t)}function Ei(t){if(typeof t=="string")switch(t){case"high":Vt=200;break;default:case"medium":Vt=50;break;case"low":Vt=10;break}else!isNaN(t)&&t>1&&(Vt=t);Vt>=50}function Pi(){return typeof navigator<"u"}function Fi(t,e){t==="expressions"&&(ve=e)}function Ti(t){switch(t){case"propertyFactory":return q;case"shapePropertyFactory":return dt;case"matrix":return M;default:return null}}Bt.play=$t.play,Bt.pause=$t.pause,Bt.setLocationHref=Ai,Bt.togglePause=$t.togglePause,Bt.setSpeed=$t.setSpeed,Bt.setDirection=$t.setDirection,Bt.stop=$t.stop,Bt.searchAnimations=Vn,Bt.registerAnimation=$t.registerAnimation,Bt.loadAnimation=Li,Bt.setSubframeRendering=Mi,Bt.resize=$t.resize,Bt.goToAndStop=$t.goToAndStop,Bt.destroy=$t.destroy,Bt.setQuality=Ei,Bt.inBrowser=Pi,Bt.installPlugin=Fi,Bt.freeze=$t.freeze,Bt.unfreeze=$t.unfreeze,Bt.setVolume=$t.setVolume,Bt.mute=$t.mute,Bt.unmute=$t.unmute,Bt.getRegisteredAnimations=$t.getRegisteredAnimations,Bt.useWebWorker=function(t){Dt=t},Bt.setIDPrefix=Si,Bt.__getFactory=Ti,Bt.version="5.8.1";function Ii(){document.readyState==="complete"&&(clearInterval(Bi),Vn())}function zi(t){for(var e=qn.split("&"),n=0;n<e.length;n+=1){var i=e[n].split("=");if(decodeURIComponent(i[0])==t)return decodeURIComponent(i[1])}return null}var cn="__[STANDALONE]__",Rn="__[ANIMATIONDATA]__",On="",qn;if(cn){var Dn=document.getElementsByTagName("script");qn=(Dn[Dn.length-1]||{src:""}).src.replace(/^[^\?]+\??/,""),On=zi("renderer")}var Bi=setInterval(Ii,100);return Bt})})),Wn=Sn(Ni(),1),Gn=Sn(Zi(),1),rr=Sn(Vi(),1);function ke(et,ut){ut===void 0&&(ut={});var pt=ut.insertAt;if(et&&typeof document<"u"){var Lt=document.head||document.getElementsByTagName("head")[0],_t=document.createElement("style");_t.type="text/css",pt==="top"&&Lt.firstChild?Lt.insertBefore(_t,Lt.firstChild):Lt.appendChild(_t),_t.styleSheet?_t.styleSheet.cssText=et:_t.appendChild(document.createTextNode(et))}}var Un=`.pera-wallet-modal-header {
  position: absolute;
  top: -44px;
  right: 0px;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.pera-wallet-modal-header--mobile {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: static;
}
.pera-wallet-modal-header--mobile .pera-wallet-modal-header__close-button {
  width: 24px;
  height: 24px;
  margin: 0;
  padding: 0;
  background: transparent;
  border: unset;
  box-shadow: unset;
}

.pera-wallet-modal-header__brand {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 14px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: -0.1px;
  color: #ffffff;
}

.pera-wallet-modal-header__brand-text {
  display: flex;
  align-items: center;
  gap: 6px;
}

.pera-wallet-modal-header__version-number {
  color: #9d9dae;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0.01;
}

.pera-wallet-button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: auto;
  height: 48px;
  padding: 14px;
  border: none;
  border-radius: 12px;
  outline: none;
  cursor: pointer;
  font-family: var(--pera-wallet-modal-font-family);
  font-size: 14px;
}

.pera-wallet-modal-header__close-button {
  width: 32px;
  height: 32px;
  margin: 0;
  padding: 0;
  background: rgba(44, 53, 89, 0.1);
  border-radius: 8px;
}

.pera-wallet-modal-header__close-button__close-icon {
  width: 20px;
  height: 20px;
}`;ke(Un);var Xn=document.createElement("template");Xn.innerHTML=`
  <div class="${Be()?"pera-wallet-modal-header pera-wallet-modal-header--mobile":"pera-wallet-modal-header pera-wallet-modal-header--desktop"}">
      ${Be()?"":`<div class="pera-wallet-modal-header__brand">
              <img src="data:image/svg+xml,%3csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='24' height='24' rx='4.8' fill='%23FFEE55'/%3e%3cpath d='M13.0408 5.92462C13.413 7.46693 13.2872 8.8236 12.7597 8.95482C12.2322 9.08605 11.5028 7.94214 11.1306 6.39983C10.7583 4.85752 10.8842 3.50085 11.4117 3.36963C11.9391 3.2384 12.6685 4.38231 13.0408 5.92462Z' fill='black'/%3e%3cpath d='M19.1876 7.25063C18.3632 6.37689 16.7231 6.61371 15.5243 7.77959C14.3254 8.94547 14.0219 10.5989 14.8463 11.4727C15.6707 12.3464 17.3108 12.1096 18.5097 10.9437C19.7085 9.77781 20.012 8.12438 19.1876 7.25063Z' fill='black'/%3e%3cpath d='M12.6308 20.6297C13.1583 20.4985 13.2656 19.0651 12.8705 17.4281C12.4754 15.7911 11.7275 14.5705 11.2 14.7017C10.6725 14.8329 10.5652 16.2663 10.9603 17.9033C11.3554 19.5403 12.1033 20.7609 12.6308 20.6297Z' fill='black'/%3e%3cpath d='M7.25371 8.05056C8.77551 8.49933 9.8875 9.28664 9.73741 9.80906C9.58731 10.3315 8.23197 10.3912 6.71016 9.94242C5.18836 9.49364 4.07637 8.70633 4.22646 8.18391C4.37656 7.66149 5.7319 7.60178 7.25371 8.05056Z' fill='black'/%3e%3cpath d='M17.1309 13.9497C18.7461 14.4261 19.9338 15.2357 19.7837 15.7581C19.6336 16.2806 18.2025 16.3179 16.5873 15.8416C14.9721 15.3653 13.7844 14.5556 13.9345 14.0332C14.0846 13.5108 15.5157 13.4734 17.1309 13.9497Z' fill='black'/%3e%3cpath d='M8.96609 12.8536C8.5887 12.4624 7.35088 13.0318 6.20133 14.1253C5.05177 15.2188 4.42581 16.4225 4.80319 16.8137C5.18058 17.2048 6.4184 16.6355 7.56796 15.542C8.71751 14.4484 9.34347 13.2448 8.96609 12.8536Z' fill='black'/%3e%3c/svg%3e" />

              <div class="pera-wallet-modal-header__brand-text">
                <span>Pera Connect</span>

                <span class="pera-wallet-modal-header__version-number">v1.5.1</span>
              </div>
            </div>
            `} 

      <button
        id="pera-wallet-modal-header-close-button"
        class="pera-wallet-button pera-wallet-modal-header__close-button">
        <img
          class="pera-wallet-modal-header__close-button__close-icon"
          src="${Be()?"data:image/svg+xml,%3csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M18 6L12 12M12 12L6 18M12 12L18 18M12 12L6 6' stroke='%232C3559' stroke-width='2'/%3e%3c/svg%3e":"data:image/svg+xml,%3csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M18 6L12 12M12 12L6 18M12 12L18 18M12 12L6 6' stroke='white' stroke-width='2'/%3e%3c/svg%3e"}"
        />
      </button>
    </div>
`;var ji=class extends HTMLElement{constructor(){if(super(),this.attachShadow({mode:"open"}),this.shadowRoot){const et=document.createElement("style");et.textContent=Un,this.shadowRoot.append(Xn.content.cloneNode(!0),et),this.onClose()}}onClose(){var et;const ut=(et=this.shadowRoot)===null||et===void 0?void 0:et.getElementById("pera-wallet-modal-header-close-button"),pt=this.getAttribute("modal-id");ut&&pt==="pera-wallet-redirect-modal-wrapper"&&ut.addEventListener("click",(()=>{yn("pera-wallet-redirect-modal-wrapper")}))}},Yn="data:image/svg+xml,%3csvg fill='none' height='80' width='80' xmlns='http://www.w3.org/2000/svg'%3e%3cpath clip-rule='evenodd' d='M39.9 80V68.99h-9.8V80h-.2V68.99h-3.5a6.503 6.503 0 0 1-6.247-4.7 6.514 6.514 0 0 1-4.445-4.444 6.503 6.503 0 0 1-4.695-6.246v-3.5H0v-.2h11.013v-9.8H0v-.2h11.013v-9.8H0v-.2h11.013v-3.5a6.503 6.503 0 0 1 4.694-6.246 6.513 6.513 0 0 1 4.447-4.447 6.503 6.503 0 0 1 6.246-4.696h3.5V0h.2v11.011h9.8V0h.2v11.011h9.8V0h.2v11.011h3.5a6.503 6.503 0 0 1 6.247 4.697 6.514 6.514 0 0 1 4.443 4.444 6.503 6.503 0 0 1 4.701 6.248v3.5H80v.2H68.991v9.8H80v.2H68.991v9.8H80v.2H68.991v3.5a6.503 6.503 0 0 1-4.701 6.248 6.514 6.514 0 0 1-4.443 4.442 6.503 6.503 0 0 1-6.247 4.7h-3.5V80h-.2V68.99h-9.8V80zm28.89-40.1a28.728 28.728 0 0 0-1.746-9.8h-2.5v9.8h4.247zm-4.246.2h4.247a28.729 28.729 0 0 1-1.747 9.8h-2.5zm-.2-.2v-9.8H60.1v9.8zm-4.244.2h4.244v9.8H60.1zm-.2-.2a19.807 19.807 0 0 0-2.633-9.8H50.1v9.8zm-9.8.2h9.8a19.807 19.807 0 0 1-2.633 9.8H50.1zm-.2-.2v-9.8h-9.8v9.8zm-9.8.2h9.8v9.8h-9.8zm-.2-.2v-9.8h-9.8v9.8zm-9.8.2h9.8v9.8h-9.8zm-.2-.2v-9.8h-7.167a19.807 19.807 0 0 0-2.633 9.8zm-9.8.2h9.8v9.8h-7.167a19.807 19.807 0 0 1-2.633-9.8zm-.2-.2v-9.8h-4.245v9.8zm-4.245.2H19.9v9.8h-4.245zm-.2-.2v-9.8H12.96a28.726 28.726 0 0 0-1.748 9.8h4.242zm-4.242.2h4.242v9.8H12.96a28.726 28.726 0 0 1-1.748-9.8zm0 13.5v-3.5h1.608a28.876 28.876 0 0 0 2.634 5.327v2.617c0 .543.066 1.07.192 1.575a6.303 6.303 0 0 1-4.434-6.019zm4.242 1.449a28.674 28.674 0 0 1-2.42-4.949h2.42zm.2.32V50.1H19.9v9.8h-.702a28.915 28.915 0 0 1-3.543-4.53zM20.1 59.9v-9.8h2.518a20.2 20.2 0 0 0 7.282 7.282V59.9zm0-10h2.403a19.966 19.966 0 0 1-2.403-7.053zm9.8 7.25a20 20 0 0 1-7.05-7.05h7.05zm.2.117V50.1h9.8v9.8a19.807 19.807 0 0 1-9.8-2.633zm10 2.633v-9.8h9.8v7.167a19.807 19.807 0 0 1-9.8 2.633zm10-2.75V50.1h7.05a20 20 0 0 1-7.05 7.05zm0 .232a20.2 20.2 0 0 0 7.282-7.282H59.9v9.8h-9.8zm7.397-7.482H59.9v-7.053a19.966 19.966 0 0 1-2.403 7.053zm2.603 10v-9.8h4.244v5.28a28.91 28.91 0 0 1-3.538 4.52zm4.444-4.841V50.1h2.426a28.67 28.67 0 0 1-2.426 4.959zm0 .378a28.881 28.881 0 0 0 2.64-5.337h1.607v3.5a6.303 6.303 0 0 1-4.44 6.021 6.514 6.514 0 0 0 .193-1.577zm2.713-5.537h1.534v-6.477a28.817 28.817 0 0 1-1.534 6.477zm-56.044 0h1.535a28.807 28.807 0 0 1-1.535-6.477zm57.578-20v-3.5a6.303 6.303 0 0 0-4.44-6.02c.126.504.193 1.031.193 1.575v2.608a28.877 28.877 0 0 1 2.639 5.337zm-1.534.2h1.534v6.477a28.815 28.815 0 0 0-1.534-6.477zm-.288-.2a28.673 28.673 0 0 0-2.425-4.958V29.9zm-2.625 0v-5.279a28.911 28.911 0 0 0-3.538-4.521H60.1v9.8zm-4.444 0v-9.8h-9.8v2.518a20.2 20.2 0 0 1 7.282 7.282zm-2.403.2H59.9v7.053a19.966 19.966 0 0 0-2.403-7.053zm-.347-.2a20 20 0 0 0-7.05-7.05v7.05zm-7.25 0v-7.167a19.807 19.807 0 0 0-9.8-2.633v9.8zm-10 0v-9.8a19.807 19.807 0 0 0-9.8 2.633V29.9zm-10 0v-7.05a20 20 0 0 0-7.05 7.05zm-7.282 0a20.2 20.2 0 0 1 7.282-7.282V20.1h-9.8v9.8zm-2.518.2h2.403a19.966 19.966 0 0 0-2.403 7.053zm-.2-.2v-9.8h-.701a28.915 28.915 0 0 0-3.544 4.53v5.27zm-4.445 0v-4.948a28.665 28.665 0 0 0-2.42 4.948zm-2.634 0a28.874 28.874 0 0 1 2.634-5.327v-2.618c0-.543.066-1.07.191-1.574a6.303 6.303 0 0 0-4.433 6.019v3.5zm-1.608.2h1.535a28.81 28.81 0 0 0-1.535 6.477zM36.58 68.79H30.1v-1.536c2.06.749 4.23 1.27 6.479 1.535zm3.321-.001a28.726 28.726 0 0 1-9.8-1.748v-2.497h9.8zm-10-1.822v-2.423h-4.953a28.678 28.678 0 0 0 4.953 2.423zm10-2.623h-9.8V60.1h9.8zm-10 0V60.1h-9.8v.702a28.915 28.915 0 0 0 4.526 3.542H29.9zm7.254-4.444H30.1v-2.403a19.966 19.966 0 0 0 7.053 2.403zm0-39.8a19.966 19.966 0 0 0-7.054 2.403V20.1h7.053zm2.746-.2h-9.8v-4.245h9.8zm-10 0v-4.245h-5.27a28.907 28.907 0 0 0-4.53 3.544v.701zm10-4.445h-9.8V12.96a28.729 28.729 0 0 1 9.8-1.749zm-10 0v-2.421a28.668 28.668 0 0 0-4.95 2.42h4.95zm6.679-4.244a28.81 28.81 0 0 0-6.479 1.536V11.21h6.479zm-6.679 1.61v-1.61h-3.5a6.303 6.303 0 0 0-6.02 4.436 6.514 6.514 0 0 1 1.575-.192h2.617A28.877 28.877 0 0 1 29.9 12.82zm0 55.968V67.18a28.878 28.878 0 0 1-5.331-2.636h-2.614c-.543 0-1.07-.067-1.575-.192a6.303 6.303 0 0 0 6.02 4.437zm20.2 0h3.5a6.303 6.303 0 0 0 6.02-4.438 6.513 6.513 0 0 1-1.576.193h-2.608a28.879 28.879 0 0 1-5.336 2.638zm-.2-1.534v1.534h-6.475a28.808 28.808 0 0 0 6.475-1.534zm.2-.287a28.671 28.671 0 0 0 4.957-2.424H50.1v2.424zm-.2-2.424v2.499a28.728 28.728 0 0 1-9.8 1.746v-4.245zm.2-.2h5.278a28.914 28.914 0 0 0 4.522-3.538V60.1h-9.8zm-.2-4.244v4.244h-9.8V60.1zm0-2.603V59.9h-7.053a19.966 19.966 0 0 0 7.053-2.403zm0-37.397v2.403a19.966 19.966 0 0 0-7.053-2.403H49.9zm.2-.2h9.8v-.705a28.911 28.911 0 0 0-4.526-3.54H50.1V19.9zm-.2-4.245V19.9h-9.8v-4.245h9.8zm.2-.2h4.954a28.676 28.676 0 0 0-4.954-2.423zm-.2-2.497v2.497h-9.8V11.21a28.75 28.75 0 0 1 9.8 1.747zm.2-.14a28.877 28.877 0 0 1 5.332 2.637h2.612c.543 0 1.071.066 1.576.192a6.303 6.303 0 0 0-6.02-4.436h-3.5zm-.2-1.607v1.534a28.812 28.812 0 0 0-6.475-1.534H49.9zm-34.245 44.53v2.303c0 .567.075 1.117.215 1.64a6.309 6.309 0 0 0 1.643.216h1.41a29.118 29.118 0 0 1-3.268-4.16zm3.458 4.359h-1.6a6.513 6.513 0 0 1-1.578-.193 6.315 6.315 0 0 0 4.157 4.157 6.517 6.517 0 0 1-.192-1.575v-1.602a29.35 29.35 0 0 1-.787-.787zm.787.509a29.029 29.029 0 0 1-.508-.509h.508zm.2.469v1.411c0 .567.075 1.117.215 1.64.523.14 1.073.215 1.64.215h2.3a29.118 29.118 0 0 1-4.155-3.266zm35.649 3.266h2.295c.567 0 1.117-.075 1.64-.216a6.286 6.286 0 0 0 .216-1.639v-1.407a29.116 29.116 0 0 1-4.151 3.262zm4.35-3.454v1.598a6.53 6.53 0 0 1-.192 1.574 6.314 6.314 0 0 0 4.155-4.154 6.509 6.509 0 0 1-1.572.191h-1.6a29.08 29.08 0 0 1-.791.791zm.982-.991h1.41c.565 0 1.114-.075 1.636-.215a6.31 6.31 0 0 0 .216-1.641V55.75a29.113 29.113 0 0 1-3.262 4.15zm3.262-35.65v-2.295c0-.568-.075-1.117-.216-1.64a6.307 6.307 0 0 0-1.637-.215h-1.41a29.112 29.112 0 0 1 3.263 4.15zM60.89 19.9h1.6c.542 0 1.069.066 1.573.192a6.314 6.314 0 0 0-4.156-4.157 6.51 6.51 0 0 1 .192 1.576v1.598c.269.259.532.522.79.791zm-.991-.981V17.51a6.31 6.31 0 0 0-.216-1.64 6.308 6.308 0 0 0-1.64-.216h-2.299a29.108 29.108 0 0 1 4.155 3.264zm-35.641-3.264h-2.304a6.31 6.31 0 0 0-1.639.215 6.306 6.306 0 0 0-.216 1.641v1.412a29.115 29.115 0 0 1 4.159-3.268zM19.9 19.113v-1.602c0-.543.067-1.072.193-1.577a6.315 6.315 0 0 0-4.159 4.16 6.518 6.518 0 0 1 1.58-.194h1.6c.257-.267.519-.53.786-.787zm-.508.787h.508v-.508c-.171.167-.34.337-.508.508zm-.47.2h-1.409a6.31 6.31 0 0 0-1.643.216 6.308 6.308 0 0 0-.215 1.639v2.305a29.107 29.107 0 0 1 3.268-4.16zm41.178-.712c.173.168.344.34.512.512H60.1zm.513 40.712c-.169.173-.34.344-.513.513V60.1z' fill='%2394a3b8' fill-rule='evenodd'/%3e%3crect fill='black' height='80' rx='16' width='80'/%3e%3cpath d='M43.47 19.752c1.24 5.14.821 9.663-.937 10.1-1.758.438-4.19-3.375-5.43-8.517-1.241-5.14-.822-9.663.936-10.1 1.759-.438 4.19 3.376 5.43 8.517zm20.49 4.42c-2.749-2.913-8.216-2.123-12.212 1.763s-5.008 9.398-2.26 12.31 8.215 2.123 12.211-1.763 5.008-9.398 2.26-12.31zM42.102 68.769c1.758-.438 2.116-5.216.8-10.673-1.318-5.456-3.81-9.525-5.57-9.088-1.757.438-2.115 5.216-.798 10.672 1.317 5.457 3.81 9.526 5.568 9.089zM24.18 26.838c5.073 1.496 8.78 4.12 8.28 5.862-.5 1.741-5.019 1.94-10.091.444-5.073-1.496-8.78-4.12-8.28-5.861.501-1.742 5.019-1.941 10.092-.445zm32.924 19.664c5.384 1.588 9.343 4.286 8.843 6.028-.5 1.741-5.27 1.866-10.654.278-5.385-1.588-9.343-4.286-8.843-6.028.5-1.741 5.27-1.866 10.654-.278zm-27.216-3.654c-1.258-1.304-5.384.594-9.215 4.24-3.832 3.644-5.919 7.656-4.66 8.96 1.257 1.304 5.383-.594 9.215-4.239s5.918-7.657 4.66-8.96z' fill='%23fe5'/%3e%3c/svg%3e",$n=`.pera-wallet-download-qr-code-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  margin: 26px auto 0;
  padding: 10px;
  box-shadow: 0px 20px 60px rgba(26, 35, 91, 0.15), 0px 4px 12px rgba(26, 35, 91, 0.05), 0px 1px 4px rgba(26, 35, 91, 0.06);
  border-radius: 24px;
}

@media (max-width: 767px) {
  .pera-wallet-download-qr-code-wrapper {
    margin-top: 51px;
  }
}`;ke($n);var Qn=document.createElement("template");Qn.innerHTML=`
  <div id="pera-wallet-download-qr-code-wrapper" class="pera-wallet-download-qr-code-wrapper"></div>  
`;var Wi=class extends HTMLElement{constructor(){if(super(),this.attachShadow({mode:"open"}),this.shadowRoot){const et=document.createElement("style");et.textContent=$n,this.shadowRoot.append(Qn.content.cloneNode(!0),et)}}connectedCallback(){var et;const ut=new Wn.default({width:205,height:205,type:"svg",data:Oi,image:Yn,dotsOptions:{color:"#000",type:"extra-rounded"},imageOptions:{crossOrigin:"anonymous",margin:10},cornersSquareOptions:{type:"extra-rounded"},cornersDotOptions:{type:"dot"}}),pt=(et=this.shadowRoot)===null||et===void 0?void 0:et.getElementById("pera-wallet-download-qr-code-wrapper");pt&&ut.append(pt)}},Nn="data:image/svg+xml,%3csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M8.5 19L15.5 12L8.5 5' stroke='%233C3C49' stroke-width='2'/%3e%3c/svg%3e",Kn=`.pera-wallet-connect-modal-desktop-mode {
  display: grid;
  grid-template-columns: 205px auto;
  gap: 70px;
}
.pera-wallet-connect-modal-desktop-mode--default .pera-wallet-connect-modal-desktop-mode__default-view {
  display: block;
}
.pera-wallet-connect-modal-desktop-mode--default .pera-wallet-connect-modal-desktop-mode__default-view .pera-wallet-accordion-item--active .pera-wallet-accordion-item__content {
  height: 364px;
}
.pera-wallet-connect-modal-desktop-mode--default .pera-wallet-connect-modal-desktop-mode__default-view--web-wallet-not-avaliable .pera-wallet-accordion-item--web-wallet {
  display: none;
}
.pera-wallet-connect-modal-desktop-mode--default .pera-wallet-connect-modal-desktop-mode__default-view--web-wallet-not-avaliable .pera-wallet-accordion-item .pera-wallet-accordion-toggle {
  padding: 26px 24px 12px;
  border-radius: 24px 24px 0 0;
  transition: all ease-in 0.2s;
}
.pera-wallet-connect-modal-desktop-mode--default .pera-wallet-connect-modal-desktop-mode__default-view--web-wallet-not-avaliable .pera-wallet-accordion-item .pera-wallet-accordion-item__content {
  height: 434px;
  border-radius: 0 0 24px 24px;
  transition: height ease-in 0.2s;
}
.pera-wallet-connect-modal-desktop-mode--default .pera-wallet-connect-modal-desktop-mode__default-view--web-wallet-not-avaliable .pera-wallet-accordion-item .pera-wallet-accordion-icon {
  transform: rotate(90deg);
}
.pera-wallet-connect-modal-desktop-mode--default .pera-wallet-connect-modal-desktop-mode__default-view--web-wallet-not-avaliable .pera-wallet-connect-modal-desktop-mode__download-pera-description {
  margin-top: 50px;
}
.pera-wallet-connect-modal-desktop-mode--default .pera-wallet-connect-modal-desktop-mode__download-view {
  display: none;
}
.pera-wallet-connect-modal-desktop-mode--download .pera-wallet-connect-modal-desktop-mode__default-view {
  display: none;
}
.pera-wallet-connect-modal-desktop-mode--download .pera-wallet-connect-modal-desktop-mode__download-view {
  display: block;
}
.pera-wallet-connect-modal-desktop-mode--download .pera-wallet-connect-modal-desktop-mode__download-view .pera-wallet-connect-modal-download-pera-view__footer a {
  display: flex;
  cursor: pointer;
}
.pera-wallet-connect-modal-desktop-mode--compact {
  grid-template-columns: unset;
  gap: unset;
}
.pera-wallet-connect-modal-desktop-mode--compact .pera-wallet-connect-modal-desktop-mode__web-wallet {
  padding: 28px 40px;
}
.pera-wallet-connect-modal-desktop-mode--compact .pera-wallet-connect-modal-desktop-mode__web-wallet .pera-wallet-connect-modal-desktop-mode__web-wallet__logo-wrapper {
  box-shadow: unset;
}
.pera-wallet-connect-modal-desktop-mode--compact .pera-wallet-connect-modal-desktop-mode__web-wallet .pera-wallet-connect-modal-desktop-mode__web-wallet__description {
  margin-bottom: 16px;
}
.pera-wallet-connect-modal-desktop-mode--compact .pera-wallet-connect-modal-desktop-mode__web-wallet .pera-wallet-connect-modal-desktop-mode__web-wallet__launch-button {
  width: 172px;
  height: 40px;
  margin: 0 auto;
}
.pera-wallet-connect-modal-desktop-mode--compact .pera-wallet-connect-modal-desktop-mode__web-wallet-iframe {
  height: 100%;
}
.pera-wallet-connect-modal-desktop-mode--compact .pera-wallet-connect-modal-desktop-mode__default-view {
  overflow: hidden;
  border-radius: 24px;
}
.pera-wallet-connect-modal-desktop-mode--compact .pera-wallet-connect-modal-desktop-mode__default-view .pera-wallet-accordion-item {
  margin-bottom: 0;
  border-radius: 0;
}
.pera-wallet-connect-modal-desktop-mode--compact .pera-wallet-connect-modal-desktop-mode__default-view .pera-wallet-accordion-item:not(:last-child) {
  border-bottom: 1px solid #e6e8ee;
}
.pera-wallet-connect-modal-desktop-mode--compact .pera-wallet-connect-modal-desktop-mode__default-view .pera-wallet-accordion-item #pera-wallet-iframe {
  height: 100%;
}
.pera-wallet-connect-modal-desktop-mode--compact .pera-wallet-connect-modal-desktop-mode__default-view .pera-wallet-accordion-toggle {
  padding: 20px;
}
.pera-wallet-connect-modal-desktop-mode--compact .pera-wallet-connect-modal-desktop-mode__default-view .pera-wallet-accordion-toggle__text, .pera-wallet-connect-modal-desktop-mode--compact .pera-wallet-connect-modal-desktop-mode__default-view .pera-wallet-accordion-toggle__content-with-label__text {
  color: #626268;
  font-size: 14px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.09px;
}
.pera-wallet-connect-modal-desktop-mode--compact .pera-wallet-connect-modal-desktop-mode__default-view .pera-wallet-accordion-toggle__bold-color {
  font-weight: 600;
  color: #1a1a1a;
}
.pera-wallet-connect-modal-desktop-mode--compact .pera-wallet-connect-modal-desktop-mode__default-view .pera-wallet-accordion-item--active .pera-wallet-accordion-item__content {
  height: 265px;
}
.pera-wallet-connect-modal-desktop-mode--compact .pera-wallet-connect-modal-desktop-mode__default-view .pera-wallet-connect-modal-desktop-mode__download-pera-container {
  display: flex;
  justify-content: space-between;
  margin-top: 14px;
  padding: 0 20px;
}
.pera-wallet-connect-modal-desktop-mode--compact .pera-wallet-connect-modal-desktop-mode__default-view .pera-wallet-connect-modal-desktop-mode__download-pera-description,
.pera-wallet-connect-modal-desktop-mode--compact .pera-wallet-connect-modal-desktop-mode__default-view .pera-wallet-connect-modal-desktop-mode__download-pera-button {
  margin: 0;
}
.pera-wallet-connect-modal-desktop-mode--compact .pera-wallet-connect-modal-desktop-mode__default-view .pera-wallet-connect-modal-desktop-mode__download-pera-button {
  font-weight: 500;
}
.pera-wallet-connect-modal-desktop-mode--compact .pera-wallet-connect-modal-desktop-mode__default-view .pera-wallet-connect-qr-code-wrapper {
  margin: 4px auto 0;
  padding: 0;
  box-shadow: unset;
}
.pera-wallet-connect-modal-desktop-mode--compact .pera-wallet-connect-modal-desktop-mode__default-view .pera-wallet-connect-qr-code-wrapper svg {
  padding: 8px;
  box-shadow: 0px 20px 60px rgba(26, 35, 91, 0.15), 0px 4px 12px rgba(26, 35, 91, 0.05), 0px 1px 4px rgba(26, 35, 91, 0.06);
  border-radius: 12px;
}
.pera-wallet-connect-modal-desktop-mode--select-account {
  width: 100%;
  height: 100%;
}
.pera-wallet-connect-modal-desktop-mode--select-account.pera-wallet-connect-modal-desktop-mode--default {
  overflow: hidden;
}
.pera-wallet-connect-modal-desktop-mode--select-account .pera-wallet-connect-modal-desktop-mode__web-wallet-iframe {
  position: unset;
}
.pera-wallet-connect-modal-desktop-mode--select-account .pera-wallet-accordion {
  overflow: hidden;
}
.pera-wallet-connect-modal-desktop-mode--select-account #pera-wallet-iframe {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 3;
  width: 100%;
  height: 100%;
  border-radius: 16px;
}

.pera-wallet-connect-modal-desktop-mode__accordion__description,
.pera-wallet-connect-modal-desktop-mode__connect-button-wrapper {
  padding: 0 40px 20px 64px;
}

.pera-wallet-connect-modal-desktop-mode__web-wallet {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: calc(100% - 88px);
  padding: 48px 52px 40px;
  margin: 0 auto;
}

.pera-wallet-connect-modal-desktop-mode__web-wallet__logo-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 72px;
  height: 72px;
  margin: 0 auto 16px;
  background: #ffffff;
  border-radius: 50%;
  box-shadow: 0px 0px 1px rgba(12, 26, 75, 0.1), 0px 10px 16px rgba(20, 37, 63, 0.06);
}

.pera-wallet-connect-modal-desktop-mode__web-wallet__description {
  margin: 0 auto 32px;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: -0.1px;
  text-align: center;
  color: #6a6a81;
}

.pera-wallet-connect-modal-desktop-mode__web-wallet__launch-button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  padding: 14px 0;
  color: #ffffff;
  background-color: #6b46fe;
  border-radius: 12px;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: -0.1;
  border: none;
  outline: none;
  cursor: pointer;
}

.pera-wallet-connect-modal-desktop-mode__web-wallet-iframe {
  position: relative;
  width: fit-content;
  margin: 0 auto;
}

.pera-wallet-connect-modal-desktop-mode__connect-button {
  display: block;
  width: 100%;
  height: 48px;
  border: unset;
  border-radius: 6px;
  background-color: #333333;
  color: white;
  cursor: pointer;
  font-family: var(--pera-wallet-modal-font-family);
  font-size: 13px;
}

.pera-wallet-connect-qr-code-wrapper {
  width: fit-content;
  margin: 24px auto 0;
  padding: 10px;
  box-shadow: 0px 20px 60px rgba(26, 35, 91, 0.15), 0px 4px 12px rgba(26, 35, 91, 0.05), 0px 1px 4px rgba(26, 35, 91, 0.06);
  border-radius: 24px;
}

.pera-wallet-connect-modal-desktop-mode__download-pera-description {
  color: #838aa6;
  text-align: center;
  margin: 32px 0 12px;
  font-size: 13px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: -0.04px;
}

.pera-wallet-connect-modal-desktop-mode__download-pera-button {
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 0 auto;
  padding: 0;
  color: #6b46fe;
  background-color: transparent;
  outline: none;
  border: none;
  font-weight: 600;
  font-size: 13px;
  line-height: 20px;
  letter-spacing: 0.01px;
  cursor: pointer;
}

.pera-wallet-connect-modal-download-pera-view__back-button {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 14px;
  padding: 12px 24px;
  color: #3c3c49;
  background-color: #ffffff;
  outline: none;
  box-shadow: 0px 0px 1px rgba(12, 26, 75, 0.24), 0px 3px 8px -1px rgba(50, 50, 71, 0.05);
  border: unset;
  border-radius: 24px;
  font-size: 14px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: -0.1px;
  cursor: pointer;
}

.pera-wallet-connect-modal-download-pera-view {
  padding: 32px 37px 28px;
  background-color: #ffffff;
  box-shadow: 0px 0px 1px rgba(12, 26, 75, 0.24), 0px 3px 8px -1px rgba(50, 50, 71, 0.05);
  border-radius: 24px;
}

.pera-wallet-connect-modal-download-pera-view__title {
  margin-bottom: 8px;
  color: #3c3c49;
  font-weight: 600;
  font-size: 15px;
  line-height: 18px;
  text-align: center;
  letter-spacing: -0.13px;
}

.pera-wallet-connect-modal-download-pera-view__footer {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  margin-top: 53px;
}

.pera-wallet-connect-modal-download-pera-view__footer__button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 8px 16px;
  color: #6a6a81;
  background-color: #ffffff;
  box-shadow: 0px 0px 1px rgba(12, 26, 75, 0.24), 0px 3px 8px -1px rgba(50, 50, 71, 0.05);
  text-decoration: none;
  border-radius: 12px;
  font-weight: 500;
  font-size: 13px;
  line-height: 200%;
  letter-spacing: -0.04px;
  cursor: pointer;
}

#pera-wallet-iframe {
  width: 285px;
  height: 376px;
  margin: 0 auto;
  border: none;
}

@media (max-width: 767px) {
  .pera-wallet-connect-modal-desktop-mode {
    grid-template-columns: 1fr;
    gap: 24px;
  }
  .pera-wallet-connect-qr-code-wrapper {
    margin-top: 16px;
  }
  .pera-wallet-connect-modal-download-pera-view {
    padding: 24px;
  }
  .pera-wallet-download-qr-code-wrapper {
    margin-top: 32px;
  }
  .pera-wallet-connect-modal-download-pera-view__footer {
    margin-top: 40px;
  }
}`;ke(Kn);var Jn=`.pera-wallet-accordion-item {
  background-color: #ffffff;
  border-radius: 24px;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.02), 0px 4px 12px rgba(0, 0, 0, 0.03);
}
.pera-wallet-accordion-item:not(:last-of-type) {
  margin-bottom: 20px;
}
.pera-wallet-accordion-item:not(:last-of-type) .pera-wallet-accordion-panel {
  display: flex;
  align-items: center;
  justify-content: center;
}
.pera-wallet-accordion-item .pera-wallet-accordion-item__content {
  height: 0;
  overflow: hidden;
  color: #69708d;
  background-color: #ffffff;
  font-size: 13px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: -0.04px;
  transition: height ease-in 0.2s;
}
.pera-wallet-accordion-item--active .pera-wallet-accordion-toggle {
  padding: 26px 24px 12px;
  border-radius: 24px 24px 0 0;
  transition: all ease-in 0.2s;
}
.pera-wallet-accordion-item--active .pera-wallet-accordion-item__content {
  border-radius: 0 0 24px 24px;
  transition: height ease-in 0.2s;
}
.pera-wallet-accordion-item--active .pera-wallet-accordion-icon {
  transform: rotate(90deg);
}

.pera-wallet-accordion-toggle {
  position: relative;
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 12px 24px;
  color: #2c3559;
  background-color: #ffffff;
  border: none;
  border-radius: 24px;
  outline: none;
  cursor: pointer;
  font-size: 16px;
  line-height: 18px;
  letter-spacing: -0.1px;
  font-weight: 600;
  transition: all ease-in 0.2s;
}
.pera-wallet-accordion-toggle__text, .pera-wallet-accordion-toggle__content-with-label__text {
  color: #626268;
}

.pera-wallet-accordion-icon {
  transition: all ease-in 0.2s;
}

.pera-wallet-accordion-toggle__bold-color {
  color: #1A1A1A;
  font-weight: 600;
}

.pera-wallet-accordion-toggle__content-with-label {
  display: flex;
  align-items: center;
  gap: 12px;
}

.pera-wallet-accordion-toggle__label {
  padding: 4px 9px;
  color: #1C786C;
  background: #E0FAEE;
  border-radius: 12px;
  font-size: 11px;
  font-weight: 600;
  line-height: 18px;
  letter-spacing: 0.01px;
}

.pera-wallet-accordion-toggle__button {
  position: absolute;
  z-index: 2;
  width: 100%;
  height: 100%;
  background: transparent;
  box-shadow: none;
  outline: none;
  border: none;
  cursor: pointer;
}

@media (max-width: 767px) {
  .pera-wallet-accordion-toggle {
    font-size: 14px;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: -0.1px;
  }
}`;ke(Jn);var ti=document.createElement("template"),ei=document.createElement("style"),ni=document.createElement("style");ei.textContent=Kn,ni.textContent=Jn;ti.innerHTML=`
  <div id="pera-wallet-connect-modal-desktop-mode" class="pera-wallet-connect-modal-desktop-mode pera-wallet-connect-modal-desktop-mode--default">
      <pera-wallet-connect-modal-information-section></pera-wallet-connect-modal-information-section>

      <div class="pera-wallet-connect-modal-desktop-mode__default-view"></div>
       

      <div class="pera-wallet-connect-modal-desktop-mode__download-view">
        <button
          id="pera-wallet-connect-modal-download-pera-view-back-button"
          class="pera-wallet-connect-modal-download-pera-view__back-button">
          <img
            src="data:image/svg+xml,%3csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M10.7071 6.29387C11.0976 6.68439 11.0976 7.31756 10.7071 7.70808L7.41421 11.001L19 11.001C19.5523 11.001 20 11.4487 20 12.001C20 12.5533 19.5523 13.001 19 13.001L7.41421 13.001L10.7071 16.2939C11.0976 16.6844 11.0976 17.3176 10.7071 17.7081C10.3166 18.0986 9.68342 18.0986 9.29289 17.7081L4.29289 12.7081C4.10536 12.5205 4 12.2662 4 12.001C4 11.7358 4.10536 11.4814 4.29289 11.2939L9.29289 6.29387C9.68342 5.90335 10.3166 5.90335 10.7071 6.29387Z' fill='%233C3C49'/%3e%3c/svg%3e"
            alt="Back Arrow"
          />

          Back
        </button>

        <div class="pera-wallet-connect-modal-download-pera-view">
          <h1 class="pera-wallet-connect-modal-download-pera-view__title">
            Download Pera Wallet
          </h1>

          <pera-wallet-download-qr-code></pera-wallet-download-qr-code>

          <div class="pera-wallet-connect-modal-download-pera-view__footer">
            <a
              href="https://apps.apple.com/us/app/algorand-wallet/id1459898525"
              target="_blank"
              rel="noopener noreferrer">
              <img src="data:image/svg+xml,%3csvg width='40' height='40' viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='40' height='40' rx='12' fill='black'/%3e%3cpath d='M25.6308 20.3011C25.6416 19.4664 25.8633 18.6481 26.2753 17.9221C26.6873 17.1962 27.2763 16.5863 27.9873 16.1491C27.5356 15.5039 26.9397 14.973 26.2469 14.5984C25.554 14.2239 24.7834 14.016 23.9963 13.9914C22.317 13.8151 20.6891 14.9962 19.8333 14.9962C18.9611 14.9962 17.6436 14.0089 16.2249 14.0381C15.3072 14.0677 14.4128 14.3346 13.6289 14.8126C12.8451 15.2906 12.1984 15.9636 11.7519 16.7659C9.81789 20.1144 11.2605 25.0354 13.1132 27.742C14.0401 29.0674 15.1233 30.5478 16.5408 30.4953C17.9278 30.4378 18.4458 29.6108 20.1202 29.6108C21.779 29.6108 22.265 30.4953 23.7112 30.4619C25.1995 30.4378 26.1372 29.1307 27.0316 27.7928C27.6976 26.8484 28.2101 25.8047 28.55 24.7003C27.6853 24.3345 26.9474 23.7224 26.4283 22.9401C25.9092 22.1578 25.6318 21.2399 25.6308 20.3011ZM22.8993 12.2113C23.7108 11.2371 24.1106 9.98492 24.0138 8.7207C22.7739 8.85092 21.6287 9.44347 20.8062 10.3803C20.404 10.838 20.096 11.3704 19.8998 11.9472C19.7035 12.5239 19.6229 13.1337 19.6625 13.7417C20.2826 13.7481 20.8961 13.6137 21.4568 13.3486C22.0175 13.0835 22.5107 12.6946 22.8993 12.2113Z' fill='white'/%3e%3c/svg%3e" alt="App Store icon" />
            </a>

            <a
              href="https://play.google.com/store/apps/details?id=com.algorand.android"
              target="_blank"
              rel="noopener noreferrer">
              <img src="data:image/svg+xml,%3csvg width='40' height='40' viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='40' height='40' rx='12' fill='black'/%3e%3cpath d='M12.41 9.7719C12.1334 10.0219 11.9683 10.4388 11.9683 10.9922V10.8671V29.1294V29.0091C11.9683 29.5202 12.1099 29.9149 12.3497 30.169L12.4109 30.2277V30.228C12.6051 30.4035 12.854 30.4966 13.1393 30.4963C13.418 30.4963 13.7316 30.4073 14.0626 30.2194L26.0264 23.4107L30.1359 21.0717C30.6578 20.7748 30.9508 20.3917 30.9998 20.0014V19.9998C30.9508 19.6087 30.6578 19.2259 30.1359 18.9289L26.0261 16.5902L14.0627 9.78154C13.731 9.59325 13.4171 9.50391 13.1376 9.50391C12.8527 9.50391 12.6041 9.59677 12.41 9.7719H12.41Z' fill='%2300C1FF'/%3e%3cpath d='M12.411 30.2285L12.3497 30.1698C12.1099 29.9157 11.9683 29.5209 11.9683 29.0098V29.1301V10.8724V10.993C11.9683 10.4396 12.1334 10.0226 12.41 9.77268L22.622 20.0009L12.411 30.2285Z' fill='url(%23paint0_linear_173_14441)'/%3e%3cpath d='M26.0256 23.4102L22.6211 19.9996L26.0253 16.5896L30.1351 18.9283C30.657 19.2253 30.95 19.6081 30.9989 19.9993V20.0008C30.95 20.3911 30.657 20.7742 30.1351 21.0712L26.0256 23.4101' fill='url(%23paint1_linear_173_14441)'/%3e%3cpath d='M13.1374 30.4961C12.8522 30.4964 12.6033 30.4032 12.4092 30.2277V30.2275L22.6202 19.9999L26.0246 23.4104L14.0608 30.2191C13.7298 30.4071 13.4162 30.4961 13.1374 30.4961Z' fill='url(%23paint2_linear_173_14441)'/%3e%3cpath d='M22.6212 20.002L12.4092 9.7737C12.6033 9.59858 12.8519 9.50571 13.1368 9.50571C13.4163 9.50571 13.7302 9.59501 14.0618 9.78335L26.0253 16.592L22.6212 20.002' fill='url(%23paint3_linear_173_14441)'/%3e%3cpath d='M13.1394 30.6172C12.8542 30.6172 12.6049 30.524 12.4108 30.3486L12.4105 30.3489C12.4097 30.3481 12.4088 30.3473 12.4079 30.3466L12.3548 30.2947C12.3531 30.2931 12.3516 30.2912 12.3496 30.2893L12.4108 30.2279C12.6049 30.4034 12.8538 30.4966 13.1392 30.4962C13.4179 30.4962 13.7315 30.4073 14.0625 30.2193L26.0263 23.4106L26.1029 23.4874L26.0253 23.5316L14.0625 30.3398C13.7608 30.5111 13.4739 30.6004 13.2147 30.6153C13.1896 30.6165 13.1645 30.6171 13.1394 30.6172' fill='url(%23paint4_linear_173_14441)'/%3e%3cpath d='M12.3497 30.2891C12.1099 30.0349 11.9683 29.6406 11.9683 29.1292V29.0089C11.9683 29.52 12.1099 29.9146 12.3497 30.1688L12.4109 30.2275L12.3497 30.2891Z' fill='url(%23paint5_linear_173_14441)'/%3e%3cpath d='M26.1025 23.4882L26.0259 23.4114L30.1349 21.0727C30.6568 20.7758 30.9498 20.3927 30.9987 20.0025C30.9987 20.1457 30.9668 20.2889 30.9035 20.4282C30.7756 20.7091 30.5194 20.9744 30.135 21.1934L26.1025 23.4883' fill='url(%23paint6_linear_173_14441)'/%3e%3cpath d='M30.9991 20C30.9501 19.6089 30.6571 19.2261 30.1353 18.9291L26.0259 16.5907L26.1025 16.5139H26.1029L30.1353 18.8088C30.7106 19.1365 30.9987 19.5682 30.9991 20Z' fill='url(%23paint7_linear_173_14441)'/%3e%3cpath d='M11.9683 10.9922V10.8661C11.9683 10.8206 11.9695 10.7761 11.9718 10.7329V10.7309C11.9718 10.7303 11.9718 10.7297 11.972 10.729V10.7242C11.9969 10.284 12.1334 9.94066 12.3497 9.71139L12.4099 9.77198C12.1334 10.0219 11.9683 10.4388 11.9683 10.9922Z' fill='url(%23paint8_linear_173_14441)'/%3e%3cpath d='M26.026 16.5898L14.0625 9.78115C13.7308 9.59285 13.417 9.50355 13.1375 9.50355C12.8525 9.50355 12.6039 9.59642 12.4099 9.77154L12.3496 9.71091C12.3684 9.69096 12.388 9.67172 12.4082 9.65322C12.4089 9.65255 12.4099 9.65188 12.4105 9.65125C12.6031 9.47747 12.849 9.3846 13.1314 9.38293H13.1375C13.417 9.38293 13.7308 9.47227 14.0625 9.66064L26.1029 16.5128L26.1026 16.513L26.026 16.5898Z' fill='url(%23paint9_linear_173_14441)'/%3e%3cdefs%3e%3clinearGradient id='paint0_linear_173_14441' x1='18.4943' y1='10.6794' x2='9.69389' y2='19.494' gradientUnits='userSpaceOnUse'%3e%3cstop stop-color='%2300A0FF'/%3e%3cstop offset='0.00657' stop-color='%2300A1FF'/%3e%3cstop offset='0.2601' stop-color='%2300BEFF'/%3e%3cstop offset='0.5122' stop-color='%2300D2FF'/%3e%3cstop offset='0.7604' stop-color='%2300DFFF'/%3e%3cstop offset='1' stop-color='%2300E3FF'/%3e%3c/linearGradient%3e%3clinearGradient id='paint1_linear_173_14441' x1='31.6348' y1='19.9407' x2='11.691' y2='19.9407' gradientUnits='userSpaceOnUse'%3e%3cstop stop-color='%23FFE000'/%3e%3cstop offset='0.4087' stop-color='%23FFBD00'/%3e%3cstop offset='0.7754' stop-color='orange'/%3e%3cstop offset='1' stop-color='%23FF9C00'/%3e%3c/linearGradient%3e%3clinearGradient id='paint2_linear_173_14441' x1='24.2172' y1='23.2425' x2='9.30414' y2='38.0705' gradientUnits='userSpaceOnUse'%3e%3cstop stop-color='%23FF3A44'/%3e%3cstop offset='1' stop-color='%23C31162'/%3e%3c/linearGradient%3e%3clinearGradient id='paint3_linear_173_14441' x1='9.77725' y1='8.25731' x2='16.4237' y2='14.876' gradientUnits='userSpaceOnUse'%3e%3cstop stop-color='%2332A071'/%3e%3cstop offset='0.0685' stop-color='%232DA771'/%3e%3cstop offset='0.4762' stop-color='%2315CF74'/%3e%3cstop offset='0.8009' stop-color='%2306E775'/%3e%3cstop offset='1' stop-color='%2300F076'/%3e%3c/linearGradient%3e%3clinearGradient id='paint4_linear_173_14441' x1='24.2114' y1='25.6084' x2='12.2683' y2='37.5709' gradientUnits='userSpaceOnUse'%3e%3cstop stop-color='%23CC2E36'/%3e%3cstop offset='1' stop-color='%239C0E4E'/%3e%3c/linearGradient%3e%3clinearGradient id='paint5_linear_173_14441' x1='13.3285' y1='10.6804' x2='5.57625' y2='18.4453' gradientUnits='userSpaceOnUse'%3e%3cstop stop-color='%23008DE0'/%3e%3cstop offset='0.00657' stop-color='%23008DE0'/%3e%3cstop offset='0.2601' stop-color='%2300A7E0'/%3e%3cstop offset='0.5122' stop-color='%2300B8E0'/%3e%3cstop offset='0.7604' stop-color='%2300C4E0'/%3e%3cstop offset='1' stop-color='%2300C7E0'/%3e%3c/linearGradient%3e%3clinearGradient id='paint6_linear_173_14441' x1='31.6346' y1='20.0018' x2='11.6929' y2='20.0018' gradientUnits='userSpaceOnUse'%3e%3cstop stop-color='%23E0C500'/%3e%3cstop offset='0.4087' stop-color='%23E0A600'/%3e%3cstop offset='0.7754' stop-color='%23E09100'/%3e%3cstop offset='1' stop-color='%23E08900'/%3e%3c/linearGradient%3e%3clinearGradient id='paint7_linear_173_14441' x1='31.6349' y1='20.0008' x2='11.6933' y2='20.0008' gradientUnits='userSpaceOnUse'%3e%3cstop stop-color='%23FFE840'/%3e%3cstop offset='0.4087' stop-color='%23FFCE40'/%3e%3cstop offset='0.7754' stop-color='%23FFBC40'/%3e%3cstop offset='1' stop-color='%23FFB540'/%3e%3c/linearGradient%3e%3clinearGradient id='paint8_linear_173_14441' x1='13.3201' y1='10.6927' x2='5.8533' y2='17.8475' gradientUnits='userSpaceOnUse'%3e%3cstop stop-color='%2340B8FF'/%3e%3cstop offset='0.00657' stop-color='%2340B9FF'/%3e%3cstop offset='0.2601' stop-color='%2340CEFF'/%3e%3cstop offset='0.5122' stop-color='%2340DDFF'/%3e%3cstop offset='0.7604' stop-color='%2340E7FF'/%3e%3cstop offset='1' stop-color='%2340EAFF'/%3e%3c/linearGradient%3e%3clinearGradient id='paint9_linear_173_14441' x1='9.76302' y1='10.4182' x2='15.0961' y2='15.76' gradientUnits='userSpaceOnUse'%3e%3cstop stop-color='%2365B895'/%3e%3cstop offset='0.0685' stop-color='%2362BD95'/%3e%3cstop offset='0.4762' stop-color='%2350DB97'/%3e%3cstop offset='0.8009' stop-color='%2344ED98'/%3e%3cstop offset='1' stop-color='%2340F498'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e" alt="Play Store icon" />
            </a>

            <a
              class="pera-wallet-connect-modal-download-pera-view__footer__button"
              href="https://perawallet.s3-eu-west-3.amazonaws.com/android-releases/app-pera-prod-release-bitrise-signed.apk"
              target="_blank"
              rel="noopener noreferrer">
              <img src="data:image/svg+xml,%3csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M3 14V20C3 20.5523 3.44772 21 4 21H20C20.5523 21 21 20.5523 21 20V14' stroke='%232C3559' stroke-width='1.5'/%3e%3cpath d='M11.9998 16V3M11.9998 16L7.47803 11.4783M11.9998 16L16.5215 11.4783' stroke='%232C3559' stroke-width='1.5'/%3e%3c/svg%3e" alt="Download icon" />

              Download APK File
            </a>
          </div>
        </div>
      </div>
    </div>
  `;var Gi=class extends HTMLElement{constructor(){var et;if(super(),this.attachShadow({mode:"open"}),this.shadowRoot){this.shadowRoot.append(ti.content.cloneNode(!0),ei,ni),this.shadowRoot.addEventListener("click",(kt=>{this.handleAccordion(kt)})),this.getAttribute("compact-mode")==="true"&&this.shadowRoot.getElementById("pera-wallet-connect-modal-desktop-mode")?.classList.add("pera-wallet-connect-modal-desktop-mode--compact");const ut=(et=this.shadowRoot)===null||et===void 0?void 0:et.querySelector(".pera-wallet-connect-modal-desktop-mode__default-view"),pt=this.getAttribute("promote-mobile")==="true",{webWalletOption:Lt,mobileWalletOption:_t}=(function(kt){const Dt=`
  <div id="web-wallet-option" class="pera-wallet-accordion-item ${kt?"":"pera-wallet-accordion-item--active"}  pera-wallet-accordion-item--web-wallet">
            <a class="pera-wallet-accordion-toggle">
              <button class="pera-wallet-accordion-toggle__button"></button>
  
              <img src="${Nn}" class="pera-wallet-accordion-icon" />
  
              <div class="pera-wallet-accordion-toggle__content-with-label">
                <div class="pera-wallet-accordion-toggle__content-with-label__text">
                  Connect With
  
                  <span class="pera-wallet-accordion-toggle__bold-color">
                    Pera Web
                  </span>
                </div>
  
                <span id="pera-web-new-label" class="pera-wallet-accordion-toggle__label">NEW</span>
              </div>
            </a>
  
            <div class="pera-wallet-accordion-item__content">
              <div class="pera-wallet-connect-modal-desktop-mode__web-wallet"><div>
              
              <div
                class="pera-wallet-connect-modal-desktop-mode__web-wallet__logo-wrapper">
                <img src="data:image/svg+xml,%3csvg width='44' height='44' viewBox='0 0 44 44' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3crect x='3.5' y='7.5' width='36' height='26' rx='5.5' stroke='%236B46FE' stroke-width='3'/%3e%3cpath d='M22.4973 14.5237C22.8556 16.041 22.7344 17.3757 22.2267 17.5048C21.719 17.6339 21.0169 16.5085 20.6586 14.9912C20.3003 13.4739 20.4214 12.1392 20.9292 12.0101C21.4369 11.881 22.1389 13.0064 22.4973 14.5237Z' fill='%236B46FE'/%3e%3cpath d='M28.4139 15.8282C27.6204 14.9686 26.0417 15.2016 24.8877 16.3486C23.7338 17.4956 23.4417 19.1222 24.2352 19.9818C25.0287 20.8414 26.6074 20.6084 27.7613 19.4614C28.9153 18.3144 29.2074 16.6878 28.4139 15.8282Z' fill='%236B46FE'/%3e%3cpath d='M22.1027 28.9905C22.6104 28.8614 22.7137 27.4512 22.3334 25.8407C21.9531 24.2303 21.2332 23.0294 20.7254 23.1585C20.2177 23.2876 20.1144 24.6978 20.4947 26.3083C20.875 27.9187 21.5949 29.1196 22.1027 28.9905Z' fill='%236B46FE'/%3e%3cpath d='M16.9269 16.6152C18.3917 17.0567 19.4621 17.8312 19.3176 18.3452C19.1731 18.8591 17.8686 18.9179 16.4037 18.4764C14.9389 18.0349 13.8686 17.2603 14.0131 16.7464C14.1575 16.2324 15.4621 16.1737 16.9269 16.6152Z' fill='%236B46FE'/%3e%3cpath d='M26.4342 22.4188C27.9889 22.8874 29.1322 23.6839 28.9877 24.1979C28.8432 24.7118 27.4657 24.7486 25.911 24.28C24.3563 23.8114 23.213 23.0148 23.3575 22.5009C23.502 21.9869 24.8795 21.9502 26.4342 22.4188Z' fill='%236B46FE'/%3e%3cpath d='M18.5752 21.3404C18.2119 20.9555 17.0205 21.5157 15.914 22.5915C14.8075 23.6673 14.2049 24.8514 14.5682 25.2363C14.9314 25.6211 16.1229 25.061 17.2294 23.9852C18.3359 22.9094 18.9384 21.7253 18.5752 21.3404Z' fill='%236B46FE'/%3e%3cpath d='M16 39C21 39.0001 23.5 39.0001 28 39' stroke='%236B46FE' stroke-width='3' stroke-linecap='round'/%3e%3c/svg%3e" />
              </div>
  
              <p
                class="pera-wallet-connect-modal-desktop-mode__web-wallet__description">
                Connect with Pera Web to continue
              </p>
            </div>
  
            <button
              id="pera-wallet-connect-web-wallet-launch-button"
              class="pera-wallet-connect-modal-desktop-mode__web-wallet__launch-button">
              Launch Pera Web
  
              <img src="data:image/svg+xml,%3csvg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M13.0892 9.41009C13.4147 9.73553 13.4147 10.2632 13.0892 10.5886L8.08924 15.5886C7.7638 15.914 7.23616 15.914 6.91072 15.5886C6.58529 15.2632 6.58529 14.7355 6.91072 14.4101L11.3215 9.99935L6.91073 5.5886C6.58529 5.26317 6.58529 4.73553 6.91073 4.41009C7.23616 4.08466 7.7638 4.08466 8.08924 4.41009L13.0892 9.41009Z' fill='white'/%3e%3c/svg%3e" />
            </button>
          </div>`,Ut=`
  <div id="mobile-wallet-option" class="pera-wallet-accordion-item ${kt?"pera-wallet-accordion-item--active":""}">
            <a class="pera-wallet-accordion-toggle">
            <button class="pera-wallet-accordion-toggle__button"></button>
  
              <img src="${Nn}" class="pera-wallet-accordion-icon" />
  
              <div class="pera-wallet-accordion-toggle__text">
                Connect with
  
                <span class="pera-wallet-accordion-toggle__bold-color">
                  Pera Mobile
                </span>
              </div>
            </a>
  
            <div class="pera-wallet-accordion-item__content">
              <div id="pera-wallet-connect-modal-connect-qr-code" class="pera-wallet-connect-qr-code-wrapper"></div>
  
              <div class="pera-wallet-connect-modal-desktop-mode__download-pera-container">
                <p
                  class="pera-wallet-connect-modal-desktop-mode__download-pera-description">
                    Don’t have Pera Wallet app?
                </p>
  
                <button
                  id="pera-wallet-connect-modal-desktop-mode-download-pera-button"
                  class="pera-wallet-connect-modal-desktop-mode__download-pera-button">
                  <img src="data:image/svg+xml,%3csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3crect x='2' y='2' width='4.66667' height='4.66667' rx='1.2' stroke='%236B46FE' stroke-width='1.5'/%3e%3crect x='2' y='9.33203' width='4.66667' height='4.66667' rx='1.2' stroke='%236B46FE' stroke-width='1.5'/%3e%3crect x='9.33325' y='2' width='4.66667' height='4.66667' rx='1.2' stroke='%236B46FE' stroke-width='1.5'/%3e%3cpath d='M8.70581 9.5293H10.9411' stroke='%236B46FE' stroke-width='1.66667' stroke-linejoin='round'/%3e%3cpath d='M13.1765 12.668L14.6667 12.668' stroke='%236B46FE' stroke-width='1.66667' stroke-linejoin='round'/%3e%3cpath d='M13.1765 14L14.6667 14' stroke='%236B46FE' stroke-width='1.66667' stroke-linejoin='round'/%3e%3cpath d='M11.686 14L13.1762 14' stroke='%236B46FE' stroke-width='1.66667' stroke-linejoin='round'/%3e%3cpath d='M12.4314 9.5293H14.6667' stroke='%236B46FE' stroke-width='1.66667' stroke-linejoin='round'/%3e%3cpath d='M8.70581 10.2754H12.4313' stroke='%236B46FE' stroke-width='1.25' stroke-linejoin='round'/%3e%3cpath d='M10.196 11.7656H11.6862' stroke='%236B46FE' stroke-width='1.25' stroke-linejoin='round'/%3e%3cpath d='M10.196 12.5117H11.6862' stroke='%236B46FE' stroke-width='1.25' stroke-linejoin='round'/%3e%3cpath d='M8.70581 13.2539H10.196' stroke='%236B46FE' stroke-width='1.25' stroke-linejoin='round'/%3e%3cpath d='M8.70581 14H10.196' stroke='%236B46FE' stroke-width='1.25' stroke-linejoin='round'/%3e%3cpath d='M10.196 11.0195H12.4313' stroke='%236B46FE' stroke-width='1.25' stroke-linejoin='round'/%3e%3c/svg%3e" alt="QR Icon" />
  
                  Download Pera Wallet
                </button>
              </div>
            </div>
          </div>`;return{mobileWalletOption:document.createRange().createContextualFragment(Ut),webWalletOption:document.createRange().createContextualFragment(Dt)}})(pt);pt?(ut?.appendChild(_t),ut?.appendChild(Lt)):(ut?.appendChild(Lt),ut?.appendChild(_t))}}connectedCallback(){var et;const ut=this.getAttribute("should-display-new-badge"),pt=(et=this.shadowRoot)===null||et===void 0?void 0:et.getElementById("pera-web-new-label");ut==="false"&&pt?.setAttribute("style","display:none"),this.handleChangeView()}handleChangeView(){var et,ut,pt;const Lt=(et=this.shadowRoot)===null||et===void 0?void 0:et.getElementById("pera-wallet-connect-modal-desktop-mode-download-pera-button"),_t=(ut=this.shadowRoot)===null||ut===void 0?void 0:ut.getElementById("pera-wallet-connect-modal-download-pera-view-back-button"),kt=(pt=this.shadowRoot)===null||pt===void 0?void 0:pt.getElementById("pera-wallet-connect-web-wallet-launch-button");Lt&&Lt.addEventListener("click",(()=>{this.onClickDownload()})),_t&&_t.addEventListener("click",(()=>{this.onClickBack()})),kt&&kt.addEventListener("click",(()=>{this.webWalletConnect()})),this.renderQRCode(),this.checkWebWalletAvaliability()}webWalletConnect(){this.getAttribute("is-web-wallet-avaliable")==="true"&&window.onWebWalletConnect()}handleAccordion(et){var ut,pt;if(et.target instanceof Element){if(!et.target.classList.contains("pera-wallet-accordion-toggle__button"))return;if(this.shadowRoot&&(!((ut=et.target.parentElement)===null||ut===void 0)&&ut.parentElement)){const Lt=(pt=et.target.parentElement)===null||pt===void 0?void 0:pt.parentElement;if(!Lt||Lt.classList.contains("pera-wallet-accordion-item--active"))return;const _t=this.shadowRoot.querySelectorAll(".pera-wallet-accordion-item.pera-wallet-accordion-item--active");for(let kt=0;kt<_t.length;kt++)_t[kt].classList.remove("pera-wallet-accordion-item--active");Lt.classList.toggle("pera-wallet-accordion-item--active")}}}renderQRCode(){var et;const ut=this.getAttribute("is-web-wallet-avaliable"),pt=this.getAttribute("compact-mode")==="true",Lt=this.getAttribute("single-account")==="true";let _t=this.getAttribute("uri");Lt&&(_t=`${_t}&singleAccount=true`);let kt=ut==="false"?250:205;if(pt&&(kt=190),_t){const Dt=new Wn.default({width:kt,height:kt,type:"svg",data:_t,image:Yn,dotsOptions:{color:"#000",type:"extra-rounded"},imageOptions:{crossOrigin:"anonymous",margin:8},cornersSquareOptions:{type:"extra-rounded"},cornersDotOptions:{type:"dot"}}),Ut=(et=this.shadowRoot)===null||et===void 0?void 0:et.getElementById("pera-wallet-connect-modal-connect-qr-code");Ut&&Dt.append(Ut)}}onClickDownload(){if(this.shadowRoot){const et=this.shadowRoot.getElementById("pera-wallet-connect-modal-desktop-mode");et&&(et.classList.remove("pera-wallet-connect-modal-desktop-mode--default"),et.classList.add("pera-wallet-connect-modal-desktop-mode--download"))}}onClickBack(){if(this.shadowRoot){const et=this.shadowRoot.getElementById("pera-wallet-connect-modal-desktop-mode");et&&(et.classList.add("pera-wallet-connect-modal-desktop-mode--default"),et.classList.remove("pera-wallet-connect-modal-desktop-mode--download"))}}checkWebWalletAvaliability(){var et;this.getAttribute("is-web-wallet-avaliable")==="false"&&((et=this.shadowRoot)===null||et===void 0?void 0:et.querySelector(".pera-wallet-connect-modal-desktop-mode__default-view"))?.classList.add("pera-wallet-connect-modal-desktop-mode__default-view--web-wallet-not-avaliable")}},An=`.pera-wallet-connect-modal-touch-screen-mode {
  display: grid;
  grid-template-columns: 1fr;
  gap: 46px;
  padding: 4px;
}

.pera-wallet-connect-modal-touch-screen-mode--pending-message-view {
  gap: 56px;
  grid-template-rows: auto 48px;
  height: 100%;
  padding-bottom: 70px;
}

.pera-wallet-connect-modal-touch-screen-mode__launch-pera-wallet-button,
.pera-wallet-connect-modal-touch-screen-mode__install-pera-wallet-button {
  display: block;
  padding: 14px;
  border-radius: 12px;
  text-decoration: none;
  text-align: center;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.09px;
  font-weight: 500;
}

.pera-wallet-connect-modal-touch-screen-mode__launch-pera-wallet-button {
  margin-bottom: 32px;
  background-color: #6b46fe;
  color: #ffffff;
}

.pera-wallet-connect-modal-touch-screen-mode__install-pera-wallet-button {
  margin-bottom: 20px;
  color: #6a6a81;
  background-color: #ffffff;
  box-shadow: 0px 0px 1px rgba(12, 26, 75, 0.24), 0px 3px 8px -1px rgba(50, 50, 71, 0.05);
}

.pera-wallet-connect-modal-touch-screen-mode__new-to-pera-box {
  position: relative;
  margin-bottom: 32px;
  border-top: 1px solid #e6e8ee;
}

.pera-wallet-connect-modal-touch-screen-mode__new-to-pera-box__text {
  position: absolute;
  top: -25px;
  right: calc(50% - 56px);
  width: 116px;
  color: #69708d;
  background-color: #ffffff;
  font-size: 13px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.04px;
  text-align: center;
}`;ke(An);var mn=document.createElement("template"),Ui=class extends HTMLElement{constructor(){var et;if(super(),this.attachShadow({mode:"open"}),mn.innerHTML=`
  <div class="pera-wallet-connect-modal-touch-screen-mode">
    <pera-wallet-connect-modal-information-section></pera-wallet-connect-modal-information-section>

    <div>
      <a
        id="pera-wallet-connect-modal-touch-screen-mode-launch-pera-wallet-button"
        class="pera-wallet-connect-modal-touch-screen-mode__launch-pera-wallet-button"
        rel="noopener noreferrer"
        target="_blank">
        Launch Pera Wallet
      </a>

      <div
        class="pera-wallet-connect-modal-touch-screen-mode__new-to-pera-box">
        <p
          class="pera-wallet-connect-modal-touch-screen-mode__new-to-pera-box__text"
          >
          New to Pera?
        </p>
      </div>

      <a
        href="https://perawallet.app/download/"
        class="pera-wallet-connect-modal-touch-screen-mode__install-pera-wallet-button"
        rel="noopener noreferrer"
        target="_blank">
        Install Pera Wallet
      </a>
    </div>
  </div>
`,this.shadowRoot){const ut=document.createElement("style");ut.textContent=An,this.shadowRoot.append(mn.content.cloneNode(!0),ut);const pt=(et=this.shadowRoot)===null||et===void 0?void 0:et.getElementById("pera-wallet-connect-modal-touch-screen-mode-launch-pera-wallet-button"),Lt=this.getAttribute("uri"),_t=this.getAttribute("single-account")==="true",kt=this.getAttribute("selected-account")||void 0;pt&&Lt&&(pt.setAttribute("href",qi(Lt,{singleAccount:_t,selectedAccount:kt})),pt.addEventListener("click",(()=>{this.onClickLaunch()})))}}onClickLaunch(){if(mn.innerHTML=`
    <div class="pera-wallet-connect-modal-touch-screen-mode pera-wallet-connect-modal-touch-screen-mode--pending-message-view">
      <pera-wallet-connect-modal-pending-message-section should-use-sound="${this.getAttribute("should-use-sound")}"></pera-wallet-connect-modal-pending-message-section>
    </div>
  `,this.shadowRoot){const et=document.createElement("style");et.textContent=An,this.shadowRoot.innerHTML="",this.shadowRoot.append(mn.content.cloneNode(!0),et)}}},ii=`@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap");
.pera-wallet-modal {
  --pera-wallet-modal-font-family: "Inter", sans-serif;
  --pera-wallet-modal-compact-width: 380px;
  --pera-wallet-modal-compact-height: 396px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 999999;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
}
.pera-wallet-modal--select-account .pera-wallet-modal__body {
  width: 480px;
  height: 578px;
  background-color: #ffffff;
}
.pera-wallet-modal--mobile .pera-wallet-modal__body {
  position: absolute;
  top: unset;
  bottom: 0;
  left: 0;
  width: 100%;
  max-width: unset;
  padding: 20px;
  background-color: #ffffff;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.02), 0 4px 12px rgba(0, 0, 0, 0.03);
  border-radius: 20px 20px 0px 0px;
  animation: 0.3s PeraWalletConnectMobileSlideIn ease-out;
  overflow-y: auto;
  transform: unset;
}
.pera-wallet-modal--mobile .pera-wallet-modal__body::before {
  background-image: unset;
}
.pera-wallet-modal--compact:not(.pera-wallet-modal--mobile) .pera-wallet-modal__body {
  width: var(--pera-wallet-modal-compact-width);
  height: var(--pera-wallet-modal-compact-height);
  padding: 0;
}
.pera-wallet-modal * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: var(--pera-wallet-modal-font-family);
  font-smooth: antialiased;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.pera-wallet-modal ul,
.pera-wallet-modal ol,
.pera-wallet-modal li {
  list-style-type: none;
}

.pera-wallet-button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: auto;
  height: 48px;
  padding: 14px;
  border: none;
  border-radius: 12px;
  outline: none;
  cursor: pointer;
  font-family: var(--pera-wallet-modal-font-family);
  font-size: 14px;
}

.pera-wallet-modal__logo img {
  display: block;
  width: 32px;
}

.pera-wallet-modal__body {
  position: relative;
  top: 50%;
  left: 50%;
  width: 700px;
  max-width: calc(100vw - 80px);
  padding: 28px;
  background-color: #f3f3f7;
  box-shadow: 1px 2px 2px rgba(0, 0, 0, 0.08);
  border-radius: 24px;
  animation: 0.3s PeraWalletConnectSlideIn ease-out;
  transform: translate(-50%, -50%);
}
.pera-wallet-modal__body::before {
  --background-line: #1e0972 0 1.2px, transparent 0 calc(100% - 1.2px), #1e0972;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  content: "";
  background-image: linear-gradient(var(--background-line)), linear-gradient(90deg, var(--background-line));
  background-size: 116px 116px;
  mix-blend-mode: overlay;
  border-radius: 24px;
  opacity: 0.8;
  pointer-events: none;
}

@media (max-width: 767px) {
  .pera-wallet-modal--desktop .pera-wallet-modal__body {
    width: 100%;
    max-width: calc(100vw - 32px);
    padding: 24px;
  }
}
@keyframes PeraWalletConnectSlideIn {
  0% {
    opacity: 0;
    transform: translate(-50%, calc(-50% + 24px));
  }
  100% {
    opacity: 1;
    transform: translate(-50%, -50%);
  }
}
@keyframes PeraWalletConnectMobileSlideIn {
  0% {
    bottom: -30%;
    opacity: 0;
  }
  100% {
    bottom: 0;
    opacity: 1;
  }
}`;ke(ii);var gn=document.createElement("template"),vn=Be()?`${hn} ${hn}--mobile`:`${hn} ${hn}--desktop`,Xi=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.shadowRoot&&this.render()}render(){if(!this.shadowRoot)return;const et=document.createElement("style");et.textContent=ii,this.getAttribute("compact-mode")==="true"&&(vn=`${vn} pera-wallet-modal--compact`);const ut=this.getAttribute("single-account")==="true",pt=this.getAttribute("selected-account")||void 0;Be()?(gn.innerHTML=`
          <div class="${vn}">
            <div class="pera-wallet-modal__body" part="body">
              <pera-wallet-modal-header modal-id="${kn}"></pera-wallet-modal-header/>
        
              <pera-wallet-modal-touch-screen-mode uri="${this.getAttribute("uri")}" should-use-sound="${this.getAttribute("should-use-sound")}" single-account="${ut}" selected-account="${pt}"></pera-wallet-modal-touch-screen-mode>
            </div>
          </div>
        `,this.shadowRoot.append(gn.content.cloneNode(!0),et)):(gn.innerHTML=`
        <div class="${vn}">
          <div class="pera-wallet-modal__body">
            <pera-wallet-modal-header modal-id="${kn}"></pera-wallet-modal-header/>
      
            <pera-wallet-modal-desktop-mode id="pera-wallet-modal-desktop-mode" uri="${this.getAttribute("uri")}" is-web-wallet-avaliable="${this.getAttribute("is-web-wallet-avaliable")}" should-display-new-badge="${this.getAttribute("should-display-new-badge")}" compact-mode="${this.getAttribute("compact-mode")}" promote-mobile="${this.getAttribute("promote-mobile")}" single-account="${ut}"
        ></pera-wallet-modal-desktop-mode>
          </div>
        </div>
      `,this.shadowRoot.append(gn.content.cloneNode(!0),et))}},ri=`@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap");
.pera-wallet-modal {
  --pera-wallet-modal-font-family: "Inter", sans-serif;
  --pera-wallet-modal-compact-width: 380px;
  --pera-wallet-modal-compact-height: 396px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 999999;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
}
.pera-wallet-modal--select-account .pera-wallet-modal__body {
  width: 480px;
  height: 578px;
  background-color: #ffffff;
}
.pera-wallet-modal--mobile .pera-wallet-modal__body {
  position: absolute;
  top: unset;
  bottom: 0;
  left: 0;
  width: 100%;
  max-width: unset;
  padding: 20px;
  background-color: #ffffff;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.02), 0 4px 12px rgba(0, 0, 0, 0.03);
  border-radius: 20px 20px 0px 0px;
  animation: 0.3s PeraWalletConnectMobileSlideIn ease-out;
  overflow-y: auto;
  transform: unset;
}
.pera-wallet-modal--mobile .pera-wallet-modal__body::before {
  background-image: unset;
}
.pera-wallet-modal--compact:not(.pera-wallet-modal--mobile) .pera-wallet-modal__body {
  width: var(--pera-wallet-modal-compact-width);
  height: var(--pera-wallet-modal-compact-height);
  padding: 0;
}
.pera-wallet-modal * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: var(--pera-wallet-modal-font-family);
  font-smooth: antialiased;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.pera-wallet-modal ul,
.pera-wallet-modal ol,
.pera-wallet-modal li {
  list-style-type: none;
}

.pera-wallet-button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: auto;
  height: 48px;
  padding: 14px;
  border: none;
  border-radius: 12px;
  outline: none;
  cursor: pointer;
  font-family: var(--pera-wallet-modal-font-family);
  font-size: 14px;
}

.pera-wallet-modal__logo img {
  display: block;
  width: 32px;
}

.pera-wallet-modal__body {
  position: relative;
  top: 50%;
  left: 50%;
  width: 700px;
  max-width: calc(100vw - 80px);
  padding: 28px;
  background-color: #f3f3f7;
  box-shadow: 1px 2px 2px rgba(0, 0, 0, 0.08);
  border-radius: 24px;
  animation: 0.3s PeraWalletConnectSlideIn ease-out;
  transform: translate(-50%, -50%);
}
.pera-wallet-modal__body::before {
  --background-line: #1e0972 0 1.2px, transparent 0 calc(100% - 1.2px), #1e0972;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  content: "";
  background-image: linear-gradient(var(--background-line)), linear-gradient(90deg, var(--background-line));
  background-size: 116px 116px;
  mix-blend-mode: overlay;
  border-radius: 24px;
  opacity: 0.8;
  pointer-events: none;
}

@media (max-width: 767px) {
  .pera-wallet-modal--desktop .pera-wallet-modal__body {
    width: 100%;
    max-width: calc(100vw - 32px);
    padding: 24px;
  }
}
@keyframes PeraWalletConnectSlideIn {
  0% {
    opacity: 0;
    transform: translate(-50%, calc(-50% + 24px));
  }
  100% {
    opacity: 1;
    transform: translate(-50%, -50%);
  }
}
@keyframes PeraWalletConnectMobileSlideIn {
  0% {
    bottom: -30%;
    opacity: 0;
  }
  100% {
    bottom: 0;
    opacity: 1;
  }
}
.pera-wallet-redirect-modal {
  display: grid;
  grid-template-columns: 1fr;
  gap: 56px;
  grid-template-rows: auto 48px;
  height: 100%;
  padding: 4px;
  padding-bottom: 70px;
}

.pera-wallet-redirect-modal__content {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.pera-wallet-redirect-modal__content__title {
  margin: 20px 0 8px;
  color: #3c3c49;
  font-size: 18px;
  font-weight: 600;
  line-height: 22px;
  letter-spacing: -0.26px;
}

.pera-wallet-redirect-modal__content__description,
.pera-wallet-redirect-modal__content__install-pera-text {
  color: #3c3c49;
  max-width: 271px;
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: -0.09px;
  text-align: center;
}

.pera-wallet-redirect-modal__content__description {
  margin-bottom: 24px;
}

.pera-wallet-redirect-modal__content__install-pera-text__link {
  color: #6b46fe;
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: -0.09px;
  text-align: center;
}

.pera-wallet-redirect-modal__launch-pera-wallet-button {
  display: block;
  padding: 14px;
  color: #ffffff;
  background-color: #6b46fe;
  border-radius: 12px;
  text-decoration: none;
  text-align: center;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.09px;
  font-weight: 500;
}`;ke(ri);var ai=document.createElement("template");ai.innerHTML=`
  <div class="pera-wallet-modal pera-wallet-modal--mobile">
    <div class="pera-wallet-modal__body">
      <pera-wallet-modal-header modal-id="${jn}"></pera-wallet-modal-header/>

      <div class="pera-wallet-redirect-modal">
        <div class="pera-wallet-redirect-modal__content">
          <img src="data:image/svg+xml,%3csvg width='120' height='38' viewBox='0 0 120 38' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cg clip-path='url(%23clip0_38844_290434)'%3e%3cpath d='M103.739 28.6746H109.565' stroke='%236B46FE' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'/%3e%3cpath d='M112.25 37H100.75C97.5731 37 95 34.2336 95 30.8182V9.18182C95 5.76636 97.5731 3 100.75 3H112.25C115.427 3 118 5.76636 118 9.18182V30.8182C118 34.2336 115.427 37 112.25 37Z' fill='%236B46FE' fill-opacity='0.1' stroke='%236B46FE' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'/%3e%3crect y='1' width='36' height='36' rx='7.76829' fill='%236B46FE' fill-opacity='0.1'/%3e%3cpath d='M19.6057 9.47351C20.1851 11.8819 19.9967 14.0022 19.1848 14.2093C18.373 14.4164 17.2452 12.6319 16.6658 10.2235C16.0864 7.81514 16.2748 5.69486 17.0867 5.48775C17.8985 5.28063 19.0263 7.06512 19.6057 9.47351Z' fill='%236B46FE'/%3e%3cpath d='M29.0775 11.5213C27.8045 10.1593 25.2795 10.5358 23.4378 12.3621C21.5961 14.1885 21.1352 16.7732 22.4083 18.1352C23.6814 19.4972 26.2064 19.1207 28.048 17.2943C29.8897 15.4679 30.3506 12.8832 29.0775 11.5213Z' fill='%236B46FE'/%3e%3cpath d='M19.0324 32.4518C19.8443 32.2446 20.0039 30.0045 19.3889 27.4483C18.774 24.8921 17.6173 22.9877 16.8055 23.1948C15.9937 23.402 15.834 25.6421 16.449 28.1983C17.064 30.7545 18.2206 32.6589 19.0324 32.4518Z' fill='%236B46FE'/%3e%3cpath d='M10.7016 12.818C13.0471 13.5132 14.7627 14.739 14.5336 15.5559C14.3045 16.3728 12.2175 16.4714 9.87199 15.7762C7.52653 15.0809 5.81087 13.8551 6.03996 13.0383C6.26906 12.2214 8.35615 12.1228 10.7016 12.818Z' fill='%236B46FE'/%3e%3cpath d='M25.9365 21.9967C28.4259 22.7346 30.2583 23.995 30.0292 24.8119C29.8001 25.6287 27.5963 25.6927 25.1069 24.9548C22.6174 24.2169 20.7851 22.9565 21.0141 22.1397C21.2432 21.3228 23.447 21.2588 25.9365 21.9967Z' fill='%236B46FE'/%3e%3cpath d='M13.3578 20.316C12.775 19.7063 10.8709 20.6007 9.10487 22.3139C7.33879 24.0271 6.37952 25.9102 6.96226 26.5199C7.54501 27.1297 9.4491 26.2352 11.2152 24.522C12.9813 22.8089 13.9405 20.9258 13.3578 20.316Z' fill='%236B46FE'/%3e%3cpath d='M70.2098 10L75.3049 15.0945L52 15.0945' stroke='%23D0CAE7' stroke-width='3'/%3e%3cpath d='M60.7902 29.5945L55.6951 24.5L79 24.5' stroke='%23D0CAE7' stroke-width='3'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='clip0_38844_290434'%3e%3crect width='120' height='38' fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e" />

          <h1 class="pera-wallet-redirect-modal__content__title">
            Can't Launch Pera
          </h1>

          <p class="pera-wallet-redirect-modal__content__description">
            We couldn't redirect you to Pera Wallet automatically. Please try again.
          </p>

          <p class="pera-wallet-redirect-modal__content__install-pera-text">
            Don't have Pera Wallet installed yet?
            <br />
            
            <a
              id="pera-wallet-redirect-modal-download-pera-link"
              class="pera-wallet-redirect-modal__content__install-pera-text__link"
              href="https://perawallet.app/download/"
              rel="noopener noreferrer"
              target="_blank">
              Tap here to install.
            </a>
          </p>
        </div>

        <a
          id="pera-wallet-redirect-modal-launch-pera-link"
          class="pera-wallet-redirect-modal__launch-pera-wallet-button"
          rel="noopener noreferrer"
          target="_blank">
          Launch Pera Wallet
        </a>
      </div>
    </div>
  </div>
`;var Yi=class extends HTMLElement{constructor(){var et,ut;if(super(),this.attachShadow({mode:"open"}),this.shadowRoot){const pt=document.createElement("style");pt.textContent=ri,this.shadowRoot.append(ai.content.cloneNode(!0),pt),((et=this.shadowRoot)===null||et===void 0?void 0:et.getElementById("pera-wallet-redirect-modal-download-pera-link"))?.addEventListener("click",(()=>{this.onClose()})),((ut=this.shadowRoot)===null||ut===void 0?void 0:ut.getElementById("pera-wallet-redirect-modal-launch-pera-link"))?.addEventListener("click",(()=>{this.onClose(),window.open(Hn(),"_blank")}))}}connectedCallback(){const et=window.open(Hn(),"_blank");et&&!et.closed&&this.onClose()}onClose(){yn(jn)}},si="data:image/svg+xml,%3csvg width='32' height='35' viewBox='0 0 32 35' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M18.2837 5.09271C19.0234 8.12325 18.7827 10.7913 17.7463 11.0519C16.7098 11.3126 15.27 9.06712 14.5304 6.03657C13.7908 3.00603 14.0315 0.337996 15.0679 0.0773547C16.1044 -0.183287 17.5441 2.06216 18.2837 5.09271Z' fill='%233C3C49'/%3e%3cpath d='M30.376 7.66915C28.7507 5.95537 25.5271 6.42918 23.1759 8.72745C20.8247 11.0257 20.2361 14.2781 21.8614 15.9919C23.4866 17.7057 26.7102 17.2319 29.0614 14.9336C31.4127 12.6354 32.0012 9.38294 30.376 7.66915Z' fill='%233C3C49'/%3e%3cpath d='M17.5511 34.0071C18.5876 33.7465 18.7914 30.9276 18.0064 27.711C17.2214 24.4945 15.7448 22.0982 14.7084 22.3589C13.6719 22.6195 13.4681 25.4383 14.2531 28.6549C15.0381 31.8715 16.5147 34.2677 17.5511 34.0071Z' fill='%233C3C49'/%3e%3cpath d='M6.91617 9.3015C9.9105 10.1763 12.1008 11.7187 11.8083 12.7466C11.5158 13.7745 8.85126 13.8986 5.85693 13.0239C2.8626 12.1491 0.672334 10.6067 0.964835 9.57881C1.25734 8.5509 3.92184 8.42674 6.91617 9.3015Z' fill='%233C3C49'/%3e%3cpath d='M26.3656 20.8508C29.5437 21.7793 31.883 23.3652 31.5905 24.3932C31.298 25.4211 28.4845 25.5017 25.3063 24.5732C22.1282 23.6448 19.7889 22.0588 20.0814 21.0309C20.3739 20.003 23.1874 19.9224 26.3656 20.8508Z' fill='%233C3C49'/%3e%3cpath d='M10.3069 18.7365C9.56299 17.9692 7.13209 19.0948 4.87736 21.2506C2.62264 23.4064 1.39791 25.776 2.14185 26.5432C2.8858 27.3105 5.3167 26.1849 7.57143 24.0291C9.82615 21.8733 11.0509 19.5037 10.3069 18.7365Z' fill='%233C3C49'/%3e%3c/svg%3e",oi=`.pera-wallet-connect-modal-information-section {
  padding: 12px;
  padding-right: 0;
}
.pera-wallet-connect-modal-information-section--mobile {
  padding: 0;
}
.pera-wallet-connect-modal-information-section--mobile .pera-wallet-connect-modal-information-section__pera-icon {
  margin-bottom: 16px;
}
.pera-wallet-connect-modal-information-section--mobile .pera-wallet-connect-modal-information-section__connect-pera-title {
  margin-bottom: 8px;
  color: #3c3c49;
  font-size: 18px;
  font-weight: 600;
  line-height: 22px;
  letter-spacing: -0.2px;
}
.pera-wallet-connect-modal-information-section--mobile .pera-wallet-connect-modal-information-section__title {
  margin-bottom: 24px;
  color: #3c3c49;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: -0.09px;
  font-weight: 400;
}
.pera-wallet-connect-modal-information-section--mobile .pera-wallet-connect-modal-information-section__features-item__icon-wrapper {
  background-color: #f2f3f8;
}
.pera-wallet-connect-modal-information-section--mobile .pera-wallet-connect-modal-information-section__features-item__description {
  color: #6a6a81;
}
.pera-wallet-connect-modal-information-section * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: var(--pera-wallet-modal-font-family);
  font-smooth: antialiased;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.pera-wallet-connect-modal-information-section__pera-icon {
  margin-bottom: 32px;
}

.pera-wallet-connect-modal-information-section__title {
  margin-bottom: 148px;
  color: #3c3c49;
  font-size: 20px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.5px;
}

.pera-wallet-connect-modal-information-section__secondary-title {
  margin-bottom: 20px;
  color: #9d9dae;
  font-size: 11px;
  font-weight: 600;
  line-height: 18px;
  letter-spacing: 0.06px;
  text-transform: uppercase;
}

.pera-wallet-connect-modal-information-section__features-item {
  display: grid;
  align-items: center;
  grid-template-columns: 36px auto;
  gap: 16px;
}
.pera-wallet-connect-modal-information-section__features-item:not(:last-of-type) {
  margin-bottom: 24px;
}

.pera-wallet-connect-modal-information-section__features-item__icon-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  background-color: #ffffff;
  border-radius: 50%;
}

.pera-wallet-connect-modal-information-section__features-item__description {
  color: #6a6a81;
  font-size: 12px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: 0.01px;
}

@media (max-width: 767px) {
  .pera-wallet-connect-modal-information-section--desktop {
    padding: 0;
  }
  .pera-wallet-connect-modal-information-section--desktop .pera-wallet-connect-modal-information-section__pera-icon {
    margin-bottom: 12px;
  }
  .pera-wallet-connect-modal-information-section--desktop .pera-wallet-connect-modal-information-section__title {
    margin-bottom: 24px;
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: -0.26px;
  }
  .pera-wallet-connect-modal-information-section--desktop .pera-wallet-connect-modal-information-section__features-item {
    display: none;
  }
  .pera-wallet-connect-modal-information-section__secondary-title {
    display: none;
  }
}`;ke(oi);var li=document.createElement("template");li.innerHTML=`
  <section class="${Be()?"pera-wallet-connect-modal-information-section pera-wallet-connect-modal-information-section--mobile":"pera-wallet-connect-modal-information-section pera-wallet-connect-modal-information-section--desktop"}">
    <img
      id="pera-wallet-connect-modal-information-section-pera-icon"
      src="${si}"
      class="pera-wallet-connect-modal-information-section__pera-icon"
      alt="Pera Wallet Logo"
    />

    <h1 id="pera-wallet-connect-modal-information-section-connect-pera-mobile" class="pera-wallet-connect-modal-information-section__connect-pera-title">
        Connect to Pera Wallet
    </h1>

    <h1 class="pera-wallet-connect-modal-information-section__title">
      Simply the best Algorand wallet.
    </h1>

    <h2 id="pera-wallet-connect-modal-information-section-secondary-title" class="pera-wallet-connect-modal-information-section__secondary-title">
      Features
    </h2>

    <ul>
      <li class="pera-wallet-connect-modal-information-section__features-item">
        <div class="pera-wallet-connect-modal-information-section__features-item__icon-wrapper">
          <img src="data:image/svg+xml,%3csvg width='20' height='21' viewBox='0 0 20 21' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M2.5 10.1378C2.5 10.8378 3.025 11.6461 3.66667 11.9294L9.325 14.4461C9.75833 14.6378 10.25 14.6378 10.675 14.4461L16.3333 11.9294C16.975 11.6461 17.5 10.8378 17.5 10.1378M2.5 14.3044C2.5 15.0794 2.95833 15.7794 3.66667 16.0961L9.325 18.6128C9.75833 18.8044 10.25 18.8044 10.675 18.6128L16.3333 16.0961C17.0417 15.7794 17.5 15.0794 17.5 14.3044M10.8417 3.4043L15.7583 5.58763C17.175 6.21263 17.175 7.24596 15.7583 7.87096L10.8417 10.0543C10.2833 10.3043 9.36668 10.3043 8.80835 10.0543L3.89168 7.87096C2.47502 7.24596 2.47502 6.21263 3.89168 5.58763L8.80835 3.4043C9.36668 3.1543 10.2833 3.1543 10.8417 3.4043Z' stroke='%239D9DAE' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3e%3c/svg%3e" alt="Layer Icon" />
        </div>
        
        <p
          class="pera-wallet-connect-modal-information-section__features-item__description">
          Connect to any Algorand dApp securely
        </p>
      </li>

      <li class="pera-wallet-connect-modal-information-section__features-item">
        <div
          class="pera-wallet-connect-modal-information-section__features-item__icon-wrapper">
          <img src="data:image/svg+xml,%3csvg width='24' height='25' viewBox='0 0 24 25' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M9.58033 12.3109C9.28744 12.018 8.81257 12.018 8.51967 12.3109C8.22678 12.6038 8.22678 13.0787 8.51967 13.3716L9.58033 12.3109ZM10.66 14.4512L10.1297 14.9816C10.4226 15.2745 10.8974 15.2745 11.1903 14.9816L10.66 14.4512ZM15.4903 10.6816C15.7832 10.3887 15.7832 9.91381 15.4903 9.62092C15.1974 9.32803 14.7226 9.32803 14.4297 9.62092L15.4903 10.6816ZM19.84 8.09125C19.84 8.50546 20.1758 8.84125 20.59 8.84125C21.0042 8.84125 21.34 8.50546 21.34 8.09125H19.84ZM18.5 5.07125L18.2368 5.77355L18.2373 5.77375L18.5 5.07125ZM13.51 3.20125L13.7732 2.49894L13.7724 2.49866L13.51 3.20125ZM10.49 3.20125L10.2276 2.49865L10.2256 2.49941L10.49 3.20125ZM5.5 5.08125L5.76268 5.78375L5.76442 5.78309L5.5 5.08125ZM5.14 18.9612L4.69102 19.562L4.69135 19.5623L5.14 18.9612ZM9.44 22.1713L9.89069 21.5718L9.88866 21.5702L9.44 22.1713ZM14.58 22.1713L14.1313 21.5702L14.1293 21.5718L14.58 22.1713ZM18.88 18.9612L19.3287 19.5623L19.329 19.562L18.88 18.9612ZM21.36 8.09125C21.36 7.67704 21.0242 7.34125 20.61 7.34125C20.1958 7.34125 19.86 7.67704 19.86 8.09125H21.36ZM8.51967 13.3716L10.1297 14.9816L11.1903 13.9209L9.58033 12.3109L8.51967 13.3716ZM11.1903 14.9816L15.4903 10.6816L14.4297 9.62092L10.1297 13.9209L11.1903 14.9816ZM21.34 8.09125C21.34 7.29392 21.0398 6.50041 20.5931 5.85456C20.1463 5.20881 19.5097 4.64807 18.7627 4.36875L18.2373 5.77375C18.6403 5.92443 19.0487 6.25869 19.3595 6.70794C19.6702 7.15709 19.84 7.65858 19.84 8.09125H21.34ZM18.7632 4.36895L13.7732 2.49895L13.2468 3.90355L18.2368 5.77355L18.7632 4.36895ZM13.7724 2.49866C13.2479 2.30277 12.6051 2.21875 12 2.21875C11.3949 2.21875 10.7521 2.30277 10.2276 2.49866L10.7524 3.90384C11.0579 3.78973 11.5101 3.71875 12 3.71875C12.4899 3.71875 12.9421 3.78973 13.2476 3.90384L13.7724 2.49866ZM10.2256 2.49941L5.23558 4.37941L5.76442 5.78309L10.7544 3.90309L10.2256 2.49941ZM5.23733 4.37875C4.49043 4.65803 3.85398 5.2186 3.40741 5.86265C2.96095 6.50656 2.66 7.2978 2.66 8.09125H4.16C4.16 7.6647 4.32906 7.16594 4.64009 6.71735C4.95103 6.2689 5.35957 5.93447 5.76268 5.78375L5.23733 4.37875ZM2.66 8.09125V15.5212H4.16V8.09125H2.66ZM2.66 15.5212C2.66 16.2602 2.8989 17.059 3.24874 17.7545C3.59871 18.4503 4.09802 19.1188 4.69102 19.562L5.58899 18.3605C5.23198 18.0937 4.86629 17.6322 4.58877 17.0805C4.31111 16.5285 4.16 15.9623 4.16 15.5212H2.66ZM4.69135 19.5623L8.99135 22.7723L9.88866 21.5702L5.58866 18.3602L4.69135 19.5623ZM8.98932 22.7707C9.84721 23.4157 10.9462 23.7163 12.01 23.7163C13.0738 23.7163 14.1728 23.4157 15.0307 22.7707L14.1293 21.5718C13.5772 21.9868 12.8112 22.2163 12.01 22.2163C11.2088 22.2163 10.4428 21.9868 9.89068 21.5718L8.98932 22.7707ZM15.0287 22.7723L19.3287 19.5623L18.4313 18.3602L14.1313 21.5702L15.0287 22.7723ZM19.329 19.562C19.922 19.1188 20.4213 18.4503 20.7713 17.7545C21.1211 17.059 21.36 16.2602 21.36 15.5212H19.86C19.86 15.9623 19.7089 16.5285 19.4312 17.0805C19.1537 17.6322 18.788 18.0937 18.431 18.3605L19.329 19.562ZM21.36 15.5212V8.09125H19.86V15.5212H21.36Z' fill='%239D9DAE'/%3e%3c/svg%3e" alt="Tick Icon" />
        </div>

        <p
          class="pera-wallet-connect-modal-information-section__features-item__description">
          Your private keys are safely stored locally
        </p>
      </li>

      <li class="pera-wallet-connect-modal-information-section__features-item">
        <div
          class="pera-wallet-connect-modal-information-section__features-item__icon-wrapper">
          <img src="data:image/svg+xml,%3csvg width='20' height='21' viewBox='0 0 20 21' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M18.05 9.67014L17.3198 9.49894L18.05 9.67014ZM17.2333 13.1535L16.5031 12.9823L16.5029 12.9835L17.2333 13.1535ZM12.55 17.1285L12.6218 16.3818L12.6098 16.3809L12.55 17.1285ZM11.2 16.9035L11.376 16.1744L11.3737 16.1739L11.2 16.9035ZM9.8 16.5701L9.97372 15.8405L9.97324 15.8404L9.8 16.5701ZM6.06667 10.5451L6.79687 10.7163L6.79696 10.7159L6.06667 10.5451ZM6.88334 7.05347L6.15327 6.88169L6.15304 6.88267L6.88334 7.05347ZM7.5 5.22014L8.17303 5.55114L8.17523 5.54659L7.5 5.22014ZM12.9167 3.32014L12.744 4.05L12.7461 4.05049L12.9167 3.32014ZM14.3083 3.64514L14.4791 2.91485L14.4789 2.91479L14.3083 3.64514ZM10.5917 18.0285L10.359 17.3155L10.3572 17.3161L10.5917 18.0285ZM9.27501 18.4618L9.50516 19.1756L9.50947 19.1742L9.27501 18.4618ZM3.15001 15.3285L2.43654 15.5597L2.43672 15.5603L3.15001 15.3285ZM2.08334 12.0368L1.36953 12.267L1.36987 12.268L2.08334 12.0368ZM5.20834 5.91182L5.43849 6.62565L5.44281 6.62423L5.20834 5.91182ZM6.52501 5.47848L6.29831 4.76352L6.29055 4.76608L6.52501 5.47848ZM10.7177 7.35149C10.3162 7.24967 9.90818 7.49261 9.80635 7.89411C9.70453 8.29561 9.94746 8.70364 10.349 8.80546L10.7177 7.35149ZM14.3906 9.83046C14.7921 9.93229 15.2002 9.68935 15.302 9.28785C15.4038 8.88635 15.1609 8.47832 14.7594 8.37649L14.3906 9.83046ZM9.90211 10.5768C9.50076 10.4743 9.09238 10.7167 8.98996 11.118C8.88755 11.5194 9.12988 11.9278 9.53124 12.0302L9.90211 10.5768ZM11.9479 12.6469C12.3493 12.7493 12.7576 12.5069 12.8601 12.1056C12.9625 11.7042 12.7201 11.2958 12.3188 11.1934L11.9479 12.6469ZM17.3198 9.49894L16.5031 12.9823L17.9635 13.3247L18.7802 9.84133L17.3198 9.49894ZM16.5029 12.9835C16.168 14.4224 15.6979 15.2955 15.1165 15.793C14.5605 16.2688 13.7912 16.4944 12.6218 16.3819L12.4782 17.875C13.9088 18.0126 15.1312 17.7548 16.0918 16.9327C17.0271 16.1323 17.5986 14.8928 17.9638 13.3234L16.5029 12.9835ZM12.6098 16.3809C12.2388 16.3512 11.8281 16.2835 11.376 16.1744L11.024 17.6325C11.5386 17.7567 12.0279 17.8391 12.4902 17.8761L12.6098 16.3809ZM11.3737 16.1739L9.97372 15.8405L9.62629 17.2997L11.0263 17.6331L11.3737 16.1739ZM9.97324 15.8404C8.30732 15.4449 7.40652 14.876 6.96107 14.1588C6.51616 13.4425 6.40566 12.385 6.79687 10.7163L5.33647 10.3739C4.91101 12.1887 4.92968 13.7311 5.68685 14.9502C6.44349 16.1685 7.81769 16.8704 9.62676 17.2999L9.97324 15.8404ZM6.79696 10.7159L7.61363 7.22428L6.15304 6.88267L5.33638 10.3743L6.79696 10.7159ZM7.6134 7.22525C7.77277 6.54795 7.95691 5.99053 8.17301 5.55113L6.82699 4.88915C6.54309 5.46641 6.32724 6.14234 6.15327 6.88169L7.6134 7.22525ZM8.17523 5.54659C8.59604 4.67619 9.11898 4.20234 9.77488 3.97598C10.4657 3.73759 11.4133 3.73525 12.744 4.05L13.0893 2.59028C11.6367 2.2467 10.3635 2.18603 9.28554 2.55805C8.17269 2.94211 7.37896 3.74743 6.82478 4.89369L8.17523 5.54659ZM12.7461 4.05049L14.1378 4.37549L14.4789 2.91479L13.0872 2.58979L12.7461 4.05049ZM14.1375 4.37543C15.8111 4.76687 16.7126 5.33603 17.1575 6.05304C17.6023 6.77006 17.7112 7.82942 17.3198 9.49894L18.7802 9.84133C19.2054 8.02753 19.1893 6.48272 18.4321 5.26224C17.6749 4.04175 16.2972 3.34008 14.4791 2.91485L14.1375 4.37543ZM12.1294 16.5075C11.6911 16.8045 11.1123 17.0697 10.359 17.3155L10.8243 18.7415C11.6544 18.4706 12.3756 18.1525 12.9706 17.7494L12.1294 16.5075ZM10.3572 17.3161L9.04055 17.7494L9.50947 19.1742L10.8261 18.7409L10.3572 17.3161ZM9.04486 17.748C7.46037 18.2589 6.43607 18.2362 5.71663 17.8681C4.99693 17.4999 4.37829 16.6816 3.8633 15.0967L2.43672 15.5603C2.99673 17.2837 3.78642 18.5654 5.03339 19.2035C6.28062 19.8416 7.78131 19.7314 9.50516 19.1756L9.04486 17.748ZM3.86348 15.0973L2.79682 11.8056L1.36987 12.268L2.43654 15.5597L3.86348 15.0973ZM2.79716 11.8067C2.28607 10.2215 2.3068 9.19457 2.67362 8.4739C3.03983 7.75443 3.85506 7.13616 5.43849 6.62563L4.9782 5.198C3.25329 5.75414 1.97269 6.54421 1.33682 7.79348C0.701551 9.04157 0.813948 10.5438 1.36953 12.267L2.79716 11.8067ZM5.44281 6.62423L6.75947 6.19089L6.29055 4.76608L4.97388 5.19941L5.44281 6.62423ZM6.75169 6.19341C7.08205 6.08866 7.37424 6.00724 7.63942 5.95707L7.36058 4.48321C7.00909 4.54971 6.6513 4.65164 6.29833 4.76356L6.75169 6.19341ZM10.349 8.80546L14.3906 9.83046L14.7594 8.37649L10.7177 7.35149L10.349 8.80546ZM9.53124 12.0302L11.9479 12.6469L12.3188 11.1934L9.90211 10.5768L9.53124 12.0302Z' fill='%239D9DAE'/%3e%3c/svg%3e" alt="Note Icon" />
        </div>

        <p
          class="pera-wallet-connect-modal-information-section__features-item__description">
          View NFTs, buy and swap crypto and more
        </p>
      </li>
    </ul>
  </section>
`;var $i=class extends HTMLElement{constructor(){var et,ut,pt,Lt;super(),this.attachShadow({mode:"open"});const _t=((et=document.querySelector("pera-wallet-connect-modal"))===null||et===void 0?void 0:et.getAttribute("compact-mode"))==="true";if(this.shadowRoot&&(!_t&&!Be()||Be())){const kt=document.createElement("style");kt.textContent=oi,this.shadowRoot.append(li.content.cloneNode(!0),kt),Be()?(ut=this.shadowRoot.getElementById("pera-wallet-connect-modal-information-section-title"))===null||ut===void 0||ut.setAttribute("style","display: none;"):((pt=this.shadowRoot.getElementById("pera-wallet-connect-modal-information-section-pera-icon"))===null||pt===void 0||pt.setAttribute("src","data:image/svg+xml,%3csvg width='84' height='38' viewBox='0 0 84 38' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M19.806 8.62773C20.4416 11.2609 20.2268 13.5772 19.3262 13.8012C18.4256 14.0253 17.1803 12.0723 16.5448 9.43906C15.9092 6.80585 16.1241 4.48959 17.0246 4.26555C17.9252 4.04151 19.1705 5.99452 19.806 8.62773Z' fill='%233C3C49'/%3e%3cpath d='M30.3007 10.8917C28.8932 9.3999 26.0929 9.80424 24.0461 11.7948C21.9994 13.7853 21.4812 16.6082 22.8887 18.1C24.2962 19.5917 27.0964 19.1874 29.1432 17.1969C31.1899 15.2064 31.7082 12.3834 30.3007 10.8917Z' fill='%233C3C49'/%3e%3cpath d='M19.1061 33.734C20.0067 33.5099 20.1899 31.0627 19.5153 28.2678C18.8408 25.473 17.5639 23.3889 16.6633 23.613C15.7627 23.837 15.5795 26.2843 16.2541 29.0791C16.9286 31.874 18.2056 33.958 19.1061 33.734Z' fill='%233C3C49'/%3e%3cpath d='M9.92571 12.2574C12.5239 13.0236 14.4224 14.3678 14.1662 15.2597C13.9099 16.1517 11.5959 16.2536 8.99771 15.4874C6.3995 14.7212 4.50098 13.377 4.75724 12.4851C5.0135 11.5931 7.3275 11.4912 9.92571 12.2574Z' fill='%233C3C49'/%3e%3cpath d='M26.7892 22.3292C29.5469 23.1424 31.5747 24.5247 31.3184 25.4167C31.0621 26.3086 28.6189 26.3724 25.8612 25.5592C23.1035 24.7459 21.0757 23.3636 21.3319 22.4717C21.5882 21.5797 24.0315 21.5159 26.7892 22.3292Z' fill='%233C3C49'/%3e%3cpath d='M12.8493 20.4577C12.205 19.7898 10.0916 20.7619 8.12896 22.6289C6.16631 24.4959 5.09759 26.5509 5.7419 27.2188C6.38622 27.8867 8.49958 26.9146 10.4622 25.0476C12.4249 23.1806 13.4936 21.1256 12.8493 20.4577Z' fill='%233C3C49'/%3e%3cpath d='M41.691 12.5347V11.9635H39.3366V27.1957H41.691V23.0915C41.691 22.6472 41.691 22.2876 41.6482 21.801H41.691C42.5471 23.1973 44.0026 23.9377 45.7148 23.9377C48.6043 23.9377 51.1299 21.7587 51.1299 17.7179C51.1299 13.7617 48.6043 11.625 45.7148 11.625C44.0668 11.625 42.6113 12.3443 41.691 13.7617H41.6482C41.691 13.2963 41.691 12.9578 41.691 12.5347ZM45.1155 21.9279C42.9324 21.9068 41.6696 20.0662 41.6696 17.6967C41.6696 15.4542 42.9324 13.656 45.1155 13.6348C47.2559 13.6137 48.6685 15.2638 48.6685 17.7179C48.6685 20.2354 47.2559 21.9491 45.1155 21.9279Z' fill='%233C3C49'/%3e%3cpath d='M63.4932 16.7236C63.4932 13.8041 61.1388 11.625 57.9283 11.625C54.5037 11.625 52.1279 13.931 52.1279 17.7814C52.1279 21.4836 54.4609 23.9377 57.9283 23.9377C60.7749 23.9377 62.8939 22.2876 63.3862 20.0239H60.8177C60.4111 21.1663 59.2981 21.9279 57.9283 21.9279C56.1732 21.9279 54.889 20.6797 54.6107 18.6064H63.4932V16.7236ZM57.9283 13.6348C59.662 13.6348 60.8606 14.8195 61.1174 16.5332H54.6321C54.9318 14.883 56.1518 13.6348 57.9283 13.6348Z' fill='%233C3C49'/%3e%3cpath d='M65.224 23.5992H67.5784V17.0409C67.5784 14.7984 68.8198 13.6348 70.7462 13.6348H72.009V11.625H71.003C69.2693 11.625 68.1991 12.7674 67.5784 13.7617H67.5356V11.9635H65.224V23.5992Z' fill='%233C3C49'/%3e%3cpath d='M83.0154 21.5683C82.6944 21.5683 82.5445 21.3779 82.5445 20.9971V15.8773C82.5445 13.4233 81.3459 11.625 77.8144 11.625C74.3898 11.625 72.8273 13.3175 72.6561 15.7292H75.0105C75.1603 14.4176 76.2091 13.6348 77.8144 13.6348C79.1842 13.6348 80.1259 14.2272 80.1259 15.158C80.1259 15.9196 79.5909 16.3851 77.8358 16.3851H76.894C74.0901 16.3851 72.2066 17.5063 72.2066 20.0662C72.2066 22.753 74.1972 23.98 76.5301 23.98C78.2638 23.98 79.7407 23.2184 80.3186 21.5894C80.3828 22.7742 81.1747 23.5992 82.673 23.5992H84V21.5683H83.0154ZM80.1902 18.1833C80.1902 20.8067 78.7561 21.9491 76.9154 21.9491C75.3101 21.9491 74.668 21.0182 74.668 20.0662C74.668 19.1565 75.2245 18.416 76.9368 18.416H77.2793C78.9273 18.416 79.9547 17.8448 80.1688 16.8505H80.1902V18.1833Z' fill='%233C3C49'/%3e%3c/svg%3e"),(Lt=this.shadowRoot.getElementById("pera-wallet-connect-modal-information-section-connect-pera-mobile"))===null||Lt===void 0||Lt.setAttribute("style","display: none;"))}}},Mn=`@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap");
.pera-wallet-modal {
  --pera-wallet-modal-font-family: "Inter", sans-serif;
  --pera-wallet-modal-compact-width: 380px;
  --pera-wallet-modal-compact-height: 396px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 999999;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
}
.pera-wallet-modal--select-account .pera-wallet-modal__body {
  width: 480px;
  height: 578px;
  background-color: #ffffff;
}
.pera-wallet-modal--mobile .pera-wallet-modal__body {
  position: absolute;
  top: unset;
  bottom: 0;
  left: 0;
  width: 100%;
  max-width: unset;
  padding: 20px;
  background-color: #ffffff;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.02), 0 4px 12px rgba(0, 0, 0, 0.03);
  border-radius: 20px 20px 0px 0px;
  animation: 0.3s PeraWalletConnectMobileSlideIn ease-out;
  overflow-y: auto;
  transform: unset;
}
.pera-wallet-modal--mobile .pera-wallet-modal__body::before {
  background-image: unset;
}
.pera-wallet-modal--compact:not(.pera-wallet-modal--mobile) .pera-wallet-modal__body {
  width: var(--pera-wallet-modal-compact-width);
  height: var(--pera-wallet-modal-compact-height);
  padding: 0;
}
.pera-wallet-modal * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: var(--pera-wallet-modal-font-family);
  font-smooth: antialiased;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.pera-wallet-modal ul,
.pera-wallet-modal ol,
.pera-wallet-modal li {
  list-style-type: none;
}

.pera-wallet-button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: auto;
  height: 48px;
  padding: 14px;
  border: none;
  border-radius: 12px;
  outline: none;
  cursor: pointer;
  font-family: var(--pera-wallet-modal-font-family);
  font-size: 14px;
}

.pera-wallet-modal__logo img {
  display: block;
  width: 32px;
}

.pera-wallet-modal__body {
  position: relative;
  top: 50%;
  left: 50%;
  width: 700px;
  max-width: calc(100vw - 80px);
  padding: 28px;
  background-color: #f3f3f7;
  box-shadow: 1px 2px 2px rgba(0, 0, 0, 0.08);
  border-radius: 24px;
  animation: 0.3s PeraWalletConnectSlideIn ease-out;
  transform: translate(-50%, -50%);
}
.pera-wallet-modal__body::before {
  --background-line: #1e0972 0 1.2px, transparent 0 calc(100% - 1.2px), #1e0972;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  content: "";
  background-image: linear-gradient(var(--background-line)), linear-gradient(90deg, var(--background-line));
  background-size: 116px 116px;
  mix-blend-mode: overlay;
  border-radius: 24px;
  opacity: 0.8;
  pointer-events: none;
}

@media (max-width: 767px) {
  .pera-wallet-modal--desktop .pera-wallet-modal__body {
    width: 100%;
    max-width: calc(100vw - 32px);
    padding: 24px;
  }
}
@keyframes PeraWalletConnectSlideIn {
  0% {
    opacity: 0;
    transform: translate(-50%, calc(-50% + 24px));
  }
  100% {
    opacity: 1;
    transform: translate(-50%, -50%);
  }
}
@keyframes PeraWalletConnectMobileSlideIn {
  0% {
    bottom: -30%;
    opacity: 0;
  }
  100% {
    bottom: 0;
    opacity: 1;
  }
}
.pera-wallet-connect-modal-pending-message-section {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 48px;
  gap: 56px;
  height: 100%;
  padding: 4px;
  padding-bottom: 70px;
}

.pera-wallet-connect-modal-pending-message {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
}
.pera-wallet-connect-modal-pending-message--try-again-view {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 100%;
  margin-top: 10px;
}
.pera-wallet-connect-modal-pending-message--try-again-view__title {
  margin: 16px 0 12px;
  color: #3c3c49;
  font-size: 18px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.26px;
}
.pera-wallet-connect-modal-pending-message--try-again-view__description {
  color: #6a6a81;
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: -0.01px;
}
.pera-wallet-connect-modal-pending-message--try-again-view__button {
  display: block;
  width: 100%;
  padding: 14px;
  border-radius: 12px;
  text-decoration: none;
  text-align: center;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.09px;
  font-weight: 500;
  color: #ffffff;
  background-color: #6b46fe;
  border: none;
}
.pera-wallet-connect-modal-pending-message--try-again-view__resolving-anchor {
  display: flex;
  gap: 12px;
  margin-bottom: 20px;
  padding: 16px;
  background: #ffffff;
  box-shadow: 0px 0px 1px rgba(12, 26, 75, 0.24), 0px 3px 8px -1px rgba(50, 50, 71, 0.05);
  border-radius: 12px;
  text-decoration: none;
}
.pera-wallet-connect-modal-pending-message--try-again-view__resolving-anchor__image {
  width: 24px;
  height: 24px;
}
.pera-wallet-connect-modal-pending-message--try-again-view__resolving-anchor__title-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 4px;
}
.pera-wallet-connect-modal-pending-message--try-again-view__resolving-anchor__title {
  margin: 0;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: -0.1px;
  color: #3c3c49;
}
.pera-wallet-connect-modal-pending-message--try-again-view__resolving-anchor__description {
  /* stylelint-disable value-no-vendor-prefix */
  /* stylelint-disable  property-no-vendor-prefix */
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 2;
  /* autoprefixer: ignore next */
  -webkit-box-orient: vertical;
  overflow: hidden;
  /* stylelint-enable value-no-vendor-prefix */
  /* stylelint-enable property-no-vendor-prefix */
  margin: 0;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0.01px;
  color: #9d9dae;
}

.pera-wallet-connect-modal-pending-message__animation-wrapper {
  width: 56px;
  height: 56px;
  background-color: #6b46fe;
  border-radius: 50%;
}

.pera-wallet-connect-modal-pending-message__text {
  max-width: 271px;
  margin-top: 24px;
  color: #3c3c49;
  font-size: 18px;
  font-weight: 500;
  line-height: 28px;
  letter-spacing: -0.26px;
}

.pera-wallet-connect-modal-pending-message__cancel-button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 14px;
  color: #6a6a81;
  background-color: #ffffff;
  box-shadow: 0px 0px 1px rgba(12, 26, 75, 0.24), 0px 3px 8px -1px rgba(50, 50, 71, 0.05);
  border-radius: 12px;
  text-decoration: none;
  text-align: center;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.09px;
  font-weight: 500;
  border: none;
}`;ke(Mn);var wn=document.createElement("template");wn.innerHTML=`
  <div class="pera-wallet-connect-modal-pending-message-section">
    <div class="pera-wallet-connect-modal-pending-message">
      <div id="pera-wallet-connect-modal-pending-message-animation-wrapper" class="pera-wallet-connect-modal-pending-message__animation-wrapper"></div>

      <div class="pera-wallet-connect-modal-pending-message__text">
        Please wait while we connect you to Pera Wallet
      </div>
    </div>

    <button
      id="pera-wallet-connect-modal-pending-message-cancel-button"
      class="pera-wallet-button pera-wallet-connect-modal-pending-message__cancel-button">
        Cancel
    </button>
  </div>

  <div id="pera-wallet-connect-modal-pending-message-audio-wrapper"></div>
`;var Qi=`
  <div class="pera-wallet-connect-modal-pending-message--try-again-view">
    <div>
      <img src="${si}" alt="Pera Wallet Logo" />

      <h1 class="pera-wallet-connect-modal-pending-message--try-again-view__title">
        Couldn’t establish connection
      </h1>

      <p class="pera-wallet-connect-modal-pending-message--try-again-view__description">
        Having issues? Before trying again, make sure to read the support article below and apply the possible solutions.
      </p>
    </div>

    <div>
      <a
        href="https://support.perawallet.app/en/article/resolving-walletconnect-issues-1tolptm/"
        target="_blank"
        rel="noopener noreferrer"
        class="pera-wallet-connect-modal-pending-message--try-again-view__resolving-anchor">
        <img
          class="pera-wallet-connect-modal-pending-message--try-again-view__resolving-anchor__image"
          src="data:image/svg+xml,%3csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M8 22.3199C7.72 22.3199 7.42998 22.2499 7.16998 22.1099C6.59998 21.8099 6.25 21.2099 6.25 20.5699V19.15C3.23 18.84 1.25 16.6199 1.25 13.4399V7.43994C1.25 3.99994 3.56 1.68994 7 1.68994H17C20.44 1.68994 22.75 3.99994 22.75 7.43994V13.4399C22.75 16.8799 20.44 19.1899 17 19.1899H13.23L8.96997 22.03C8.67997 22.22 8.34 22.3199 8 22.3199ZM7 3.17993C4.42 3.17993 2.75 4.84993 2.75 7.42993V13.43C2.75 16.01 4.42 17.68 7 17.68C7.41 17.68 7.75 18.02 7.75 18.43V20.56C7.75 20.69 7.83 20.75 7.88 20.78C7.93001 20.81 8.03001 20.84 8.14001 20.77L12.59 17.81C12.71 17.73 12.86 17.68 13.01 17.68H17.01C19.59 17.68 21.26 16.01 21.26 13.43V7.42993C21.26 4.84993 19.59 3.17993 17.01 3.17993H7ZM11.9998 12.11C11.5898 12.11 11.2498 11.77 11.2498 11.36V11.15C11.2498 10.0038 12.0798 9.4336 12.4082 9.20798L12.4198 9.20001C12.7898 8.95001 12.9098 8.78002 12.9098 8.52002C12.9098 8.02002 12.4998 7.60999 11.9998 7.60999C11.4998 7.60999 11.0898 8.02002 11.0898 8.52002C11.0898 8.93002 10.7498 9.27002 10.3398 9.27002C9.92984 9.27002 9.58984 8.93002 9.58984 8.52002C9.58984 7.19002 10.6698 6.10999 11.9998 6.10999C13.3298 6.10999 14.4098 7.19002 14.4098 8.52002C14.4098 9.66002 13.5698 10.23 13.2598 10.44C12.8698 10.7 12.7498 10.87 12.7498 11.15V11.36C12.7498 11.78 12.4098 12.11 11.9998 12.11ZM11.25 13.85C11.25 14.26 11.58 14.6 12 14.6C12.42 14.6 12.75 14.26 12.75 13.85C12.75 13.44 12.41 13.1 12 13.1C11.59 13.1 11.25 13.44 11.25 13.85Z' fill='%236B46FE'/%3e%3c/svg%3e"
          alt="Help Icon"
        />

        <div>
          <div
            class="pera-wallet-connect-modal-pending-message--try-again-view__resolving-anchor__title-wrapper">
            <h1
              class="pera-wallet-connect-modal-pending-message--try-again-view__resolving-anchor__title">
                Resolving WalletConnect issues
            </h1>

            <img src="data:image/svg+xml,%3csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M11.3287 10.0983C10.9574 10.0983 10.6564 9.79734 10.6564 9.42604L10.6564 6.29525L5.14866 11.803C4.88611 12.0655 4.46044 12.0655 4.19789 11.803C3.93534 11.5404 3.93534 11.1147 4.19789 10.8522L9.70561 5.34447L6.57482 5.34447C6.20352 5.34447 5.90252 5.04347 5.90252 4.67218C5.90252 4.30088 6.20352 3.99988 6.57482 3.99988L11.3287 3.99988C11.507 3.99988 11.678 4.07071 11.8041 4.19679C11.9301 4.32287 12.001 4.49387 12.001 4.67218L12.001 9.42604C12.001 9.79734 11.7 10.0983 11.3287 10.0983Z' fill='%239D9DAE'/%3e%3c/svg%3e" alt="Send Icon"/>
          </div>

          <p
            class="pera-wallet-connect-modal-pending-message--try-again-view__resolving-anchor__description">
            Unfortunately there are several known issues related to WalletConnect that our team is working on. Some of these issues are related to the WalletConnect JavaScript implementation on the dApp ...
          </p>
        </div>
      </a>

      <button id="pera-wallet-connect-modal-pending-message-try-again-button" class="pera-wallet-connect-button pera-wallet-connect-modal-pending-message--try-again-view__button">
        Close & Try Again
      </button>
    </div>
  </div>
  `,Ki=class extends HTMLElement{constructor(){if(super(),this.attachShadow({mode:"open"}),this.shadowRoot){const et=document.createElement("style");et.textContent=Mn,this.shadowRoot.append(wn.content.cloneNode(!0),et)}}connectedCallback(){var et;((et=this.shadowRoot)===null||et===void 0?void 0:et.getElementById("pera-wallet-connect-modal-pending-message-cancel-button"))?.addEventListener("click",(()=>{this.onClose()})),this.addAudioForConnection(),this.renderLottieAnimation(),setTimeout((()=>{var ut;if(wn.innerHTML=Qi,this.shadowRoot){const pt=document.createElement("style");pt.textContent=Mn,this.shadowRoot.innerHTML="",this.shadowRoot.append(wn.content.cloneNode(!0),pt),((ut=this.shadowRoot)===null||ut===void 0?void 0:ut.getElementById("pera-wallet-connect-modal-pending-message-try-again-button"))?.addEventListener("click",(()=>{this.onClose()}))}}),3e4)}onClose(){yn(kn)}addAudioForConnection(){var et;if(this.getAttribute("should-use-sound")==="true"&&Di()){const ut=(et=this.shadowRoot)===null||et===void 0?void 0:et.getElementById("pera-wallet-connect-modal-pending-message-audio-wrapper"),pt=document.createElement("audio");pt.src="https://s3.amazonaws.com/wc.perawallet.app/audio.mp3",pt.autoplay=!0,pt.loop=!0,ut?.appendChild(pt)}}renderLottieAnimation(){var et;const ut=(et=this.shadowRoot)===null||et===void 0?void 0:et.getElementById("pera-wallet-connect-modal-pending-message-animation-wrapper");ut&&Gn.default.loadAnimation({container:ut,renderer:"svg",loop:!0,autoplay:!0,path:"https://s3.amazonaws.com/wc.perawallet.app/static/pera-loader-animation.json"})}},hi=`.pera-wallet-sign-txn-toast {
  --pera-wallet-sign-txn-toast-width: 422px;
  --pera-wallet-sign-txn-toast-height: 134px;
  --pera-wallet-sign-txn-toast-font-family: "Inter", sans-serif;
  position: fixed;
  bottom: 28px;
  right: 35px;
  z-index: 11;
  overflow: hidden;
  width: var(--pera-wallet-sign-txn-toast-width);
  height: var(--pera-wallet-sign-txn-toast-height);
  background: #edeffb;
  border-radius: 8px;
  animation: 0.2s PeraWalletSignTxnToastSlideIn ease-out;
}
.pera-wallet-sign-txn-toast * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: var(--pera-wallet-sign-txn-toast-font-family);
  font-smooth: antialiased;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.pera-wallet-sign-txn-toast ul,
.pera-wallet-sign-txn-toast ol,
.pera-wallet-sign-txn-toast li {
  list-style-type: none;
}

.pera-wallet-sign-txn-toast__header__close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  width: 20px;
  height: 20px;
  margin: 0;
  padding: 0;
  background: transparent;
  border: none;
  cursor: pointer;
}

.pera-wallet-sign-txn-toast__content__lottie-animation {
  position: absolute;
  top: -75px;
  left: -100px;
  width: 368px;
  height: 368px;
}

.pera-wallet-sign-txn-toast__content__description {
  position: absolute;
  top: 40px;
  right: 48px;
  max-width: 197px;
  color: #3c3c49;
  font-size: 14px;
  line-height: 22px;
  letter-spacing: -0.1px;
}

@media (max-width: 767px) {
  .pera-wallet-sign-txn-toast {
    display: none;
  }
}
@keyframes PeraWalletSignTxnToastSlideIn {
  0% {
    bottom: 12px;
    opacity: 0;
  }
  100% {
    bottom: 26px;
    opacity: 1;
  }
}`;ke(hi);var pi=document.createElement("template");pi.innerHTML=`
  <div class="pera-wallet-sign-txn-toast">
    <div class="pera-wallet-sign-txn-toast__header">
      <button
        id="pera-wallet-sign-txn-toast-close-button"
        class="pera-wallet-sign-txn-toast__header__close-button">
        <img src="data:image/svg+xml,%3csvg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M14.4107 4.41074L9.41074 9.41074L10.5893 10.5893L15.5893 5.58926L14.4107 4.41074ZM9.41074 9.41074L4.41074 14.4107L5.58926 15.5893L10.5893 10.5893L9.41074 9.41074ZM15.5893 14.4107L10.5893 9.41074L9.41074 10.5893L14.4107 15.5893L15.5893 14.4107ZM10.5893 9.41074L5.58926 4.41074L4.41074 5.58926L9.41074 10.5893L10.5893 9.41074Z' fill='%239099BD'/%3e%3c/svg%3e" />
      </button>
    </div>
    <div class="pera-wallet-sign-txn-toast__content">
      <div id="pera-wallet-sign-txn-toast-lottie-animation" style="width:368;height:368" class="pera-wallet-sign-txn-toast__content__lottie-animation"></div>
      <p class="pera-wallet-sign-txn-toast__content__description">
        Please launch <b>Pera Wallet</b> on your iOS or Android device to sign this transaction.
      </p>
    </div>
  </div>
`;var Ji=class extends HTMLElement{constructor(){if(super(),this.attachShadow({mode:"open"}),this.shadowRoot){const et=document.createElement("style");et.textContent=hi,this.shadowRoot.append(pi.content.cloneNode(!0),et),this.shadowRoot.getElementById("pera-wallet-sign-txn-toast-close-button")?.addEventListener("click",(()=>{yn(Hi)})),this.renderLottieAnimation()}}renderLottieAnimation(){var et;const ut=(et=this.shadowRoot)===null||et===void 0?void 0:et.getElementById("pera-wallet-sign-txn-toast-lottie-animation");ut&&Gn.default.loadAnimation({container:ut,renderer:"svg",loop:!0,autoplay:!0,path:"https://s3.amazonaws.com/wc.perawallet.app/static/sign-toast-animation.json"})}},di=`@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap");
.pera-wallet-modal {
  --pera-wallet-modal-font-family: "Inter", sans-serif;
  --pera-wallet-modal-compact-width: 380px;
  --pera-wallet-modal-compact-height: 396px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 999999;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
}
.pera-wallet-modal--select-account .pera-wallet-modal__body {
  width: 480px;
  height: 578px;
  background-color: #ffffff;
}
.pera-wallet-modal--mobile .pera-wallet-modal__body {
  position: absolute;
  top: unset;
  bottom: 0;
  left: 0;
  width: 100%;
  max-width: unset;
  padding: 20px;
  background-color: #ffffff;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.02), 0 4px 12px rgba(0, 0, 0, 0.03);
  border-radius: 20px 20px 0px 0px;
  animation: 0.3s PeraWalletConnectMobileSlideIn ease-out;
  overflow-y: auto;
  transform: unset;
}
.pera-wallet-modal--mobile .pera-wallet-modal__body::before {
  background-image: unset;
}
.pera-wallet-modal--compact:not(.pera-wallet-modal--mobile) .pera-wallet-modal__body {
  width: var(--pera-wallet-modal-compact-width);
  height: var(--pera-wallet-modal-compact-height);
  padding: 0;
}
.pera-wallet-modal * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: var(--pera-wallet-modal-font-family);
  font-smooth: antialiased;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.pera-wallet-modal ul,
.pera-wallet-modal ol,
.pera-wallet-modal li {
  list-style-type: none;
}

.pera-wallet-button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: auto;
  height: 48px;
  padding: 14px;
  border: none;
  border-radius: 12px;
  outline: none;
  cursor: pointer;
  font-family: var(--pera-wallet-modal-font-family);
  font-size: 14px;
}

.pera-wallet-modal__logo img {
  display: block;
  width: 32px;
}

.pera-wallet-modal__body {
  position: relative;
  top: 50%;
  left: 50%;
  width: 700px;
  max-width: calc(100vw - 80px);
  padding: 28px;
  background-color: #f3f3f7;
  box-shadow: 1px 2px 2px rgba(0, 0, 0, 0.08);
  border-radius: 24px;
  animation: 0.3s PeraWalletConnectSlideIn ease-out;
  transform: translate(-50%, -50%);
}
.pera-wallet-modal__body::before {
  --background-line: #1e0972 0 1.2px, transparent 0 calc(100% - 1.2px), #1e0972;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  content: "";
  background-image: linear-gradient(var(--background-line)), linear-gradient(90deg, var(--background-line));
  background-size: 116px 116px;
  mix-blend-mode: overlay;
  border-radius: 24px;
  opacity: 0.8;
  pointer-events: none;
}

@media (max-width: 767px) {
  .pera-wallet-modal--desktop .pera-wallet-modal__body {
    width: 100%;
    max-width: calc(100vw - 32px);
    padding: 24px;
  }
}
@keyframes PeraWalletConnectSlideIn {
  0% {
    opacity: 0;
    transform: translate(-50%, calc(-50% + 24px));
  }
  100% {
    opacity: 1;
    transform: translate(-50%, -50%);
  }
}
@keyframes PeraWalletConnectMobileSlideIn {
  0% {
    bottom: -30%;
    opacity: 0;
  }
  100% {
    bottom: 0;
    opacity: 1;
  }
}
.pera-wallet-sign-txn-modal.pera-wallet-modal .pera-wallet-modal__body {
  width: 480px;
  height: 578px;
  background-color: #ffffff;
  background-image: unset;
  padding: 0;
}
.pera-wallet-sign-txn-modal.pera-wallet-modal .pera-wallet-modal__body .pera-wallet-sign-txn-modal__body__content {
  width: 100%;
  height: 100%;
}
.pera-wallet-sign-txn-modal.pera-wallet-modal .pera-wallet-modal__body #pera-wallet-iframe {
  width: 100%;
  height: 100%;
  border-radius: 16px;
  margin: 0 auto;
  border: none;
}

.pera-wallet-sign-txn-modal--compact.pera-wallet-modal .pera-wallet-modal__body {
  width: var(--pera-wallet-modal-compact-width);
  height: var(--pera-wallet-modal-compact-height);
}`;ke(di);var ci=document.createElement("template");ci.innerHTML=`
  <div id="pera-wallet-sign-txn-modal" class="${hn} pera-wallet-sign-txn-modal">
    <div class="pera-wallet-modal__body">
      <pera-wallet-modal-header modal-id="${Ri}"></pera-wallet-modal-header/>

      <div class="pera-wallet-sign-txn-modal__body__content" />
    </div>
  </div>
`;var tr=class extends HTMLElement{constructor(){if(super(),this.attachShadow({mode:"open"}),this.shadowRoot){const et=document.createElement("style");et.textContent=di,this.shadowRoot.append(ci.content.cloneNode(!0),et),this.getAttribute("compact-mode")==="true"&&this.shadowRoot.getElementById("pera-wallet-sign-txn-modal")?.classList.add("pera-wallet-sign-txn-modal--compact")}}};function Cn(){document.documentElement.style.setProperty("--pera-wallet-vh",.01*window.innerHeight+"px")}function Le(et,ut){window.customElements.get(et)||window.customElements.define(et,ut)}document.readyState==="complete"||document.readyState==="interactive"?Cn():window.addEventListener("DOMContentLoaded",(()=>{Cn()})),window.addEventListener("resize",(()=>{Cn()})),Le("pera-wallet-connect-modal",Xi),Le("pera-wallet-modal-desktop-mode",Gi),Le("pera-wallet-modal-header",ji),Le("pera-wallet-modal-touch-screen-mode",Ui),Le("pera-wallet-redirect-modal",Yi),Le("pera-wallet-connect-modal-information-section",$i),Le("pera-wallet-connect-modal-pending-message-section",Ki),Le("pera-wallet-sign-txn-toast",Ji),Le("pera-wallet-sign-txn-modal",tr),Le("pera-wallet-download-qr-code",Wi);
