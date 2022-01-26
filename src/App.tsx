import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Offers from "./Pages/Offers/Offers";
import ViewProfile from "./Pages/Profile/ViewProfile";
import OfferDetails from "./Pages/Offer/OfferDetails";
import CreateOffer from "./Pages/CreateOffer.tsx/CreateOffer";
import Wallet from "./Pages/Wallet/Wallet";
import Community from "./Pages/Community/Community";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Projects" element={<Offers />} />
      <Route path="/ViewProfile/:userId" element={<ViewProfile />} />
      <Route path="/OfferDetails/:offerId" element={<OfferDetails />} />
      <Route path="/NewProject" element={<CreateOffer />} />
      <Route path="/Wallet" element={<Wallet />} />
      <Route path="/Community" element={<Community />} />
    </Routes>
  );
}
