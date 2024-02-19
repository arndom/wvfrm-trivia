"use client";

import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { resetGame } from "@/context/game/redux";
import { useAppDialogs } from "../app-dialogs";
import { BaseToolbar } from "./base-toolbar";
import { DesktopNav } from "./desktop-nav";
import { MobileNav } from "./mobile-nav";

const AppNavBar = () => {
  const { onOpenLeaderboard, onOpenAbout, onOpenSettings, onOpenUsername } =
    useAppDialogs();

  const router = useRouter();
  const dispatch = useDispatch();

  const handlePlay = () => {
    router.push("/select");
    dispatch(resetGame());
  };

  const navItems = [
    {
      label: "Play",
      onClick: handlePlay
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
    }
  ];

  return (
    <header>
      <DesktopNav {...{ navItems, onOpenUsername }} />
      <MobileNav {...{ navItems, onOpenUsername }} />

      {/* rounds to approx height md: 104px, below: 64px (toolbar min-height)   */}
      <BaseToolbar sx={{ height: { xs: "64px", md: "104px" } }} />
    </header>
  );
};

export default AppNavBar;
