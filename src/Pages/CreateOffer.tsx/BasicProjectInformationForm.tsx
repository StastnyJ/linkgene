import React from "react";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { Editor } from "@tinymce/tinymce-react";
import styled from "@emotion/styled";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import { DatePicker } from "@mui/lab";

const ImagePanel = styled.div({
  width: "100%",
  height: 220,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  position: "relative",
  borderRadius: 8,
});

export default function () {
  return (
    <>
      <Grid container spacing={3} alignItems="center">
        <Grid item md={4}>
          <TextField variant="standard" label="Project title" fullWidth />
          <TextField variant="standard" label="Project subtitle" fullWidth />
        </Grid>
        <Grid item md={8}>
          <ImagePanel style={{ backgroundImage: "url(/img/researchDefault.jpg)" }} />
          <div style={{ width: "100%", textAlign: "right" }}>
            <Button color="primary">Change image</Button>
          </div>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item md={6}>
          <TextField type="number" label="Project value" fullWidth variant="standard" />
        </Grid>
        <Grid item md={6}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              label="Desired deadline"
              value={new Date()}
              onChange={() => {}}
              renderInput={(params) => <TextField {...params} fullWidth variant="standard" />}
            />
          </LocalizationProvider>
        </Grid>
        <Grid item md={12}>
          <TextField label="Basic project description" fullWidth multiline rows={10} />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6">Detailed description</Typography>
          <br />
          <Editor
            apiKey="ygw8t6cqi14winm1hwe2cr6yhal1lvoygowen2ni7qen02yz"
            initialValue={""}
            init={{
              plugins: [
                "advlist autolink lists link image",
                "charmap print preview anchor help",
                "searchreplace visualblocks code",
                "insertdatetime media table paste wordcount",
              ],
              toolbar:
                "undo redo | formatselect | bold italic | alignleft aligncenter alignright | bullist numlist outdent indent | help",
              automatic_uploads: true,
              height: 520,
              images_reuse_filename: true,
              images_upload_url: ``,
              images_upload_base_path: "https://api.magistrmartin.cz/images/noauth/image/images/",
            }}
            onChange={() => {}}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6">Attachments</Typography>
          <br />
          <Button color="primary">Add attachment</Button>
        </Grid>
      </Grid>
    </>
  );
}
