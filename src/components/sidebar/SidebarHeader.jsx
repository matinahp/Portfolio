import { Typography } from "@mui/material";
// react-random-reveal
import { RandomReveal } from "react-random-reveal";
import { alphabetPersian } from "../../constants/alphabetPersion";
import { useTheme } from "@mui/material/styles";

import { useState } from "react";

import matin from "../../assets/matin.jpg";
import ThemeActionButton from "../ThemeActionButton";
import CustomAvatar from "../common/CustomAvatar";

const SidebarHeader = () => {
  const [start, setStart] = useState(false);

  const theme = useTheme();

  return (
    <>
      <ThemeActionButton />
      <CustomAvatar avatar={matin} size={200} fallback="MA" />

      <Typography
        variant="h6"
        color={theme.palette.mode === "dark" ? "grey" : "black"}
      >
        <RandomReveal
          isPlaying
          duration={3}
          characterSet={alphabetPersian}
          characters="متین احمدی پور"
          onComplete={() => setStart(true)}
        />
      </Typography>

      {start && (
        <Typography
          variant="caption"
          color={theme.palette.mode === "dark" ? "grey" : "black"}
        >
          <RandomReveal
            isPlaying
            duration={3}
            characterSet={alphabetPersian}
            characters="برنامه نویس"
          />{" "}
          <RandomReveal isPlaying duration={3} characters="Front-End" />
        </Typography>
      )}
    </>
  );
};

export default SidebarHeader;
