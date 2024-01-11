"use client";
import { Button, styled } from "@mui/material";

export const ContentButton = styled(Button)((({ theme }) => ({
  clipPath: "unset",
  minHeight: 50,
  minWidth: 300,
  justifyContent: "flex-start",
  textTransform: "none",

  [theme.breakpoints.down("md")]: {
    minWidth: "unset",
  }
})));
