module.exports = app => {
    const signup = require("../controllers/cont.signup.js");
    // Create a new 
    app.post("/signup",signup.create);  
     
    // app.get("/signup/findone/:userName", signup.findOne);
};