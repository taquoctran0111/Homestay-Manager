const sql = require("./db.js");
const User = function(user) {  
  this.username = user.username;
  this.password = user.password;
};
User.create = (newUser, result) => {
    sql.query("INSERT INTO tbuser SET ?", newUser, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
      console.log("created newuser: ", { id: res.insertId, ...newUser });
      result(null, { id: res.insertId, ...newUser });
      if(newUser)
        console.log("success");
    });
};
User.findById = (userID, result) => {
    sql.query(`SELECT * FROM tbUser WHERE id = ${userID}`, (err, res) => {
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
User.getAll = result => {
    sql.query("SELECT * FROM tbuser", (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      console.log("User: ", res);
      result(null, res);
    });
};
User.updateById = (id, user, result) => {
    sql.query(
      "UPDATE tbuser SET username = ?, password = ?  WHERE id = ?",
      [user.username, user.password, id],
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
  
        console.log("updated: ", { id: id, ...user });
        result(null, { id: id, ...user });
      }
    );
};
User.remove = (id, result) => {
    sql.query("DELETE FROM tbuser WHERE id = ?", id, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      if (res.affectedRows == 0) {      
        result({ kind: "not_found" }, null);
        return;
      }
  
      console.log("deleted User with id: ", id);
      result(null, res);
    });
};
User.removeAll = result => {
    sql.query("DELETE FROM tbuser", (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      console.log(`deleted ${res.affectedRows} User`);
      result(null, res);
    });
  };
  
module.exports = User;