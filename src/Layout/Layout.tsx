import React, { useState } from "react";
import { Hidden } from "@mui/material";
import Header from "./Header";
import MobileNavbar from "./SwipeableNavbar";
import Footer from "./Footer";
import { useMetaMask } from "metamask-react";
import { useLocation } from "react-router-dom";
// import { profileService } from "../Utils/ApiService";

export default function Layout(props: { children?: React.ReactNode }) {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const { status, connect, account } = useMetaMask();
  const location = useLocation();

  return (
    <div>
      {location.pathname !== "/" && (
        <div style={{ flexGrow: 1 }}>
          <Header authenticationStatus={status} connectWallet={connect} user={account} />
        </div>
      )}
      <Hidden mdUp>
        <MobileNavbar open={navbarOpen} setOpen={setNavbarOpen} />
      </Hidden>
      <br />
      <div style={{ minHeight: "calc(100vh - 250px)" }}>{props.children}</div>
      <Footer />
    </div>
  );
}
