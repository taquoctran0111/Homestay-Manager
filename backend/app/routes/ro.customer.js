module.exports = app => {
    const customer = require("../controllers/cont.customer.js");
    // Create a new 
    app.post("/customer/insert",customer.create);    
    // Retrieve all 
    app.get("/customer/findall", customer.findAll);    
    // Retrieve a single with customerID
    app.get("/customer/findone/:customerID", customer.findOne);
    // Update a Customer with customerID
    app.put("/customer/update/:customerID", customer.update);
    // Delete a Customer with customerID
    app.delete("/customer/delone/:customerID", customer.delete);
    // delete all
    app.delete("/customer/delall", customer.deleteAll);
};