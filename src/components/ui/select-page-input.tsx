"use client";
import { InputBase, alpha, styled } from "@mui/material";

export const SelectPageInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(3)
  },
  "& .MuiInputBase-input": {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.background.paper,
    border: "1px solid",
    borderColor:
      theme.palette.mode === "light" ? "rgba(0, 0, 0, 0.40)" : "#111",
    fontSize: 16,
    padding: "10px 16px",

    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow"
    ]),

    "&:focus": {
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main
    }
  }
}));
