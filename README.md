e# Cloning Twitter Website #

This is a Twitter clone website, a little project I built to  learn front-end development.
At first, it was static pages, but now it became interactive.

## Getting Started ##

### The project now uses nodeJS, so make sure you have node installed. To install nodeJS: ###

You can install the requirements automatically running:
* ./install.sh 

Basically, the script will do all the following steps and commands for you, but if you prefer to add them manually:

* sudo apt-get install nodejs
* sudo apt-get install npm

### If you don't have Bower installed: ###
* sudo npm install -g bower

### If you don't have Grunt installed: ###
* sudo npm install -g grunt-cli

### Also, the project uses Sass, so you need to have Ruby installed to use Sass ###
* sudo apt-get install ruby-full
* sudo gem install sass

### After installing all of these, go to the project directory and run: ###
* npm install
* bower install

### To run the server: ###
* nodejs server.js ( or node server.js) [depends on your installation]
* (in case you want to change it from nodejs to node) sudo ln -s /usr/bin/nodejs /usr/bin/node

### Now go to:  ###
[http://localhost:5000](http://localhost:5000)

Voilà!
