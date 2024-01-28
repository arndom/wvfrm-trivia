import type { Metadata } from "next";
import ThemeRegistry from "@/components/theme-registry";
import AppContainer from "@/components/ui/app-container";
import AppNavBar from "@/components/ui/app-navbar";
import Background from "@/components/ui/background";
import HomePageFooter from "@/components/ui/home-page-footer";
import { AppDialogProvider } from "@/components/ui/app-dialogs";
import "./global.css";

export const metadata: Metadata = {
  title: "WVFRM Trivia",
  description: "Play a game of triva curated from the waveform podcast"
};

interface Props {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body>
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
