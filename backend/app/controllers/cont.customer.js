const Customer = require("../models/mo.customer.js");
exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
    // Create a Customer
      const customer = new Customer({
      customername: req.body.customername,
      phone: req.body.phone, 
      rentaltime: req.body.rentaltime,    
    });
    // Save Customer in the database
    Customer.create(customer, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating..."
        });
      else res.send(data);
    });
};
exports.findAll = function(req, res){
    Customer.getAll((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving..."
        });
      else res.send(data);
    });
};
exports.findOne = (req, res) => {
    Customer.findById(req.params.customerID, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found with id ${req.params.customerID}.`
          });
        } else {
          res.status(500).send({
            message: "Error retrieving with id " + req.params.customerID
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
  
    Customer.updateById(
      req.params.customerID,
      new Customer(req.body),
      (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found with id ${req.params.customerID}.`
            });
          } else {
            res.status(500).send({
              message: "Error updating with id " + req.params.customerID
            });
          }
        } else res.send(data);
      }
    );
};
exports.delete = (req, res) => {
    Customer.remove(req.params.customerID, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Customer with id ${req.params.customerID}.`
          });
        } else {
          res.status(500).send({
            message: "Could not delete Customer with id " + req.params.customerID
          });
        }
      } else res.send({ message: `Customer was deleted successfully!` });
    });
  };

// Delete all from the database.
exports.deleteAll = (req, res) => {
  
};