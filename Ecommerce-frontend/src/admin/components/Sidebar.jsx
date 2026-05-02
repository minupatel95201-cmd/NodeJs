import React from "react";

import {
  Link,
  useLocation,
} from "react-router-dom";

import {
  LayoutDashboard,
  Users,
  ShoppingBag,
  PlusSquare,
  LogOut,
  ChevronRight,
} from "lucide-react";

const Sidebar = () => {

  const location = useLocation();

  // ================= MENUS =================

  const menus = [
  {
    name: "Dashboard",
    path: "/admin/dashboard",
    icon: <LayoutDashboard size={22} />,
  },

  {
    name: "Users",
    path: "/admin/users",
    icon: <Users size={22} />,
  },

  {
    name: "Products",
    path: "/admin/products",
    icon: <ShoppingBag size={22} />,
  },

  {
    name: "Orders",
    path: "/admin/orders",
    icon: <ShoppingBag size={22} />,
  },

  {
    name: "Add Product",
    path: "/admin/add-product",
    icon: <PlusSquare size={22} />,
  },
];

  return (

    <div
      className="
        hidden
        lg:flex
        flex-col
        justify-between
        w-[320px]
        min-h-screen
        bg-[#111]
        text-white
        p-8
        relative
        overflow-hidden
      "
    >

      {/* ================= BACKGROUND GLOW ================= */}

      <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-[#9d6b3f] rounded-full blur-[120px] opacity-20"></div>

      {/* ================= TOP SECTION ================= */}

      <div className="relative z-10">

        {/* LOGO */}

        <div>

          <p className="uppercase tracking-[6px] text-[#d6b18b] text-xs">
            Luxury Admin
          </p>

          <h1 className="text-5xl font-black mt-4">
            ELITE
            <span className="block text-[#9d6b3f]">
              DECOR
            </span>
          </h1>
        </div>

        {/* PROFILE CARD */}

        <div
          className="
            mt-12
            bg-white/5
            border
            border-white/10
            rounded-[35px]
            p-6
            backdrop-blur-xl
          "
        >

          <div className="flex items-center gap-4">

            <img
              src="https://i.pinimg.com/1200x/ed/62/c4/ed62c4744bb9e06628e30c16546a8cd5.jpg"
              alt="admin"
              className="
                w-16
                h-16
                rounded-2xl
                object-cover
              "
            />

            <div>

              <h3 className="text-xl font-black">
                Admin
              </h3>

              <p className="text-white/40 text-sm">
                Super Administrator
              </p>
            </div>
          </div>
        </div>

        {/* ================= MENU ================= */}

        <div className="mt-12">

          <p className="uppercase tracking-[6px] text-white/30 text-xs mb-6">
            Navigation
          </p>

          <div className="flex flex-col gap-4">

            {menus.map((item) => (

              <Link
                key={item.path}
                to={item.path}
                className={`
                  group
                  flex
                  items-center
                  justify-between
                  px-6
                  py-5
                  rounded-[25px]
                  transition-all
                  duration-300

                  ${
                    location.pathname === item.path
                      ? `
                        bg-[#9d6b3f]
                        text-white
                        shadow-xl
                      `
                      : `
                        bg-white/5
                        border border-white/5
                        hover:bg-white/10
                      `
                  }
                `}
              >

                <div className="flex items-center gap-4">

                  <div
                    className={`
                      w-12
                      h-12
                      rounded-2xl
                      flex
                      items-center
                      justify-center

                      ${
                        location.pathname === item.path
                          ? "bg-white/20"
                          : "bg-white/5"
                      }
                    `}
                  >
                    {item.icon}
                  </div>

                  <span className="text-lg font-semibold">
                    {item.name}
                  </span>
                </div>

                <ChevronRight
                  size={20}
                  className="
                    opacity-50
                    group-hover:translate-x-1
                    transition
                  "
                />
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* ================= BOTTOM SECTION ================= */}

      <div className="relative z-10">

        {/* PREMIUM CARD */}

        <div
          className="
            bg-gradient-to-br
            from-[#9d6b3f]
            to-[#c89b6d]
            rounded-[35px]
            p-8
            text-black
          "
        >

          <p className="uppercase tracking-[4px] text-sm font-semibold">
            Premium Admin
          </p>

          <h3 className="text-3xl font-black mt-4">
            Manage Your Luxury Store
          </h3>

          <button
            className="
              mt-8
              bg-black
              text-white
              px-6
              py-4
              rounded-2xl
              font-semibold
              hover:bg-white
              hover:text-black
              transition
            "
          >
            Upgrade Panel
          </button>
        </div>

        {/* LOGOUT */}

        <button
          className="
            mt-6
            w-full
            bg-white/5
            border
            border-white/10
            hover:bg-red-500
            transition
            px-6
            py-5
            rounded-[25px]
            flex
            items-center
            justify-center
            gap-3
            text-lg
            font-semibold
          "
        >

          <LogOut size={22} />

          Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;