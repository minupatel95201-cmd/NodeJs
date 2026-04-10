const express = require("express");
const { validationResult } = require("express-validator");
const router = express.Router();



// register user
//second validation -- use express validation package
router.post("/register", [
    body("username").isLength({min: 4}).withMessage("username must be 4 characters long"),
    body("email").isEmail().withMessage("Enter Valid Email"),
    body("password").isLength({min: 6}).withMessage("password must be 6 characters long"), 
]);
module.exports = router;