import React from "react";

import {
  ArrowRight,
  BadgePercent,
} from "lucide-react";

import { Link } from "react-router-dom";

const deals = [

  {
    title: "Luxury Sofa Collection",

    discount: "50% OFF",

    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop",
  },

  {
    title: "Modern Lighting",

    discount: "30% OFF",

    image:
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200&auto=format&fit=crop",
  },

  {
    title: "Premium Kitchen Decor",

    discount: "40% OFF",

    image:
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1200&auto=format&fit=crop",
  },
];

const Deals = () => {

  return (

    <div className="min-h-screen bg-[#f4f1ea] py-16">

      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* HEADER */}

        <div className="mb-20">

          <p className="uppercase tracking-[6px] text-[#9d6b3f] text-sm">

            Exclusive Offers

          </p>

          <h1 className="text-7xl font-black mt-6">

            Shop
            <span className="block text-[#9d6b3f]">

              Deals

            </span>

          </h1>

          <p className="text-black/50 text-lg mt-6 max-w-2xl">

            Discover premium furniture
            and luxury decor items at
            exclusive discounted prices.

          </p>
        </div>

        {/* DEALS */}

        <div className="grid lg:grid-cols-3 gap-10">

          {deals.map(
            (item, index) => (

              <div
                key={index}
                className="
                  bg-white
                  rounded-[40px]
                  overflow-hidden
                  shadow-xl
                  hover:-translate-y-3
                  transition-all
                  duration-500
                "
              >

                {/* IMAGE */}

                <div className="relative h-80 overflow-hidden">

                  <img
                    src={item.image}
                    alt={item.title}
                    className="
                      w-full
                      h-full
                      object-cover
                      hover:scale-110
                      transition
                      duration-700
                    "
                  />

                  {/* DISCOUNT */}

                  <div
                    className="
                      absolute
                      top-6
                      left-6
                      bg-[#9d6b3f]
                      text-white
                      px-5
                      py-3
                      rounded-full
                      font-bold
                      flex
                      items-center
                      gap-2
                    "
                  >

                    <BadgePercent
                      size={18}
                    />

                    {item.discount}

                  </div>
                </div>

                {/* CONTENT */}

                <div className="p-8">

                  <h2 className="text-4xl font-black leading-tight">

                    {item.title}

                  </h2>

                  <p className="text-black/50 mt-5">

                    Premium handcrafted
                    furniture collection
                    with modern luxury
                    design.

                  </p>

                  <Link
                    to="/products"
                    className="
                      mt-8
                      bg-black
                      text-white
                      px-6
                      py-4
                      rounded-2xl
                      flex
                      items-center
                      justify-between
                      hover:bg-[#9d6b3f]
                      transition
                    "
                  >

                    Shop Now

                    <ArrowRight
                      size={20}
                    />
                  </Link>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Deals;