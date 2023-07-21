import { Typography, Box } from "@mui/material";
import { CopyrightRounded } from "@mui/icons-material";

import { useTheme } from "@mui/material/styles";
import SocialMediaIcons from "../SocialMediaIcons";

const SidebarFooter = () => {
  const theme = useTheme();

  return (
    <>
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "end",
          alignItems: "center",
          height: 100,
        }}
      >
        {/* social icon */}
        <SocialMediaIcons />

        <Typography
          variant="subtitle2"
          color={theme.palette.mode === "dark" ? "grey" : "black"}
        >
          طراحی شده توسط{" "}
          <span
            style={{
              color: theme.palette.mode === "dark" ? "#42a5f5" : "#0d47a1",
            }}
          >
            متین
          </span>{" "}
          احمدی پور
        </Typography>

        <Typography
          variant="caption"
          color={theme.palette.mode === "dark" ? "grey" : "black"}
          sx={{ mt: 2 }}
        >
          کپی رایت 1402{" "}
          <CopyrightRounded sx={{ verticalAlign: "middle", height: 16 }} />
        </Typography>
      </Box>
    </>
  );
};

export default SidebarFooter;
