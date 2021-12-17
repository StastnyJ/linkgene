import styled from "@emotion/styled";
import { AppBar, Hidden, Typography, useTheme, Theme } from "@mui/material";
// import { Menu as MenuIcon } from "@mui/icons-material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const LinkGeneBar = styled(AppBar)({
  height: 68,
  paddingLeft: 22,
  paddingTop: 14,
});

// const Logo = styled.img({
//   width: "72px",
//   height: "72px",
//   top: "8px",
//   left: "22px",
//   position: "absolute",
// });

const MenuBar = styled.div(({ theme }: { theme: Theme }) => ({
  height: "42px",
  width: "100%",
  zIndex: 999,
  // backgroundColor: theme.palette.secondary.main,
  // color: theme.palette.secondary.contrastText,
  backgroundColor: "#e9e9e9",
  color: "#5d92c7",
  position: "absolute",
}));

const MenuItem = styled(Typography)({
  fontSize: "1.1rem",
  marginLeft: "16px",
  marginTop: "6px",
  float: "left",
  cursor: "pointer",
  height: "32px",
  "&:hover": {
    color: "#1368bd",
  },
});

const LoginButton = styled.div({
  top: "14px",
  right: "22px",
  height: 60,
  position: "absolute",
  cursor: "pointer",
  color: "white",
  textAlign: "center",
});

const CustomAvatar = styled.img({
  height: 32,
  width: 32,
  borderRadius: "50%",
});

const MenuRapierer = styled.div({
  width: "100%",
  height: 42,
});

interface IProps {
  loginWithRedirect: () => void;
  logout: (info: { returnTo: string }) => void;
  user?: {
    picture?: string;
    name?: string;
    email?: string;
  };
  isAuthenticated: boolean;
}

export default function Header({ isAuthenticated, loginWithRedirect, user }: IProps) {
  const nav = useNavigate();
  const location = useLocation();
  const theme = useTheme();

  return (
    <>
      <LinkGeneBar position="relative">
        <span onClick={() => nav("/")} style={{ cursor: "pointer" }}>
          {/* <img className={classes.logo} src={"/img/logo.svg"} alt="Logo" /> */}
          <Typography variant="h4" style={{ flexGrow: 1, fontFamily: "Lato, Roboto, Helvetica, Arial, sans-serif" }}>
            LinkGene
          </Typography>
        </span>
        {/* <Hidden smUp>
          <IconButton className={classes.menuIcon} onClick={openMobileNavbar} aria-label="show menu">
            <MenuIcon />
          </IconButton>
        </Hidden> */}
        <Hidden xsDown>
          <>
            {isAuthenticated ? (
              <LoginButton style={{ top: 8 }} onClick={() => nav("/Profile")}>
                <CustomAvatar alt={user?.name || user?.email} src={user?.picture} />
                <br />
                <Typography variant="button">{user?.name || user?.email}</Typography>
              </LoginButton>
            ) : (
              <LoginButton onClick={loginWithRedirect}>
                <span>
                  <FontAwesomeIcon color="white" icon={faUser} />
                  <br />
                  <Typography variant="button">Sign in</Typography>
                </span>
              </LoginButton>
            )}
          </>
        </Hidden>
      </LinkGeneBar>
      <MenuBar theme={theme} className={`navbarTop`}>
        <MenuItem
          variant="h6"
          onClick={() => nav("/Offers")}
          style={{ color: location.pathname === "/Offers" ? "#1368bd" : "inherit" }}
        >
          Offers
        </MenuItem>
        <MenuItem
          variant="h6"
          onClick={() => nav("/CreateOffer")}
          style={{ color: location.pathname === "/CreateOffer" ? "#1368bd" : "inherit" }}
        >
          Create offer
        </MenuItem>
        <MenuItem
          variant="h6"
          onClick={() => nav("/ViewProfile/0")}
          style={{ color: location.pathname.startsWith("/ViewProfile") ? "#1368bd" : "inherit" }}
        >
          Profile
        </MenuItem>
        <MenuItem
          variant="h6"
          onClick={() => nav("/SampleTokenGenerator")}
          style={{ color: location.pathname.startsWith("/SampleTokenGenerator") ? "#1368bd" : "inherit" }}
        >
          Sample Token Generator
        </MenuItem>
      </MenuBar>
      <MenuRapierer />
    </>
  );
}
