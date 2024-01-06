"use client";
import { styled } from "@mui/material";
import { BaseToolbar } from "./base-toolbar";

export const NavToolbar = styled(BaseToolbar)(({ theme }) => ({
  maxWidth: "xl",
  flex: 1,
  alignItems: "center",
}));
