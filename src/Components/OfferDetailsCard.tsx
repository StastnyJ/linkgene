import React, { useState } from "react";
import styled from "@emotion/styled";
import { Mail, Verified } from "@mui/icons-material";
import { Avatar, Button, Chip, Grid, Stack, Typography } from "@mui/material";
import { Offer } from "../Types/Offers";
import { useMetaMask } from "metamask-react";
import { useNavigate } from "react-router-dom";

interface IProps {
  offer: Offer;
}

const Root = styled.div({
  borderRadius: 8,
  boxShadow: "1px -1px #c7c7c7",
  border: "1px solid #b4b4b4",
  position: "relative",
  width: "100%",
  marginTop: 12,
  marginBottom: 12,
});

const ImagePanel = styled.div({
  width: "100%",
  height: 220,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  position: "relative",
  borderTopRightRadius: 8,
  borderTopLeftRadius: 8,
});

const TitleLine = styled.div({
  width: "calc(100% - 24px)",
  backgroundColor: "rgba(87, 87, 87, .4)",
  position: "absolute",
  bottom: 0,
  padding: "8px 12px",
  display: "flex",
  flexDirection: "row",
  alignItems: "flex-end",
});

const Title = styled.div({
  fontFamily: "Roboto",
  color: "white",
  fontWeight: "bold",
  fontSize: "1.8rem",
});

const Subtitle = styled(Title)({
  fontWeight: "normal",
  fontSize: "1.2rem",
});

const Link = styled(Typography)({
  color: "#0d6efd",
  cursor: "pointer",
  "&:hover": {
    textDecoration: "underline",
  },
});

export default function OfferDetailsCard({ offer }: IProps) {
  const [descriptionExpanded, setDescriptionExpanded] = useState(false);
  const { status } = useMetaMask();
  const nav = useNavigate();

  return (
    <Root>
      <ImagePanel style={{ backgroundImage: offer.image.length > 0 ? `url(${offer.image})` : "url(/img/researchDefault.jpg)" }}>
        <TitleLine>
          <span>
            <Title>{offer.title}</Title>
            <Subtitle>{offer.subtitle}</Subtitle>
          </span>
          <div style={{ flexGrow: 1 }} />
          {offer.verified && <Chip color="success" label="Verified" icon={<Verified />} />}
        </TitleLine>
      </ImagePanel>
      <div style={{ padding: 12 }}>
        <Button
          style={{ marginTop: 16, marginBottom: 32 }}
          onClick={() => (status === "connected" ? null : nav("/Wallet"))}
          variant="contained"
          fullWidth
        >
          {status === "connected" ? "Participate in this project" : "Login with metamask to participate"}
        </Button>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div>
            <Typography variant="caption">Desired dealdine: {new Date(offer.desiredDeadline).toDateString()}</Typography>
            <br />
            <Typography variant="caption">
              Currently {offer.scientisWorkingCount} experts are working on this projects
            </Typography>
          </div>
          <div style={{ flexGrow: 1 }}></div>
          <div>
            <Typography>Project value: {offer.projectValue} €</Typography>
          </div>
        </div>
        <Typography variant="h4">This project was requestd by</Typography>
        <br />
        <Grid container spacing={3}>
          <Grid item md={6}>
            <Stack direction="row" alignItems="center">
              <Avatar sx={{ width: 56, height: 56 }} src={offer.requestor.institutionImage} />
              &nbsp;&nbsp;&nbsp;&nbsp;
              <span>
                <Typography variant="h6">{offer.requestor.institutionName}</Typography>
                <Link variant="caption" onClick={() => window.open(offer.requestor.institutionWeb, "_blank")}>
                  Visit website
                </Link>
              </span>
            </Stack>
          </Grid>
          <Grid item md={6}>
            {offer.requestor.contactPeople.map((contact, i) => (
              <React.Fragment key={i}>
                <Stack direction="row" alignItems="center">
                  <Mail />
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <span>
                    <Typography variant="h6">{contact.name}</Typography>
                    <Link variant="caption" onClick={() => window.open("mailto:" + contact.contact, "_blank")}>
                      {contact.contact}
                    </Link>
                  </span>
                </Stack>
              </React.Fragment>
            ))}
          </Grid>
        </Grid>
        <br />
        <br />
        <Typography variant="h4">Project description</Typography>
        <br />
        {descriptionExpanded ? (
          <>
            {offer.description.split("\n").map((l, i) => (
              <Typography key={i} textAlign="justify">
                {l}
              </Typography>
            ))}
            <Link onClick={() => setDescriptionExpanded(false)}>Hide description</Link>
          </>
        ) : (
          <>
            <Typography textAlign="justify">
              {offer.description.substring(0, 256) + "..."}
              &nbsp;&nbsp;&nbsp;&nbsp;
              <Link display="inline-block" onClick={() => setDescriptionExpanded(true)}>
                Continue reading
              </Link>
            </Typography>
          </>
        )}
        <br />
        <div style={{ width: "100%", textAlign: "right" }}>
          <Button color="primary" variant="contained">
            Show Detailed Project Information
          </Button>
        </div>
      </div>
    </Root>
  );
}
