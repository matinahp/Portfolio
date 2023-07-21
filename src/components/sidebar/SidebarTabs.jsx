import { Tabs, Tab } from "@mui/material";
import { grey } from "@mui/material/colors";
import { useContext } from "react";
import { tabsData } from "../../constants/tabsData";
import { useTheme } from "@mui/material/styles";

import MainContext from "../../context";

const SidebarTabs = () => {
  const { pageNumber, handlePageNumber, setDrawerOpen } =
    useContext(MainContext);

  const data = tabsData();

  const theme = useTheme();

  return (
    <Tabs
      orientation="vertical"
      variant="scrollable"
      scrollButtons="auto"
      allowScrollButtonsMobile
      value={pageNumber}
      onChange={handlePageNumber}
    >
      {data.map((tab, index) => (
        <Tab
          key={index}
          label={tab.label}
          icon={tab.icon}
          iconPosition="start"
          sx={{
            "&.MuiTab-root": {
              minHeight: 10,
            },
            backgroundColor:
              theme.palette.mode === "dark" ? grey[800] : grey[500],
            color: "text.primary",
            borderRadius: 2,
            my: 0.5,
            mx: 1,
          }}
          onClick={() => setDrawerOpen(false)}
          {...tab}
        />
      ))}
    </Tabs>
  );
};

export default SidebarTabs;
