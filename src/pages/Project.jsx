import { Helmet } from "react-helmet-async";
import { useState, useEffect } from "react";
import { Card, CardContent } from "@mui/material";
import { WorkRounded } from "@mui/icons-material";
import Grid from "@mui/material/Unstable_Grid2";
import { useTheme } from "@mui/material/styles";
import { CustomDivider } from "../components/common";
import { ShowProjects } from "../components/pages";

const Project = ({ helmetTitle }) => {
  const [loading, setLoading] = useState(false);

  const theme = useTheme();

  useEffect(() => {
    setLoading(true);

    return () => {
      setLoading(false);
    };
  }, []);

  return (
    <Card
      sx={{
        height: "100vh",
        backgroundColor: theme.palette.mode === "dark" ? "#212121" : "#fafafa",
        overflowY: "scroll",
      }}
    >
      <Helmet>
        <title>{helmetTitle}</title>
      </Helmet>

      <CardContent>
        <CustomDivider
          bColor="secondary.main"
          cColor="secondary"
          align="center"
          icon={<WorkRounded color="text.primary" />}
          text="نمونه کارهای من"
        />

        <Grid container sx={{ m: 3 }}>
          {/* Projects */}
          <ShowProjects loading={loading} theme={theme} />
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Project;
