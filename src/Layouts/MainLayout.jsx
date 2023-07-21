//theme
import { ThemeProvider } from "@mui/material/styles";
import { lightTheme, darkTheme } from "./theme";
//emotion
import { CacheProvider } from "@emotion/react";
//create cache
import createCache from "@emotion/cache";
//Helmet
import { HelmetProvider } from "react-helmet-async";
//prefixer
import { prefixer } from "stylis";
//plugin
import rtlPlugin from "stylis-plugin-rtl";
//Grid
import Grid from "@mui/material/Unstable_Grid2";
const MainLayout = ({ children, mode }) => { 
  const theme = mode === "dark" ? darkTheme : lightTheme;

  // Create RTL Cache
  const cacheRTL = createCache({
    key: "muirtl",
    stylisPlugins: [prefixer, rtlPlugin],
  });

  return (
    <CacheProvider value={cacheRTL}>
      <ThemeProvider theme={theme}>
        <HelmetProvider>
          {/* Grid System */}
          <Grid container sx={{ height: "100vh" }}>
            {children}
          </Grid>
        </HelmetProvider>
      </ThemeProvider>
    </CacheProvider>
  );
};

export default MainLayout;
