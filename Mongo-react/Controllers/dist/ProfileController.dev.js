"use strict";

var express = require("express");

var usermodel = require("../Models/Profilemodel.js");

var app = express();
var userModel = usermodel();

var submit = function submit(req, resp) {
  return regeneratorRuntime.async(function submit$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(userModel.create(req.body, function (err, result) {
            if (err) {
              resp.send(err);
              return;
            }

            resp.send("Heyy there!! WELCOMEE");
          }));

        case 2:
        case "end":
          return _context.stop();
      }
    }
  });
};

var Update = function Update(req, resp) {
  userModel.update({
    uid: req.body.uid
  }, {
    $set: {
      name: req.body.name,
      Email: req.body.Email,
      city: req.body.city,
      address: req.body.address
    }
  }).then(function (result) {
    console.log(result);
    if (result.nModified != 0) resp.json({
      msg: "Updated"
    });else resp.json({
      msg: "Invalid id"
    });
  });
};

module.exports = {
  submit: submit,
  Update: Update
};