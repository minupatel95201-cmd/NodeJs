import React, {
  useEffect,
  useState,
} from "react";

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

import api from "../../services/api";

import {
  Users,
  ShoppingBag,
  Package,
  DollarSign,
  TrendingUp,
  ArrowUpRight,
} from "lucide-react";

const Dashboard = () => {

  // ================= STATE =================

  const [stats, setStats] =
    useState([
      {
        title: "Total Users",
        value: 0,
        icon: <Users size={34} />,
        growth: "+12%",
      },

      {
        title: "Total Products",
        value: 0,
        icon: (
          <ShoppingBag size={34} />
        ),
        growth: "+8%",
      },

      {
        title: "Total Orders",
        value: 0,
        icon: <Package size={34} />,
        growth: "+18%",
      },

      {
        title: "Revenue",
        value: "₹ 0",
        icon: (
          <DollarSign size={34} />
        ),
        growth: "+24%",
      },
    ]);

  // ================= TOP PRODUCTS =================

  const [products, setProducts] =
    useState([]);

  // ================= FETCH DATA =================

  const fetchDashboardData =
    async () => {

      try {

        // USERS

        const usersRes =
          await api.get(
            "/admin/all/user"
          );

        // PRODUCTS

        const productsRes =
          await api.get(
            "/product/all"
          );

        // ORDERS

        const ordersRes =
          await api.get(
            "/order/all"
          );

        const users =
          usersRes.data.users || [];

        const allProducts =
          productsRes.data.products ||
          [];

        const orders =
          ordersRes.data.order || [];

        // ================= REVENUE =================

        let revenue = 0;

        orders.forEach(
          (order) => {

            revenue +=
              order.totalBill ||
              0;
          }
        );

        // ================= SET STATS =================

        setStats([
          {
            title:
              "Total Users",

            value:
              users.length,

            icon:
              <Users size={34} />,

            growth:
              "+12%",
          },

          {
            title:
              "Total Products",

            value:
              allProducts.length,

            icon:
              (
                <ShoppingBag
                  size={34}
                />
              ),

            growth:
              "+8%",
          },

          {
            title:
              "Total Orders",

            value:
              orders.length,

            icon:
              <Package size={34} />,

            growth:
              "+18%",
          },

          {
            title:
              "Revenue",

            value:
              `₹ ${revenue}`,

            icon:
              (
                <DollarSign
                  size={34}
                />
              ),

            growth:
              "+24%",
          },
        ]);

        // ================= TOP PRODUCTS =================

        setProducts(
          allProducts.slice(0, 3)
        );

      } catch (error) {

        console.log(error);
      }
    };

  // ================= USE EFFECT =================

  useEffect(() => {

    fetchDashboardData();

  }, []);

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

                Elite Decor Admin

              </p>

              <h1 className="text-5xl font-black mt-3 text-[#111]">

                Dashboard Overview

              </h1>

              <p className="text-black/50 mt-4 text-lg">

                Monitor your luxury
                home decor business
                performance.

              </p>
            </div>

            {/* BUTTON */}

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

              Generate Report

            </button>
          </div>

          {/* ================= STATS ================= */}

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">

            {stats.map(
              (item, index) => (

                <div
                  key={index}
                  className="
                    relative
                    overflow-hidden
                    bg-white/70
                    backdrop-blur-xl
                    rounded-[35px]
                    p-8
                    border
                    border-white/40
                    shadow-[0_20px_40px_rgba(0,0,0,0.08)]
                    hover:-translate-y-2
                    transition-all
                    duration-500
                  "
                >

                  {/* GLOW */}

                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#d8b89a] rounded-full blur-3xl opacity-20"></div>

                  <div className="relative z-10">

                    {/* ICON */}

                    <div
                      className="
                        w-16
                        h-16
                        rounded-2xl
                        bg-[#f4f1ea]
                        flex
                        items-center
                        justify-center
                        text-[#9d6b3f]
                      "
                    >

                      {item.icon}

                    </div>

                    {/* TITLE */}

                    <h3 className="text-black/50 text-lg mt-8">

                      {item.title}

                    </h3>

                    {/* VALUE */}

                    <div className="flex items-center justify-between mt-4">

                      <h2 className="text-5xl font-black text-[#111]">

                        {item.value}

                      </h2>

                      <div
                        className="
                          flex
                          items-center
                          gap-2
                          bg-green-100
                          text-green-600
                          px-4
                          py-2
                          rounded-full
                          text-sm
                          font-semibold
                        "
                      >

                        <TrendingUp
                          size={16}
                        />

                        {item.growth}

                      </div>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>

          {/* ================= ANALYTICS ================= */}

          <div className="grid lg:grid-cols-3 gap-8 mt-10">

            {/* SALES */}

            <div
              className="
                lg:col-span-2
                bg-[#111]
                text-white
                rounded-[40px]
                p-10
                relative
                overflow-hidden
              "
            >

              <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#9d6b3f] rounded-full blur-[120px] opacity-30"></div>

              <div className="relative z-10">

                <p className="uppercase tracking-[6px] text-[#d6b18b] text-sm">

                  Monthly Performance

                </p>

                <h2 className="text-5xl font-black mt-6">

                  Sales Analytics

                </h2>

                <p className="text-white/60 mt-4 max-w-2xl">

                  Your store
                  performance increased
                  significantly this
                  month.

                </p>

                {/* CHART */}

                <div className="mt-16 flex items-end gap-6 h-[250px]">

                  {[40, 80, 60, 120, 90, 150, 180].map(
                    (
                      height,
                      index
                    ) => (

                      <div
                        key={index}
                        className="flex-1 flex flex-col items-center"
                      >

                        <div
                          style={{
                            height: `${height}px`,
                          }}
                          className="
                            w-full
                            bg-gradient-to-t
                            from-[#9d6b3f]
                            to-[#d8b89a]
                            rounded-t-3xl
                          "
                        ></div>

                        <p className="mt-4 text-white/40 text-sm">

                          Week{" "}
                          {index + 1}

                        </p>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>

            {/* ACTIVITY */}

            <div
              className="
                bg-white/70
                backdrop-blur-xl
                rounded-[40px]
                p-8
                shadow-xl
              "
            >

              <div className="flex justify-between items-center">

                <h2 className="text-3xl font-black">

                  Recent Activity

                </h2>
              </div>

              <div className="mt-10 space-y-6">

                {[
                  "New order placed",
                  "User registered",
                  "Product added",
                  "Payment received",
                ].map(
                  (
                    item,
                    index
                  ) => (

                    <div
                      key={index}
                      className="
                        flex
                        items-center
                        justify-between
                        bg-white
                        rounded-2xl
                        p-5
                      "
                    >

                      <div>

                        <h3 className="font-bold text-lg">

                          {item}

                        </h3>

                        <p className="text-black/40 text-sm mt-1">

                          2 mins ago

                        </p>
                      </div>

                      <div
                        className="
                          w-12
                          h-12
                          rounded-xl
                          bg-[#f4f1ea]
                          flex
                          items-center
                          justify-center
                          text-[#9d6b3f]
                        "
                      >

                        <ArrowUpRight
                          size={20}
                        />

                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>

          {/* ================= PRODUCTS ================= */}

          <div
            className="
              mt-10
              bg-white/70
              backdrop-blur-xl
              rounded-[40px]
              p-10
              shadow-xl
            "
          >

            <div className="flex justify-between items-center mb-10">

              <div>

                <p className="uppercase tracking-[6px] text-[#9d6b3f] text-sm">

                  Store Products

                </p>

                <h2 className="text-5xl font-black mt-3">

                  Latest Products

                </h2>
              </div>
            </div>

            {/* TABLE */}

            <div className="overflow-x-auto">

              <table className="w-full">

                <thead>

                  <tr className="text-left border-b border-black/10">

                    <th className="pb-5 text-black/40">

                      Product

                    </th>

                    <th className="pb-5 text-black/40">

                      Category

                    </th>

                    <th className="pb-5 text-black/40">

                      Price

                    </th>

                    <th className="pb-5 text-black/40">

                      Stock

                    </th>
                  </tr>
                </thead>

                <tbody>

                  {products.map(
                    (
                      item,
                      index
                    ) => (

                      <tr
                        key={index}
                        className="border-b border-black/5"
                      >

                        <td className="py-6 font-bold text-lg">

                          {item.name}

                        </td>

                        <td className="py-6 text-black/50">

                          {
                            item.category
                          }

                        </td>

                        <td className="py-6 font-semibold text-[#9d6b3f]">

                          ₹ {item.price}

                        </td>

                        <td className="py-6">

                          {item.stock}

                        </td>
                      </tr>
                    )
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

export default Dashboard;