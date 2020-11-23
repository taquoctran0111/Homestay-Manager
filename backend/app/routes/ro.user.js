module.exports = app => {
    const user = require("../controllers/cont.user.js");
    // Create a new 
    app.post("/user/insert",user.create);    
    // Retrieve all 
    app.get("/user/findall", user.findAll);    
    // Retrieve a single with userID
    app.get("/user/findone/:userID", user.findOne);
    // Update a Customer with userID
    app.put("/user/update/:userID", user.update);
    // Delete a Customer with userID 
    app.delete("/user/delone/:userID", user.delete);
    // delete all
    app.delete("/user/delall", user.deleteAll);
};