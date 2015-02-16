#!/bin/bash

clear

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
