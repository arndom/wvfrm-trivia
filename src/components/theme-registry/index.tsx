"use client";
import * as React from "react";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";

import CssBaseline from "@mui/material/CssBaseline";

import { Experimental_CssVarsProvider as ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme-config";

type Props = {
  children: React.ReactNode;
};

export default function ThemeRegistry({ children }: Props) {
  return (
    <AppRouterCacheProvider>
      <ThemeProvider theme={theme} defaultMode="system">
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        {children}
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
}
