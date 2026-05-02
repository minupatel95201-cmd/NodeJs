import { useEffect, useState } from "react";

import api from "../../services/api";

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

import {
  Search,
  Trash2,
  Package,
  IndianRupee,
  Boxes,
  Eye,
  Star,
} from "lucide-react";

const Products = () => {

  const [products, setProducts] = useState([]);

  const [search, setSearch] = useState("");

  // ================= FETCH PRODUCTS =================

  const fetchProducts = async () => {

    try {

      const res = await api.get("/product/all");

      setProducts(res.data.products);

    } catch (error) {

      console.log(error);
    }
  };

  // ================= DELETE PRODUCT =================

  const deleteProduct = async (id) => {

    try {

      await api.delete(`/product/${id}`);

      fetchProducts();

    } catch (error) {

      console.log(error);
    }
  };

  useEffect(() => {

    fetchProducts();

  }, []);

  // ================= FILTER PRODUCTS =================

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (

    <div className="flex bg-[#f4f1ea] min-h-screen overflow-hidden">

      {/* ================= SIDEBAR ================= */}

      <Sidebar />

      {/* ================= MAIN ================= */}

      <div className="flex-1 overflow-hidden">

        <Navbar />

        {/* ================= CONTENT ================= */}

        <div className="p-6 lg:p-10">

          {/* ================= HEADER ================= */}

          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-10">

            <div>

              <p className="uppercase tracking-[6px] text-[#9d6b3f] text-sm">
                Product Management
              </p>

              <h1 className="text-5xl font-black mt-3 text-[#111]">
                All Products
              </h1>

              <p className="text-black/50 mt-4 text-lg">
                Manage your luxury home decor collections.
              </p>
            </div>

            {/* SEARCH */}

            <div
              className="
                flex
                items-center
                bg-white
                rounded-2xl
                px-5
                py-4
                w-full
                lg:w-[380px]
                shadow-lg
                border
                border-black/5
              "
            >

              <Search
                size={20}
                className="text-[#9d6b3f]"
              />

              <input
                type="text"
                placeholder="Search products..."
                value={search}
                onChange={(e) =>
                  setSearch(e.target.value)
                }
                className="
                  w-full
                  px-4
                  outline-none
                  bg-transparent
                "
              />
            </div>
          </div>

          {/* ================= STATS ================= */}

          <div className="grid md:grid-cols-3 gap-8 mb-10">

            <div
              className="
                bg-white/70
                backdrop-blur-xl
                rounded-[35px]
                p-8
                shadow-xl
              "
            >

              <Package
                className="text-[#9d6b3f]"
                size={40}
              />

              <h2 className="text-5xl font-black mt-6">
                {products.length}
              </h2>

              <p className="text-black/50 mt-2">
                Total Products
              </p>
            </div>

            <div
              className="
                bg-white/70
                backdrop-blur-xl
                rounded-[35px]
                p-8
                shadow-xl
              "
            >

              <Boxes
                className="text-[#9d6b3f]"
                size={40}
              />

              <h2 className="text-5xl font-black mt-6">
                {
                  products.filter(
                    (item) => item.stock > 0
                  ).length
                }
              </h2>

              <p className="text-black/50 mt-2">
                In Stock
              </p>
            </div>

            <div
              className="
                bg-white/70
                backdrop-blur-xl
                rounded-[35px]
                p-8
                shadow-xl
              "
            >

              <Star
                className="text-[#9d6b3f]"
                size={40}
              />

              <h2 className="text-5xl font-black mt-6">
                Premium
              </h2>

              <p className="text-black/50 mt-2">
                Luxury Collection
              </p>
            </div>
          </div>

          {/* ================= PRODUCTS GRID ================= */}

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

            {filteredProducts.map((product) => (

              <div
                key={product._id}
                className="
                  group
                  bg-white/70
                  backdrop-blur-xl
                  rounded-[40px]
                  overflow-hidden
                  border
                  border-white/40
                  shadow-[0_20px_50px_rgba(0,0,0,0.08)]
                  hover:-translate-y-2
                  transition-all
                  duration-500
                "
              >

                {/* IMAGE */}

                <div className="relative overflow-hidden h-[320px]">

                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="
                      w-full
                      h-full
                      object-cover
                      group-hover:scale-110
                      transition
                      duration-700
                    "
                  />

                  <div className="absolute inset-0 bg-black/10"></div>

                  {/* badge */}

                  <div
                    className="
                      absolute
                      top-5
                      left-5
                      bg-[#9d6b3f]
                      text-white
                      px-4
                      py-2
                      rounded-full
                      text-sm
                      font-semibold
                    "
                  >
                    Premium
                  </div>
                </div>

                {/* CONTENT */}

                <div className="p-8">

                  <h2 className="text-3xl font-black text-[#111]">
                    {product.name}
                  </h2>

                  {/* PRICE */}

                  <div className="flex items-center gap-2 mt-5">

                    <IndianRupee
                      size={22}
                      className="text-[#9d6b3f]"
                    />

                    <h3 className="text-3xl font-black text-[#9d6b3f]">
                      {product.price}
                    </h3>
                  </div>

                  {/* STOCK */}

                  <div
                    className="
                      mt-5
                      flex
                      items-center
                      justify-between
                    "
                  >

                    <p className="text-black/50">
                      Stock Available
                    </p>

                    <div
                      className="
                        bg-[#f4f1ea]
                        px-4
                        py-2
                        rounded-full
                        font-semibold
                      "
                    >
                      {product.stock}
                    </div>
                  </div>

                  {/* ACTION BUTTONS */}

                  <div className="flex gap-4 mt-8">

                    {/* VIEW */}

                    <button
                      className="
                        flex-1
                        bg-[#111]
                        hover:bg-[#9d6b3f]
                        transition
                        text-white
                        py-4
                        rounded-2xl
                        flex
                        items-center
                        justify-center
                        gap-3
                        font-semibold
                      "
                    >

                      <Eye size={20} />

                      View
                    </button>

                    {/* DELETE */}

                    <button
                      onClick={() =>
                        deleteProduct(product._id)
                      }
                      className="
                        flex-1
                        border
                        border-red-200
                        text-red-500
                        hover:bg-red-500
                        hover:text-white
                        transition
                        py-4
                        rounded-2xl
                        flex
                        items-center
                        justify-center
                        gap-3
                        font-semibold
                      "
                    >

                      <Trash2 size={20} />

                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* ================= EMPTY STATE ================= */}

          {filteredProducts.length === 0 && (

            <div
              className="
                mt-20
                bg-white/70
                backdrop-blur-xl
                rounded-[40px]
                p-20
                text-center
                shadow-xl
              "
            >

              <Package
                size={70}
                className="mx-auto text-[#9d6b3f]"
              />

              <h2 className="text-4xl font-black mt-8">
                No Products Found
              </h2>

              <p className="text-black/50 mt-4 text-lg">
                Try searching with another keyword.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;