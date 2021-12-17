import React, { useState } from "react";
import { Button, TextField, Container, Grid, Typography } from "@mui/material";
import { Token } from "../../Types/Tokens";
import { EmptyToken, generateToken } from "../../Utils/Tokens";

export default function () {
  const [token, setToken] = useState<Token>(EmptyToken);

  return (
    <Container maxWidth="lg">
      <Typography variant="h6">Sample token data</Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6} lg={4}>
          <TextField
            label="Author Id"
            variant="standard"
            color="primary"
            fullWidth
            value={token.author.authorId}
            onChange={(e) => setToken({ ...token, author: { ...token.author, authorId: e.target.value } })}
          />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <TextField
            label="Author Name"
            variant="standard"
            color="primary"
            fullWidth
            value={token.author.name}
            onChange={(e) => setToken({ ...token, author: { ...token.author, name: e.target.value } })}
          />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <TextField
            label="Author Surname"
            variant="standard"
            color="primary"
            fullWidth
            value={token.author.surname}
            onChange={(e) => setToken({ ...token, author: { ...token.author, surname: e.target.value } })}
          />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <TextField
            label="Author Email"
            variant="standard"
            color="primary"
            fullWidth
            value={token.author.email}
            onChange={(e) => setToken({ ...token, author: { ...token.author, email: e.target.value } })}
          />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <TextField
            label="Author Image Link"
            variant="standard"
            color="primary"
            fullWidth
            value={token.author.image}
            onChange={(e) => setToken({ ...token, author: { ...token.author, image: e.target.value } })}
          />
        </Grid>
      </Grid>
      <br />
      <br />
      <Grid container spacing={3}>
        <Grid item xs={12} md={6} lg={4}>
          <TextField
            label="Sold work Title"
            variant="standard"
            color="primary"
            fullWidth
            value={token.soldWork.soldWorkTitle}
            onChange={(e) => setToken({ ...token, soldWork: { ...token.soldWork, soldWorkTitle: e.target.value } })}
          />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <TextField
            label="Sold work Subtitle"
            variant="standard"
            color="primary"
            fullWidth
            value={token.soldWork.soldWorkSubtitle}
            onChange={(e) => setToken({ ...token, soldWork: { ...token.soldWork, soldWorkSubtitle: e.target.value } })}
          />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <TextField
            label="Sold work Part"
            variant="standard"
            color="primary"
            fullWidth
            value={token.soldWork.soldWorkPart}
            onChange={(e) => setToken({ ...token, soldWork: { ...token.soldWork, soldWorkPart: e.target.value } })}
          />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <TextField
            label="Sold work Type"
            variant="standard"
            color="primary"
            fullWidth
            value={token.soldWork.soldWorkType}
            onChange={(e) => setToken({ ...token, soldWork: { ...token.soldWork, soldWorkType: e.target.value } })}
          />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <TextField
            label="Sold work Url"
            variant="standard"
            color="primary"
            fullWidth
            value={token.soldWork.soldWorkUrl}
            onChange={(e) => setToken({ ...token, soldWork: { ...token.soldWork, soldWorkUrl: e.target.value } })}
          />
        </Grid>
      </Grid>
      <br />
      <br />
      <Button onClick={() => generateToken(token)}>Generate token</Button>
    </Container>
  );
}
