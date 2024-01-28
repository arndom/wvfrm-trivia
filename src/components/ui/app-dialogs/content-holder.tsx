"use client";
import type {} from "@mui/material/themeCssVarsAugmentation";
import { Box, styled } from "@mui/material";

export const ContentHolder = styled(Box)(({ theme }) => ({
  minHeight: "50px",
  border: ` 0.843px solid ${theme.vars.palette.secondary.main}`,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
  minWidth: 300,

  [theme.breakpoints.down("md")]: {
    minWidth: "unset",
    width: "100%"
  }
}));
