"use client";
import type {} from "@mui/material/themeCssVarsAugmentation";
import { AppBar, styled } from "@mui/material";

export const NavAppbar = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.vars.palette.background.paper,
  color: theme.vars.palette.text.primary,
  boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.03)",
  backgroundImage: "unset",
  justifyContent: "center",
  flexDirection: "row"
})) as typeof AppBar;
