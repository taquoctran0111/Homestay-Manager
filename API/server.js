let express = require('express')
let morgan = require('morgan')
let bodyParser = require('body-parser')
let expressValidator = require('express-validator')
let session = require('express-session');
let MySQLStore = require('express-mysql-session')(session);

let app = express()
let PORT = 8797

let options = {
  host: "localhost",
  port: "3306",
  user: "root",
  password: "123456",
  database: "homestaymanager"
};

let sessionStore = new MySQLStore(options);

app.use(session({
  key: 'session_cookie_name',
  secret: 'session_cookie_secret',
  store: sessionStore,
  resave: true,
  saveUninitialized: false
}));

app.use(morgan("dev"))
app.use(bodyParser.json())
app.use(expressValidator())

app.use("/", require("./models/src/users/userControllers.js"));

app.listen(PORT, () => {
  console.log("Server started on http://localhost:" + PORT);
})

module.exports = app;  