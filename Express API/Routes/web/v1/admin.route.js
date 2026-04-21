const express = require('express');
const router = express.Router();
const Adminmiddleware = require("../../../Middlewares/admin.middleware");
const adminController = require("../../../Controllers/admin.controller");
const userMiddlewre = require("../../../Middlewares/user.middleware");
const { body } = require("express-validator");

//show all users
//login user --> check user is Admin? --> show all users
router.get('/all/user',userMiddlewre.authUser, Adminmiddleware.authAdmin, adminController.AllUser);


//Delete User
router.delete("/user/:id", userMiddlewre.authUser, Adminmiddleware.authAdmin, adminController.deleteUser);

// manager Creation
router.post("/manager/create", [
    body("username").isLength({min: 4}).withMessage("username must be 4 characters long"),
    body("email").isEmail().withMessage("Enter Valid Email"),
    body("password").isLength({min: 6}).withMessage("password must be 6 characters long"), 
], userMiddlewre.authUser, Adminmiddleware.authAdmin, adminController.registerManager);

module.exports = router;