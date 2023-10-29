#!/usr/bin/env bash
INFO_FILE='dist/info.json'
VERSION_TEXT="__version__"
RELEASE_DATE_TEXT="__release_date__"
uuid=$(uuidgen)
current_date=$(date)
sed -i "" "s/$VERSION_TEXT/$uuid/" $INFO_FILE
sed -i "" "s/$RELEASE_DATE_TEXT/$current_date/" $INFO_FILE