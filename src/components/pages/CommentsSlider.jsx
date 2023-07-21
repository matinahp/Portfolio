import { Avatar, Box, Card, CardContent, Typography } from "@mui/material";
import Slider from "react-slick";
import { SampleArrow } from "../../Layouts/Arrow";
import { userComments } from "../../constants/details";

const CommentsSlider = () => {
  const options = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    cssEase: "linear",
    nextArrow: <SampleArrow />,
    prevArrow: <SampleArrow />,
  };
  return (
    <>
      <Box
        component="div"
        sx={{ m: 10, justifyContent: "center", alignItems: "center" }}
      >
        <Slider {...options}>
          {userComments.map((user, index) => (
            <Box
              key={index}
              component="div"
              sx={{ justifyContent: "center", mb: 5 }}
            >
              <Avatar
                src={user.avatar}
                variant="rounded"
                sx={{ height: 100, width: 100, margin: "0 auto" }}
              />
              <Typography
                variant="body1"
                textAlign="center"
                color="text.primary"
              >
                {user.fullname}
              </Typography>
              <Typography
                variant="body2"
                textAlign="center"
                color="text.secondary"
                sx={{ mb: 2 }}
              >
                {user.jobTitle}
              </Typography>
              <Card
                sx={{
                  backgroundColor: "secondary.main",
                  width: 1 / 2,
                  m: "0 auto",
                  borderRadius: 5,
                }}
              >
                <CardContent>
                  <Typography
                    color="text.primary"
                    variant="body2"
                    textAlign="center"
                  >
                    {user.comment}
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          ))}
        </Slider>
      </Box>
    </>
  );
};

export default CommentsSlider;
