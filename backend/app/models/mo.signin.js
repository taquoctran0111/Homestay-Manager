const sql = require("./db.js");
let bcrypt = require('bcrypt')
const Signin = function(signin) {  
  this.username = signin.username;
  this.password = signin.password;
};