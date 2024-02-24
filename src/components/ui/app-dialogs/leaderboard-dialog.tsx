import type {} from "@mui/material/themeCssVarsAugmentation";
import { Box, DialogProps, Typography } from "@mui/material";
import BaseDialog from "../base-dialog";
import UserStatCard from "../user-stat-card";
import ContentHeader from "./content-header";
import ContentRoot from "./content-root";
import { useDispatch, useSelector } from "react-redux";
import { RootState, setLeaderboard } from "@/context/game/redux";
import { useEffect } from "react";
import { fetchLeaderboard } from "@/utils/firebase";
import { UserT } from "@/context/types";

const LeaderboardDialog = (props: DialogProps) => {
  const { open, onClose, ...rest } = props;

  const dispatch = useDispatch();
  const { user, leaderboard } = useSelector((state: RootState) => state.game);

  useEffect(() => {
    if (!user) return;

    const text = async () => {
      const res = await fetchLeaderboard(user.uid);
      if (res) {
        const _res = res as UserT[];
        dispatch(setLeaderboard(_res.sort((a, b) => b.points - a.points)));
      }
    };

    text();
  }, [user, dispatch]);

  return (
    <BaseDialog open={open} onClose={onClose} {...rest}>
      <ContentRoot sx={{ gap: 4 }}>
        <ContentHeader>Leaderboard</ContentHeader>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,

            "& .plus": {
              fontSize: "1.15rem"
            }
          }}
        >
          {leaderboard.length === 0 && (
            <Typography color="primary" textAlign="center">
              No data
            </Typography>
          )}

          {leaderboard.map((leaderboardUser, ind) => {
            const current = leaderboardUser.uid === user?.uid;

            return (
              <Box key={ind} sx={{ display: "flex" }}>
                <Typography
                  className="plus"
                  color={current ? "primary" : "text.primary"}
                >
                  +
                </Typography>
                <Box sx={{ margin: { xs: "8px 16px", sm: "8px 24px" } }}>
                  <UserStatCard user={leaderboardUser} />
                </Box>
                <Typography
                  className="plus"
                  color={current ? "primary" : "text.primary"}
                >
                  +
                </Typography>
              </Box>
            );
          })}
        </Box>
      </ContentRoot>
    </BaseDialog>
  );
};

export default LeaderboardDialog;
