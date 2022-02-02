import React from "react";
import { Button, Checkbox, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material";

export default function () {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <div style={{ display: "flex", cursor: "pointer", alignItems: "center" }}>
          <Checkbox color="primary" defaultChecked={false} /> <Typography>Request project anonymously</Typography>
        </div>
      </Grid>
      <Grid item xs={12} md={4}>
        <TextField label="Company name/Requestor name" fullWidth variant="standard" />
      </Grid>
      <Grid item xs={12} md={4}>
        <TextField label="Company website (optional)" fullWidth variant="standard" />
      </Grid>
      <Grid item xs={12} md={4}>
        <TextField label="Company logo link (optional)" fullWidth variant="standard" />
      </Grid>
      <Grid item xs={12}>
        <Typography>Contact person</Typography>
      </Grid>
      <Grid item xs={12} md={4}>
        <TextField label="Full Name" fullWidth variant="standard" />
      </Grid>
      <Grid item xs={12} md={3}>
        <FormControl fullWidth>
          <InputLabel id="contact-select-label">Contact type</InputLabel>
          <Select defaultValue="email" labelId="contact-select-label" label="Contact type" variant="standard">
            <MenuItem value="email">Email</MenuItem>
            <MenuItem value="discord">Discord</MenuItem>
            <MenuItem value="twitter">Twitter</MenuItem>
            <MenuItem value="whatsapp">Whatsapp</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12} md={5}>
        <TextField label="Contact" fullWidth variant="standard" />
      </Grid>
      <Grid item xs={12}>
        <Button color="primary">+ Add another contact person</Button>
      </Grid>
      <Grid item xs={12}>
        <TextField fullWidth multiline rows={16} label="Additional Remarks (optional)" />
      </Grid>
    </Grid>
  );
}
