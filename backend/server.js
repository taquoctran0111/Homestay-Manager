const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const expressValidator = require("express-validator");
const session = require("express-session");
const http = require("http");

const app = express();
let server = http.createServer(app);

app.use(bodyParser.json());
app.use(morgan("dev"));
app.use(expressValidator());

app.set("ip", process.env.IP || "localhost");
app.set("port", process.env.PORT || 8797);

server.listen(app.get("port"), app.get("ip"), () => {
	console.log("Server listening at %s:%d ", app.get("ip"), app.get("port"));
});

app.get("/", (req, res) => {
	res.send("GET");
});

app.post("/", (req, res) => {
	res.send("POST");
});

const controller = require("./models/src/users/userControllers.js");
controller(app);

module.exports = app;
