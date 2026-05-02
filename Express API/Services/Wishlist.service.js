const WishlistModel = require("../Models/Wishlist.model");


// ================= ADD TO WISHLIST =================

module.exports.AddToWishlist = async ({
  userId,
  item,
}) => {

  let wishlist =
    await WishlistModel.findOne({
      userId,
    });

  if (!wishlist) {

    wishlist = new WishlistModel({
      userId,
      productIds: [],
    });
  }

  // duplicate avoid

  if (
    !wishlist.productIds.includes(item)
  ) {

    wishlist.productIds.push({
  item: {
    productId: item
  }
});
  }

  return await wishlist.save();
};



// ================= GET WISHLIST =================

module.exports.GetWishlist = async (
  userId
) => {

  const wishlist =
    await WishlistModel.findOne({
      userId,
    }).populate("productIds.item.productId");

  return wishlist;
};



// ================= REMOVE WISHLIST =================

module.exports.RemoveWishlist =
async ({ userId, itemId }) => {

  return await WishlistModel.updateOne(

    { userId },

    {
      $pull: {
        productIds: {
          "item.productId": itemId
        }
      }
    }
  );
};