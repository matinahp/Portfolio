import { DownloadRounded } from "@mui/icons-material";
import { Button, Fade, Typography } from "@mui/material";

const DevResume = ({ loading }) => {
  const resumeURL =
    "https://drive.google.com/file/d/17MTX4WPhBEsG_hNlCMUgCwoS-zNJP6XE/view?usp=drive_link";

  return (
    <>
      <Fade
        in={loading}
        style={{
          transitionDelay: loading ? "1500ms" : "0ms",
        }}
      >
        <Button variant="outlined" color="primary" sx={{ p: 3 }}>
          <a
            href={resumeURL}
            download
            target="_blank"
            rel="noopener noreferrer"
            style={{
              textDecoration: "none",
              color: "#3577d2",
              marginRight: "10px",
            }}
          >
            <Typography>رزومه من</Typography>
          </a>
          <DownloadRounded />
        </Button>
      </Fade>
    </>
  );
};

export default DevResume;
