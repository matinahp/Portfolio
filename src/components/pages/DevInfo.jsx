import { Typography } from "@mui/material";
import { KeyboardArrowLeftRounded } from "@mui/icons-material";

const Info = ({ children }) => {
  return (
    <Typography
      variant="body1"
      color="text.primary"
      textAlign="left"
      sx={{ mt: 2, fontSize: { xs: ".8rem", md: "1rem" } }}
    >
      {children}
      <KeyboardArrowLeftRounded
        sx={{
          verticalAlign: "bottom",
          color: "primary.main",
          width: 30,
        }}
      />
    </Typography>
  );
};

const DevInfo = () => {
  return (
    <>
      <Info>نام و نام خانوادگی : متین احمدی پور</Info>
      <Info>سن : 21</Info>
      <Info>شهر : کرج</Info>
      <Info> matinahp8181@gmail.com : آدرس ایمیل </Info>
    </>
  );
};

export default DevInfo;
