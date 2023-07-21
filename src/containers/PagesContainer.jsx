//Grid
import Grid from "@mui/material/Unstable_Grid2";
import { useTheme } from "@mui/material/styles";

const PagesContainer = ({ children }) => {
  const theme = useTheme();
  return (
    <>
      <Grid
        xs={12}
        sm={12}
        md={9}
        lg={10}
        xl={10}
        sx={{
          backgroundColor:
            theme.palette.mode === "dark" ? "#424242" : "#fafafa",
        }}
      >
        {children}
      </Grid>
    </>
  );
};

export default PagesContainer;
