import React from "react";
import { SwipeableDrawer, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { Home } from "@mui/icons-material";

interface IProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export default function RightDrawer({ open, setOpen }: IProps) {
  return (
    <SwipeableDrawer anchor="right" open={open} onClose={() => setOpen(false)} onOpen={() => setOpen(true)}>
      <List style={{ flexGrow: 1 }}>
        <ListItem button onClick={() => {}}>
          <ListItemIcon>
            <Home />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
      </List>
    </SwipeableDrawer>
  );
}
