// MUI
import { useMediaQuery } from "@mui/material";
// useTheme
import { useTheme } from "@mui/material/styles";
//useState
import { Fragment, useState } from "react";
// MainLayout
import MainLayout from "../Layouts/MainLayout";
// Sidebar
import { Sidebar } from "../components/sidebar/index";
// ContentContainer
import PagesContainer from "./PagesContainer";
// TabPanel
import { Page } from "../components/pages";
// SidebarContainer
import SidebarContainer from "./SidebarContainer";
// DrawerActionButton
import { DrawerActionButton } from "../components/drawer";
// mainContext
import MainContext from "../context";
// SiwpeableViews
import SwipeableViews from "react-swipeable-views";
// pages
import { Home, About, Resume, Project, Comments, Contact } from "../pages";
import { useEffect } from "react";

const AppContainer = () => {
  //state
  const [pageNumber, setPageNumber] = useState(0);
  const [drawerOpen, setDrawerOpen] = useState(false);

  // for theme mode
  const [mode, setMode] = useState();

  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));

  const prefersDarkMode = useMediaQuery("(prefers-color-scheme : dark)");

  // for theme mode
  useEffect(() => {
    setMode(prefersDarkMode ? "dark" : "light");
  }, []);

  useEffect(() => {
    if (isMdUp) {
      setDrawerOpen(false);
    }
  }, [isMdUp]);

  //handleChange
  const handlePageNumber = (event, newPage) => {
    setPageNumber(newPage);
  };

  //handelPageChange
  const handlePageChange = (index) => {
    setPageNumber(index);
  };

  const handleThemeChange = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  return (
    <Fragment>
      <MainContext.Provider
        value={{
          pageNumber,
          handlePageNumber,
          handleThemeChange,
          drawerOpen,
          setDrawerOpen,
        }}
      >
        <MainLayout mode={mode}>
          <SidebarContainer>
            {/* FAB */}
            <DrawerActionButton />
            <Sidebar />
          </SidebarContainer>
          <PagesContainer>
            <SwipeableViews index={pageNumber} onChangeIndex={handlePageChange}>
              <Page pageNumber={pageNumber} index={0}>
                {/* Home */}
                <Home helmetTitle="Matin Portfolio | Home Page" />
              </Page>

              <Page pageNumber={pageNumber} index={1}>
                {/* About */}
                <About helmetTitle="Matin Portfolio | About Page" />
              </Page>
              {/* Resume */}
              <Page pageNumber={pageNumber} index={2}>
                <Resume helmetTitle="Matin Portfolio | Resume Page" />
              </Page>
              {/* Project */}
              <Page pageNumber={pageNumber} index={3}>
                <Project helmetTitle="Matin Portfolio | My Project" />
              </Page>
              {/* Comments */}
              <Page pageNumber={pageNumber} index={4}>
                <Comments helmetTitle="Matin Portfolio | Comments" />
              </Page>
              {/* Contact */}
              <Page pageNumber={pageNumber} index={5}>
                <Contact helmetTitle="Matin Portfolio | Contact" />
              </Page>
            </SwipeableViews>
          </PagesContainer>
        </MainLayout>
      </MainContext.Provider>
    </Fragment>
  );
};

export default AppContainer;
