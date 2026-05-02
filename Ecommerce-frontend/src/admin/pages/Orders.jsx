import React, {
  useEffect,
  useState,
} from "react";

import api from "../../services/api";

import Sidebar from "../components/Sidebar";

import Navbar from "../components/Navbar";

const Orders = () => {

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

  useEffect(() => {

    fetchOrders();

  }, []);

  return (

    <div className="flex">

      <Sidebar />

      <div className="flex-1 bg-[#f4f1ea] min-h-screen">

        <Navbar />

        <div className="p-8">

          {/* HEADER */}

          <div className="mb-10">

            <h1 className="text-5xl font-black">

              Orders

            </h1>

            <p className="text-black/50 mt-2">

              Manage customer orders

            </p>
          </div>

          {/* TABLE */}

          <div
            className="
              bg-white
              rounded-[30px]
              shadow-lg
              overflow-hidden
            "
          >

            <div className="overflow-x-auto">

              <table className="w-full">

                <thead
                  className="
                    bg-black
                    text-white
                  "
                >

                  <tr>

                    <th className="p-5 text-left">

                      Product

                    </th>

                    <th className="p-5 text-left">

                      Quantity

                    </th>

                    <th className="p-5 text-left">

                      Price

                    </th>

                    <th className="p-5 text-left">

                      Total

                    </th>

                    <th className="p-5 text-left">

                      Status

                    </th>

                  </tr>
                </thead>

                <tbody>

                  {orders.map(
                    (order) => {

                      const item =
                        order.items?.[0];

                      return (

                        <tr
                          key={order._id}
                          className="
                            border-b
                          "
                        >

                          {/* PRODUCT */}

                          <td className="p-5">

                            <div className="flex items-center gap-4">

                              <img
                                src={
                                  item
                                    ?.productId
                                    ?.images?.[0]
                                }

                                alt=""

                                className="
                                  w-20
                                  h-20
                                  rounded-2xl
                                  object-cover
                                "
                              />

                              <div>

                                <h2 className="font-bold text-xl">

                                  {
                                    item
                                      ?.productId
                                      ?.name
                                  }

                                </h2>

                              </div>
                            </div>
                          </td>

                          {/* QUANTITY */}

                          <td className="p-5 font-semibold">

                            {
                              item
                                ?.quantity
                            }

                          </td>

                          {/* PRICE */}

                          <td className="p-5 font-semibold text-[#9d6b3f]">

                            ₹ {
                              item?.price
                            }

                          </td>

                          {/* TOTAL */}

                          <td className="p-5 font-bold">

                            ₹ {
                              order?.totalBill
                            }

                          </td>

                          {/* STATUS */}

                          <td className="p-5">

                            <span
                              className="
                                bg-yellow-100
                                text-yellow-700
                                px-5
                                py-2
                                rounded-full
                                text-sm
                                font-bold
                              "
                            >

                              {
                                order?.status
                              }

                            </span>

                          </td>
                        </tr>
                      );
                    }
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orders;