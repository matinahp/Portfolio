import { createTheme } from "@mui/material/styles";

// Create Custom Theme
export const lightTheme = createTheme({
  direction: "rtl",
  palette: {
    mode: "light",
  },
  typography: {
    fontFamily: "tanha, vazir, roboto",
  },
});

export const darkTheme = createTheme({
  direction: "rtl",
  palette: {
    mode: "dark",
  },
  typography: {
    fontFamily: "tanha, vazir, roboto",
  },
});
