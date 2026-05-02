import React, { useEffect, useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Calendar,
  Heart,
  ShoppingBag,
  LogOut,
  Pencil,
  Star,
} from "lucide-react";

import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Profile = () => {

  const [data, setData] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  // ================= FETCH PROFILE =================

  useEffect(() => {

    const FetchData = async () => {

      try {

        let response = await axios.get(
          `${import.meta.env.VITE_BASE_URL}/user/profile`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );

        setData(response?.data?.user);

      } catch (error) {

        console.log(error.response);

        setError(error.response?.data?.message);
      }
    };

    FetchData();

  }, []);

  // ================= LOGOUT =================

  const logout = async () => {

    try {

      await axios.get(
        `${import.meta.env.VITE_BASE_URL}/user/logout`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      localStorage.removeItem("token");

      navigate("/login");

    } catch (error) {

      console.log(error.response);
    }
  };

  return (

    <>
      {/* ================= ERROR ================= */}

      {error && (

        <div className="w-full h-screen flex items-center justify-center bg-[#f4f1ea]">

          <h1 className="text-5xl font-black text-red-500">
            Access Denied
          </h1>
        </div>
      )}

      {/* ================= PROFILE ================= */}

      {data.username && (

        <div className="min-h-screen bg-[#f4f1ea] overflow-hidden">

          {/* BACKGROUND */}

          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#d8b89a] rounded-full blur-[120px] opacity-40"></div>

          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#cdb39a] rounded-full blur-[120px] opacity-30"></div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 py-10">

            {/* ================= TOP SECTION ================= */}

            <div
              className="
                bg-white/60
                backdrop-blur-2xl
                rounded-[50px]
                overflow-hidden
                border border-white/40
                shadow-[0_30px_80px_rgba(0,0,0,0.1)]
              "
            >

              {/* COVER */}

              <div className="relative h-[350px]">

                <img
                  src="https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=1400&auto=format&fit=crop"
                  alt=""
                  className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-black/40"></div>

                <div className="absolute bottom-10 left-10 text-white">

                  <p className="uppercase tracking-[6px] text-[#e6c7a5] text-sm">
                    Elite Decor Member
                  </p>

                  <h1 className="text-6xl font-black mt-4">
                    Welcome,
                    <span className="block">
                      {data?.username}
                    </span>
                  </h1>
                </div>
              </div>

              {/* ================= PROFILE CONTENT ================= */}

              <div className="px-6 lg:px-12 pb-12 relative">

                {/* PROFILE IMAGE */}

                <div className="flex justify-center lg:justify-start -mt-24">

                  <img
                    src="https://i.pinimg.com/1200x/ed/62/c4/ed62c4744bb9e06628e30c16546a8cd5.jpg"
                    alt="profile"
                    className="
                      w-44
                      h-44
                      rounded-full
                      border-[6px]
                      border-white
                      shadow-2xl
                      object-cover
                    "
                  />
                </div>

                {/* ================= USER INFO ================= */}

                <div className="mt-8 flex flex-col lg:flex-row lg:items-center justify-between gap-8">

                  <div>

                    <h2 className="text-5xl font-black text-[#111]">
                      {data?.username}
                    </h2>

                    <p className="text-[#9d6b3f] text-xl mt-3 font-semibold">
                      Premium Customer
                    </p>

                    <p className="text-black/50 mt-4 max-w-2xl">
                      Explore your luxury home decor profile,
                      wishlist, orders and premium collections.
                    </p>
                  </div>

                  {/* ACTION BUTTONS */}

                  <div className="flex flex-wrap gap-4">

                    <Link to="/EditProfile">

                      <button
                        className="
                          bg-[#111]
                          hover:bg-[#9d6b3f]
                          transition
                          text-white
                          px-8
                          py-4
                          rounded-2xl
                          flex
                          items-center
                          gap-3
                        "
                      >
                        <Pencil size={20} />
                        Edit Profile
                      </button>
                    </Link>

                    <button
                      onClick={logout}
                      className="
                        border
                        border-red-200
                        text-red-500
                        hover:bg-red-500
                        hover:text-white
                        transition
                        px-8
                        py-4
                        rounded-2xl
                        flex
                        items-center
                        gap-3
                      "
                    >
                      <LogOut size={20} />
                      Logout
                    </button>
                  </div>
                </div>

                {/* ================= STATS ================= */}

                <div className="grid md:grid-cols-3 gap-8 mt-16">

                  <div
                    className="
                      bg-white
                      rounded-[35px]
                      p-8
                      shadow-xl
                    "
                  >
                    <ShoppingBag
                      className="text-[#9d6b3f]"
                      size={40}
                    />

                    <h3 className="text-5xl font-black mt-6">
                      24
                    </h3>

                    <p className="text-black/50 mt-2">
                      Total Orders
                    </p>
                  </div>

                  <div
                    className="
                      bg-white
                      rounded-[35px]
                      p-8
                      shadow-xl
                    "
                  >
                    <Heart
                      className="text-[#9d6b3f]"
                      size={40}
                    />

                    <h3 className="text-5xl font-black mt-6">
                      12
                    </h3>

                    <p className="text-black/50 mt-2">
                      Wishlist Items
                    </p>
                  </div>

                  <div
                    className="
                      bg-white
                      rounded-[35px]
                      p-8
                      shadow-xl
                    "
                  >
                    <Star
                      className="text-[#9d6b3f]"
                      size={40}
                    />

                    <h3 className="text-5xl font-black mt-6">
                      Gold
                    </h3>

                    <p className="text-black/50 mt-2">
                      Membership
                    </p>
                  </div>
                </div>

                {/* ================= INFO CARDS ================= */}

                <div className="grid lg:grid-cols-2 gap-8 mt-16">

                  {/* LEFT */}

                  <div
                    className="
                      bg-white
                      rounded-[40px]
                      p-10
                      shadow-xl
                    "
                  >

                    <h3 className="text-3xl font-black mb-10">
                      Personal Information
                    </h3>

                    <div className="space-y-8">

                      <div className="flex items-center gap-5">

                        <div className="w-16 h-16 rounded-2xl bg-[#f4f1ea] flex items-center justify-center">
                          <Mail className="text-[#9d6b3f]" />
                        </div>

                        <div>
                          <p className="text-black/40 text-sm">
                            Email Address
                          </p>

                          <h4 className="text-xl font-semibold">
                            {data?.email}
                          </h4>
                        </div>
                      </div>

                      <div className="flex items-center gap-5">

                        <div className="w-16 h-16 rounded-2xl bg-[#f4f1ea] flex items-center justify-center">
                          <Phone className="text-[#9d6b3f]" />
                        </div>

                        <div>
                          <p className="text-black/40 text-sm">
                            Phone Number
                          </p>

                          <h4 className="text-xl font-semibold">
                            +91 9876543210
                          </h4>
                        </div>
                      </div>

                      <div className="flex items-center gap-5">

                        <div className="w-16 h-16 rounded-2xl bg-[#f4f1ea] flex items-center justify-center">
                          <MapPin className="text-[#9d6b3f]" />
                        </div>

                        <div>
                          <p className="text-black/40 text-sm">
                            Location
                          </p>

                          <h4 className="text-xl font-semibold">
                            Ahmedabad, India
                          </h4>
                        </div>
                      </div>

                      <div className="flex items-center gap-5">

                        <div className="w-16 h-16 rounded-2xl bg-[#f4f1ea] flex items-center justify-center">
                          <Calendar className="text-[#9d6b3f]" />
                        </div>

                        <div>
                          <p className="text-black/40 text-sm">
                            Joined Date
                          </p>

                          <h4 className="text-xl font-semibold">
                            January 2026
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* RIGHT */}

                  <div
                    className="
                      bg-[#111]
                      text-white
                      rounded-[40px]
                      p-10
                      shadow-xl
                    "
                  >

                    <p className="uppercase tracking-[6px] text-[#cda47b] text-sm">
                      Premium Access
                    </p>

                    <h3 className="text-5xl font-black mt-6">
                      Luxury Member
                    </h3>

                    <p className="text-white/60 mt-6 leading-relaxed">
                      Enjoy exclusive deals, priority shipping,
                      premium collections and personalized
                      recommendations.
                    </p>

                    <button
                      className="
                        mt-10
                        bg-[#9d6b3f]
                        hover:bg-white
                        hover:text-black
                        transition
                        px-8
                        py-4
                        rounded-2xl
                        font-semibold
                      "
                    >
                      Explore Benefits
                    </button>

                    {/* mini cards */}

                    <div className="grid grid-cols-2 gap-5 mt-12">

                      <div className="bg-white/10 rounded-3xl p-6">

                        <h4 className="text-4xl font-black">
                          40%
                        </h4>

                        <p className="text-white/50 mt-2">
                          Premium Discounts
                        </p>
                      </div>

                      <div className="bg-white/10 rounded-3xl p-6">

                        <h4 className="text-4xl font-black">
                          VIP
                        </h4>

                        <p className="text-white/50 mt-2">
                          Priority Access
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Profile;