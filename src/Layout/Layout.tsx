import React, { useState } from "react";
import { Hidden } from "@mui/material";
import Header from "./Header";
import MobileNavbar from "./SwipeableNavbar";
import Footer from "./Footer";
import { useAuth0 } from "@auth0/auth0-react";
// import { profileService } from "../Utils/ApiService";

export default function Layout(props: { children?: React.ReactNode }) {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [userRoles, setUserRoles] = useState<string[]>([]);
  const { loginWithRedirect, user, isAuthenticated, logout, getIdTokenClaims /*, getAccessTokenSilently */ } = useAuth0();

  if (isAuthenticated && userRoles.length === 0) {
    getIdTokenClaims().then((claims) => setUserRoles(claims["https://zisk-go.com/roles"]));
  }

  return (
    <div>
      <div style={{ flexGrow: 1 }}>
        <Header isAuthenticated={isAuthenticated} loginWithRedirect={loginWithRedirect} user={user} logout={logout} />
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
