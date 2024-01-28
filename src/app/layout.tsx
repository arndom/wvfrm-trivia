import type { Metadata } from "next";
import ThemeRegistry from "@/components/theme-registry";
import AppContainer from "@/components/ui/app-container";
import AppNavBar from "@/components/ui/app-navbar";
import Background from "@/components/ui/background";
import HomePageFooter from "@/components/ui/home-page-footer";
import { AppDialogProvider } from "@/components/ui/app-dialogs";
import "./global.css";

import getInitColorSchemeScript from "@mui/system/cssVars/getInitColorSchemeScript";

export const metadata: Metadata = {
  title: "WVFRM Trivia",
  description: "Play a game of triva curated from the waveform podcast"
};

interface Props {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Props) {
  // The getInitColorSchemeScript() API prevents dark-mode flickering by returning a script that must be run before react.
  const baseSchemeOptions = {
    // These properties are normally set when importing from @mui/material,
    // but we have to set manually because we are importing from @mui/system.
    attribute: "data-mui-color-scheme",
    modeStorageKey: "mui-mode",
    colorSchemeStorageKey: "mui-color-scheme"
  };

  return (
    <html lang="en">
      <body>
        {getInitColorSchemeScript({
          ...baseSchemeOptions,
          defaultMode: "system"
        })}
        <ThemeRegistry>
          <AppDialogProvider>
            <AppNavBar />
            <AppContainer component="main" maxWidth="xl">
              <Background />
              <div className="main">{children}</div>
            </AppContainer>
            <HomePageFooter />
          </AppDialogProvider>
        </ThemeRegistry>
      </body>
    </html>
  );
}
