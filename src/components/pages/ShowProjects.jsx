import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Slide,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import EllipsisText from "react-ellipsis-text";
import { Projects } from "../../constants/myProject";

const ShowProjects = ({ loading, theme }) => {
  return (
    <>
      {Projects.map((project, index) => (
        <Grid
          key={index}
          xs={12}
          sm={6}
          md={6}
          lg={4}
          xl={4}
          sx={{ px: 2, mb: 2 }}
        >
          <Slide
            direction="up"
            in={loading}
            style={{
              transitionDelay: loading ? `${index + 3}99ms` : "0ms",
            }}
          >
            <Card sx={{ maxWidth: 345, backgroundColor: "secondary.main" }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="250"
                  width="200"
                  image={project.image}
                  alt={project.title}
                />
                <CardContent>
                  <Typography
                    color={
                      theme.palette.mode === "dark" ? "black" : "whitesmoke"
                    }
                    variant="body1"
                    textAlign="left"
                    gutterBottom
                  >
                    {project.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color={
                      theme.palette.mode === "dark" ? "black" : "whitesmoke"
                    }
                    textAlign="left"
                    gutterBottom
                    sx={{ direction: "ltr" }}
                  >
                    <EllipsisText text={project.info} length={40} />
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  href={project.link}
                  size="small"
                  target="_blank"
                  sx={{
                    color:
                      theme.palette.mode === "dark" ? "black" : "whitesmoke",
                  }}
                >
                  اطلاعات بیشتر
                </Button>
              </CardActions>
            </Card>
          </Slide>
        </Grid>
      ))}
    </>
  );
};

export default ShowProjects;
