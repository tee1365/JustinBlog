#!/bin/sh

if [ $? -ne 0 ]; then
exit 1
fi

MAIN="master"
ME="justin"

git push 
git pull
git merge origin/${MAIN}
git push

git checkout ${MAIN}
git pull
git merge ${ME}
git push

git checkout ${ME}