"use strict";

var express = require("express");

var path = require("path");

var mongoose = require('mongoose');

var app = express.Router();
app.use(express.urlencoded({
  extended: true
})); //=----------

var medicineController = require(path.join(__dirname, "..", "Controllers", "MedicineController.js"));

app.post("/savee", medicineController.SaveMed);
app.post("/fetchh", medicineController.doFetchAll);
app.post("/delete", medicineController.doDelete);
module.exports = app;