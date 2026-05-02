import React from "react";

import {
  Search,
  Bell,
  LogOut,
  Settings,
  ChevronDown,
} from "lucide-react";

const Navbar = () => {

  const user = JSON.parse(localStorage.getItem("user"));

  // ================= LOGOUT =================

  const handleLogout = () => {

    localStorage.removeItem("token");

    localStorage.removeItem("user");

    window.location.href = "/login";
  };

  return (

    <div
      className="
        sticky
        top-0
        z-50
        bg-white/70
        backdrop-blur-2xl
        border-b
        border-black/5
      "
    >

      <div className="px-6 lg:px-10 h-24 flex items-center justify-between">

        {/* ================= LEFT SIDE ================= */}

        <div>

          <p className="uppercase tracking-[6px] text-[#9d6b3f] text-xs">
            Elite Decor Admin
          </p>

          <h1 className="text-4xl font-black text-[#111] mt-2">
            Dashboard
          </h1>
        </div>

        {/* ================= RIGHT SIDE ================= */}

        <div className="flex items-center gap-5">

          {/* SEARCH BAR */}

          <div
            className="
              hidden
              lg:flex
              items-center
              bg-white
              rounded-2xl
              px-5
              py-4
              w-[320px]
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
              className="
                w-full
                px-4
                outline-none
                bg-transparent
              "
            />
          </div>

          {/* NOTIFICATION */}

          <button
            className="
              relative
              w-14
              h-14
              rounded-2xl
              bg-white
              shadow-lg
              border
              border-black/5
              flex
              items-center
              justify-center
              hover:bg-[#9d6b3f]
              hover:text-white
              transition
            "
          >

            <Bell size={22} />

            {/* notification dot */}

            <span
              className="
                absolute
                top-3
                right-3
                w-3
                h-3
                bg-red-500
                rounded-full
              "
            ></span>
          </button>

          {/* SETTINGS */}

          <button
            className="
              hidden
              md:flex
              w-14
              h-14
              rounded-2xl
              bg-white
              shadow-lg
              border
              border-black/5
              items-center
              justify-center
              hover:bg-[#9d6b3f]
              hover:text-white
              transition
            "
          >
            <Settings size={22} />
          </button>

          {/* USER PROFILE */}

          <div
            className="
              flex
              items-center
              gap-4
              bg-white
              px-5
              py-3
              rounded-2xl
              shadow-lg
              border
              border-black/5
            "
          >

            {/* AVATAR */}

            <img
              src="https://i.pinimg.com/1200x/ed/62/c4/ed62c4744bb9e06628e30c16546a8cd5.jpg"
              alt="admin"
              className="
                w-14
                h-14
                rounded-2xl
                object-cover
              "
            />

            {/* USER INFO */}

            <div className="hidden md:block">

              <h3 className="font-black text-lg">
                {user?.username || "Admin"}
              </h3>

              <p className="text-black/40 text-sm">
                Administrator
              </p>
            </div>

            <ChevronDown
              size={18}
              className="text-black/40"
            />
          </div>

          {/* LOGOUT BUTTON */}

          <button
            onClick={handleLogout}
            className="
              bg-[#111]
              hover:bg-red-500
              transition
              text-white
              px-6
              py-4
              rounded-2xl
              flex
              items-center
              gap-3
              shadow-xl
            "
          >
            <LogOut size={20} />

            <span className="hidden md:block">
              Logout
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;