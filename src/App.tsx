import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Offers from "./Pages/Offers/Offers";
import ViewProfile from "./Pages/Profile/ViewProfile";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Offers" element={<Offers />} />
      <Route path="/ViewProfile/:userId" element={<ViewProfile />} />
    </Routes>
  );
}
