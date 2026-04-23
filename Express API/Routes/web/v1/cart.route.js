const express = require("express");
const router = express.Router();
const userMiddleware = require("../../../Middlewares/user.middleware");
const cartController = require("../../../Controllers/Cart.controller");

//add items
router.post("/add", userMiddleware.authUser, cartController.AddToCart);


//get all items



// remove items



module.exports = router;