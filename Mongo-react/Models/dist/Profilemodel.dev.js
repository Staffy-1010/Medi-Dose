"use strict";

var mongoose = require("mongoose");

function getProfileModel() {
  var UserSchema = new mongoose.Schema({
    uid: String,
    name: String,
    city: String,
    address: String,
    Email: String
  });
  var userModel = mongoose.model("profile", UserSchema);
  return userModel;
}

module.exports = getProfileModel;