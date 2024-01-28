"use client";
import type {} from "@mui/material/themeCssVarsAugmentation";
import { styled } from "@mui/material";
import GitHubIcon from "../../icons/github";

export const GhIcon = styled(GitHubIcon)(({ theme }) => ({
  "& path": {
    fill: theme.vars.palette.text.primary
  }
}));
