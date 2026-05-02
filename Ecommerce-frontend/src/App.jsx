import React from "react";
import { Routes, Route } from "react-router-dom";

// User Pages
import Home from "./pages/home";
import Login from "./pages/Login";
import JoinUs from "./pages/JoinUs";
import Profile from "./pages/Profile";
import EditProfile from "./pages/EditProfile";
import Wishlist from "./pages/Wishlist";
import Cart from "./pages/Cart";
import AllProducts from "./pages/AllProducts";
import Offers from "./pages/Offers";
import Collections from "./pages/Collections";
import Checkout from "./pages/Checkout";
import MyOrders from "./pages/MyOrders";
import OrderSuccess from "./pages/OrderSuccess";
import Deals from "./pages/Deals";

// Admin Pages
import Dashboard from "./admin/pages/Dashboard";
import Users from "./admin/pages/Users";
import Products from "./admin/pages/Products";
import AddProduct from "./admin/pages/AddProduct";
import Orders from "./admin/pages/Orders";

// Admin Protected Route
import AdminRoute from "./admin/routes/AdminRoute";

const App = () => {
  return (
    <>
      <Routes>
        {/* User Routes */}

        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/joinus" element={<JoinUs />} />

        <Route path="/profile" element={<Profile />} />

        <Route path="/EditProfile" element={<EditProfile />} />
        <Route path="/wishlist" element={<Wishlist />} />

        <Route path="/cart" element={<Cart />} />

        <Route path="/products" element={<AllProducts />} />
        <Route path="/products/:category" element={<AllProducts />} />
        <Route path="/offers" element={<Offers />} />

        <Route path="/collections" element={<Collections />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/my-orders" element={<MyOrders />} />
        <Route path="/order-success" element={<OrderSuccess />} />
        <Route path="/deals" element={<Deals />} />

        {/* Admin Routes */}

        <Route
          path="/admin/dashboard"
          element={
            <AdminRoute>
              <Dashboard />
            </AdminRoute>
          }
        />

        <Route
          path="/admin/users"
          element={
            <AdminRoute>
              <Users />
            </AdminRoute>
          }
        />

        <Route
          path="/admin/products"
          element={
            <AdminRoute>
              <Products />
            </AdminRoute>
          }
        />

        <Route
          path="/admin/add-product"
          element={
            <AdminRoute>
              <AddProduct />
            </AdminRoute>
          }
        />
        <Route
  path="/admin/orders"
  element={<Orders />}
/>
      </Routes>
    </>
  );
};

export default App;
