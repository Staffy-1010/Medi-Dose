"use strict";

var express = require("express");

var usermodel = require("../Models/Usermodel.js");

var app = express();
var userModel = usermodel();

var Signup = function Signup(req, resp) {
  return regeneratorRuntime.async(function Signup$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(userModel.create(req.body, function (err, result) {
            {
              console.log(JSON.stringify(req.body));
              console.log("*********");
              console.log(req.files);
              console.log("*********");
              if (req.files == null) req.body.ppic = "nopic.jpg";else {
                req.body.ppic = req.files.myfile.name;
                var fullPath = path.join(__dirname, "..", "uploads", req.body.ppic); //----------------------------------------------

                req.files.myfile.mv(fullPath, function (err) {
                  if (err) {
                    console.log(err.message); //return resp.status(500).send(err);
                  } else {
                    console.log("File moved..."); //resp.json({msg:"File Uploaded"});
                    //resp.end("File Uploaded successfully for User:"+req.body.uid+"  Filename="+req.body.picname);
                  }
                });

                if (err) {
                  resp.send(err);
                  return;
                }

                resp.send("YOU ARE SUCCESSFULLY SIGNED UP");
              }
            }
          }));

        case 2:
        case "end":
          return _context.stop();
      }
    }
  });
};

var Login = function Login(req, resp) {
  return regeneratorRuntime.async(function Login$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(userModel.find({
            uid: req.body.uid,
            pwd: req.body.pwd
          }, function (err, result) {
            if (err) {
              resp.send(err);
              return;
            }

            if (result == "") resp.send("PLEASE SIGNUP");else {
              resp.send("YOU ARE SUCCESSFULLY LOGGED IN");
            }
          }));

        case 2:
        case "end":
          return _context2.stop();
      }
    }
  });
};

module.exports = {
  Signup: Signup,
  Login: Login
};