import React, {
  useEffect,
  useState,
} from "react";

import api from "../services/api";

import {
  ShoppingCart,
  Trash2,
  Heart,
} from "lucide-react";

const Wishlist = () => {

  const [wishlist, setWishlist] =
    useState([]);

  // ================= FETCH =================

  const fetchWishlist = async () => {

    try {

      const res = await api.get(
        "/wishlist/all"
      );

      setWishlist(
        res.data.wishlist
          .productIds
      );

    } catch (error) {

      console.log(error);
    }
  };

  // ================= REMOVE =================

  const removeWishlist =
    async (productId) => {

      try {

        await api.delete(

          `/wishlist/${productId}`
        );

        fetchWishlist();

      } catch (error) {

        console.log(error);

        alert(
          "Failed To Remove"
        );
      }
    };

  // ================= ADD TO CART =================

  const addToCart = async (
    productId
  ) => {

    try {

      await api.post(
        "/cart/add",

        {
          item: {

            productId,

            quantity: 1,
          },
        }
      );

      alert(
        "Added To Cart"
      );

    } catch (error) {

      console.log(error);

      alert(
        error.response?.data
          ?.message ||

          "Something went wrong"
      );
    }
  };

  // ================= USE EFFECT =================

  useEffect(() => {

    fetchWishlist();

  }, []);

  return (

    <div className="min-h-screen bg-[#f4f1ea] px-6 lg:px-10 py-16">

      {/* HEADER */}

      <div className="mb-16">

        <p className="uppercase tracking-[6px] text-[#9d6b3f] text-sm">

          Saved Luxury Products

        </p>

        <h1 className="text-7xl font-black mt-5">

          My
          <span className="block text-[#9d6b3f]">

            Wishlist

          </span>

        </h1>
      </div>

      {/* PRODUCTS */}

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10">

        {wishlist.map((data) => {

          const product =
            data.item.productId;

          return (

            <div
              key={product._id}
              className="
                group
                bg-white
                rounded-[40px]
                overflow-hidden
                shadow-xl
                hover:-translate-y-2
                transition-all
                duration-500
              "
            >

              {/* IMAGE */}

              <div className="relative overflow-hidden">

                <img
                  src={
                    product.images?.[0]
                  }
                  alt={product.name}
                  className="
                    w-full
                    h-[420px]
                    object-cover
                    group-hover:scale-110
                    transition
                    duration-700
                  "
                />

                {/* HEART */}

                <div
                  className="
                    absolute
                    top-6
                    right-6
                    w-16
                    h-16
                    rounded-full
                    bg-red-500
                    text-white
                    flex
                    items-center
                    justify-center
                  "
                >

                  <Heart
                    size={24}
                    fill="white"
                  />
                </div>
              </div>

              {/* CONTENT */}

              <div className="p-7">

                <p className="uppercase tracking-[4px] text-xs text-[#9d6b3f] font-semibold">

                  Premium Decor

                </p>

                <h2 className="text-5xl font-black mt-4 leading-tight">

                  {product.name}

                </h2>

                <p className="text-black/50 mt-5 text-lg">

                  {
                    product.description
                  }

                </p>

                {/* PRICE */}

                <h3 className="text-5xl font-black text-[#9d6b3f] mt-8">

                  ₹ {product.price}

                </h3>

                {/* BUTTONS */}

                <div className="flex gap-5 mt-10">

                  {/* ADD TO CART */}

                  <button

                    onClick={() =>
                      addToCart(
                        product._id
                      )
                    }

                    className="
                      flex-1
                      bg-black
                      text-white
                      py-5
                      rounded-2xl
                      hover:bg-[#9d6b3f]
                      transition
                      flex
                      items-center
                      justify-center
                      gap-3
                      font-semibold
                    "
                  >

                    <ShoppingCart
                      size={22}
                    />

                    Cart

                  </button>

                  {/* REMOVE */}

                  <button

                    onClick={() =>
                      removeWishlist(
                        product._id
                      )
                    }

                    className="
                      w-20
                      rounded-2xl
                      border
                      border-red-200
                      text-red-500
                      hover:bg-red-500
                      hover:text-white
                      transition
                      flex
                      items-center
                      justify-center
                    "
                  >

                    <Trash2
                      size={24}
                    />

                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* EMPTY */}

      {wishlist.length === 0 && (

        <div
          className="
            bg-white
            rounded-[40px]
            p-20
            text-center
            mt-10
          "
        >

          <h2 className="text-6xl font-black">

            Wishlist Empty

          </h2>

          <p className="text-black/50 text-lg mt-5">

            Save your favorite products.

          </p>
        </div>
      )}
    </div>
  );
};

export default Wishlist;