import React, {
  useEffect,
  useState,
} from "react";

import {
  ShoppingCart,
} from "lucide-react";

import {
  useParams,
} from "react-router-dom";


import api from "../services/api";

const AllProducts = () => {

  // ================= CATEGORY =================

  const { category } =
    useParams();




  // ================= STATE =================

  const [products, setProducts] =
    useState([]);




  // ================= FETCH PRODUCTS =================

  const fetchProducts = async () => {

    try {

      const res = await api.get(
        "/product/all"
      );




      // all products

      let allProducts =
        res.data.products;




      // category filter

      if (category) {

        allProducts =
          allProducts.filter(

            (product) =>

              product.category
                ?.toLowerCase()

                ===

              category.toLowerCase()
          );
      }




      setProducts(allProducts);

    } catch (error) {

      console.log(error);
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
        "Product Added To Cart"
      );

    } catch (error) {

      console.log(error);

      alert(
        "Something went wrong"
      );
    }
  };




  useEffect(() => {

    fetchProducts();

  }, [category]);




  return (

    <div className="min-h-screen bg-[#f4f1ea] p-10">

      <h1 className="text-5xl font-bold mb-10">

        {category
          ? `${category} Products`
          : "All Products"}

      </h1>




      <div className="grid grid-cols-4 gap-8">

        {products.map((item) => (

          <div
            key={item._id}
            className="
              bg-white
              rounded-3xl
              overflow-hidden
              shadow-lg
              hover:-translate-y-2
              transition-all
              duration-300
            "
          >

            {/* IMAGE */}

            <img
              src={item.images?.[0]}
              alt={item.name}
              className="
                h-72
                w-full
                object-cover
              "
            />




            {/* CONTENT */}

            <div className="p-5">

              <h2 className="text-2xl font-bold">

                {item.name}

              </h2>




              <p className="text-black/60 mt-2 line-clamp-2">

                {item.description}

              </p>




              {/* PRICE + CART */}

              <div className="flex justify-between items-center mt-5">

                <p className="text-2xl font-bold text-[#9d6b3f]">

                  ₹ {item.price}

                </p>




                <button

                  onClick={() =>
                    addToCart(item._id)
                  }

                  className="
                    bg-black
                    text-white
                    p-4
                    rounded-2xl
                    hover:bg-[#9d6b3f]
                    transition
                  "
                >

                  <ShoppingCart size={20} />

                </button>

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
};

export default AllProducts;