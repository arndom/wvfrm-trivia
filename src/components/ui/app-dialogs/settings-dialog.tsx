import { DialogProps, Switch, Typography } from "@mui/material";
import BaseDialog from "../base-dialog";
import { ContentHolder } from "./content-holder";
import ContentHeader from "./content-header";
import ContentRoot from "./content-root";

const SettingsDialog = (props: DialogProps) => {
  const { open, onClose, ...rest } = props;

  return (
    <BaseDialog open={open} onClose={onClose} {...rest}>
      <ContentRoot>
        <ContentHeader>Settings</ContentHeader>

        <ContentHolder>
          <Typography>Sound Effects</Typography>
          <Switch defaultChecked />
        </ContentHolder>

        <ContentHolder className="disabled">
          <Typography sx={{ opacity: 0.6 }}>Push Notifications</Typography>
          <Switch disabled />
        </ContentHolder>
      </ContentRoot>
    </BaseDialog>
  );
};

export default SettingsDialog;
