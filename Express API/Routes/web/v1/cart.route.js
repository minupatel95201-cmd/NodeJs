const express = require("express");
const router = express.Router();
const userMiddleware = require("../../../Middlewares/user.middleware");
const cartController = require("../../../Controllers/Cart.controller");

//add items
router.post("/add", userMiddleware.authUser, cartController.AddToCart);

//get all items
router.get("/all", userMiddleware.authUser, cartController.GetCart);

// remove items
router.delete("/product/:id", userMiddleware.authUser, cartController.RemoveItem);

//remove all item from cart --> empty cart


module.exports = router;