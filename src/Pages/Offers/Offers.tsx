import React, { useState } from "react";
import { Container, Grid, TextField } from "@mui/material";
import OfferCard from "../../Components/OfferCard";
import OfferDetailsCard from "../../Components/OfferDetailsCard";
import offers from "../../Data/Mock/offers.json";
import { Offer } from "../../Types/Offers";
// import CategoryPlainIcon from "../../Components/CategoryPlainIcon";

export default function () {
  const [selectedOffer, setSelectedOffer] = useState(offers[0]);
  const [search, setSearch] = useState("");

  const searchFunc = (o: Offer) =>
    search.length === 0 ||
    o.title.toLowerCase().includes(search.toLowerCase()) ||
    o.subtitle.toLowerCase().includes(search.toLowerCase()) ||
    o.requestor.institutionName.toLowerCase().includes(search.toLowerCase());

  return (
    <Container maxWidth="lg">
      <Grid container spacing={6}>
        <Grid item xs={12}>
          <TextField fullWidth label="search" variant="standard" value={search} onChange={(e) => setSearch(e.target.value)} />
          <br />
        </Grid>
        <Grid item md={7}>
          <OfferDetailsCard offer={selectedOffer} />
        </Grid>
        <Grid item md={5}>
          {offers.filter(searchFunc).map((o) => (
            <OfferCard offer={o} onClick={() => setSelectedOffer(o)} />
          ))}
        </Grid>
      </Grid>
    </Container>
  );
}
