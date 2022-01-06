import React from "react";
import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";

const Root = styled.div({
  backgroundColor: "#7289DA",
  color: "white",
  display: "flex",
  borderRadius: 16,
  font: "Roboto, arial, sans-serif",
  padding: 12,
  margin: 12,
  width: 172,
  cursor: "pointer",
  justifyContent: "space-between",
  "&:hover": {
    opacity: 0.8,
  },
});

export default function DiscordButton() {
  return (
    <Root>
      <FontAwesomeIcon icon={faDiscord} />
      Join the community
    </Root>
  );
}
