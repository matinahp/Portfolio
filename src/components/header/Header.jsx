import { AppBar, Box, Toolbar, useScrollTrigger } from "@mui/material";
import { cloneElement } from "react";
import { GitHub, Instagram, Telegram, LinkedIn } from "@mui/icons-material";

const Header = () => {
  function ElevationScroll(props) {
    const { children } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,
    });

    return cloneElement(children, {
      elevation: trigger ? 4 : 0,
    });
  }

  return (
    <ElevationScroll>
      <AppBar>
        <Toolbar>
          <Box>
            <GitHub />
            <Instagram />
            <Telegram />
            <LinkedIn />
          </Box>
        </Toolbar>
      </AppBar>
    </ElevationScroll>
  );
};

export default Header;
