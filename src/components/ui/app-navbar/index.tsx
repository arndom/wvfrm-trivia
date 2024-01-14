"use client";

import { useRouter } from "next/navigation";
import { useAppDialogs } from "../app-dialogs";
import { BaseToolbar } from "./base-toolbar";
import { DesktopNav } from "./desktop-nav";
import { MobileNav } from "./mobile-nav";

const AppNavBar = () => {
  const {
    onOpenLeaderboard,
    onOpenAbout,
    onOpenSettings,
  } = useAppDialogs();

  const router = useRouter();
  const handlePlayClick = () => router.push("/select")
;
  const navItems = [
    {
      label: "Play",
      onClick: handlePlayClick
    },
    {
      label: "Leaderboard",
      onClick: onOpenLeaderboard
    },
    {
      label: "About",
      onClick: onOpenAbout
    },

    {
      label: "Settings",
      onClick: onOpenSettings
    },
  ];

  return (
    <header>
      <DesktopNav {...{ navItems }} />
      <MobileNav {...{ navItems }} />

      {/* rounds to approx height md: 104px, below: 64px (toolbar min-height)   */}
      <BaseToolbar sx={{ height: { xs: "64px", md: "104px" } }} />
    </header>
  );
};

export default AppNavBar;
