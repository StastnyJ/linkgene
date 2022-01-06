import styled from "@emotion/styled";
import { TableCell, Theme } from "@mui/material";

export const RightCell = styled(TableCell)({
  textAlign: "right",
});

export const LGButton = styled.div(({ theme }: { theme: Theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  borderRadius: 16,
  font: "Roboto, arial, sans-serif",
  padding: 12,
  margin: 12,
  width: 172,
  cursor: "pointer",
  textAlign: "center",
  "&:hover": {
    opacity: 0.8,
  },
}));
