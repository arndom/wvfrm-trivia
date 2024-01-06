"use client";

import {
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { BaseToolbar } from "./base-toolbar";
import { DesktopNav } from "./desktop-nav";
import { MobileNav } from "./mobile-nav";

const AppNavBar = () => {
  return (
    <header>
      <DesktopNav />
      <MobileNav/>

      {/* rounds to approx 72px height */}
      <BaseToolbar />
    </header>
  );
};

export default AppNavBar;
