"use client";

import { Box } from "@mui/material";
import UserStatCard from "../user-stat-card";
import AppThemeSwitch from "../app-theme-switch";
import { NavAppbar } from "./nav-appbar";
import { NavLink } from "./nav-link";
import { Logo } from "./logo";
import { NavToolbar } from "./nav-toolbar";
import { GhIcon } from "./gh-icon";
import { NavProps } from "./utils";
import { useSelector } from "react-redux";
import { RootState } from "@/context/redux";

export const DesktopNav = (props: NavProps) => {
  const { navItems } = props;
  const { user } = useSelector((state: RootState) => state.game);

  return (
    <NavAppbar
      component="nav"
      sx={{
        display: { xs: "none", md: "flex" }
      }}
    >
      <NavToolbar sx={{ maxWidth: "xl" }}>
        <Box
          sx={{
            display: "flex",
            flexBasis: "33.33%",
            alignItems: "center",
            gap: 1
          }}
        >
          <UserStatCard {...{ user }} />
          <AppThemeSwitch />
        </Box>

        <Box
          sx={{
            flexBasis: "33.33%",
            display: "flex",
            justifyContent: "center"
          }}
        >
          <Logo />
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flex: 1
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
