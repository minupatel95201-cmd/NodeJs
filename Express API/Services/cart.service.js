const cartModel = require("../Models/cart.model");

//add item to cart
module.exports.addToCart = async ({ userId, item }) => {
    const user = await cartModel.findOne({ userId });

    if(!cart){
       return new cartModel({ userId, items: []});
    };

    cart.items.push(item);
    return await cart.save();
};