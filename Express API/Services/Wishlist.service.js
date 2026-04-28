const WishlistModel = require("../Models/Wishlist.model");


// add items into whishlist
module.exports.AddToWishlist = async ({userId, item}) => {
    let wishlist = await WishlistModel.findOne({userId});
    if(!wishlist){
        wishlist = new WishlistModel({userId, productIds: []});
    };

    wishlist.productIds.push(item)
    return await wishlist.save();
};