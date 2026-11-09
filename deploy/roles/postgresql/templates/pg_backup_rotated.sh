#!/bin/bash

###########################
####### LOAD CONFIG #######
###########################

while [ $# -gt 0 ]; do
        case $1 in
                -c)
                        CONFIG_FILE_PATH="$2"
                        shift 2
                        ;;
                *)
                        ${ECHO} "Unknown Option \"$1\"" 1>&2
                        exit 2
                        ;;
        esac
done

if [ -z $CONFIG_FILE_PATH ] ; then
        SCRIPTPATH=$(cd ${0%/*} && pwd -P)
        CONFIG_FILE_PATH="${SCRIPTPATH}/pg_backup.config"
fi

if [ ! -r ${CONFIG_FILE_PATH} ] ; then
        echo "Could not load config file from ${CONFIG_FILE_PATH}" 1>&2
        exit 1
fi

source "${CONFIG_FILE_PATH}"

###########################
#### PRE-BACKUP CHECKS ####
###########################

# Make sure we're running as the required backup user
if [ "$BACKUP_USER" != "" -a "$(id -un)" != "$BACKUP_USER" ] ; then
	echo "This script must be run as $BACKUP_USER. Exiting." 1>&2
	exit 1
fi


###########################
### INITIALISE DEFAULTS ###
###########################

if [ ! $HOSTNAME ]; then
	HOSTNAME="localhost"
fi;

if [ ! $USERNAME ]; then
	USERNAME="postgres"
fi;

export PGPASSWORD="{{ hostvars['localhost'].env_vars.DATABASE_PASSWORD }}"

###########################
#### START THE BACKUPS ####
###########################

function perform_backups()
{
	SUFFIX=$1
	FINAL_BACKUP_DIR=$BACKUP_DIR"`date +\%Y-\%m-\%d`$SUFFIX/"

	# echo "Making backup directory in $FINAL_BACKUP_DIR"

	if ! mkdir -p $FINAL_BACKUP_DIR; then
		echo "Cannot create backup directory in $FINAL_BACKUP_DIR. Go and fix it!" 1>&2
		exit 1;
	fi;

	#######################
	### GLOBALS BACKUPS ###
	#######################

	# echo -e "\n\nPerforming globals backup"
	# echo -e "--------------------------------------------\n"

	if [ $ENABLE_GLOBALS_BACKUPS = "yes" ]
	then
		    echo "Globals backup"

		    if ! pg_dumpall -g -h "$HOSTNAME" -U "$USERNAME" | gzip > $FINAL_BACKUP_DIR"globals".sql.gz.in_progress; then
		            echo "[!!ERROR!!] Failed to produce globals backup" 1>&2
		    else
		            mv $FINAL_BACKUP_DIR"globals".sql.gz.in_progress $FINAL_BACKUP_DIR"globals".sql.gz
		    fi
	# else
		# echo "None"
	fi

	###########################
	###### FULL BACKUPS #######
	###########################

	FULL_BACKUP_QUERY="select datname from pg_database where not datistemplate and datallowconn $EXCLUDE_SCHEMA_ONLY_CLAUSE order by datname;"

	# echo -e "\n\nPerforming full backups"
	# echo -e "--------------------------------------------\n"

	if [ $ENABLE_PLAIN_BACKUPS = "yes" ]
	then
		# echo "Plain backup of $TARGET_DATABASE"

		if ! pg_dump -Fp -h "$HOSTNAME" -U "$USERNAME" "$TARGET_DATABASE" | gzip > $FINAL_BACKUP_DIR"$TARGET_DATABASE".sql.gz.in_progress; then
			echo "[!!ERROR!!] Failed to produce plain backup database $TARGET_DATABASE" 1>&2
		else
			mv $FINAL_BACKUP_DIR"$TARGET_DATABASE".sql.gz.in_progress $FINAL_BACKUP_DIR"$TARGET_DATABASE".sql.gz
		fi
	fi

	if [ $ENABLE_CUSTOM_BACKUPS = "yes" ]
	then
		# echo "Custom backup of $TARGET_DATABASE"

		if ! pg_dump -Fc -h "$HOSTNAME" -U "$USERNAME" "$TARGET_DATABASE" -f $FINAL_BACKUP_DIR"$TARGET_DATABASE".custom.in_progress; then
			echo "[!!ERROR!!] Failed to produce custom backup database $TARGET_DATABASE"
		else
			mv $FINAL_BACKUP_DIR"$TARGET_DATABASE".custom.in_progress $FINAL_BACKUP_DIR"$TARGET_DATABASE".custom
		fi
	fi

	# echo -e "\nAll database backups complete!"
}

# MONTHLY BACKUPS

DAY_OF_MONTH=`date +%d`
HOUR_OF_DAY=`date +%H`  # zero-padded: compare with -eq, never =

if [ $DAY_OF_MONTH -eq 1 ] && [ $HOUR_OF_DAY -eq 3 ];
then
	# Delete all expired monthly directories
	find $BACKUP_DIR -maxdepth 1 -name "*-monthly" -exec rm -rf '{}' ';'

	perform_backups "-monthly"

	exit 0;
fi

# WEEKLY BACKUPS

DAY_OF_WEEK=`date +%u` #1-7 (Monday-Sunday)
EXPIRED_DAYS=`expr $((($WEEKS_TO_KEEP * 7) + 1))`

if [ $DAY_OF_WEEK = $DAY_OF_WEEK_TO_KEEP ] && [ $HOUR_OF_DAY -eq 4 ];
then
	# Delete all expired weekly directories
	find $BACKUP_DIR -maxdepth 1 -mtime +$EXPIRED_DAYS -name "*-weekly" -exec rm -rf '{}' ';'

	perform_backups "-weekly"

	exit 0;
fi

# DAILY BACKUPS

if [ $HOUR_OF_DAY -eq $HOUR_OF_DAY_TO_KEEP ];
then
	# Delete all expired daily directories
	find $BACKUP_DIR -maxdepth 1 -mtime +$DAYS_TO_KEEP -name "*-daily" -exec rm -rf '{}' ';'

	perform_backups "-daily"

	exit 0;
fi

# HOURLY BACKUPS

# Delete hourly backups 24 hours old or more
find $BACKUP_DIR -maxdepth 1 -mtime +0 -name "*-hourly-*" -exec rm -rf '{}' ';'

perform_backups "-hourly-"$HOUR_OF_DAY
