"use client";

import React, {
  ReactNode,
  createContext,
  useContext,
  useMemo,
  useState
} from "react";
import SettingsDialog from "./settings-dialog";
import AboutDialog from "./about-dialog";
import LeaderboardDialog from "./leaderboard-dialog";
import UpdateUsernameDialog from "./update-username-dialog";

type Props = {
  children: ReactNode;
};

type AppDialogT = {
  onOpenLeaderboard: () => void;
  onOpenAbout: () => void;
  onOpenSettings: () => void;
  onOpenUsername: () => void;
};

const initialValues = {
  onOpenLeaderboard: () => {},
  onOpenAbout: () => {},
  onOpenSettings: () => {},
  onOpenUsername: () => {}
};

const AppDialogContext = createContext<AppDialogT>(initialValues);

export const AppDialogProvider = (props: Props) => {
  const [openLeaderboardDialog, setOpenLeaderboardDialog] = useState(false);
  const [openAboutDialog, setOpenAboutDialog] = useState(false);
  const [openSettingsDialog, setOpenSettingsDialog] = useState(false);
  const [usernameDialog, setUsernameDialog] = useState(false);

  const handleLeaderboardDialogClose = () => setOpenLeaderboardDialog(false);
  const handleAboutDialogClose = () => setOpenAboutDialog(false);
  const handleSettingsDialogClose = () => setOpenSettingsDialog(false);
  const handleUsernameDialogClose = () => setUsernameDialog(false);

  const onOpenLeaderboard = () => setOpenLeaderboardDialog(true);
  const onOpenAbout = () => setOpenAboutDialog(true);
  const onOpenSettings = () => setOpenSettingsDialog(true);
  const onOpenUsername = () => setUsernameDialog(true);

  const values = useMemo(
    () => ({
      onOpenLeaderboard,
      onOpenAbout,
      onOpenSettings,
      onOpenUsername
    }),
    []
  );

  return (
    <AppDialogContext.Provider value={values}>
      {props.children}
      <SettingsDialog
        open={openSettingsDialog}
        onClose={handleSettingsDialogClose}
      />
      <AboutDialog open={openAboutDialog} onClose={handleAboutDialogClose} />
      <LeaderboardDialog
        open={openLeaderboardDialog}
        onClose={handleLeaderboardDialogClose}
      />
      <UpdateUsernameDialog
        open={usernameDialog}
        onClose={handleUsernameDialogClose}
      />
    </AppDialogContext.Provider>
  );
};

export const useAppDialogs = () => useContext(AppDialogContext);
