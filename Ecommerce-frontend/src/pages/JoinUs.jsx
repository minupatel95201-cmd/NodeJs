import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import {
  User,
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
} from "lucide-react";

const JoinUs = () => {

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  // ================= REGISTER API =================

  const submitForm = async () => {

    const userdata = {
      username: username,
      email: email,
      password: password,
    };

    try {

      let response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/user/register`,
        userdata
      );

      if (response.status === 200) {

        const data = response.data;

        localStorage.setItem("token", data.token);

        navigate("/login");
      }

    } catch (err) {

      let Err = err.response?.data?.error;

      setError(Err);
    }

    setUsername("");
    setEmail("");
    setPassword("");
  };

  return (

    <div className="min-h-screen bg-[#f4f1ea] flex items-center justify-center px-6 py-10 overflow-hidden">

      {/* ================= BACKGROUND BLUR ================= */}

      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#d7b896] rounded-full blur-[120px] opacity-40"></div>

      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#c9b39d] rounded-full blur-[120px] opacity-30"></div>

      {/* ================= MAIN CONTAINER ================= */}

      <div className="relative z-10 w-full max-w-7xl grid lg:grid-cols-2 bg-white/60 backdrop-blur-2xl rounded-[50px] overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.15)] border border-white/40">

        {/* ================= LEFT SIDE ================= */}

        <div className="hidden lg:block relative">

          <img
            src="https://images.unsplash.com/photo-1484101403633-562f891dc89a?q=80&w=1400&auto=format&fit=crop"
            alt="Luxury Interior"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/45"></div>

          <div className="absolute bottom-16 left-16 text-white max-w-lg">

            <p className="uppercase tracking-[6px] text-[#e6c7a5] text-sm">
              Elite Luxury Living
            </p>

            <h2 className="text-6xl font-black leading-[1] mt-6">
              Create
              <span className="block">
                Your Space
              </span>
            </h2>

            <p className="mt-6 text-white/80 text-lg leading-relaxed">
              Join ELITEDECOR and discover premium furniture,
              modern interiors and exclusive luxury collections.
            </p>
          </div>
        </div>

        {/* ================= RIGHT SIDE ================= */}

        <div className="flex items-center justify-center p-8 lg:p-20">

          <div className="w-full max-w-md">

            <p className="uppercase tracking-[6px] text-[#9d6b3f] text-sm">
              Elite Decor
            </p>

            <h2 className="text-5xl font-black mt-4">
              Create Account
            </h2>

            <p className="mt-4 text-black/50">
              Start your luxury interior shopping experience.
            </p>

            {/* ================= ERROR ================= */}

            {error && (

              <div className="mt-6">

                {error.map((val, index) => {

                  return (
                    <p
                      key={index}
                      className="
                        bg-red-100
                        border
                        border-red-200
                        text-red-600
                        rounded-2xl
                        px-5
                        py-3
                        mb-3
                        text-sm
                      "
                    >
                      {val.msg}
                    </p>
                  );
                })}
              </div>
            )}

            {/* ================= FORM ================= */}

            <form
              className="mt-10 space-y-6"
              onSubmit={(e) => {
                e.preventDefault();
                submitForm();
              }}
            >

              {/* USERNAME */}

              <div>

                <label className="text-sm font-semibold text-black/60">
                  Username
                </label>

                <div className="mt-3 flex items-center bg-white rounded-2xl border border-black/10 overflow-hidden px-5">

                  <User size={20} className="text-[#9d6b3f]" />

                  <input
                    type="text"
                    name="username"
                    value={username}
                    onChange={(e) => {
                      setUsername(e.target.value);
                    }}
                    placeholder="Enter your username"
                    className="
                      w-full
                      px-4
                      py-5
                      outline-none
                      bg-transparent
                    "
                  />
                </div>
              </div>

              {/* EMAIL */}

              <div>

                <label className="text-sm font-semibold text-black/60">
                  Email Address
                </label>

                <div className="mt-3 flex items-center bg-white rounded-2xl border border-black/10 overflow-hidden px-5">

                  <Mail size={20} className="text-[#9d6b3f]" />

                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    placeholder="Enter your email"
                    className="
                      w-full
                      px-4
                      py-5
                      outline-none
                      bg-transparent
                    "
                  />
                </div>
              </div>

              {/* PASSWORD */}

              <div>

                <label className="text-sm font-semibold text-black/60">
                  Password
                </label>

                <div className="mt-3 flex items-center bg-white rounded-2xl border border-black/10 overflow-hidden px-5">

                  <Lock size={20} className="text-[#9d6b3f]" />

                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    placeholder="Create password"
                    className="
                      w-full
                      px-4
                      py-5
                      outline-none
                      bg-transparent
                    "
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowPassword(!showPassword)
                    }
                  >
                    {showPassword ? (
                      <EyeOff size={20} />
                    ) : (
                      <Eye size={20} />
                    )}
                  </button>
                </div>
              </div>

              {/* TERMS */}

              <div className="flex items-start gap-3 text-sm text-black/60">

                <input
                  type="checkbox"
                  className="mt-1 accent-[#9d6b3f]"
                />

                <p>
                  I agree to the{" "}

                  <span className="text-[#9d6b3f] font-semibold cursor-pointer">
                    Terms & Conditions
                  </span>
                </p>
              </div>

              {/* BUTTON */}

              <button
                type="submit"
                className="
                  w-full
                  bg-[#111]
                  hover:bg-[#9d6b3f]
                  transition
                  text-white
                  py-5
                  rounded-2xl
                  text-lg
                  font-semibold
                  flex
                  items-center
                  justify-center
                  gap-3
                "
              >
                Create Account
                <ArrowRight size={20} />
              </button>
            </form>

            {/* ================= DIVIDER ================= */}

            <div className="flex items-center gap-4 my-10">

              <div className="flex-1 h-[1px] bg-black/10"></div>

              <p className="text-black/40 text-sm">
                OR SIGN UP WITH
              </p>

              <div className="flex-1 h-[1px] bg-black/10"></div>
            </div>

            {/* ================= GOOGLE BUTTON ================= */}

            <button
              className="
                w-full
                border
                border-black/10
                bg-white
                hover:bg-black
                hover:text-white
                transition
                py-5
                rounded-2xl
                font-semibold
              "
            >
              Continue with Google
            </button>

            {/* ================= LOGIN ================= */}

            <p className="text-center text-black/50 mt-10">

              Already have an account?{" "}

              <Link
                to="/login"
                className="text-[#9d6b3f] font-semibold hover:underline"
              >
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinUs;