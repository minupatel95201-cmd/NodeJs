// src/pages/Checkout.jsx

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import api from "../services/api";

import { CreditCard, Truck, ShieldCheck } from "lucide-react";

const Checkout = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);
  const [formData, setFormData] =
  useState({

    fullName: "",

    phone: "",

    city: "",

    pincode: "",

    address: "",
  });

  // ================= FETCH CART =================

  const fetchCart = async () => {
    try {
      const res = await api.get("/cart/all");

      setCart(res.data.cart.items);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  const handleChange = (e) => {

  setFormData({

    ...formData,

    [e.target.name]:
      e.target.value,
  });
};

  // ================= TOTAL =================

  const totalPrice = cart.reduce(
    (acc, item) => acc + item.productId.price * item.quantity,

    0,
  );
  const placeOrder = async () => {

  try {
if (

  !formData.fullName ||

  !formData.phone ||

  !formData.city ||

  !formData.pincode ||

  !formData.address

) {

  return alert(
    "Please Fill All Details"
  );
}
    const orderItems = cart.map(
      (item) => ({

        productId:
          item.productId._id,

        quantity:
          item.quantity,
      })
    );

    await api.post(
      "/order/add",

      {
        items: orderItems,
      }
    );

    navigate(
      "/order-success"
    );

  } catch (error) {

    console.log(error);

    alert(
      error.response?.data?.message
    );
  }
};

  return (
    <div className="min-h-screen bg-[#f4f1ea] py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* HEADER */}

        <div className="mb-16">
          <p className="uppercase tracking-[6px] text-[#9d6b3f] text-sm">
            Secure Checkout
          </p>

          <h1 className="text-7xl font-black mt-6">
            Complete
            <span className="block text-[#9d6b3f]">Order</span>
          </h1>
        </div>

        {/* GRID */}

        <div className="grid lg:grid-cols-3 gap-10">
          {/* LEFT */}

          <div className="lg:col-span-2 space-y-10">
            {/* SHIPPING */}

            <div
              className="
                bg-white
                rounded-[40px]
                p-10
                shadow-xl
              "
            >
              <div className="flex items-center gap-4 mb-8">
                <Truck size={30} className="text-[#9d6b3f]" />

                <h2 className="text-4xl font-black">Shipping Address</h2>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <input

  type="text"

  name="fullName"

  value={formData.fullName}

  onChange={handleChange}

  placeholder="Full Name"

  className="
    bg-[#f4f1ea]
    p-5
    rounded-2xl
    outline-none
  "
/>

                <input

  type="text"

  name="phone"

  value={formData.phone}

  onChange={handleChange}

  placeholder="Phone Number"

  className="
    bg-[#f4f1ea]
    p-5
    rounded-2xl
    outline-none
  "
/>

                <input

  type="text"

  name="city"

  value={formData.city}

  onChange={handleChange}

  placeholder="City"

  className="
    bg-[#f4f1ea]
    p-5
    rounded-2xl
    outline-none
  "
/>
<input

  type="text"

  name="pincode"

  value={formData.pincode}

  onChange={handleChange}

  placeholder="Pincode"

  className="
    bg-[#f4f1ea]
    p-5
    rounded-2xl
    outline-none
  "
/>
<textarea

  name="address"

  value={formData.address}

  onChange={handleChange}

  placeholder="Full Address"

  rows="5"

  className="
    md:col-span-2
    bg-[#f4f1ea]
    p-5
    rounded-2xl
    outline-none
  "
></textarea>
              </div>
            </div>

            {/* PAYMENT */}

            <div
              className="
                bg-white
                rounded-[40px]
                p-10
                shadow-xl
              "
            >
              <div className="flex items-center gap-4 mb-8">
                <CreditCard size={30} className="text-[#9d6b3f]" />

                <h2 className="text-4xl font-black">Payment Method</h2>
              </div>

              <div className="space-y-5">
                <label
                  className="
                    flex
                    items-center
                    justify-between
                    bg-[#f4f1ea]
                    p-6
                    rounded-2xl
                    cursor-pointer
                  "
                >
                  <div>
                    <h3 className="font-bold text-xl">Cash On Delivery</h3>

                    <p className="text-black/50 mt-2">
                      Pay after receiving order
                    </p>
                  </div>

                  <input type="radio" name="payment" defaultChecked />
                </label>

                <label
                  className="
                    flex
                    items-center
                    justify-between
                    bg-[#f4f1ea]
                    p-6
                    rounded-2xl
                    cursor-pointer
                  "
                >
                  <div>
                    <h3 className="font-bold text-xl">Credit / Debit Card</h3>

                    <p className="text-black/50 mt-2">Secure online payment</p>
                  </div>

                  <input type="radio" name="payment" />
                </label>
              </div>
            </div>
          </div>

          {/* RIGHT */}

          <div
            className="
              bg-black
              text-white
              rounded-[40px]
              p-10
              h-fit
              sticky
              top-10
            "
          >
            <div className="flex items-center gap-4">
              <ShieldCheck className="text-[#9d6b3f]" size={30} />

              <h2 className="text-5xl font-black">Summary</h2>
            </div>

            {/* PRODUCTS */}

            <div className="mt-10 space-y-6">
              {cart.map((item) => (
                <div
                  key={item.productId._id}
                  className="
                    flex
                    justify-between
                    items-center
                    border-b
                    border-white/10
                    pb-5
                  "
                >
                  <div>
                    <h3 className="font-bold">{item.productId.name}</h3>

                    <p className="text-white/50 mt-1">Qty :{item.quantity}</p>
                  </div>

                  <h3 className="font-bold text-[#d6b18b]">
                    ₹{item.productId.price * item.quantity}
                  </h3>
                </div>
              ))}
            </div>

            {/* TOTAL */}

            <div className="mt-10 space-y-5">
              <div className="flex justify-between">
                <p className="text-white/50">Shipping</p>

                <h3>Free</h3>
              </div>

              <div className="flex justify-between">
                <p className="text-white/50">Tax</p>

                <h3>₹ 0</h3>
              </div>

              <div className="border-t border-white/10 pt-5 flex justify-between">
                <h2 className="text-2xl">Total</h2>

                <h2 className="text-4xl font-black text-[#d6b18b]">
                  ₹ {totalPrice}
                </h2>
              </div>
            </div>

            {/* BUTTON */}

            <button
              onClick={placeOrder}
              className="
    w-full
    mt-10
    bg-[#9d6b3f]
    hover:bg-white
    hover:text-black
    transition
    py-5
    rounded-2xl
    text-lg
    font-bold
  "
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
