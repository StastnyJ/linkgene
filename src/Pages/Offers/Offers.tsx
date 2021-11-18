import { Container, Grid } from "@mui/material";
import React, { useState } from "react";
import OfferCard from "../../Components/OfferCard";
import OfferDetailsCard from "../../Components/OfferDetailsCard";
import offers from "../../Data/Mock/offers.json";

export default function () {
  const [selectedOffer, setSelectedOffer] = useState(offers[0]);

  return (
    <Container maxWidth="lg">
      <Grid container spacing={6}>
        <Grid item md={7}>
          <OfferDetailsCard offer={selectedOffer} />
        </Grid>
        <Grid item md={5}>
          {offers.map((o) => (
            <OfferCard offer={o} onClick={() => setSelectedOffer(o)} />
          ))}
        </Grid>
      </Grid>
    </Container>
  );
}
