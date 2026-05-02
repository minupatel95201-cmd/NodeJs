import { useState } from "react";

import api from "../../services/api";

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

import {
  Package,
  Image,
  Tag,
  DollarSign,
  Boxes,
  Layers,
  FileText,
  PlusCircle,
  CheckCircle2,
} from "lucide-react";

const AddProduct = () => {

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    stock: "",
    price: "",
    discount: "",
    isNewProduct: true,
    sku: "",
    images: "",
    brand: "",
    category: "",
  });

  // ================= SUBMIT =================

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      await api.post("/product/add", {
        ...formData,
        images: [formData.images],
      });

      alert("Product Added Successfully");

      setFormData({
        name: "",
        description: "",
        stock: "",
        price: "",
        discount: "",
        isNewProduct: true,
        sku: "",
        images: "",
        brand: "",
        category: "",
      });

    } catch (error) {

      console.log(error);

      alert("Something went wrong");
    }
  };

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
                Add New Product
              </h1>

              <p className="text-black/50 mt-4 text-lg">
                Create premium luxury furniture & decor products.
              </p>
            </div>

            <button
              className="
                bg-[#111]
                hover:bg-[#9d6b3f]
                transition
                text-white
                px-8
                py-4
                rounded-2xl
                font-semibold
                shadow-xl
              "
            >
              Save Draft
            </button>
          </div>

          {/* ================= FORM CONTAINER ================= */}

          <div
            className="
              bg-white/70
              backdrop-blur-2xl
              rounded-[40px]
              border
              border-white/40
              shadow-[0_20px_50px_rgba(0,0,0,0.08)]
              overflow-hidden
            "
          >

            {/* ================= TOP BANNER ================= */}

            <div className="relative h-[250px] overflow-hidden">

              <img
                src="https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=1400&auto=format&fit=crop"
                alt=""
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-black/50"></div>

              <div className="absolute bottom-10 left-10 text-white">

                <p className="uppercase tracking-[6px] text-[#d6b18b] text-sm">
                  Elite Decor Collection
                </p>

                <h2 className="text-5xl font-black mt-4">
                  Product Creation Panel
                </h2>
              </div>
            </div>

            {/* ================= FORM ================= */}

            <form
              onSubmit={handleSubmit}
              className="p-6 lg:p-10 grid lg:grid-cols-2 gap-8"
            >

              {/* PRODUCT NAME */}

              <div>

                <label className="text-sm font-semibold text-black/60">
                  Product Name
                </label>

                <div
                  className="
                    mt-3
                    flex
                    items-center
                    bg-white
                    rounded-2xl
                    border
                    border-black/10
                    px-5
                  "
                >

                  <Package
                    size={20}
                    className="text-[#9d6b3f]"
                  />

                  <input
                    type="text"
                    placeholder="Luxury Sofa"
                    value={formData.name}
                    className="
                      w-full
                      px-4
                      py-5
                      outline-none
                      bg-transparent
                    "
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        name: e.target.value,
                      })
                    }
                  />
                </div>
              </div>

              {/* BRAND */}

              <div>

                <label className="text-sm font-semibold text-black/60">
                  Brand
                </label>

                <div
                  className="
                    mt-3
                    flex
                    items-center
                    bg-white
                    rounded-2xl
                    border
                    border-black/10
                    px-5
                  "
                >

                  <Tag
                    size={20}
                    className="text-[#9d6b3f]"
                  />

                  <input
                    type="text"
                    placeholder="Elite Decor"
                    value={formData.brand}
                    className="
                      w-full
                      px-4
                      py-5
                      outline-none
                      bg-transparent
                    "
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        brand: e.target.value,
                      })
                    }
                  />
                </div>
              </div>

              {/* PRICE */}

              <div>

                <label className="text-sm font-semibold text-black/60">
                  Product Price
                </label>

                <div
                  className="
                    mt-3
                    flex
                    items-center
                    bg-white
                    rounded-2xl
                    border
                    border-black/10
                    px-5
                  "
                >

                  <DollarSign
                    size={20}
                    className="text-[#9d6b3f]"
                  />

                  <input
                    type="number"
                    placeholder="500"
                    value={formData.price}
                    className="
                      w-full
                      px-4
                      py-5
                      outline-none
                      bg-transparent
                    "
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        price: e.target.value,
                      })
                    }
                  />
                </div>
              </div>

              {/* STOCK */}

              <div>

                <label className="text-sm font-semibold text-black/60">
                  Stock Quantity
                </label>

                <div
                  className="
                    mt-3
                    flex
                    items-center
                    bg-white
                    rounded-2xl
                    border
                    border-black/10
                    px-5
                  "
                >

                  <Boxes
                    size={20}
                    className="text-[#9d6b3f]"
                  />

                  <input
                    type="number"
                    placeholder="20"
                    value={formData.stock}
                    className="
                      w-full
                      px-4
                      py-5
                      outline-none
                      bg-transparent
                    "
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        stock: e.target.value,
                      })
                    }
                  />
                </div>
              </div>

              {/* DISCOUNT */}

              <div>

                <label className="text-sm font-semibold text-black/60">
                  Discount %
                </label>

                <input
                  type="number"
                  placeholder="10"
                  value={formData.discount}
                  className="
                    mt-3
                    w-full
                    bg-white
                    border
                    border-black/10
                    rounded-2xl
                    px-5
                    py-5
                    outline-none
                  "
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      discount: e.target.value,
                    })
                  }
                />
              </div>

              {/* CATEGORY */}

              <div>

                <label className="text-sm font-semibold text-black/60">
                  Category
                </label>

                <div
                  className="
                    mt-3
                    flex
                    items-center
                    bg-white
                    rounded-2xl
                    border
                    border-black/10
                    px-5
                  "
                >

                  <Layers
                    size={20}
                    className="text-[#9d6b3f]"
                  />

                  <input
                    type="text"
                    placeholder="Living Room"
                    value={formData.category}
                    className="
                      w-full
                      px-4
                      py-5
                      outline-none
                      bg-transparent
                    "
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        category: e.target.value,
                      })
                    }
                  />
                </div>
              </div>

              {/* SKU */}

              <div>

                <label className="text-sm font-semibold text-black/60">
                  SKU Code
                </label>

                <input
                  type="text"
                  placeholder="SKU-123"
                  value={formData.sku}
                  className="
                    mt-3
                    w-full
                    bg-white
                    border
                    border-black/10
                    rounded-2xl
                    px-5
                    py-5
                    outline-none
                  "
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      sku: e.target.value,
                    })
                  }
                />
              </div>

              {/* IMAGE */}

              <div>

                <label className="text-sm font-semibold text-black/60">
                  Product Image URL
                </label>

                <div
                  className="
                    mt-3
                    flex
                    items-center
                    bg-white
                    rounded-2xl
                    border
                    border-black/10
                    px-5
                  "
                >

                  <Image
                    size={20}
                    className="text-[#9d6b3f]"
                  />

                  <input
                    type="text"
                    placeholder="https://..."
                    value={formData.images}
                    className="
                      w-full
                      px-4
                      py-5
                      outline-none
                      bg-transparent
                    "
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        images: e.target.value,
                      })
                    }
                  />
                </div>
              </div>

              {/* DESCRIPTION */}

              <div className="lg:col-span-2">

                <label className="text-sm font-semibold text-black/60">
                  Product Description
                </label>

                <div
                  className="
                    mt-3
                    bg-white
                    rounded-2xl
                    border
                    border-black/10
                    p-5
                  "
                >

                  <div className="flex items-center gap-3 mb-4">

                    <FileText
                      size={20}
                      className="text-[#9d6b3f]"
                    />

                    <span className="text-black/40 text-sm">
                      Detailed Description
                    </span>
                  </div>

                  <textarea
                    placeholder="Write premium product details..."
                    value={formData.description}
                    className="
                      w-full
                      h-40
                      resize-none
                      outline-none
                      bg-transparent
                    "
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        description: e.target.value,
                      })
                    }
                  />
                </div>
              </div>

              {/* NEW PRODUCT */}

              <div className="lg:col-span-2">

                <label
                  className="
                    flex
                    items-center
                    gap-4
                    bg-white
                    p-5
                    rounded-2xl
                    border
                    border-black/10
                  "
                >

                  <input
                    type="checkbox"
                    checked={formData.isNewProduct}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        isNewProduct: e.target.checked,
                      })
                    }
                    className="w-5 h-5 accent-[#9d6b3f]"
                  />

                  <div className="flex items-center gap-3">

                    <CheckCircle2
                      size={22}
                      className="text-[#9d6b3f]"
                    />

                    <span className="font-semibold">
                      Mark as New Product
                    </span>
                  </div>
                </label>
              </div>

              {/* BUTTONS */}

              <div className="lg:col-span-2 flex flex-col sm:flex-row gap-5 pt-4">

                <button
                  type="submit"
                  className="
                    flex-1
                    bg-[#111]
                    hover:bg-[#9d6b3f]
                    transition
                    text-white
                    py-5
                    rounded-2xl
                    text-lg
                    font-semibold
                    flex
                    items-center
                    justify-center
                    gap-3
                    shadow-xl
                  "
                >

                  <PlusCircle size={22} />

                  Add Product
                </button>

                <button
                  type="button"
                  className="
                    flex-1
                    border
                    border-black/10
                    hover:bg-black
                    hover:text-white
                    transition
                    py-5
                    rounded-2xl
                    text-lg
                    font-semibold
                  "
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;