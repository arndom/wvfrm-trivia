import type {} from "@mui/material/themeCssVarsAugmentation";
import { Box, DialogProps } from "@mui/material";
import BaseDialog from "../base-dialog";
import PlusIcon from "@/components/icons/plus";
import UserStatCard from "../user-stat-card";
import ContentHeader from "./content-header";
import ContentRoot from "./content-root";

const LeaderboardDialog = (props: DialogProps) => {
  const { open, onClose, ...rest } = props;

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
              fontSize: "0.5rem",

              "& path": {
                fill: (theme) => theme.vars.palette.text.primary,
                stroke: (theme) => theme.vars.palette.text.primary
              }
            }
          }}
        >
          {Array(10)
            .fill(5)
            .map((item, ind) => (
              <Box key={ind} sx={{ display: "flex" }}>
                <PlusIcon className="plus" />
                <Box sx={{ margin: { xs: "8px 16px", sm: "8px 24px" } }}>
                  <UserStatCard />
                </Box>
                <PlusIcon className="plus" />
              </Box>
            ))}
        </Box>
      </ContentRoot>
    </BaseDialog>
  );
};

export default LeaderboardDialog;
