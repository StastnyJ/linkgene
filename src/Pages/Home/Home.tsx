import { Container } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <Container maxWidth="xl">
      <Link to="/">Home</Link>
      <br />
      <Link to="/Offers">Offers</Link>
      <br />
      <Link to="/ViewProfile/0">Profile</Link>
      <br />
      <Link to="/CreateOffer">Create Offer</Link>
      <br />
    </Container>
  );
}
