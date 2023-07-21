// useEffect, useRef
import { useEffect, useRef, useCallback } from "react";

import { Helmet } from "react-helmet-async";
import { Box, Typography } from "@mui/material";
// image
import background1 from "../assets/background1.png";
// typed.js
import Typed from "typed.js";
// particle
import Particles from "react-particles";
// tsparticles
import { loadFull } from "tsparticles";
// particles constants
import { links } from "../constants/particles";

const Home = ({ helmetTitle }) => {
  const nameEl = useRef(null);

  const infoEl = useRef(null);

  const strings = [
    "من برنامه نویس فرانت اند هستم",
    "من برنامه نویس ری اکت هستم",
    "من برنامه نویس جاوا اسکریپت هستم",
  ];

  // Mounting
  useEffect(() => {
    // Showing Name
    const typedName = new Typed(nameEl.current, {
      strings: ["{{ متین احمدی پور }}"],
      typeSpeed: 50,
      backSpeed: 20,
      backDelay: 10,
      showCursor: false,
    });

    // Showing info
    const typedInfo = new Typed(infoEl.current, {
      strings,
      startDelay: 1500,
      typeSpeed: 80,
      backSpeed: 50,
      backDelay: 50,
      loop: true,
      showCursor: false,
    });

    // unMounting
    return () => {
      typedName.destroy();
      typedInfo.destroy();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Particles
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  // loading particles
  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
    <Box
      sx={{
        backgroundImage: `url(${background1})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Helmet>
        <title>{helmetTitle}</title>
      </Helmet>

      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={links}
      />

      <Typography ref={nameEl} variant="h4" color="primary"></Typography>

      <Typography
        ref={infoEl}
        variant="h5"
        color="whitesmoke"
        sx={{
          textDecoration: "underline",
          textDecorationColor: "#42a5f5",
        }}
      ></Typography>
    </Box>
  );
};

export default Home;
