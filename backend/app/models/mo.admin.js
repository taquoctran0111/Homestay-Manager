const sql = require("./db.js");
const Admin = function(admin) {  
  this.usernameAdmin = admin.usernameAdmin;
  this.passwordAdmin = admin.passwordAdmin;
};
Admin.create = (newAdmin, result) => {
    sql.query("INSERT INTO tbadmin SET ?", newAdmin, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      console.log("created newAdmin: ", { id: res.insertId, ...newAdmin });
      result(null, { id: res.insertId, ...newAdmin });
    });
};
Admin.findById = (adminID, result) => {
    sql.query(`SELECT * FROM tbadmin WHERE id = ${adminID}`, (err, res) => {
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
Admin.getAll = result => {
    sql.query("SELECT * FROM tbadmin", (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      console.log("admin: ", res);
      result(null, res);
    });
};
Admin.updateById = (id, admin, result) => {
    sql.query(
      "UPDATE tbadmin SET usernameAdmin = ?, passwordAdmin = ?  WHERE id = ?",
      [admin.usernameAdmin, admin.passwordAdmin, id],
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
  
        console.log("updated: ", { id: id, ...admin });
        result(null, { id: id, ...admin });
      }
    );
};
Admin.remove = (id, result) => {
    sql.query("DELETE FROM tbadmin WHERE id = ?", id, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      if (res.affectedRows == 0) {      
        result({ kind: "not_found" }, null);
        return;
      }
  
      console.log("deleted admin with id: ", id);
      result(null, res);
    });
};
Admin.removeAll = result => {
    sql.query("DELETE FROM tbadmin", (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      console.log(`deleted ${res.affectedRows} admin`);
      result(null, res);
    });
  };
  
module.exports = Admin;