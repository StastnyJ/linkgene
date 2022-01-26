import React, { useState } from "react";
import styled from "@emotion/styled";
import { Checkbox, Typography } from "@mui/material";

const Root = styled.div({
  width: "100%",
  height: "50vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
});

export default function FinnishProposal() {
  const [asConcept, setAsConcept] = useState(false);

  return (
    <Root>
      <div style={{ width: "100%" }}>
        <div onClick={() => setAsConcept(false)} style={{ display: "flex", cursor: "pointer", alignItems: "center" }}>
          <Checkbox color="primary" checked={!asConcept} /> <Typography>Save and publish project request</Typography>
        </div>
      </div>
      <div style={{ width: "100%" }}>
        <div onClick={() => setAsConcept(true)} style={{ display: "flex", cursor: "pointer", alignItems: "center" }}>
          <Checkbox color="primary" checked={asConcept} onClick={() => setAsConcept(true)} />{" "}
          <Typography>Save as concept</Typography>
        </div>
      </div>
    </Root>
  );
}
