import React, {
  useEffect,
  useState,
} from "react";

import api from "../services/api";

import {
  PackageCheck,
  ShoppingBag,
  BadgeCheck,
  CalendarDays,
  Trash2,
} from "lucide-react";

const MyOrders = () => {

  const [orders, setOrders] =
    useState([]);

  // ================= FETCH ORDERS =================

  const fetchOrders = async () => {

    try {

      const res = await api.get(
        "/order/all"
      );

      setOrders(
        res.data.order || []
      );

    } catch (error) {

      console.log(error);
    }
  };

  // ================= REMOVE ORDER =================

  const removeOrder = async (
    orderId
  ) => {

    try {

      await api.delete(
        `/order/${orderId}`
      );

      setOrders(
        orders.filter(
          (item) =>
            item._id !== orderId
        )
      );

      alert(
        "Order Removed Successfully"
      );

    } catch (error) {

      console.log(error);

      alert(
        "Failed To Remove Order"
      );
    }
  };

  // ================= USE EFFECT =================

  useEffect(() => {

    fetchOrders();

  }, []);

  return (

    <div className="min-h-screen bg-[#f4f1ea] py-16 overflow-hidden relative">

      {/* BACKGROUND */}

      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#c89b6d] opacity-20 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#d8c2a8] opacity-20 blur-[120px] rounded-full"></div>

      {/* CONTENT */}

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">

        {/* HEADER */}

        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-10 mb-20">

          <div>

            <p className="uppercase tracking-[6px] text-[#9d6b3f] text-sm">

              Premium Purchase History

            </p>

            <h1 className="text-7xl font-black mt-6 leading-none">

              My
              <span className="block text-[#9d6b3f]">

                Orders

              </span>

            </h1>

            <p className="text-black/50 text-lg mt-6 max-w-2xl">

              Track your luxury decor and
              premium furniture purchases.

            </p>
          </div>

          {/* TOTAL */}

          <div
            className="
              bg-white/70
              backdrop-blur-xl
              px-8
              py-6
              rounded-[35px]
              shadow-xl
            "
          >

            <p className="text-black/40">

              Total Orders

            </p>

            <h2 className="text-6xl font-black mt-2">

              {orders.length}

            </h2>
          </div>
        </div>

        {/* ORDERS */}

        {orders.length > 0 ? (

          <div className="space-y-10">

            {orders.map(
              (order, index) => {

                const firstItem =
                  order.items?.[0];

                const product =
                  firstItem
                    ?.productId;

                return (

                  <div
                    key={order._id}
                    className="
                      bg-white/70
                      backdrop-blur-xl
                      rounded-[45px]
                      overflow-hidden
                      shadow-[0_20px_50px_rgba(0,0,0,0.08)]
                    "
                  >

                    <div className="grid lg:grid-cols-3">

                      {/* IMAGE */}

                      <div className="relative">

                        <img
                          src={
                            product
                              ?.images?.[0] ||

                            "https://via.placeholder.com/500"
                          }

                          alt={
                            product?.name
                          }

                          className="
                            w-full
                            h-full
                            min-h-[420px]
                            object-cover
                          "
                        />

                        <div
                          className="
                            absolute
                            top-6
                            left-6
                            bg-black/70
                            backdrop-blur-md
                            text-white
                            px-5
                            py-3
                            rounded-full
                            text-sm
                            tracking-[3px]
                            uppercase
                          "
                        >

                          Luxury Order

                        </div>
                      </div>

                      {/* DETAILS */}

                      <div className="lg:col-span-2 p-10 lg:p-14">

                        {/* TOP */}

                        <div className="flex flex-col lg:flex-row justify-between gap-8">

                          <div>

                            <div className="flex items-center gap-3 text-[#9d6b3f]">

                              <ShoppingBag
                                size={20}
                              />

                              <p className="uppercase tracking-[4px] text-sm">

                                Premium Decor

                              </p>
                            </div>

                            <h2 className="text-5xl font-black mt-5 leading-tight">

                              {
                                product?.name ||

                                "Product Removed"
                              }

                            </h2>

                            <div className="flex items-center gap-3 mt-5 text-black/40">

                              <CalendarDays
                                size={18}
                              />

                              <p>

                                Order Confirmed

                              </p>
                            </div>
                          </div>

                          {/* STATUS + REMOVE */}

                          <div className="flex items-center gap-4">

                            {/* STATUS */}

                            <div
                              className="
                                bg-green-100
                                text-green-700
                                px-8
                                py-4
                                rounded-full
                                h-fit
                                flex
                                items-center
                                gap-3
                                font-bold
                              "
                            >

                              <BadgeCheck
                                size={20}
                              />

                              Pending

                            </div>

                            {/* REMOVE BUTTON */}

                            <button

                              onClick={() =>
                                removeOrder(
                                  order._id
                                )
                              }

                              className="
                                bg-red-100
                                text-red-600
                                px-5
                                py-4
                                rounded-full
                                hover:bg-red-500
                                hover:text-white
                                transition
                                flex
                                items-center
                                gap-2
                                font-semibold
                              "
                            >

                              <Trash2
                                size={18}
                              />

                              Remove

                            </button>
                          </div>
                        </div>

                        {/* INFO */}

                        <div className="grid md:grid-cols-3 gap-6 mt-14">

                          {/* QUANTITY */}

                          <div
                            className="
                              bg-[#f4f1ea]
                              rounded-[30px]
                              p-8
                            "
                          >

                            <p className="text-black/40">

                              Quantity

                            </p>

                            <h3 className="text-5xl font-black mt-4">

                              {
                                firstItem
                                  ?.quantity || 0
                              }

                            </h3>
                          </div>

                          {/* PRICE */}

                          <div
                            className="
                              bg-[#f4f1ea]
                              rounded-[30px]
                              p-8
                            "
                          >

                            <p className="text-black/40">

                              Product Price

                            </p>

                            <h3 className="text-5xl font-black mt-4 text-[#9d6b3f]">

                              ₹ {
                                firstItem
                                  ?.price || 0
                              }

                            </h3>
                          </div>

                          {/* TOTAL */}

                          <div
                            className="
                              bg-black
                              text-white
                              rounded-[30px]
                              p-8
                            "
                          >

                            <p className="text-white/50">

                              Total Bill

                            </p>

                            <h3 className="text-5xl font-black mt-4 text-[#d6b18b]">

                              ₹ {
                                order
                                  ?.totalBill || 0
                              }

                            </h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }
            )}
          </div>

        ) : (

          /* EMPTY */

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

              <PackageCheck
                size={70}
                className="text-[#9d6b3f]"
              />
            </div>

            <h2 className="text-6xl font-black mt-10">

              No Orders Yet

            </h2>

            <p className="text-black/50 text-lg mt-6">

              Your luxury orders will appear here.

            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyOrders;