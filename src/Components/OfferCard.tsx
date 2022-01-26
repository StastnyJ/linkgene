import React from "react";
import styled from "@emotion/styled";
import { Stack, Typography } from "@mui/material";
import { Offer } from "../Types/Offers";

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
        <Typography variant="h6">{offer.title}</Typography>
        {showAuthor && (
          <>
            <div style={{ flexGrow: 1 }}>&nbsp;</div>
            <div style={{ textAlign: "right" }}>
              <Typography>{offer.requestor.institutionName}</Typography>
            </div>
          </>
        )}
      </Stack>
      <Typography color="GrayText">{offer.subtitle}</Typography>
      <br />
    </Root>
  );
}
