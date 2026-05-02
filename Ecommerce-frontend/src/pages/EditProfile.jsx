import axios from "axios";
import { DataContext } from "../context/UserContext";

import React, {
  useContext,
  useState,
  useEffect,
} from "react";

import {
  useNavigate,
  Link,
} from "react-router-dom";

import {
  User,
  Mail,
  Save,
  ArrowLeft,
} from "lucide-react";

const EditProfile = () => {

  const [formData, setFormData] = useState({
    email: "",
    username: "",
  });

  const [error, setError] = useState("");

  const { centerdata } = useContext(DataContext);

  const navigate = useNavigate();

  // ================= LOAD USER =================

  useEffect(() => {

    if (centerdata) {

      setFormData({
        email: centerdata.email,
        username: centerdata.username,
      });
    }

  }, [centerdata]);

  // ================= HANDLE CHANGE =================

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // ================= UPDATE PROFILE =================

  const submitForm = async () => {

    try {

      await axios.put(
        `${import.meta.env.VITE_BASE_URL}/user/update`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      navigate("/profile");

    } catch (error) {

      console.log(error.response);

      setError(error.response?.data?.error);
    }
  };

  return (

    <div className="min-h-screen bg-[#f4f1ea] overflow-hidden flex items-center justify-center px-6 py-10">

      {/* ================= BACKGROUND ================= */}

      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#d8b89a] rounded-full blur-[120px] opacity-40"></div>

      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#cdb39a] rounded-full blur-[120px] opacity-30"></div>

      {/* ================= MAIN CONTAINER ================= */}

      <div
        className="
          relative
          z-10
          w-full
          max-w-6xl
          grid
          lg:grid-cols-2
          bg-white/60
          backdrop-blur-2xl
          rounded-[50px]
          overflow-hidden
          border
          border-white/40
          shadow-[0_30px_80px_rgba(0,0,0,0.12)]
        "
      >

        {/* ================= LEFT SIDE ================= */}

        <div className="hidden lg:block relative">

          <img
            src="https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=1400&auto=format&fit=crop"
            alt="Luxury Interior"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/45"></div>

          <div className="absolute bottom-16 left-16 text-white max-w-lg">

            <p className="uppercase tracking-[6px] text-[#e6c7a5] text-sm">
              Elite Decor Profile
            </p>

            <h2 className="text-6xl font-black leading-[1] mt-6">
              Update
              <span className="block">
                Your Profile
              </span>
            </h2>

            <p className="mt-6 text-white/80 text-lg leading-relaxed">
              Customize your luxury account information
              and manage your premium shopping profile.
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
              Edit Profile
            </h2>

            <p className="mt-4 text-black/50">
              Update your account details and preferences.
            </p>

            {/* ================= ERROR ================= */}

            {error && (

              <div className="mt-6">

                {Array.isArray(error) ? (

                  error.map((val, index) => {

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
                  })

                ) : (

                  <p
                    className="
                      bg-red-100
                      border
                      border-red-200
                      text-red-600
                      rounded-2xl
                      px-5
                      py-3
                    "
                  >
                    Something went wrong
                  </p>
                )}
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

                <div
                  className="
                    mt-3
                    flex
                    items-center
                    bg-white
                    rounded-2xl
                    border
                    border-black/10
                    overflow-hidden
                    px-5
                  "
                >

                  <User
                    size={20}
                    className="text-[#9d6b3f]"
                  />

                  <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    placeholder="Enter username"
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

                <div
                  className="
                    mt-3
                    flex
                    items-center
                    bg-white
                    rounded-2xl
                    border
                    border-black/10
                    overflow-hidden
                    px-5
                  "
                >

                  <Mail
                    size={20}
                    className="text-[#9d6b3f]"
                  />

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter email"
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

              {/* BUTTONS */}

              <div className="flex flex-col sm:flex-row gap-4 pt-4">

                {/* SAVE BUTTON */}

                <button
                  type="submit"
                  className="
                    flex-1
                    bg-[#111]
                    hover:bg-[#9d6b3f]
                    transition
                    text-white
                    py-5
                    rounded-2xl
                    font-semibold
                    flex
                    items-center
                    justify-center
                    gap-3
                  "
                >
                  <Save size={20} />

                  Save Changes
                </button>

                {/* BACK BUTTON */}

                <Link
                  to="/profile"
                  className="flex-1"
                >

                  <button
                    type="button"
                    className="
                      w-full
                      border
                      border-black/10
                      hover:bg-black
                      hover:text-white
                      transition
                      py-5
                      rounded-2xl
                      font-semibold
                      flex
                      items-center
                      justify-center
                      gap-3
                    "
                  >
                    <ArrowLeft size={20} />

                    Back
                  </button>
                </Link>
              </div>
            </form>

            {/* ================= FOOTER ================= */}

            <div className="mt-10 pt-8 border-t border-black/10">

              <p className="text-center text-black/40">

                Need help managing your profile?{" "}

                <span className="text-[#9d6b3f] font-semibold cursor-pointer">
                  Contact Support
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;