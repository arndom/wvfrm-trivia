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
import { navItems } from "./utils";

export const DesktopNav = () => {
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
          <Logo {...{ theme }} />
        </Box>

        <Box
          sx={{
            display: "flex" /* flexBasis: "33.33%"  */,
            justifyContent: "space-between",
            flex: 1 /* gap: 5 */,
          }}
        >
          {navItems.map((item) => (
            <NavLink key={item} component={Link} href="#" color="text.primary">
              {item}
            </NavLink>
          ))}

          <GhIcon />
        </Box>
      </NavToolbar>
    </NavAppbar>
  );
};
