import React from "react";
import { Accordion, AccordionSummary, Button, Container, Typography, useTheme, AccordionDetails } from "@mui/material";
import styled from "@emotion/styled";
import HomePageIcon from "./Components/HomePageIcon";
import { faCoins, faUsers, faMicroscope, faDollarSign } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import DiscordButton from "./Components/DiscordButton";
import { LGButton } from "../../Components/Styles/StyledComponents";
import DataCard from "../../Components/DataCard";
import investorsData from "../../Data/HomePageCards.json";
import faq from "../../Data/FAQ.json";
import { ExpandMore } from "@mui/icons-material";

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

const BackgroundBanner = styled.div({
  width: "calc(100% - 24px)",
  backgroundColor: "#1d1a1b",
  backgroundSize: "contain",
  backgroundPositionX: "center",
  backgroundPositionY: "center",
  height: "80vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  backgroundRepeat: "no-repeat",
  backgroundAttachment: "fixed",
  position: "absolute",
  top: 0,
  left: 0,
  padding: 12,
  backgroundImage: `url(/img/InfoScheme.png)`,
});

export default function Home() {
  const nav = useNavigate();
  const theme = useTheme();

  return (
    <>
      <Container maxWidth="xl">
        <Logo src="/img/LogoLarge.svg" />
        <IconsContainer>
          <HomePageIcon icon={faCoins} label="Community value" text="€ 2 097 152" />
          <HomePageIcon icon={faUsers} label="Community" text="512 members" />
          <HomePageIcon icon={faDollarSign} label="Token value" text="0.64 Ξ" />
          <HomePageIcon icon={faMicroscope} label="Projects Proposals" text="16" />
        </IconsContainer>
        <Typography textAlign="justify">
          We are a community attractiong experts and talents in quantum computing the field with a focus on software.
          <br /> <br />
          We are providing collaboration-as-a-service to help companies springboard their participation in the quantum
          revolution by consulting and solving smaller-scale software problems to ensure the companies are producing
          high-quality end-to-end solutions.
          <br />
          <br />
          We differ from the current participants in the market by leveraging web3 technologies to help incentivise the
          community and reward activity and collaboration.
        </Typography>
        <Button color="primary" onClick={() => nav("/About")}>
          Learn more
        </Button>
        <IconsContainer style={{ justifyContent: "space-evenly", marginBottom: "2.5vh" }}>
          <DiscordButton />
          <LGButton onClick={() => nav("/GetTokens")} theme={theme}>
            Buy Tokens
          </LGButton>
          <LGButton onClick={() => nav("/Projects")} theme={theme}>
            Current projects
          </LGButton>
          <LGButton onClick={() => nav("/NewProject")} theme={theme}>
            Request project
          </LGButton>
        </IconsContainer>
        <br />
      </Container>
      <div style={{ position: "relative", width: "100%", height: "80vh" }}>
        <BackgroundBanner>
          <Container maxWidth="lg">
            <div></div>
          </Container>
        </BackgroundBanner>
      </div>
      {investorsData.map((d, i) => (
        <DataCard
          image={d.image}
          orientation={i % 2 === 0 ? "standard" : "reversed"}
          text={d.text}
          theme={i % 2 === 1 ? "dark" : "light"}
          title={d.title}
          link={d.link}
          linkText={d.linkText}
          key={i}
        />
      ))}
      <br />
      <br />
      <br />
      <br />
      <br />
      <Typography variant="h1" color={theme.palette.primary.main} align="center">
        FAQ
      </Typography>
      <br />
      <br />
      <Container maxWidth="xl">
        {faq.map((q) => (
          <Accordion key={q.question}>
            <AccordionSummary expandIcon={<ExpandMore />}>
              <Typography>{q.question} </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{q.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Container>
      <br />
      <br />
      <br />
      <br />
    </>
  );
}
