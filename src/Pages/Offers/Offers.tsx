import React, { useState } from "react";
import { Chip, Container, Grid, Stack, TextField, Typography } from "@mui/material";
import OfferCard from "../../Components/OfferCard";
import OfferDetailsCard from "../../Components/OfferDetailsCard";
import offers from "../../Data/Mock/offers.json";
import categories from "../../Data/Categories.json";
import { Offer } from "../../Types/Offers";
// import CategoryPlainIcon from "../../Components/CategoryPlainIcon";

export default function () {
  const [selectedOffer, setSelectedOffer] = useState(offers[0]);
  const [selectedCategories, setSelectedCategories] = useState(categories);
  const [search, setSearch] = useState("");

  const searchFunc = (o: Offer) =>
    search.length === 0 ||
    o.title.toLowerCase().includes(search.toLowerCase()) ||
    o.subtitle.toLowerCase().includes(search.toLowerCase()) ||
    o.authors[0].name.toLowerCase().includes(search.toLowerCase()) ||
    o.authors[0].surname.toLowerCase().includes(search.toLowerCase()) ||
    o.authors[0].institution.toLowerCase().includes(search.toLowerCase());

  return (
    <Container maxWidth="lg">
      <Grid container spacing={6}>
        <Grid item xs={12}>
          <Stack direction="row">
            <Typography variant="h6" style={{ width: 220 }} noWrap component="span">
              Research Fields
            </Typography>
            <span style={{ flexGrow: 1 }} />
            <TextField label="search" variant="standard" value={search} onChange={(e) => setSearch(e.target.value)} />
          </Stack>
          <br />
          {categories.map((cat) => (
            <Chip
              key={cat}
              style={{ marginRight: 16 }}
              label={cat}
              color={selectedCategories.includes(cat) ? "primary" : "default"}
              onClick={(e) =>
                e.ctrlKey
                  ? setSelectedCategories([cat])
                  : selectedCategories.includes(cat)
                  ? setSelectedCategories(selectedCategories.filter((c) => c !== cat))
                  : setSelectedCategories([...selectedCategories, cat])
              }
              // icon={<CategoryPlainIcon category={cat} />}
            />
          ))}
        </Grid>
        <Grid item md={7}>
          <OfferDetailsCard offer={selectedOffer} />
        </Grid>
        <Grid item md={5}>
          {offers
            .filter(searchFunc)
            .filter((o) => o.categories.filter((c) => selectedCategories.includes(c)).length > 0)
            .map((o) => (
              <OfferCard offer={o} onClick={() => setSelectedOffer(o)} />
            ))}
        </Grid>
      </Grid>
    </Container>
  );
}
