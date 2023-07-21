import { Box } from "@mui/material";
import { SidebarContent } from ".";
import { SidebarDrawer } from "../drawer/index";

const Sidebar = () => {
  return (
    <Box>
      
      {/* Drawer */}
      <SidebarContent />
      {/* SidebarDrawer */}
      <SidebarDrawer />
    </Box>
  );
};

export default Sidebar;
