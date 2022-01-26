import React from "react";
import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "@mui/material";

export default function LargeDiscordButton() {
  const theme = useTheme();

  const Root = styled.div({
    // backgroundColor: "#7289DA",
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    display: "flex",
    flexDirection: "row",
    borderRadius: 16,
    height: 102,
    width: "90%",
    marginLeft: "5%",
    cursor: "pointer",
    position: "relative",
    justifyContent: "right",
    alignItems: "center",
    "&:hover": {
      opacity: 0.8,
    },
  });

  const Text = styled.div({
    font: "Roboto, arial, sans-serif",
    fontSize: 34,
    width: "100%",
    textAlign: "center",
    textTransform: "uppercase",
  });

  return (
    <Root onClick={() => window.open("https://discord.gg/qT3FuCha", "_blank")}>
      <div style={{ position: "absolute", top: 42, left: 14 }} className="fa-layers fa-fw">
        <FontAwesomeIcon size="5x" icon={faCircle} />
        <FontAwesomeIcon size="4x" color={theme.palette.primary.main} transform="shrink-6" icon={faDiscord} />
      </div>
      <Text>Join the Community on Discord</Text>
    </Root>
  );
}
