const whishlistSrvice = require("../Services/Wishlist.service");

//add item to wishlist
module.exports.AddToWishlist = async (req, res) => {
    try {
      const userId = req.user.id;
      const {item} = req.body;
      console.log(item)
      const wishlist = await whishlistSrvice.AddToWishlist({userId, item});

      if(!wishlist){
        return res.status(404).json({message: "Product Not Found!!"});
      };
      return res.status(200).json({message: "Add Item Into Wishlist", wishlist});

    } catch (error) {
      return res.status(400).json({message: error.message});  
    };
};