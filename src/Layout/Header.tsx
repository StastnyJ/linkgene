import React from "react";
import styled from "@emotion/styled";
import { AppBar, Hidden, Typography, useTheme, Theme } from "@mui/material";
// import { Menu as MenuIcon } from "@mui/icons-material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWallet } from "@fortawesome/free-solid-svg-icons";
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

const MenuRepairer = styled.div({
  width: "100%",
  height: 42,
});

interface IProps {
  authenticationStatus: "initializing" | "unavailable" | "notConnected" | "connected" | "connecting";
  connectWallet: () => Promise<string[] | null>;
  user: string | null;
}

export default function Header({ authenticationStatus, connectWallet }: IProps) {
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
            <LoginButton
              style={{ top: 8 }}
              onClick={() =>
                authenticationStatus === "notConnected"
                  ? connectWallet().then((res) => res !== null && nav("/Wallet"))
                  : nav("/Wallet")
              }
            >
              <FontAwesomeIcon color="white" icon={faWallet} />
              <br />
              <Typography variant="button">{authenticationStatus}</Typography>
            </LoginButton>
          </>
        </Hidden>
      </LinkGeneBar>
      <MenuBar theme={theme} className={`navbarTop`}>
        <MenuItem
          variant="h6"
          onClick={() => nav("/About")}
          style={{ color: location.pathname === "/About" ? "#1368bd" : "inherit" }}
        >
          About
        </MenuItem>
        <MenuItem
          variant="h6"
          onClick={() => nav("/Community")}
          style={{ color: location.pathname === "/Community" ? "#1368bd" : "inherit" }}
        >
          Community
        </MenuItem>
        <MenuItem
          variant="h6"
          onClick={() => nav("/GetTokens")}
          style={{ color: location.pathname.startsWith("/GetTokens") ? "#1368bd" : "inherit" }}
        >
          Get $LG
        </MenuItem>
        <MenuItem
          variant="h6"
          onClick={() => nav("/Proposals")}
          style={{ color: location.pathname.startsWith("/Proposals") ? "#1368bd" : "inherit" }}
        >
          Proposals
        </MenuItem>
        <MenuItem
          variant="h6"
          onClick={() => nav("/Researchers")}
          style={{ color: location.pathname.startsWith("/Researchers") ? "#1368bd" : "inherit" }}
        >
          Researcher Zone
        </MenuItem>
      </MenuBar>
      <MenuRepairer />
    </>
  );
}
