"use client";

import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState
} from "react";
import SettingsDialog from "./settings-dialog";
import AboutDialog from "./about-dialog";
import LeaderboardDialog from "./leaderboard-dialog";
import { useDispatch } from "react-redux";
import { handleAnonSignIn } from "@/utils/firebase";
import { updateUser } from "@/context/redux";

type Props = {
  children: ReactNode;
};

type AppDialogT = {
  onOpenLeaderboard: () => void;
  onOpenAbout: () => void;
  onOpenSettings: () => void;
};

const initialValues = {
  onOpenLeaderboard: () => {},
  onOpenAbout: () => {},
  onOpenSettings: () => {}
};

const AppDialogContext = createContext<AppDialogT>(initialValues);

export const AppDialogProvider = (props: Props) => {
  const dispatch = useDispatch();

  const [openLeaderboardDialog, setOpenLeaderboardDialog] = useState(false);
  const [openAboutDialog, setOpenAboutDialog] = useState(false);
  const [openSettingsDialog, setOpenSettingsDialog] = useState(false);

  const handleLeaderboardDialogClose = () => setOpenLeaderboardDialog(false);
  const handleAboutDialogClose = () => setOpenAboutDialog(false);
  const handleSettingsDialogClose = () => setOpenSettingsDialog(false);

  const onOpenLeaderboard = () => setOpenLeaderboardDialog(true);
  const onOpenAbout = () => setOpenAboutDialog(true);
  const onOpenSettings = () => setOpenSettingsDialog(true);

  const values = useMemo(
    () => ({
      onOpenLeaderboard,
      onOpenAbout,
      onOpenSettings
    }),
    []
  );

  useEffect(() => {
    const signIn = async () => {
      const res = await handleAnonSignIn();

      if (res) {
        dispatch(updateUser(res));
      }
    };

    signIn();
  }, [dispatch]);

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
    </AppDialogContext.Provider>
  );
};

export const useAppDialogs = () => useContext(AppDialogContext);
