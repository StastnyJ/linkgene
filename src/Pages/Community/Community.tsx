import React from "react";
import { Container, Grid, Stack, Typography, useTheme } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import LargeDiscordButton from "./Components/LargeDiscordButton";

export default function Community() {
  const theme = useTheme();

  return (
    <Container maxWidth="xl">
      <br />
      <Typography variant="h1" color={theme.palette.primary.main} align="center">
        Join our Community
      </Typography>
      <br />
      <br />
      <br />
      <Typography align="justify">
        We are building a community of researches, experts and enthusiasts in the field of Quantum Computing. For the
        communication, we are using well discord, so you do not need to create and manage many different acount and you can
        simply join us with your discord account.
      </Typography>
      <br />
      <br />
      <br />
      <br />
      <br />
      <Container maxWidth="md">
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Stack direction="row">
              <CheckCircle color="primary" />
              &nbsp;&nbsp;&nbsp;&nbsp;
              <Typography color={theme.palette.primary.main}>Get contact to other experts</Typography>
            </Stack>
          </Grid>
          <Grid item xs={12} md={6}>
            <Stack direction="row">
              <CheckCircle color="primary" />
              &nbsp;&nbsp;&nbsp;&nbsp;
              <Typography color={theme.palette.primary.main}>Be first to see new project proposals</Typography>
            </Stack>
          </Grid>
          <Grid item xs={12} md={6}>
            <Stack direction="row">
              <CheckCircle color="primary" />
              &nbsp;&nbsp;&nbsp;&nbsp;
              <Typography color={theme.palette.primary.main}>Watch news in Quantum research</Typography>
            </Stack>
          </Grid>
          <Grid item xs={12} md={6}>
            <Stack direction="row">
              <CheckCircle color="primary" />
              &nbsp;&nbsp;&nbsp;&nbsp;
              <Typography color={theme.palette.primary.main}>Stay updated in our platfrom</Typography>
            </Stack>
          </Grid>
          <Grid item xs={12} md={6}>
            <Stack direction="row">
              <CheckCircle color="primary" />
              &nbsp;&nbsp;&nbsp;&nbsp;
              <Typography color={theme.palette.primary.main}>Have fun with quantum</Typography>
            </Stack>
          </Grid>
        </Grid>
        <br />
        <br />
        <br />
        <br />
        <LargeDiscordButton />
      </Container>
      <br />
      <br />
    </Container>
  );
}
