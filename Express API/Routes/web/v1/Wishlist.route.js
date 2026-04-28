const express = require("express");
const router = express.Router();
const userMiddleware = require("../../../Middlewares/user.middleware");
const wishlistController = require("../../../Controllers/Wishlist.controller");

//add into wishlist
router.post("/add", userMiddleware.authUser, wishlistController.AddToWishlist);

//get into whishlist

//remove item from wishlist


module.exports = router;