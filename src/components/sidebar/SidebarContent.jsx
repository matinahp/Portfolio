import { Box, Divider } from "@mui/material";
import { SidebarHeader, SidebarFooter, SidebarTabs } from ".";

const DrawerContent = () => {
  return (
    <Box
      sx={{
        justifyContent: "center",
        textAlign: "center",
        mt: 2,
      }}
    >
      {/* SidebarHeader */}
      <SidebarHeader />

      <Divider variant="middle" sx={{ my: 2 }} />

      {/* SidebarTabs */}
      <SidebarTabs />

      <Divider variant="middle" sx={{ m: 2 }} />

      {/* SidebarFooter */}
      <SidebarFooter />
    </Box>
  );
};

export default DrawerContent;
