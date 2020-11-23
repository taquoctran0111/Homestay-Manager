const User = require("../models/mo.user.js");
exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
    // Create a User
      const user = new User({
      username: req.body.username,
      password: req.body.password,     
    });
    // Save User in the database
    User.create(user, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating..."
        });
      else res.send(data);
    });
};
exports.findAll = function(req, res){
    User.getAll((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving..."
        });
      else res.send(data);
    });
};
exports.findOne = (req, res) => {
    User.findById(req.params.userID, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found with id ${req.params.userID}.`
          });
        } else {
          res.status(500).send({
            message: "Error retrieving with id " + req.params.userID
          });
        }
      } else res.send(data);
    });
};
exports.update = (req, res) => {
    // Validate Request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
  
    User.updateById(
      req.params.userID,
      new User(req.body),
      (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found with id ${req.params.userID}.`
            });
          } else {
            res.status(500).send({
              message: "Error updating with id " + req.params.userID
            });
          }
        } else res.send(data);
      }
    );
};
exports.delete = (req, res) => {
    User.remove(req.params.userID, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found User with id ${req.params.userID}.`
          });
        } else {
          res.status(500).send({
            message: "Could not delete User with id " + req.params.userID
          });
        }
      } else res.send({ message: `User was deleted successfully!` });
    });
  };

// Delete all from the database.
exports.deleteAll = (req, res) => {
  
};