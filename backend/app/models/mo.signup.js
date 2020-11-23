const sql = require("./db.js");

const Signup = function(signup) {  
  this.username = signup.username;
  this.password = signup.password;
  this.role = "user";
};

// Signup.findByUsername = (userName, result) => {
//   sql.query(`SELECT * FROM tbUser WHERE username = '${userName}'`, (err, res) => {
//     if (err) {
//       console.log("error: ", err);
//       result(err, null);
//       return;
//     }
//     if (res.length) {
//       console.log("found: ", res[0]);
//       result(null, res[0]);
//       return;
//     }
//     result({ kind: "not_found" }, null);
//   });
// };

Signup.create = (newUser, result) => {
  console.log(newUser.username)
  if(newUser.username != '' && newUser.password != '') {
    sql.query("INSERT INTO tbuser SET ?", newUser, (err, res) => {
      if (err) {
        console.log("error: ", err); 
        result(err, null);
        return;
      } 
      console.log("created newuser: ", { id: res.insertId, ...newUser });
      result(null, { id: res.insertId, ...newUser });
    });
  }
  else {
    console.log('fail');
    return false;
  }
};
module.exports = Signup; 