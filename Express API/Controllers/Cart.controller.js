const cartService = require("../Services/cart.service");
const cartModel = require("../Models/cart.model");

//Add To cart
module.exports.AddToCart = async (req, res) => {
    try {
        const userId = req.user.id;
        const { item } = req.body;

        // bug: add alredy add product
        const Exist = await cartModel.findOne({ userId });
        const ExistProduct = Exist.items.map((val) => {
            const ids = val.productId;
            return ids;
        });

        ExistProduct.forEach((e) => {
            if(e.equals(item.productId)){
                return res.status(400).json({message: "Product Alredy Is Add Into Cart"});
            };
        });
       
 
        const cart = await cartService.addToCart({ userId, item});
 
        return res.status(200).json({ message: "Add Item To Cart Successfully", cart });
        
    } catch (error) {
       return res.status(400).json({ message: error.message }); 
    };
};

// Get Cart
module.exports.GetCart = async (req, res) => {
    try {
       const userId = req.user.id;
       
       let cart = await cartService.GetCart(userId);

       if(!cart){
        return res.status(404).json("Cart Not Found!!");
       };

       return res.status(200).json(
        {message: "Cart Data Fetch Successfully", cart});

    } catch (error) {
       return res.status(400).json({message: error.message}); 
    };
};

// remove single item from cart
module.exports.RemoveItem = async (req, res) => {
    try {
       const userId = req.user.id;
       const productId = req.params.id;
       
       await cartService.RemoveSingleProduct({ userId, productId});

       return res.status(200).json({message: "Remove Item From Cart Successfully!!"});
    } catch (error) {
       return res.status(400).json({message: error.message}); 
    };
};

