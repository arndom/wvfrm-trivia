"use client";
import Link from "next/link";
import { Box, useTheme } from "@mui/material";
import UserStatCard from "../user-stat-card";
import AppThemeSwitch from "../app-theme-switch";
import { NavAppbar } from "./nav-appbar";
import { NavLink } from "./nav-link";
import { Logo } from "./logo";
import { NavToolbar } from "./nav-toolbar";
import { GhIcon } from "./gh-icon";
import { NavProps, } from "./utils";

export const DesktopNav = (props: NavProps) => {
  const { navItems } = props;

  const theme = useTheme();

  return (
    <NavAppbar
      component="nav"
      sx={{
        display: { xs: "none", md: "flex" },
      }}
    >
      <NavToolbar>
        <Box
          sx={{
            display: "flex",
            flexBasis: "33.33%",
            alignItems: "center",
            gap: 1,
          }}
        >
          <UserStatCard />
          <AppThemeSwitch />
        </Box>

        <Box
          sx={{
            flexBasis: "33.33%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Logo {...{ mode: theme.palette.mode }} />
        </Box>

        <Box
          sx={{
            display: "flex" /* flexBasis: "33.33%"  */,
            justifyContent: "space-between",
            flex: 1 /* gap: 5 */,
          }}
        >
          {navItems.map((item) => (
            <NavLink
              key={item.label}
              color="text.primary"
              onClick={item.onClick}
            >
              {item.label}
            </NavLink>
          ))}

          <GhIcon />
        </Box>
      </NavToolbar>
    </NavAppbar>
  );
};
