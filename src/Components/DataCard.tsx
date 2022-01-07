import React from "react";
import { Container, Grid, Typography, Button, useTheme } from "@mui/material";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";

interface IProps {
  title: string;
  text: string;
  image: string;
  orientation: "standard" | "reversed";
  theme: "light" | "dark";
  link?: string;
  linkText?: string;
}

export default function ({ title, text, image, orientation, theme, link, linkText }: IProps) {
  const globalTheme = useTheme();
  const nav = useNavigate();

  const Root = styled.div({
    width: "100%",
    backgroundColor: theme === "light" ? "white" : globalTheme.palette.primary.main,
    color: theme === "light" ? "black" : globalTheme.palette.primary.contrastText,
  });

  const CardImage = styled.img({
    height: "40vh",
    marginTop: "5vh",
    marginBottom: "5vh",
    borderRadius: "10%",
  });

  const LinkButton = styled(Button)({
    marginTop: "32px",
    float: "right",
    color: theme === "light" ? "black" : globalTheme.palette.primary.contrastText,
    borderColor: theme === "light" ? "black" : globalTheme.palette.primary.contrastText,
  });

  return (
    <Root>
      <Container maxWidth="lg">
        <Grid
          container
          direction={orientation === "standard" ? "row" : "row-reverse"}
          alignItems="center"
          justifyContent="center"
        >
          <Grid item md={6} style={{ textAlign: "center" }}>
            <CardImage src={image} alt={`homePageIllustrationImage-${title}`} />
          </Grid>
          <Grid item md={6} xs={12} style={{ marginBottom: "5vh" }}>
            <Typography variant="h3">{title}</Typography>
            <br />
            <Typography variant="body1" align="justify">
              {text}
            </Typography>
            {link && (
              <LinkButton onClick={() => nav(link)} variant="outlined">
                {linkText}
              </LinkButton>
            )}
          </Grid>
        </Grid>
      </Container>
    </Root>
  );
}
