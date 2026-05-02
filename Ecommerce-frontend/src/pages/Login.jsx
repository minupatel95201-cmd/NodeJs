import axios from "axios";
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { DataContext } from "../context/UserContext";

import {
  Mail,
  Lock,
  ArrowRight,
  Eye,
  EyeOff,
} from "lucide-react";

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const { setCenterData } = useContext(DataContext);

  const navigate = useNavigate();

  // ================= LOGIN API =================

  const submitForm = async () => {

    const userdata = {
      email: email,
      password: password,
    };

    try {

      let response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/user/login`,
        userdata
      );

      if (response.status === 200) {

        const data = response.data;

        // save token

        localStorage.setItem(
          "token",
          data.token
        );

        // save user

        localStorage.setItem(
          "user",
          JSON.stringify(data.checkUser)
        );

        // context save

        setCenterData(data.checkUser);

        // role based redirect

        if (data.checkUser.role === "admin") {

          navigate("/admin/dashboard");

        } else {

          navigate("/profile");
        }
      }

      setEmail("");
      setPassword("");

    } catch (e) {

      let error = e.response?.data?.error;

      setError(error);
    }
  };

  return (

    <div className="min-h-screen bg-[#f4f1ea] flex items-center justify-center px-6 py-10 overflow-hidden">

      {/* BACKGROUND BLUR */}

      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#d7b896] rounded-full blur-[120px] opacity-40"></div>

      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#c8b39c] rounded-full blur-[120px] opacity-30"></div>

      {/* MAIN CONTAINER */}

      <div className="relative z-10 w-full max-w-7xl grid lg:grid-cols-2 bg-white/60 backdrop-blur-2xl rounded-[50px] overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.15)] border border-white/40">

        {/* ================= LEFT SIDE ================= */}

        <div className="hidden lg:block relative">

          <img
            src="https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=1400&auto=format&fit=crop"
            alt="Luxury Interior"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/40"></div>

          <div className="absolute bottom-16 left-16 text-white max-w-lg">

            <p className="uppercase tracking-[6px] text-[#e6c7a5] text-sm">
              Luxury Home Decor
            </p>

            <h2 className="text-6xl font-black leading-[1] mt-6">
              Welcome
              <span className="block">
                Back
              </span>
            </h2>

            <p className="mt-6 text-white/80 text-lg leading-relaxed">
              Access your premium decor collections,
              wishlist and personalized shopping experience.
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
              Sign In
            </h2>

            <p className="mt-4 text-black/50">
              Login to continue your luxury shopping experience.
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
                        border border-red-200
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
                    onChange={(e) => setEmail(e.target.value)}
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
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
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

              {/* OPTIONS */}

              <div className="flex items-center justify-between text-sm">

                <label className="flex items-center gap-3 text-black/60">

                  <input
                    type="checkbox"
                    className="accent-[#9d6b3f]"
                  />

                  Remember Me
                </label>

                <button
                  type="button"
                  className="text-[#9d6b3f] hover:underline"
                >
                  Forgot Password?
                </button>
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
                Login
                <ArrowRight size={20} />
              </button>
            </form>

            {/* ================= DIVIDER ================= */}

            <div className="flex items-center gap-4 my-10">

              <div className="flex-1 h-[1px] bg-black/10"></div>

              <p className="text-black/40 text-sm">
                OR CONTINUE
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

            {/* ================= REGISTER ================= */}

            <p className="text-center text-black/50 mt-10">

              Don’t have an account?{" "}

              <Link
                to="/JoinUs"
                className="text-[#9d6b3f] font-semibold hover:underline"
              >
                Create Account
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;