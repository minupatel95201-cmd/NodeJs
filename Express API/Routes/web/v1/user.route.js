const express = require("express");
const { body } = require("express-validator");
const userController = require("../../../Controllers/user.controller");
const router = express.Router();
const middleware = require("../../../Middlewares/user.middleware");


// register user
//second validation -- use express validation package
router.post("/register", [
    body("username").isLength({min: 4}).withMessage("username must be 4 characters long"),
    body("email").isEmail().withMessage("Enter Valid Email"),
    body("password").isLength({min: 6}).withMessage("password must be 6 characters long"), 
], userController.registerUser);

//login user
router.post("/login", [
    body("email").isEmail().withMessage("Enter Valid Email"),
    body("password").isLength({min: 6}).withMessage("Password Must Be 6 Charcters Long")
], userController.loginUser);

// Show Profile
router.get("/profile", middleware.authUser, userController.profile);

//LogOut Profile
router.get("/logout", middleware.authUser, userController.logout);

// update profile
router.put("/update", middleware.authUser, userController.updateUser);

//forget password
router.post("/forget-password", userController.forgatePassword);

//reset password
router.post("/reset-password/:token", userController.resetPassword);
module.exports = router;