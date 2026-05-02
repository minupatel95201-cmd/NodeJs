import React from "react";
import { Link } from "react-router-dom";

import {
  ArrowRight,
  Clock3,
} from "lucide-react";

const Offers = () => {

  const offers = [

    {
      id: 1,

      title: "Luxury Sofa Collection",

      discount: "40% OFF",

      category: "sofa",

      image:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop",
    },

    {
      id: 2,

      title: "Modern Lighting",

      discount: "25% OFF",

      category: "lighting",

      image:
        "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200&auto=format&fit=crop",
    },

    {
      id: 3,

      title: "Kitchen Decor",

      discount: "50% OFF",

      category: "kitchen",

      image:
        "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  return (

    <div className="min-h-screen bg-[#f4f1ea]">

      {/* HERO */}

      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-20">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}

          <div>

            <p className="uppercase tracking-[6px] text-[#9d6b3f] text-sm">

              Limited Time Deals

            </p>

            <h1 className="text-7xl font-black leading-none mt-6">

              Exclusive

              <span className="block text-[#9d6b3f]">

                Offers

              </span>

            </h1>

            <p className="text-black/50 text-xl mt-8 leading-relaxed">

              Discover luxury home decor deals and
              premium furniture discounts crafted
              for elegant living spaces.

            </p>

            <Link to="/products">

              <button
                className="
                  mt-10
                  bg-black
                  text-white
                  px-10
                  py-5
                  rounded-full
                  flex
                  items-center
                  gap-3
                  hover:bg-[#9d6b3f]
                  transition
                "
              >

                Shop Deals

                <ArrowRight size={20} />

              </button>

            </Link>
          </div>

          {/* RIGHT */}

          <div className="relative">

            <img
              src="https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=1200&auto=format&fit=crop"
              alt=""
              className="
                rounded-[50px]
                h-[700px]
                w-full
                object-cover
              "
            />

            <div
              className="
                absolute
                bottom-10
                left-10
                bg-white/80
                backdrop-blur-xl
                p-8
                rounded-[35px]
              "
            >

              <p className="text-black/40">

                Biggest Sale

              </p>

              <h2 className="text-5xl font-black mt-3 text-[#9d6b3f]">

                70% OFF

              </h2>
            </div>
          </div>
        </div>
      </section>

      {/* OFFERS */}

      <section className="max-w-7xl mx-auto px-6 lg:px-10 pb-20">

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10">

          {offers.map((item) => (

            <div
              key={item.id}
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

              <div className="relative h-[380px] overflow-hidden">

                <img
                  src={item.image}
                  alt={item.title}
                  className="
                    w-full
                    h-full
                    object-cover
                    group-hover:scale-110
                    transition
                    duration-700
                  "
                />

                {/* DISCOUNT */}

                <div
                  className="
                    absolute
                    top-5
                    left-5
                    bg-[#9d6b3f]
                    text-white
                    px-6
                    py-3
                    rounded-full
                    font-bold
                  "
                >

                  {item.discount}

                </div>
              </div>

              {/* CONTENT */}

              <div className="p-8">

                <h2 className="text-4xl font-black leading-tight">

                  {item.title}

                </h2>

                <div className="flex items-center gap-3 mt-5 text-black/50">

                  <Clock3 size={18} />

                  Limited Time Offer

                </div>

                {/* BUTTON */}

                <Link
                  to={`/products?category=${item.category}`}
                >

                  <button
                    className="
                      w-full
                      mt-8
                      bg-black
                      text-white
                      py-4
                      rounded-2xl
                      hover:bg-[#9d6b3f]
                      transition
                      font-semibold
                    "
                  >

                    Shop Now

                  </button>

                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Offers;