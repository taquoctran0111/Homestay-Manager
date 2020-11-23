const Admin = require("../models/mo.admin.js");
exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
    // Create a Admin
      const admin = new Admin({
      usernameAdmin: req.body.usernameAdmin,
      passwordAdmin: req.body.passwordAdmin,     
    });
    // Save Admin in the database
    Admin.create(admin, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating..."
        });
      else res.send(data);
    });
};
exports.findAll = function(req, res){
    Admin.getAll((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving..."
        });
      else res.send(data);
    });
};
exports.findOne = (req, res) => {
    Admin.findById(req.params.adminID, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found with id ${req.params.adminID}.`
          });
        } else {
          res.status(500).send({
            message: "Error retrieving with id " + req.params.adminID
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
  
    Admin.updateById(
      req.params.adminID,
      new Admin(req.body),
      (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found with id ${req.params.adminID}.`
            });
          } else {
            res.status(500).send({
              message: "Error updating with id " + req.params.adminID
            });
          }
        } else res.send(data);
      }
    );
};
exports.delete = (req, res) => {
    Admin.remove(req.params.adminID, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Admin with id ${req.params.adminID}.`
          });
        } else {
          res.status(500).send({
            message: "Could not delete Admin with id " + req.params.adminID
          });
        }
      } else res.send({ message: `Admin was deleted successfully!` });
    });
  };

// Delete all from the database.
exports.deleteAll = (req, res) => {
  
};