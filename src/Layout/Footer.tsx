import React from "react";
import { Typography, Container, IconButton, Tooltip, Grid } from "@mui/material";
import { Facebook, GetAppRounded, GitHub, Instagram, Mail, Policy } from "@mui/icons-material";
import packageJson from "../../package.json";
import useWindowDimensions from "../Hooks/GetWindowDimensions";
import styled from "@emotion/styled";

const Root = styled.div({
  paddingLeft: 32,
  paddingRight: 32,
  paddingTop: 12,
  paddingBottom: 4,
  borderTop: "solid 2px #f0f0f0",
  backgroundColor: "#b3b3b3",
  zIndex: 999,
  position: "relative",
});

const InnerRoot = styled.div({
  display: "flex",
  justifyContent: "space-between",
});

const Logo = styled.img({
  height: 54,
  marginTop: 5,
  marginBottom: 5,
  filter: "grayscale(95%) invert(90%)",
});

const LowerRoot = styled.div({
  paddingTop: 4,
  paddingBottom: 4,
  borderTop: "solid 2px #f0f0f0",
  backgroundColor: "#b3b3b3",
  zIndex: 999,
  position: "relative",
});

export default function Footer() {
  const { width } = useWindowDimensions();

  const serviceWorkerUnregistration = () => {
    navigator.serviceWorker.getRegistrations().then((registrations) => {
      for (let registration of registrations) {
        registration.unregister();
      }
    });

    localStorage.setItem("userID", "");
    window.location.reload();
  };

  const isXs = width < 600;

  return (
    <>
      <Root>
        <Container maxWidth="xl">
          <InnerRoot>
            <Grid container alignItems="center">
              <Grid item xs={12} sm={4}>
                <div style={{ textAlign: isXs ? "center" : "left" }}>
                  <Logo src="/img/logoLarge.png" alt="logo" />
                </div>
              </Grid>
              <Grid item xs={12} sm={4}>
                <div style={{ textAlign: "center", width: "100%" }}>
                  <Tooltip title="Follow us on facebook" onClick={() => window.open("", "_blank")}>
                    <IconButton>
                      <Facebook />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Follow us on instagram">
                    <IconButton>
                      <Instagram />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Follow us on github" onClick={() => window.open("", "_blank")}>
                    <IconButton>
                      <GitHub />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Contact us via email">
                    <IconButton>
                      <Mail />
                    </IconButton>
                  </Tooltip>
                </div>
              </Grid>
              <Grid item xs={12} sm={4}>
                <div style={{ textAlign: isXs ? "center" : "right", width: "100%" }}>
                  <Tooltip title="Privacy policy">
                    <IconButton onClick={() => window.open("/PrivacyPolicy", "_blank")}>
                      <Policy />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Update web to new version">
                    <IconButton onClick={() => serviceWorkerUnregistration()}>
                      <GetAppRounded />
                    </IconButton>
                  </Tooltip>
                </div>
              </Grid>
            </Grid>
          </InnerRoot>
        </Container>
      </Root>
      <LowerRoot>
        <Container maxWidth="xl">
          <div style={{ textAlign: "center" }}>
            <Typography noWrap display="inline">
              © Jakub Šťastný 2022&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;{packageJson.version}
            </Typography>
          </div>
        </Container>
      </LowerRoot>
    </>
  );
}
