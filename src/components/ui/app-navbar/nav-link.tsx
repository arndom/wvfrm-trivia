"use client";
import { Typography, styled } from "@mui/material";

export const NavLink = styled(Typography)(({ theme }) => ({
  fontWeight: 500,
  textDecoration: "none",
  "&:hover": {
    color: "primary.main",
  },
})) as typeof Typography;
