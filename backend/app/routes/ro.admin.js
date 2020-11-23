module.exports = app => {
    const admin = require("../controllers/cont.admin.js");
    // Create a new 
    app.post("/admin/insert",admin.create);    
    // Retrieve all 
    app.get("/admin/findall", admin.findAll);    
    // Retrieve a single with adminID
    app.get("/admin/findone/:adminID", admin.findOne);
    // Update a Customer with adminID
    app.put("/admin/update/:adminID", admin.update);
    // Delete a Customer with adminID
    app.delete("/admin/delone/:adminID", admin.delete);
    // delete all
    app.delete("/admin/delall", admin.deleteAll);
};