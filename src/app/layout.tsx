import type { Metadata } from 'next'
import ThemeRegistry from '@/components/theme-registry'
import AppContainer from '@/components/ui/app-container';
import AppNavBar from '@/components/ui/app-navbar';
import BackgroundVideo from '@/components/ui/background-video';
import HomeFooter from '@/components/ui/home-footer';

export const metadata: Metadata = {
  title: '',
  description: '',
}

interface Props {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry>
          <AppNavBar />
          <AppContainer component="main" maxWidth="xl">
            <BackgroundVideo />
            <div className="main">
              {children}
            </div>
          </AppContainer>
          <HomeFooter />
        </ThemeRegistry>
      </body>
    </html>
  );
}
