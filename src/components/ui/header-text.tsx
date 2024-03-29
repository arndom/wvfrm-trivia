import { Typography, styled } from "@mui/material";

const Headertext = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  fontWeight: 900,
  letterSpacing: "-2px",
  textTransform: "uppercase",
  fontStyle: "italic",
  fontSize: "6rem",
  [theme.breakpoints.down("xl")]: {
    fontSize: "5rem"
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "2.75rem"
  }
})) as typeof Typography;

export default Headertext;
