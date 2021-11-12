import React, { useState } from "react";
import { Hidden } from "@mui/material";
import Header from "./Header";
import MobileNavbar from "./SwipeableNavbar";
import Footer from "./Footer";
// import { profileService } from "../Utils/ApiService";

export default function Layout(props: { children?: React.ReactNode }) {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <div>
      <div style={{ flexGrow: 1 }}>
        <Header />
      </div>
      <Hidden mdUp>
        <MobileNavbar open={navbarOpen} setOpen={setNavbarOpen} />
      </Hidden>
      <br />
      {props.children}
      <Footer />
    </div>
  );
}
