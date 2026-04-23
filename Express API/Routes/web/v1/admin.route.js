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

// update role --> create manager
// router --> service --> controller --> call into router
router.put("/user/:id/role", userMiddlewre.authUser, Adminmiddleware.authAdmin, adminController.UpdateUserRole);

module.exports = router;