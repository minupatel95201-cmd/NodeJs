import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/Login";
import JoinUs from "./pages/JoinUs";
import Profile from "./pages/Profile";


const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/ >}></Route>
        <Route path="/login" element={<Login/ >}></Route>
        <Route path="/joinus" element={<JoinUs/ >}></Route>
        <Route path="/profile" element={<Profile/ >}></Route>
      </Routes>
      
    </>
  );
};

export default App;
