let express = require("express");
let router = new express.Router();

let {register} = require("./userServices");
let {registerValidator} = require("./userValidator");

let {isLogging} = require("./userServices");
let {signIn} = require("./userServices");
let {loginValidator} = require("./userValidator");


router.post("/users", async (req, res, next) => {
  try {
    let validator = await registerValidator(req);
    console.log(validator)
    if (validator !== null) {
      return res.send({success: "2" , message: validator});
    } else {
      let registed = await register(req.body);
      if (registed == true) {
        return res.send({ success: "1" , message: "Register successfully."});
      } else {
        return res.send({ success: "0", message: "Email has been used."});
      }
    }   
  } catch (error) {
    console.error(error);
    return res.status(500).send({error: "Server Error"});
  }
});

router.post("/login", async (req, res, next) => {
  try {
    let isLogged = await isLogging(req);
    if (isLogged === true) {
      return res.send({message: "You are logged in."});
    }
    let validator = await loginValidator(req);
    if (validator !== null) {
      return res.send({message: validator});
    }
    let signIned = await signIn(req)
    if (signIned === false) {
      return res.send({message: "Email or Password is incorrect"});
    } else {
      return res.send({message: "Sign In successfully."});
    }
  } catch (error) {
    console.error(error);
    return res.status(500).send({error: "Server Error"});
  }
});

router.get("/logout", async (req, res, next) => {
  try {
    let isLogged = await isLogging(req);
    if (isLogged === false) {
      return res.send({message: "You are not logged in."});
    }
    req.session.user = null;
    return res.send({message: "Sign Out successfully."});
  } catch (error) {
    return res.status(500).send({error: "Server Error"});
  }
});

module.exports = router;