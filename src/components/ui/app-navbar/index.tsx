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

      {/* rounds to approx height md: 104px, below: 64px (toolbar min-height)   */}
      <BaseToolbar sx={{ height: { xs: "64px", md: "104px" } }} />
    </header>
  );
};

export default AppNavBar;
