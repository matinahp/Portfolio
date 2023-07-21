import { GitHub, Instagram, LinkedIn, Telegram } from "@mui/icons-material";
import { Box, IconButton } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const SocialMediaIcons = () => {
  const theme = useTheme();

  return (
    <Box component="div" sx={{ m: "0 auto", textAlign: "center" }}>
      <IconButton aria-label="Github">
        <a
          href="https://github.com/matinahp"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHub
            sx={{
              color: theme.palette.mode === "dark" ? "grey" : "black",
              ":hover": {
                color: theme.palette.mode === "dark" ? "#42a5f5" : "#0d47a1",
              },
            }}
          />
        </a>
      </IconButton>

      <IconButton aria-label="Github">
        <a
          href="https://www.linkedin.com/in/matin-ahmadipoor-b3480b240"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedIn
            sx={{
              color: theme.palette.mode === "dark" ? "grey" : "black",
              ":hover": {
                color: theme.palette.mode === "dark" ? "#42a5f5" : "#0d47a1",
              },
            }}
          />
        </a>
      </IconButton>

      <IconButton aria-label="Github">
        <a
          href="http://t.me/matscorpion"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Telegram
            sx={{
              color: theme.palette.mode === "dark" ? "grey" : "black",
              ":hover": {
                color: theme.palette.mode === "dark" ? "#42a5f5" : "#0d47a1",
              },
            }}
          />
        </a>
      </IconButton>

      <IconButton aria-label="Github">
        <a
          href="https://instagram.com/matin_ahp?igshid=MzNlNGNkZWQ4Mg=="
          target="_blank"
          rel="noopener noreferrer"
        >
          <Instagram
            sx={{
              color: theme.palette.mode === "dark" ? "grey" : "black",
              ":hover": {
                color: theme.palette.mode === "dark" ? "#42a5f5" : "#0d47a1",
              },
            }}
          />
        </a>
      </IconButton>
    </Box>
  );
};

export default SocialMediaIcons;
