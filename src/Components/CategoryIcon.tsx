import React from "react";
import { Avatar, Tooltip } from "@mui/material";
import CategoryPlainIcon from "./CategoryPlainIcon";

interface IProps {
  category: string;
}

export default function ({ category }: IProps) {
  return (
    <>
      <Tooltip title={category}>
        <Avatar>
          <CategoryPlainIcon category={category} />
        </Avatar>
      </Tooltip>
      &nbsp;
    </>
  );
}
