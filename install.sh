#!/bin/bash

echo 'CloningTwitterWebsite install script running...'
echo '-----------------------------------------------'

echo 'Checking requirements... '
if which nodejs >/dev/null; then
    echo "nodejs already exists..."
else
    sudo apt-get install nodejs
fi

if which npm >/dev/null; then
    echo "npm already exists..."
else
    sudo apt-get install npm
fi

if which bower >/dev/null; then
    echo "bower already exists..."
else
    sudo npm install -g bower
fi

echo 'Running npm install'
npm install

echo 'Running bower install'
bower install

echo 'Running grunt'
grunt

node server.js
