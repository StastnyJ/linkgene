import React from "react";
import styled from "@emotion/styled";
import { AppBar, Hidden, Typography, useTheme, Theme } from "@mui/material";
// import { Menu as MenuIcon } from "@mui/icons-material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWallet } from "@fortawesome/free-solid-svg-icons";
import { useLocation, useNavigate } from "react-router-dom";

const LinkGeneBar = styled(AppBar)({
  height: 68,
  paddingLeft: 76,
  paddingTop: 14,
});

const Logo = styled.img({
  width: 48,
  height: 48,
  top: 8,
  left: 22,
  position: "absolute",
});

const MenuBar = styled.div(({ theme }: { theme: Theme }) => ({
  height: 42,
  width: "100%",
  zIndex: 999,
  backgroundColor: theme.palette.secondary.main,
  color: theme.palette.secondary.contrastText,
  position: "absolute",
}));

const MenuItem = styled(Typography)(({ selected }: { selected: boolean }) => ({
  fontSize: "1.1rem",
  marginLeft: 16,
  marginTop: 6,
  float: "left",
  cursor: "pointer",
  height: 32,
  color: selected ? "#282828" : "inherit",
  "&:hover": {
    color: "#282828",
  },
}));

const LoginButton = styled.div({
  top: 14,
  right: 22,
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
          <Logo src="/img/LogoSmall.svg" alt="Logo" />
          <Typography variant="h4" style={{ flexGrow: 1, fontFamily: "Lato, Roboto, Helvetica, Arial, sans-serif" }}>
            QuantaDao
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
        <MenuItem variant="h6" onClick={() => nav("/About")} selected={location.pathname === "/About"}>
          About
        </MenuItem>
        <MenuItem variant="h6" onClick={() => nav("/Community")} selected={location.pathname === "/Community"}>
          Community
        </MenuItem>
        <MenuItem variant="h6" onClick={() => nav("/GetTokens")} selected={location.pathname === "/GetTokens"}>
          Get $LG
        </MenuItem>
        <MenuItem variant="h6" onClick={() => nav("/Projects")} selected={location.pathname === "/Projects"}>
          Projects
        </MenuItem>
        <MenuItem variant="h6" onClick={() => nav("/NewProject")} selected={location.pathname === "/NewProject"}>
          Request Project
        </MenuItem>
      </MenuBar>
      <MenuRepairer />
    </>
  );
}
