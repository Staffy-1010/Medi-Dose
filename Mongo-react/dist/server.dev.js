"use strict";

var express = require("express");

var path = require("path");

var bodyparser = require("body-parser");

var cors = require("cors");

var mongoose = require('mongoose');

var DbConfig = require("./configs/config");

var app = express();
app.use(express["static"]("public"));
app.use(express.urlencoded({
  extended: true
}));
app.use(bodyparser.json());
app.use(cors());
var config = DbConfig.dburl;
mongoose.connect(config, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(function () {
  console.log("Connected");
})["catch"](function (err) {
  console.log(err);
});

var reactrouter = require("./routers/react-router");

app.use("/react", reactrouter);

var medrouter = require("./routers/med-router");

app.use("/med", medrouter);
app.listen("8087", function (err) {
  console.log("connected");
});