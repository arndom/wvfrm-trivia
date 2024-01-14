"use client";
import { useState } from "react";
import Link from "next/link";
import {
  Box, IconButton,
  Drawer,
  useTheme
} from "@mui/material";
import MenuIcon from "../../icons/menu";
import AppThemeSwitch from "../app-theme-switch";
import CloseIcon from "../../icons/close";
import { NavAppbar } from "./nav-appbar";
import { NavLink } from "./nav-link";
import { Logo } from "./logo";
import { NavToolbar } from "./nav-toolbar";
import { GhIcon } from "./gh-icon";
import { drawerWidth, NavProps } from "./utils";

export const MobileNav = (props: NavProps) => {
  const { navItems } = props;

  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  return (
    <>
      <NavAppbar
        component="nav"
        sx={{
          display: { xs: "flex", md: "none" },
        }}
      >
        <NavToolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{
              ml: 0,
              display: "block",
              flexBasis: "10%",
              "& path": {
                fill: (theme) => theme.palette.text.primary,
              },
            }}
          >
            <MenuIcon />
          </IconButton>

          <Box
            sx={{
              flexBasis: "80%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Logo {...{ theme }} />
          </Box>
        </NavToolbar>
      </NavAppbar>

      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: "block",
            "& .MuiDrawer-paper": {
              backgroundColor: (theme) => theme.palette.background.paper,
              boxSizing: "border-box",
              backgroundImage: "unset",
              width: drawerWidth,
            },
          }}
        >
          <Box
            onClick={handleDrawerToggle}
            sx={{
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 4,
              py: 8,
              position: "relative",
            }}
          >
            <CloseIcon
              sx={{
                position: "absolute",
                right: 24,
                top: 24,
                width: "0.65em",
                height: "0.65em",

                "& path": (theme) => ({
                  fill: theme.palette.text.primary,
                }),
              }} />

            <Logo {...{ theme }} />

            <Box
              sx={{
                gap: 3,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
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
            </Box>

            <AppThemeSwitch />

            <GhIcon />
          </Box>
        </Drawer>
      </nav>
    </>
  );
};
