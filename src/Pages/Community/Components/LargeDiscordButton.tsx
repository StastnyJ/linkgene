import React from "react";
import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

const Root = styled.div({
  backgroundColor: "#7289DA",
  color: "white",
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

export default function LargeDiscordButton() {
  return (
    <Root>
      <div style={{ position: "absolute", top: 42, left: 14 }} className="fa-layers fa-fw">
        <FontAwesomeIcon size="5x" icon={faCircle} />
        <FontAwesomeIcon size="4x" color="#7289DA" transform="shrink-6" icon={faDiscord} />
      </div>
      <Text>Join the Community on Discord</Text>
    </Root>
  );
}
