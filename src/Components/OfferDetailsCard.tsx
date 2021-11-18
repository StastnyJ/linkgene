import React, { useState } from "react";
import styled from "@emotion/styled";
import { Verified } from "@mui/icons-material";
import { Avatar, Button, Chip, Grid, Stack, Typography } from "@mui/material";
import { Offer } from "../Types/Offers";
import CategoryIcon from "./CategoryIcon";
import { useNavigate } from "react-router-dom";

interface IProps {
  offer: Offer;
}

const Root = styled.div({
  borderRadius: 8,
  boxShadow: "1px -1px #c7c7c7",
  border: "1px solid #b4b4b4",
  position: "relative",
  width: "100%",
  marginTop: 12,
  marginBottom: 12,
});

const ImagePanel = styled.div({
  width: "100%",
  height: 220,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  position: "relative",
  borderTopRightRadius: 8,
  borderTopLeftRadius: 8,
});

const TitleLine = styled.div({
  width: "calc(100% - 24px)",
  backgroundColor: "rgba(87, 87, 87, .4)",
  position: "absolute",
  bottom: 0,
  padding: "8px 12px",
  display: "flex",
  flexDirection: "row",
  alignItems: "flex-end",
});

const Title = styled.div({
  fontFamily: "Roboto",
  color: "white",
  fontWeight: "bold",
  fontSize: "1.8rem",
});

const Subtitle = styled(Title)({
  fontWeight: "normal",
  fontSize: "1.2rem",
});

const Link = styled(Typography)({
  color: "#0d6efd",
  cursor: "pointer",
  "&:hover": {
    textDecoration: "underline",
  },
});

export default function OfferDetailsCard({ offer }: IProps) {
  const [descriptionExpanded, setDescriptionExpanded] = useState(false);
  const navigate = useNavigate();

  return (
    <Root>
      <ImagePanel style={{ backgroundImage: offer.image.length > 0 ? `url(${offer.image})` : "url(/img/researchDefault.jpg)" }}>
        <TitleLine>
          <span>
            <Title>{offer.title}</Title>
            <Subtitle>{offer.subtitle}</Subtitle>
          </span>
          <div style={{ flexGrow: 1 }} />
          {offer.verified && <Chip color="success" label="Verified" icon={<Verified />} />}
        </TitleLine>
      </ImagePanel>
      <div style={{ padding: 12 }}>
        <Grid spacing={3} alignItems="center" container>
          <Grid item md={6}>
            {offer.categories.map((c) => (
              <Stack direction="row" alignItems="center" style={{ marginBottom: 8 }}>
                <CategoryIcon category={c} />
                &nbsp;&nbsp;&nbsp;&nbsp;<Typography>{c}</Typography>
              </Stack>
            ))}
          </Grid>
          <Grid item md={6} style={{ textAlign: "right" }}>
            <Typography variant="h4">{offer.tokenPrice} €/token</Typography>
            <Button color="primary" variant="contained" style={{ margin: "8px 0 16px 0" }}>
              Buy now
            </Button>
            <Typography color="GrayText">
              {offer.tokensAvailable} from total {offer.tokensTotal} still available
            </Typography>
            <Button color="primary" style={{ margin: "8px 0 16px 0" }}>
              Show tokens details
            </Button>
          </Grid>
        </Grid>
        <br />
        <Typography variant="h4">Authors</Typography>
        <br />
        <Grid container spacing={3}>
          {offer.authors.map((a, i) => (
            <React.Fragment key={i}>
              <Grid item md={6}>
                <Stack direction="row" alignItems="center">
                  <Avatar sx={{ width: 56, height: 56 }} src={a.image} />
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <span>
                    <Typography variant="h6">
                      {a.name} {a.surname}
                    </Typography>
                    <Link variant="caption" onClick={() => navigate("/ViewProfile/0")}>
                      View profile
                    </Link>
                  </span>
                </Stack>
              </Grid>
              <Grid item md={6}>
                <Stack direction="row" alignItems="center">
                  <Avatar
                    sx={{ width: 56, height: 56 }}
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Logo_of_the_Technical_University_of_Munich.svg/2000px-Logo_of_the_Technical_University_of_Munich.svg.png"
                  />
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <span>
                    <Typography>
                      <b>{a.institution}</b>
                    </Typography>
                    <Link variant="caption" onClick={() => window.open("https://www.tum.de", "_blank")?.focus()}>
                      Institution details
                    </Link>
                  </span>
                </Stack>
              </Grid>
            </React.Fragment>
          ))}
        </Grid>
        <br />
        <br />
        <Typography variant="h4">Project description</Typography>
        <br />
        {descriptionExpanded ? (
          <>
            {offer.description.split("\n").map((l, i) => (
              <Typography key={i} textAlign="justify">
                {l}
              </Typography>
            ))}
            <Link onClick={() => setDescriptionExpanded(false)}>Hide description</Link>
          </>
        ) : (
          <>
            <Typography textAlign="justify">
              {offer.description.substring(0, 256) + "..."}
              &nbsp;&nbsp;&nbsp;&nbsp;
              <Link display="inline-block" onClick={() => setDescriptionExpanded(true)}>
                Continue reading
              </Link>
            </Typography>
          </>
        )}
        <br />
        <div style={{ width: "100%", textAlign: "right" }}>
          <Button color="primary" variant="contained">
            Show Detailed Project Information
          </Button>
        </div>
      </div>
    </Root>
  );
}
