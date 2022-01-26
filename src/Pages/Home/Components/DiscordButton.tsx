import React from "react";
import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import { useTheme } from "@mui/material";

export default function DiscordButton() {
  const theme = useTheme();
  const Root = styled.div({
    backgroundColor: theme.palette.primary.main,
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

  return (
    <Root onClick={() => window.open("https://discord.gg/qT3FuCha", "_blank")}>
      <FontAwesomeIcon icon={faDiscord} />
      Join the community
    </Root>
  );
}
