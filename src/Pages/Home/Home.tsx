import React from "react";
import { Button, Container, Typography, useTheme } from "@mui/material";
import styled from "@emotion/styled";
import HomePageIcon from "./Components/HomePageIcon";
import { faCoins, faUsers, faMicroscope, faDollarSign, faHandHoldingUsd } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import DiscordButton from "./Components/DiscordButton";
import { LGButton } from "../../Components/Styles/StyledComponents";
import RouterCard from "./Components/RouterCard";
import DataCard from "../../Components/DataCard";
import investorsData from "../../Data/InvestorsData.json";
import researchersData from "../../Data/ResearchersData.json";

const Logo = styled.img({
  width: "80%",
  marginLeft: "10%",
  marginTop: "10vh",
});

const IconsContainer = styled.div({
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  marginTop: "10vh",
  marginBottom: "5vh",
});

export default function Home() {
  const nav = useNavigate();
  const theme = useTheme();

  return (
    <>
      <Container maxWidth="xl">
        <Logo src="/img/logoLarge.png" />
        <IconsContainer>
          <HomePageIcon icon={faCoins} label="Money collected" text="0" />
          <HomePageIcon icon={faUsers} label="Community" text="0 members" />
          <HomePageIcon icon={faDollarSign} label="Token value" text="0 " />
          <HomePageIcon icon={faMicroscope} label="Funded Projects" text="0" />
        </IconsContainer>
        <Typography textAlign="justify">
          We are... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
          dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Typography>
        <Button color="primary" onClick={() => nav("/About")}>
          Learn more
        </Button>
        <IconsContainer style={{ justifyContent: "space-evenly", marginBottom: "2.5vh" }}>
          <DiscordButton />
          <LGButton onClick={() => nav("/GetTokens")} theme={theme}>
            Buy Tokens
          </LGButton>
          <LGButton onClick={() => nav("/Proposals")} theme={theme}>
            Examine active projects
          </LGButton>
          <LGButton onClick={() => nav("/Researchers")} theme={theme}>
            Apply for funding
          </LGButton>
        </IconsContainer>
        <IconsContainer style={{ justifyContent: "space-evenly", marginBottom: 0 }}>
          <RouterCard
            text="For investors"
            icon={faHandHoldingUsd}
            onClick={() =>
              window.scrollTo({
                top: document.getElementById("forInvestors")?.offsetTop,
                left: 0,
                behavior: "smooth",
              })
            }
          />
          <RouterCard
            text="For researchers"
            icon={faMicroscope}
            onClick={() =>
              window.scrollTo({
                top: document.getElementById("forResearchers")?.offsetTop,
                left: 0,
                behavior: "smooth",
              })
            }
          />
        </IconsContainer>
        <img style={{ width: "100%" }} src="/img/InfoScheme.png" alt="Business model scheme" />
        <Button fullWidth color="primary" variant="contained" onClick={() => nav("/About")}>
          Learn more about our business model
        </Button>
        <br />
        <br />
      </Container>
      <br />
      <br />
      <br />
      <Typography id="forInvestors" variant="h1" color={theme.palette.primary.main} align="center">
        For Investors
      </Typography>
      <br />
      <br />
      <br />
      <br />
      {investorsData.map((d, i) => (
        <DataCard
          image={d.image}
          orientation={i % 2 === 0 ? "standard" : "reversed"}
          text={d.text}
          theme={i % 2 === 0 ? "dark" : "light"}
          title={d.title}
          link={d.link}
          linkText={d.linkText}
          key={i}
        />
      ))}
      <br />
      <br />
      <br />
      <Typography id="forResearchers" variant="h1" color={theme.palette.primary.main} align="center">
        For Researchers
      </Typography>
      <br />
      <br />
      <br />
      <br />
      {researchersData.map((d, i) => (
        <DataCard
          image={d.image}
          orientation={i % 2 === 0 ? "standard" : "reversed"}
          text={d.text}
          theme={i % 2 === 0 ? "dark" : "light"}
          title={d.title}
          link={d.link}
          linkText={d.linkText}
          key={i}
        />
      ))}
    </>
  );
}
