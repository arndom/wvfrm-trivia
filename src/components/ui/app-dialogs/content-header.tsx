import { Typography, styled } from '@mui/material'
import Headertext from '../header-text';

const ContentHeader = styled(Headertext)(({ theme }) => ({
  fontSize: "3rem",
  lineHeight: "3rem",
  [theme.breakpoints.down("xl")]: {
    fontSize: "2.75rem",
    lineHeight: "2.75rem",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "2rem",
    lineHeight: "2rem",
  },
})) as typeof Typography;

export default ContentHeader