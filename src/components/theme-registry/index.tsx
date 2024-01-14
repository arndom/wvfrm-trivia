'use client';
import * as React from 'react';
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter"

import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from './theme-context';

export default function ThemeRegistry({ children }: { children: React.ReactNode }) {
  return (
    <AppRouterCacheProvider>
      <ThemeProvider>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        {children}
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
}