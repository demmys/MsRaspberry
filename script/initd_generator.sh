#!/bin/sh

BIN=$(pwd)/node_modules/.bin
PATH=$BIN:$PATH
LOGS=$(pwd)/logs

if [ ! -d $LOGS ]
then
    mkdir logs
fi

initd-forever -c $(which node) -f $BIN/forever -a $(pwd)/main.js -l $LOGS/log -n msraspberry
