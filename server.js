const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const helpers = require("./routerHelpers")

const server = express();
const port = 3000;

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended: true}));

server.use(express.static(path.join(__dirname, "./public")));

server.listen(3000, () => {
  console.log("LISTENING TO PORT: ", port);
})