import React from "react";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Avatar, Typography, useTheme } from "@mui/material";

interface IProps {
  icon: IconDefinition;
  label: string;
  text: string;
}

const Root = styled.div({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});

export default function ({ icon, label, text }: IProps) {
  const theme = useTheme();

  const IconAvatar = styled(Avatar)({
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
    width: 128,
    height: 128,
  });

  return (
    <Root>
      <IconAvatar>
        <FontAwesomeIcon size="3x" color="white" icon={icon} />
      </IconAvatar>
      <br />
      <Typography component="h1" variant="h5">
        {label}
      </Typography>
      <Typography>{text}</Typography>
    </Root>
  );
}
