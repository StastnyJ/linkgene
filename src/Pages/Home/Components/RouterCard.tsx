import React from "react";
import styled from "@emotion/styled";
import { Typography, useTheme } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

interface IProps {
  text: string;
  icon: IconDefinition;
  onClick: () => void;
}

export default function RouterCard({ text, onClick, icon }: IProps) {
  const theme = useTheme();

  const Root = styled.div({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 16,
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    padding: 16,
    paddingLeft: 8,
    width: 400,
    cursor: "pointer",
    "&:hover": {
      opacity: 0.8,
    },
  });

  const IconContainer = styled.div({
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.contrastText,
    color: theme.palette.primary.main,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "50%",
    width: 128,
    height: 128,
  });

  return (
    <Root onClick={onClick}>
      <IconContainer>
        <FontAwesomeIcon size="3x" icon={icon} />
      </IconContainer>
      <Typography variant="h4">{text}</Typography>
    </Root>
  );
}
