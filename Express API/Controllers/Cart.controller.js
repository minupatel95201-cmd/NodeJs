const cartService = require("../Services/cart.service");
const cartModel = require("../Models/cart.model");

//Add To cart
module.exports.AddToCart =
async (req, res) => {

  try {

    const userId = req.user.id;

    const { item } = req.body;

    let cart =
      await cartModel.findOne({
        userId,
      });

    if (!cart) {

      cart = new cartModel({

        userId,

        items: [],
      });
    }

    const alreadyExists =
      cart.items.find((i) =>

        i.productId.toString() ===
        item.productId
      );

    if (alreadyExists) {

      alreadyExists.quantity += 1;

    } else {

      cart.items.push(item);
    }

    await cart.save();

    return res.status(200).json({

      message:
        "Added To Cart",

      cart,
    });

  } catch (error) {

    return res.status(400).json({

      message: error.message,
    });
  }
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

