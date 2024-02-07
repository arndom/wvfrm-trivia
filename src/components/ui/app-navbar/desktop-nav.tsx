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
import { useEffect, useState } from "react";
import { auth } from "@/utils/firebase";
import { User, onAuthStateChanged } from "firebase/auth";

export const DesktopNav = (props: NavProps) => {
  const { navItems } = props;
  const [_, setUser] = useState<User | null>(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, []);

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
          <UserStatCard />
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
            display: "flex" /* flexBasis: "33.33%"  */,
            justifyContent: "space-between",
            flex: 1 /* gap: 5 */
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
