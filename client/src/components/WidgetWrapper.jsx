import { Box } from "@mui/material";
import { styled } from "@mui/material";

const WidgetWrapper = styled(Box)(({ theme }) => ({
  padding: "1rem 1.rem 0.75rem",
  backgroundColor: theme.palette.background.alt,
  borderRadius: "0.75rem",
}));

export default WidgetWrapper;
