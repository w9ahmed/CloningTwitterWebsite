#!/bin/bash

clear

if which npm >/dev/null; then
    echo "npm exists"
else
    sudo apt-get install npm
fi


if which nodejs >/dev/null; then
    echo "nodejs exists"
else
    sudo apt-get install nodejs
fi


echo 'Cloning Twitter Website script running...'
echo

echo 'Running npm install'
npm install
echo

echo 'Running bower install'
bower install
echo

echo 'Running grunt'
grunt
echo

node server.js
