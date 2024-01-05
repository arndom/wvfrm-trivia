"use client";
import { useState } from "react";

import Link from "next/link";
import {
  Box,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  useTheme,
} from "@mui/material";
import GitHubIcon from "../icons/github";
import Image from "next/image";
import MenuIcon from "../icons/menu";

const drawerWidth = 250;
const navItems = ["Play", "Leaderboard", "About", "Settings"];

const AppNavBar = () => {
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <header>
      <AppBar
        component="nav"
        sx={{
          backgroundColor: (theme) => theme.palette.background.paper,
          color: (theme) => theme.palette.text.primary,
          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.03)",
          backgroundImage: "unset",
          justifyContent: "center",
          flexDirection: "row",
        }}
      >
        <Toolbar
          sx={{
            maxWidth: "xl",
            flex: 1,
            alignItems: "center",
            py: { xs: 1, lg: 2 },
          }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{
              ml: 0,
              display: { md: "none" },
              flexBasis: "10%",
              "& path": {
                fill: (theme) => theme.palette.text.primary,
              },
            }}
          >
            <MenuIcon />
          </IconButton>

          <Typography
            variant="h6"
            component="div"
            sx={{ display: { xs: "none", md: "flex" }, flexBasis: "33.33%" }}
          >
            MUI
          </Typography>

          <Box
            sx={{
              flexBasis: { xs: "80%", md: "33.33%" },
              display: "flex",
              justifyContent: "center",
              "& img": {
                width: { xs: 35, md: 40 },
                height: { xs: 35, md: 40 },
              },
            }}
          >
            <Image
              src={
                theme.palette.mode === "dark"
                  ? "/logo-dark.webp"
                  : "/logo-light.webp"
              }
              width={40}
              height={40}
              alt="logo"
            />
          </Box>

          <Box
            sx={{
              display: { xs: "none", md: "flex" } /* flexBasis: "33.33%"  */,
              justifyContent: "space-between",
              flex: 1 /* gap: 5 */,
            }}
          >
            {navItems.map((item) => (
              <Typography
                key={item}
                component={Link}
                href="#"
                color="text.primary"
                sx={{
                  fontWeight: 500,
                  textDecoration: "none",
                  "&:hover": {
                    color: "primary.main"
                  }
                }}
              >
                {item}
              </Typography>
            ))}

            <GitHubIcon
              sx={{
                "& path": (theme) => ({
                  fill: theme.palette.text.primary,
                }),
              }}
            />
          </Box>
        </Toolbar>
      </AppBar>

      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>

      {/* <Toolbar sx={{ mt: 9,
            py: { xs: 1, lg: 2}
          }} /> */}
    </header>
  );
};

export default AppNavBar;
