import type { Metadata, Viewport } from "next";
import ThemeRegistry from "@/components/theme-registry";
import AppContainer from "@/components/ui/app-container";
import AppNavBar from "@/components/ui/app-navbar";
import Background from "@/components/ui/background";
import HomePageFooter from "@/components/ui/pages/home/home-page-footer";
import { AppDialogProvider } from "@/components/ui/app-dialogs";
import "./global.css";

import getInitColorSchemeScript from "@mui/system/cssVars/getInitColorSchemeScript";
import { GameProvider } from "@/context/game/game-provider";
import AuthProvider from "@/context/auth";

export const metadata: Metadata = {
  title: "Waveform Trivia",
  description: "Play a game of triva curated from mkbhds' waveform podcast",
  keywords: ["wvfrm", "waveform", "trivia", "mkbhd", "podcast", "arndom"],
  metadataBase: new URL("https://wvfrm-trivia.vercel.app/"),
  openGraph: {
    title: "Waveform Trivia",
    description: "Play a game of triva curated from mkbhds' waveform podcast",
    url: "https://wvfrm-trivia.vercel.app/",
    siteName: "Waveform Trivia",
    locale: "en_US",
    type: "website",
    images: "/image.png"
  },
  twitter: {
    title: "Waveform Trivia",
    description: "Play a game of trivia curated from mkbhds' waveform podcast",
    card: "summary_large_image",
    images: "/image.png"
  }
};

export const viewport: Viewport = {
  themeColor: "#E5202B"
};

interface Props {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Props) {
  // The getInitColorSchemeScript() API prevents dark-mode flickering by returning a script that must be run before react.
  // https://github.com/mui/material-ui/issues/39010#issuecomment-1896674887
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
          <GameProvider>
            <AuthProvider>
              <AppDialogProvider>
                <AppNavBar />
                <AppContainer component="main" maxWidth="xl">
                  <Background />
                  <div className="main">{children}</div>
                </AppContainer>
                <HomePageFooter />
              </AppDialogProvider>
            </AuthProvider>
          </GameProvider>
        </ThemeRegistry>
      </body>
    </html>
  );
}
