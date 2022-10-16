Lecture 7 - Recap and tidy up - Plan

* [x] Create basic server
* [x] Create basic client
* [x] Serve React from Express
* [x] Deployment preparations
  * [x] prettier
  * [x] husky
* [x] /GET
  * [x] getting data from server (fetch, fetchJSON)
  * [x] loading and handling loading time
  * [x] handling errors
* [ ] /POST


Cheat sheet:
* Setup root project
  * npm init -y
  * npm install concurrently (prettier and husky if needed)
* Setup Server
  * cd server (change dir to server) 
  * npm init -y (create package.json)
  * npm install -D nodemon (install node demon - for development use. Same as npm install --save-dev nodemon)
  * npm install express body-parser
* Setup Client
  * cd client (change dir to client)
  * npm init -y
  * npm install -D parcel
  * npm install react react-dom react-router-dom

* Adding some tests (client)
  * npm install -D jest babel-jest jsdom jest-environment-jsdom
  * npm install -D @babel/preset-env @babel/preset-react
  * separate functions that are to be tested (discussion)

* Adding some tests (server)
  * npm install -D jest supertest dotenv babel-jest @babel/preset-env
  * 