const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const db = require("./app/models/db");
const jsonParser = bodyParser.json()

app.use(bodyParser.json({type: "application/json"} ));
app.use(bodyParser.urlencoded({ extended: true }));

require("./app/routes/ro.admin.js")(app);
require("./app/routes/ro.user.js")(app);
require("./app/routes/ro.customer.js")(app);
require("./app/routes/ro.signup.js")(app);


app.post('/login', jsonParser, function (req, res) {
    const username = req.body.username; //lấy dữ liệu bên react-native gửi qua
    const password = req.body.password;
    if(username=='admin' && password=='admin'){
    	res.json({"success":1,"username":username,"password":password});
    }
    res.json({"success":0,"username":username,"password":password});
})
    


app.listen( 5000, () => {
    console.log("Server start on port 5000");
})