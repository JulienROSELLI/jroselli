#!/bin/bash

PICS="$(ls ./assets/techs/)"


for PIC in $PICS
do 
NAME="$(echo $PIC | awk -F"." '{print $1}')"
if [ "$PIC" != "index.ts" ]; then
IMPORT+="import  $NAME from './$PIC';";
EXPORT+="$NAME,";
CONSTANTS+="{name: '$NAME', icon: $NAME},"
fi
done

cat > ./assets/techs/index.ts <<EOF
$IMPORT

export {
$EXPORT
};

EOF


cat > ./constants/techs/index.ts <<EOF
import { TechListType } from "..";
import { $EXPORT } from "@/assets/techs";

export const TechList: Array<TechListType> = [
$CONSTANTS
];
EOF

echo "Done!!!"