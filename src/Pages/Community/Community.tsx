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
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
        aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
        aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
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
              <Typography color={theme.palette.primary.main}>Get all news in the first row</Typography>
            </Stack>
          </Grid>
          <Grid item xs={12} md={6}>
            <Stack direction="row">
              <CheckCircle color="primary" />
              &nbsp;&nbsp;&nbsp;&nbsp;
              <Typography color={theme.palette.primary.main}>Get all news in the first row</Typography>
            </Stack>
          </Grid>
          <Grid item xs={12} md={6}>
            <Stack direction="row">
              <CheckCircle color="primary" />
              &nbsp;&nbsp;&nbsp;&nbsp;
              <Typography color={theme.palette.primary.main}>Get all news in the first row</Typography>
            </Stack>
          </Grid>
          <Grid item xs={12} md={6}>
            <Stack direction="row">
              <CheckCircle color="primary" />
              &nbsp;&nbsp;&nbsp;&nbsp;
              <Typography color={theme.palette.primary.main}>Get all news in the first row</Typography>
            </Stack>
          </Grid>
          <Grid item xs={12} md={6}>
            <Stack direction="row">
              <CheckCircle color="primary" />
              &nbsp;&nbsp;&nbsp;&nbsp;
              <Typography color={theme.palette.primary.main}>Get all news in the first row</Typography>
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
