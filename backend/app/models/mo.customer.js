const sql = require("./db.js");
const Customer = function(customer) {  
  this.customername = Customer.customername;
  this.phone = Customer.phone;
  this.retaltime = Customer.retaltime;
};
Customer.create = (newCustomer, result) => {
    sql.query("INSERT INTO tbcustomer SET ?", newCustomer, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      console.log("created newCustomer: ", { id: res.insertId, ...newCustomer });
      result(null, { id: res.insertId, ...newCustomer });
    });
};
Customer.findById = (customerID, result) => {
    sql.query(`SELECT * FROM tbcustomer WHERE id = ${customerID}`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      if (res.length) {
        console.log("found: ", res[0]);
        result(null, res[0]);
        return;
      }
      result({ kind: "not_found" }, null);
    });
};
Customer.getAll = result => {
    sql.query("SELECT * FROM tbcustomer", (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      console.log("Customer: ", res);
      result(null, res);
    });
};
Customer.updateById = (id, customer, result) => {
    sql.query(
      "UPDATE tbcustomer SET customername = ?, phone = ?, retaltime = ?  WHERE id = ?",
      [customer.customername, customer.phone, customer.retaltime, id],
      (err, res) => {
        if (err) {
          console.log("error: ", err);
          result(null, err);
          return;
        }
  
        if (res.affectedRows == 0) {        
          result({ kind: "not_found" }, null);
          return;
        }
  
        console.log("updated: ", { id: id, ...customer });
        result(null, { id: id, ...customer });
      }
    );
};
Customer.remove = (id, result) => {
    sql.query("DELETE FROM tbcustomer WHERE id = ?", id, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      if (res.affectedRows == 0) {      
        result({ kind: "not_found" }, null);
        return;
      }
  
      console.log("deleted customer with id: ", id);
      result(null, res);
    });
};
Customer.removeAll = result => {
    sql.query("DELETE FROM tbcustomer", (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      console.log(`deleted ${res.affectedRows} customer`);
      result(null, res);
    });
  };
  
module.exports = Customer;