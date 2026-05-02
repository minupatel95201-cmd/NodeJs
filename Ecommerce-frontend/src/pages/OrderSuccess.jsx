import React from "react";

import {
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

import { Link } from "react-router-dom";

const OrderSuccess = () => {

  return (

    <div
      className="
        min-h-screen
        bg-[#f4f1ea]
        flex
        items-center
        justify-center
        px-6
      "
    >

      <div
        className="
          bg-white
          max-w-2xl
          w-full
          rounded-[50px]
          p-16
          text-center
          shadow-2xl
        "
      >

        <div
          className="
            w-32
            h-32
            rounded-full
            bg-green-100
            mx-auto
            flex
            items-center
            justify-center
          "
        >

          <CheckCircle2
            size={70}
            className="text-green-500"
          />
        </div>

        <p className="uppercase tracking-[6px] text-[#9d6b3f] text-sm mt-10">

          Order Successful

        </p>

        <h1 className="text-6xl font-black mt-6">

          Thank You
          <span className="block text-[#9d6b3f]">
            For Ordering
          </span>

        </h1>

        <p className="text-black/50 text-lg mt-8 leading-relaxed">

          Your luxury decor order has been placed
          successfully.

        </p>

        <div className="flex gap-5 justify-center mt-12">

          <Link to="/my-orders">

            <button
              className="
                bg-black
                text-white
                px-10
                py-5
                rounded-2xl
                hover:bg-[#9d6b3f]
                transition
                flex
                items-center
                gap-3
              "
            >

              My Orders

              <ArrowRight size={20} />

            </button>

          </Link>

          <Link to="/">

            <button
              className="
                border
                border-black
                px-10
                py-5
                rounded-2xl
                hover:bg-black
                hover:text-white
                transition
              "
            >

              Continue Shopping

            </button>

          </Link>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccess;