"use client";
import { Toolbar, styled } from "@mui/material";

export const BaseToolbar = styled(Toolbar)(({ theme }) => ({
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(1)
}));
