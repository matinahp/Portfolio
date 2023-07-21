import { useContext } from "react";
import { useTheme } from "@mui/material/styles";
import { Box, Fab } from "@mui/material";

import { ModeNightOutlined, LightModeOutlined } from "@mui/icons-material";
import mainContext from "../context";

const ThemeActionButton = () => {
  const theme = useTheme();
  const { handleThemeChange } = useContext(mainContext);

  return (
    <Box
      sx={{
        position: "flex",
        justifyContent: "center",
        alignItems: "start",
        display: { xs: "block", md: "block" },
        mb: 1,
      }}
    >
      <Fab
        aria-label="ThemeChange"
        variant="extended"
        size="small"
        color="primary"
        onClick={handleThemeChange}
        sx={{
          ml: 2,
          color: theme.palette.mode === "dark" ? "black" : "whitesmoke",
        }}
      >
        {theme.palette.mode === "dark" ? (
          <LightModeOutlined sx={{ mr: 1 }} />
        ) : (
          <ModeNightOutlined sx={{ mr: 1 }} />
        )}
        {theme.palette.mode === "dark" ? "روز" : "شب"}
      </Fab>
    </Box>
  );
};

export default ThemeActionButton;
