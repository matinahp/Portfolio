import { Fab, Box } from "@mui/material";
import { MenuRounded } from "@mui/icons-material";
import { blue, red } from "@mui/material/colors";
import { useContext } from "react";

import MainContext from "../../context";

const DrawerActionButton = () => {
  const { setDrawerOpen } = useContext(MainContext);

  return (
    <Box
      sx={{
        position: "absolute",
        display: {
          xs: "block",
          sm: "block",
          md: "none",
          lg: "none",
          xl: "none",
        },
      }}
    >
      <Fab
        aria-label="Sidebar"
        size="small"
        sx={{
          backgroundColor: blue[600],
          m: 2,
          ":hover": {
            backgroundColor: blue[800],
          },
        }}
        onClick={() => setDrawerOpen(true)}
      >
        <MenuRounded />
      </Fab>
    </Box>
  );
};

export default DrawerActionButton;
