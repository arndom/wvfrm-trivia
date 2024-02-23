"use client";
import type {} from "@mui/material/themeCssVarsAugmentation";
import { Typography, styled } from "@mui/material";

export const NavLink = styled(Typography)(({ theme }) => ({
  fontWeight: 500,
  fontSize: "1rem !important",
  textDecoration: "none",
  transition: "all 150ms",

  "&:hover": {
    color: theme.vars.palette.primary.main,
    cursor: "pointer"
  }
})) as typeof Typography;
