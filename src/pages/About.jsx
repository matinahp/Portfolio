import { Card, CardContent } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

import matin2 from "../assets/matin2.jpg";
import { CodeRounded, SportsMartialArts } from "@mui/icons-material";
import { DevInfo, Skills, DevWorkCount } from "../components/pages";
import { Helmet } from "react-helmet-async";
import { useTheme } from "@mui/material/styles";
import CustomAvatar from "../components/common/CustomAvatar";
import CustomDivider from "../components/common/CustomDivider";

const About = ({ helmetTitle }) => {
  const theme = useTheme();

  return (
    <Card
      sx={{
        height: "100vh",
        overflowY: "scroll",
        backgroundColor: theme.palette.mode === "dark" ? "#212121" : "#fafafa",
      }}
    >
      <Helmet>
        <title>{helmetTitle}</title>
      </Helmet>

      <CardContent>
        {/* info */}
        <Grid container sx={{ mx: 3 }}>
          <Grid xs={12} sm={12} md={12} lg={8} xl={8}>
            <CustomDivider
              bColor="primary.main"
              cColor="primary"
              icon={<CodeRounded />}
              align="right"
              text="برنامه نویس فرانت اند"
            />

            <Grid container>
              <Grid
                xs={6}
                sm={6}
                md={6}
                lg={3}
                xl={3}
                sx={{
                  mt: 3,
                  display: { xs: "block", sm: "block", md: "block" },
                  mx: { xs: "auto", md: "0" },
                }}
              >
                {/* DevWorkCount */}
                <DevWorkCount />
              </Grid>

              <Grid xs={6} sm={6} md={6} lg={9} xl={9} sx={{ mr: "auto" }}>
                {/* devInfo */}
                <DevInfo />
              </Grid>
            </Grid>
          </Grid>

          <Grid
            xs={0}
            sm={0}
            md={0}
            lg={4}
            xl={4}
            sx={{ display: { xs: "block", md: "none", lg: "block" } }}
          >
            <CustomAvatar avatar={matin2} size={250} fallback="MA" />
          </Grid>
        </Grid>

        {/* Skills */}
        <Grid container>
          <Grid sx={{ width: 1, mt: 1 }}>
            <CustomDivider
              bColor="primary.main"
              cColor="primary"
              icon={<SportsMartialArts />}
              align="center"
              text="مهارت های من"
            />
            {/* skill */}
            <Skills />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default About;
