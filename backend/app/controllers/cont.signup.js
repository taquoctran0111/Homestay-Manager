const { response } = require("express");
const SignUp = require("../models/mo.signup.js");
let bcrypt = require('bcrypt')

exports.findOne = (req, res) => {
  SignUp.findByUsername(req.params.userName, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found with username ${req.params.userName}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving with username " + req.params.userName
        });
      }
    } else res.send(data);
  });
};
exports.create = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }
  // let hashed = bcrypt.hashpw(req.body.password, bcrypt.gensalt());
  const signup = new SignUp({
    username: req.body.username,
    password: req.body.username,
  });

  let result = SignUp.create(signup, (err, data) => {
    // let user = findOne(req.params.userName);
    // console.log(user);
    if (err)
      res.status(500).send({
        "success":"0"
      });
    else res.send({"success": 1});
  });
};