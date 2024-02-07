"use client";

import type {} from "@mui/material/themeCssVarsAugmentation";
import { InputBase, styled } from "@mui/material";

export const SelectPageInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(3)
  },
  "& .MuiInputBase-input": {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.vars.palette.background.paper,
    border: "1px solid",

    borderColor: "rgba(0, 0, 0, 0.40)",
    [theme.getColorSchemeSelector("dark")]: {
      borderColor: "#111"
    },
    fontSize: 16,
    padding: "10px 16px",

    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow"
    ]),

    "&:focus": {
      boxShadow: `color-mix(in srgb, ${theme.vars.palette.primary.main} 25%, transparent) 0 0 0 0.2rem`,
      borderColor: theme.vars.palette.primary.main
    }
  }
}));
