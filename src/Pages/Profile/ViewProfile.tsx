import React from "react";
import { Avatar, Chip, Container, Grid, Stack, Tooltip, Typography } from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import user from "../../Data/Mock/userData.json";
import offers from "../../Data/Mock/offers.json";
import OfferCard from "../../Components/OfferCard";
import { Verified } from "@mui/icons-material";

const ProfileImageContainer = styled.div({
  width: "100%",
  position: "relative",
});

const ProfileImage = styled.img({
  borderRadius: "50%",
  width: "90%",
  marginLeft: "5%",
});

const Link = styled(Typography)({
  color: "#0d6efd",
  cursor: "pointer",
  "&:hover": {
    textDecoration: "underline",
  },
});

const VerifiedBadge = styled(Chip)({
  position: "absolute",
  right: "calc(5% + 12px)",
  bottom: 12,
});

export default function () {
  const { userId } = useParams();
  const navigate = useNavigate();
  console.log(userId);
  return (
    <Container maxWidth="lg">
      <Grid container spacing={6}>
        <Grid item xs={12} md={3}>
          <ProfileImageContainer>
            <ProfileImage src={user.image} />
            <Tooltip title="This user is verified">
              <VerifiedBadge color="success" icon={<Verified />} />
            </Tooltip>
          </ProfileImageContainer>
          <br />
          <br />
          <Typography variant="h4">
            {user.name} {user.surname}
          </Typography>
          <Typography>{user.email}</Typography>
          <hr />
          {user.institutions.map((i, num) => (
            <React.Fragment key={num}>
              <Stack direction="row" alignItems="center">
                <Typography color="GrayText">
                  <b>{i.role} at</b>
                </Typography>
                <span style={{ flexGrow: 1 }} />
                <Avatar sx={{ width: 56, height: 56 }} src={i.logo} />
              </Stack>
              <Typography>{i.name}</Typography>
              <Link variant="caption" onClick={() => window.open(i.link, "_blank")?.focus()}>
                Institution details
              </Link>
              <br />
            </React.Fragment>
          ))}
          <br />
          <Typography variant="caption">Degrees</Typography>
          <hr />
          {user.degrees.map((d, num) => (
            <React.Fragment key={num}>
              <Stack direction="row" alignItems="center">
                <Typography color="GrayText">
                  <b>{d.degreeLevel}</b>
                  <br />
                  {d.degreeType}
                </Typography>
                <span style={{ flexGrow: 1 }} />
                <Avatar sx={{ width: 56, height: 56 }} src={d.institutionLogo} />
              </Stack>
              <Typography>at {d.institutionName}</Typography>
              <br />
            </React.Fragment>
          ))}
          <br />
          <Typography variant="caption">Publications</Typography>
          <hr />
          {user.publications.map((p, i) => (
            <React.Fragment key={i}>
              <Link variant="subtitle1" onClick={() => window.open(p.link, "_blank")?.focus()}>
                {p.name}
              </Link>
            </React.Fragment>
          ))}
        </Grid>
        <Grid item xs={12} md={9}>
          <Typography variant="h4">About me</Typography>
          <br />
          {user.description.split("\n").map((l, i) => (
            <Typography key={i} textAlign="justify">
              {l}
            </Typography>
          ))}
          <br />
          <Typography variant="h4">Offers</Typography>
          <Grid container spacing={3}>
            {user.registeredOffers.map((o) => (
              <Grid item xs={12} md={6} key={o}>
                <OfferCard offer={offers[o]} onClick={() => navigate(`/OfferDetails/${o}`)} hideAuthor />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
