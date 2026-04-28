const cartModel = require("../Models/cart.model");

//add item to cart
module.exports.addToCart = async ({ userId, item }) => {
    let cart = await cartModel.findOne({ userId });

    if (!cart) cart = new cartModel({ userId, items: [] });

    cart.items.push(item);
    return await cart.save();
};

// Get Cart
module.exports.GetCart = async (userId) => {
    return await cartModel.find({ userId });
};

// Delete Single Product From Cart
module.exports.RemoveSingleProduct = async ({ userId, productId }) => {
    //Find Login User cart
    let cart = await cartModel.findOne({ userId });

    if (!cart) throw new Error("Cart Not Found!!");

    //Find Index Number Of Product On ProductId
    const itemIndex = cart.items.findIndex((i) =>
        i.productId.equals(productId)
        // i --> that give items array
    );
    console.log(itemIndex);

    if (!itemIndex === 0) throw new Error("Item Not Found!!");

    cart.items.splice(itemIndex, 1);

    await cart.save();
};