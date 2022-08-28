import { createTheme, responsiveFontSizes } from "@mui/material";

const theme = responsiveFontSizes(
  createTheme({
    palette: {
      common: {
        white: "#fff",
      },
      secondary: {
        main: "#fff",
      },
    },
  })
);

export default theme;
