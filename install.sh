#!/bin/bash

echo '----------------------------------------------------'
echo '... CloningTwitterWebsite Install Script Running ...'
echo '----------------------------------------------------'

echo -ne 'Checking requirements\t...'
echo
if which nodejs >/dev/null; then
    echo -ne "nodejs already exists\t...\t"
    nodejs -v
else
    sudo apt-get install nodejs
fi

if which mongo >/dev/null; then
    echo -ne "mongoDB already exists\t...\t"
    mongo --version
else
    echo "Import the public key used by the package management system."
    sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 7F0CEB10
    echo "deb http://repo.mongodb.org/apt/ubuntu "$(lsb_release -sc)"/mongodb-org/3.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.0.list
    echo "Reload local package database"
    sudo apt-get update
    echo "Installing mongoDB"
    sudo apt-get install -y mongodb-org
fi

if which npm >/dev/null; then
    echo -ne "npm already exists\t...\t"
    npm -v
else
    sudo apt-get install npm
fi

if which bower >/dev/null; then
    echo -ne "bower already exists\t...\t"
    echo bower -v
else
    sudo npm install -g bower
fi

if which grunt >/dev/null; then
	echo -ne "grunt-cli alread exists\t...\t"
	grunt --version
else
	sudo npm install -g grunt-cli
fi

if which ruby >/dev/null; then
	echo -ne "ruby already exists\t...\t"
	ruby -v
else
	sudo apt-get install ruby-full
fi

if which sass >/dev/null; then
	echo -ne "sass already exists\t...\t"
	sass -v
else
	sudo gem install sass
fi
echo '... All requirements are successfully installed ...'

echo
echo

echo '----------------------------------------------------'
echo '............... Getting Dependencies ...............'
echo '----------------------------------------------------'

echo -ne 'Running npm install\t...'
echo
npm install

echo -ne 'Running bower install\t...'
echo
bower install

echo
echo

echo '----------------------------------------------------'
echo '................. Generating Files .................'
echo '----------------------------------------------------'

echo -ne 'Running grunt\t\t...'
echo
grunt

echo
echo

echo '----------------------------------------------------'
echo '.................. Running Server ..................'
echo '----------------------------------------------------'
node server.js
