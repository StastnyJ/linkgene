import React from "react";
import styled from "@emotion/styled";
import { TrendingUp, Verified } from "@mui/icons-material";
import { Chip, LinearProgress, Stack, Tooltip, Typography } from "@mui/material";
import { Offer } from "../Types/Offers";
import CategoryIcon from "./CategoryIcon";

interface IProps {
  offer: Offer;
  hideAuthor?: boolean;
  onClick: () => void;
}

const Root = styled.div({
  borderRadius: 4,
  boxShadow: "1px -1px #c7c7c7",
  border: "1px solid #b4b4b4",
  position: "relative",
  width: "100%",
  padding: 8,
  marginTop: 12,
  marginBottom: 12,
  cursor: "pointer",
});

export default function ({ offer, onClick, hideAuthor }: IProps) {
  const showAuthor = hideAuthor !== true;

  return (
    <Root onClick={onClick}>
      <Stack direction="row">
        <div>
          <Typography variant="h6">{offer.title}</Typography>
          <Typography color="GrayText">{offer.subtitle}</Typography>
        </div>
        {showAuthor && (
          <>
            <div style={{ flexGrow: 1 }}>&nbsp;</div>
            <div style={{ textAlign: "right" }}>
              <Typography>
                {offer.authors[0].name} {offer.authors[0].surname}
              </Typography>
              <Typography color="GrayText" variant="caption">
                {offer.authors[0].institution}
              </Typography>
            </div>
          </>
        )}
      </Stack>
      <br />
      <Stack direction="row" alignItems="center">
        {offer.categories.map((c) => (
          <CategoryIcon category={c} />
        ))}
        <div style={{ flexGrow: 1 }}>&nbsp;</div>
        <Typography variant="h4" component="span">
          {offer.tokenPrice}
        </Typography>
        <Typography variant="h6">&nbsp;&nbsp;€ / token&nbsp;&nbsp;</Typography>
      </Stack>
      <br />
      <Stack direction="row" alignItems="flex-end">
        {offer.verified && <Chip color="success" label="Verified" icon={<Verified />} />} &nbsp;&nbsp;
        {offer.earlyInvestment && (
          <Tooltip title="Be one of the first investors and buy more valuable tokens for better prices">
            <Chip color="primary" label="Early invest" icon={<TrendingUp />} />
          </Tooltip>
        )}
        <div style={{ flexGrow: 1 }}>&nbsp;</div>
        <div style={{ textAlign: "right" }}>
          <LinearProgress
            variant="determinate"
            value={(100 * (offer.tokensTotal - offer.tokensAvailable)) / offer.tokensTotal}
            color="primary"
            style={{ width: 180 }}
          />
          <Typography variant="caption" color="GrayText">
            {offer.tokensTotal - offer.tokensAvailable}/{offer.tokensTotal}
          </Typography>
        </div>
      </Stack>
    </Root>
  );
}
