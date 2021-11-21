import { Grid, TextField } from "@mui/material";
import React from "react";

export default function () {
  return (
    <Grid container spacing={3}>
      <Grid xs={12} md={3}>
        <TextField label="Fundings goal" variant="standard" />
      </Grid>
    </Grid>
  );
}
