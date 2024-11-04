#!/bin/bash

# Script da instalção das depedencias NPM do projeto

npm install --save-dev prettier electron electron-builder
npm install
node --eval "fs.writeFileSync('.prettierrc','{}\n')"
node --eval "fs.writeFileSync('.prettierignore','')"
