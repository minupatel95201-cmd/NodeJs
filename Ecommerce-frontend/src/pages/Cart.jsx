import React, { useEffect, useState } from "react";

import api from "../services/api";

import { ShoppingCart, Trash2, ArrowRight } from "lucide-react";

import { Link } from "react-router-dom";

const Cart = () => {
  const [cart, setCart] = useState([]);

  // ================= FETCH CART =================

  const fetchCart = async () => {
    try {
      const res = await api.get("/cart/all");

      setCart(res.data.cart.items || []);
    } catch (error) {
      console.log(error);
    }
  };

  // ================= REMOVE ITEM =================

  const removeItem = async (id) => {
    try {
      await api.delete(`/cart/product/${id}`);

      fetchCart();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  // ================= TOTAL PRICE =================

  const totalPrice = cart.reduce(
    (acc, item) => {
      if (!item.productId) return acc;

      return acc + item.productId.price * item.quantity;
    },

    0,
  );

  // ================= INCREASE =================
  const increaseQuantity = (productId) => {
    setCart((prev) =>
      prev.map((item) => {
        if (item.productId?._id === productId) {
          // stock limit

          if (item.quantity >= item.productId.stock) {
            alert("Stock limit reached");

            return item;
          }

          return {
            ...item,

            quantity: item.quantity + 1,
          };
        }

        return item;
      }),
    );
  };

  // ================= DECREASE =================

  const decreaseQuantity = (productId) => {
    setCart((prev) =>
      prev.map((item) =>
        item.productId?._id === productId
          ? {
              ...item,

              quantity: item.quantity > 1 ? item.quantity - 1 : 1,
            }
          : item,
      ),
    );
  };

  return (
    <div className="min-h-screen bg-[#f4f1ea] overflow-hidden">
      {/* BACKGROUND */}

      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#d8b89a] rounded-full blur-[120px] opacity-40"></div>

      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#cdb39a] rounded-full blur-[120px] opacity-30"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 py-16">
        {/* HEADER */}

        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 mb-20">
          <div>
            <p className="uppercase tracking-[6px] text-[#9d6b3f] text-sm">
              Elite Decor Cart
            </p>

            <h1 className="text-7xl font-black mt-5 leading-none">
              Shopping
              <span className="block text-[#9d6b3f]">Cart</span>
            </h1>

            <p className="text-black/50 text-lg mt-6 max-w-2xl">
              Review your luxury furniture and premium decor selections.
            </p>
          </div>

          {/* TOTAL ITEMS */}

          <div
            className="
              bg-white/70
              backdrop-blur-xl
              px-8
              py-5
              rounded-3xl
              shadow-xl
            "
          >
            <p className="text-black/40 text-sm">Total Items</p>

            <h2 className="text-5xl font-black mt-2">
              {cart.reduce(
                (total, item) => {
                  if (!item.productId) return total;

                  return total + item.quantity;
                },

                0,
              )}
            </h2>
          </div>
        </div>

        {/* CART ITEMS */}

        {cart.length > 0 ? (
          <div className="grid lg:grid-cols-3 gap-10">
            {/* PRODUCTS */}

            <div className="lg:col-span-2 space-y-8">
              {cart.map((item) => {
                const product = item.productId;

                // skip null

                if (!product) return null;

                return (
                  <div
                    key={product._id}
                    className="
                      bg-white/70
                      backdrop-blur-xl
                      rounded-[40px]
                      overflow-hidden
                      border
                      border-white/40
                      shadow-xl
                      flex
                      flex-col
                      md:flex-row
                    "
                  >
                    {/* IMAGE */}

                    <div className="md:w-[320px] h-[280px] overflow-hidden">
                      <img
                        src={product.images?.[0]}
                        alt=""
                        className="
                          w-full
                          h-full
                          object-cover
                        "
                      />
                    </div>

                    {/* CONTENT */}

                    <div className="flex-1 p-8 flex flex-col justify-between">
                      <div>
                        <h2 className="text-4xl font-black">{product.name}</h2>

                        <h3 className="text-4xl font-black text-[#9d6b3f] mt-6">
                          ₹ {product.price}
                        </h3>

                        <p className="mt-3 text-lg text-black/60">
                          Stock :
                          <span className="font-bold text-[#9d6b3f]">
                            {product.stock}
                          </span>
                        </p>

                        {/* QUANTITY */}

                        <div className="mt-6">
                          <p className="text-black/40 text-sm">Quantity</p>

                          <div className="mt-3 flex items-center gap-4">
                            <button
                              onClick={() => decreaseQuantity(product._id)}
                              className="
                                w-12
                                h-12
                                rounded-2xl
                                bg-[#f4f1ea]
                                text-2xl
                                font-bold
                              "
                            >
                              -
                            </button>

                            <div
                              className="
                                w-16
                                h-12
                                rounded-2xl
                                bg-[#f4f1ea]
                                flex
                                items-center
                                justify-center
                                font-bold
                              "
                            >
                              {item.quantity}
                            </div>

                            <button
                              onClick={() => increaseQuantity(product._id)}
                              className="
                                w-12
                                h-12
                                rounded-2xl
                                bg-black
                                text-white
                                text-2xl
                                font-bold
                              "
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* REMOVE */}

                      <div className="flex justify-end mt-8">
                        <button
                          onClick={() => removeItem(product._id)}
                          className="
                            bg-red-100
                            text-red-500
                            px-8
                            py-4
                            rounded-2xl
                            flex
                            items-center
                            gap-3
                            font-semibold
                          "
                        >
                          <Trash2 size={20} />
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* SUMMARY */}

            <div
              className="
                bg-black
                text-white
                rounded-[40px]
                p-10
                h-fit
                sticky
                top-10
              "
            >
              <h2 className="text-5xl font-black">Checkout</h2>

              <div className="mt-10 space-y-6">
                <div className="flex justify-between">
                  <p>Total Items</p>

                  <h3>
                    {cart.reduce(
                      (total, item) => {
                        if (!item.productId) return total;

                        return total + item.quantity;
                      },

                      0,
                    )}
                  </h3>
                </div>

                <div className="flex justify-between">
                  <p>Shipping</p>

                  <h3>Free</h3>
                </div>

                <div className="border-t border-white/10 pt-6 flex justify-between">
                  <p>Total</p>

                  <h2 className="text-4xl font-black text-[#d6b18b]">
                    ₹ {totalPrice}
                  </h2>
                </div>
              </div>

              <Link to="/checkout">

  <button
    className="
      w-full
      mt-10
      bg-[#9d6b3f]
      hover:bg-white
      hover:text-black
      transition
      py-5
      rounded-2xl
      text-lg
      font-semibold
      flex
      items-center
      justify-center
      gap-3
    "
  >

    Proceed To Checkout

    <ArrowRight size={22} />

  </button>

</Link>
            </div>
          </div>
        ) : (
          /* EMPTY CART */

          <div
            className="
              bg-white/70
              backdrop-blur-xl
              rounded-[50px]
              p-20
              text-center
              shadow-xl
            "
          >
            <div
              className="
                w-32
                h-32
                rounded-full
                bg-[#f4f1ea]
                mx-auto
                flex
                items-center
                justify-center
              "
            >
              <ShoppingCart size={60} className="text-[#9d6b3f]" />
            </div>

            <h2 className="text-6xl font-black mt-10">Cart Empty</h2>

            <p className="text-black/50 text-lg mt-6">
              Your shopping cart is empty.
            </p>

            <Link
              to="/products"
              className="
                mt-10
                bg-black
                text-white
                px-10
                py-5
                rounded-2xl
                text-lg
                font-semibold
                inline-flex
                items-center
                gap-3
              "
            >
              Explore Products
              <ArrowRight size={20} />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
