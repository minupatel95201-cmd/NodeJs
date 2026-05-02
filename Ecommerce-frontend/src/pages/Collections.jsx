// src/pages/Collections.jsx

import React from "react";

import {
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const Collections = () => {

  const collections = [

    {
      id: 1,

      title: "Living Room",

      image:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop",
    },

    {
      id: 2,

      title: "Bedroom Decor",

      image:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop",
    },

    {
      id: 3,

      title: "Kitchen Interior",

      image:
        "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1200&auto=format&fit=crop",
    },

    {
      id: 4,

      title: "Office Setup",

      image:
        "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  return (

    <div className="min-h-screen bg-[#f4f1ea]">

      {/* HERO */}

      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-20">

        <div className="text-center">

          <p className="uppercase tracking-[6px] text-[#9d6b3f] text-sm">
            Luxury Collections
          </p>

          <h1 className="text-7xl font-black mt-6">

            Premium
            <span className="block text-[#9d6b3f]">
              Collections
            </span>

          </h1>

          <p className="text-black/50 text-xl mt-8 max-w-3xl mx-auto">
            Explore curated luxury home decor collections
            designed for elegant modern living.
          </p>
        </div>
      </section>

      {/* COLLECTIONS */}

      <section className="max-w-7xl mx-auto px-6 lg:px-10 pb-20">

        <div className="grid md:grid-cols-2 gap-10">

          {collections.map((item) => (

            <div
              key={item.id}
              className="
                group
                relative
                overflow-hidden
                rounded-[50px]
                h-[500px]
              "
            >

              <img
                src={item.image}
                alt=""
                className="
                  w-full
                  h-full
                  object-cover
                  group-hover:scale-110
                  transition
                  duration-700
                "
              />

              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black/70
                  to-transparent
                "
              ></div>

              <div className="absolute bottom-10 left-10 text-white">

                <h2 className="text-5xl font-black">

                  {item.title}

                </h2>

                <Link
                  to={`/products/${item.title}`}
                  className="
    mt-5
    flex
    items-center
    gap-2
    text-[#9d6b3f]
    font-semibold
  "
                >
                  Explore Collection
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Collections;
