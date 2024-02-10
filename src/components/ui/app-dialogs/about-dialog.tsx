import type {} from "@mui/material/themeCssVarsAugmentation";
import { Box, DialogProps, Typography } from "@mui/material";
import BaseDialog from "../base-dialog";
import { ContentHolder } from "./content-holder";
import GitHubIcon from "@/components/icons/github";
import InfoIcon from "@/components/icons/info";
import { ContentButton } from "./content-button";
import ContentHeader from "./content-header";
import ContentRoot from "./content-root";

const AboutDialog = (props: DialogProps) => {
  const { open, onClose, ...rest } = props;

  return (
    <BaseDialog open={open} onClose={onClose} {...rest}>
      <ContentRoot>
        <ContentHeader>About</ContentHeader>

        <ContentButton variant="contained">
          <GitHubIcon
            sx={{
              mr: 1,
              "& path": (theme) => ({
                fill: theme.vars.palette.primary.contrastText
              })
            }}
          />
          <Typography>Contribute to GameT</Typography>
        </ContentButton>

        <ContentHolder
          sx={{
            border: "none",
            background: (theme) => theme.vars.palette.secondary.main,
            color: (theme) => theme.vars.palette.secondary.contrastText
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <InfoIcon
              sx={{
                mr: 1,
                "& path": (theme) => ({
                  fill: theme.vars.palette.primary.contrastText
                })
              }}
            />
            <Typography
              sx={{
                "& a": {
                  fontStyle: "italic",
                  textDecoration: "none",
                  color: "inherit",
                  "&:hover": {
                    textDecoration: "underline"
                  }
                }
              }}
            >
              Created by <a href="#">arndom</a> & <a href="#">shereef</a>
            </Typography>
          </Box>
        </ContentHolder>
      </ContentRoot>
    </BaseDialog>
  );
};

export default AboutDialog;
