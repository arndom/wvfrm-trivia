"use client";
import { styled } from "@mui/material";
import GitHubIcon from "../../icons/github";

export const GhIcon = styled(GitHubIcon)(({ theme }) => ({
  "& path": {
    fill: theme.palette.text.primary,
  },
}));
