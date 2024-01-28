import { Box, styled } from "@mui/material";

const ContentRoot = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(2)
})) as typeof Box;

export default ContentRoot;
