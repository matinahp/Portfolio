import { Helmet } from "react-helmet-async";
import { Card, CardContent, Typography } from "@mui/material";
import {
  SettingsEthernetRounded,
  IntegrationInstructionsRounded,
  SchoolRounded,
} from "@mui/icons-material";
import Grid from "@mui/material/Unstable_Grid2";
import { useTheme } from "@mui/material/styles";
import { CustomDivider } from "../components/common";
import { DevEduTimeline, DevExpTimeline, DevResume } from "../components/pages";
import { useEffect, useState, useRef } from "react";
import Typed from "typed.js";

const Resume = ({ helmetTitle }) => {
  const theme = useTheme();
  const [loading, setLoading] = useState(false);
  const ResumeEl = useRef(null);

  useEffect(() => {
    setLoading(true);

    const typedResume = new Typed(ResumeEl.current, {
      strings: ["میتونی رزومه من رو از اینجا دانلود کنی"],
      startDelay: 2500,
      typeSpeed: 50,
      backSpeed: 20,
      backDelay: 10,
      showCursor: false,
    });

    return () => {
      setLoading(false);
      typedResume.destroy();
    };
  }, []);

  return (
    <>
      <Card
        sx={{
          height: "100vh",
          backgroundColor:
            theme.palette.mode === "dark" ? "#212121" : "#fafafa",
          overflowY: "scroll",
        }}
      >
        <Helmet>
          <title>{helmetTitle}</title>
        </Helmet>

        <CardContent>
          <CustomDivider
            bColor="error.main"
            cColor="error"
            icon={<SettingsEthernetRounded />}
            align="center"
            text="رزومه من"
          />

          <Grid container sx={{ mt: 4 }}>
            <Grid xs={12} md={6}>
              <CustomDivider
                bColor="warning.main"
                cColor="warning"
                icon={<IntegrationInstructionsRounded />}
                align="center"
                text="تجربیات"
              />

              {/* DevExpTimeline */}
              <DevExpTimeline loading={loading} />
            </Grid>

            <Grid xs={12} md={6}>
              <CustomDivider
                bColor="info.main"
                cColor="info"
                icon={<SchoolRounded />}
                align="center"
                text="تحصیلات"
              />

              {/* DevEduTimeline */}
              <DevEduTimeline loading={loading} />
            </Grid>
          </Grid>

          <Grid container sx={{ mt: 1 }}>
            <Grid
              xs={12}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: { xs: "column", md: "row" },
              }}
            >
              <Grid xs={6}>
                {/* DevResume */}
                <DevResume loading={loading} />
              </Grid>

              <Grid xs={6}>
                <Typography
                  ref={ResumeEl}
                  variant="body1"
                  color="primary"
                  sx={{ m: 3 }}
                ></Typography>
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
};

export default Resume;
