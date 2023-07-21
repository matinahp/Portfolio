import { Helmet } from "react-helmet-async";
import { Card, CardContent } from "@mui/material";
import { ForumRounded } from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";
import { CustomDivider } from "../components/common";
import { CommentsSlider } from "../components/pages";

const Comments = ({ helmetTitle }) => {
  const theme = useTheme();

  return (
    <Card
      sx={{
        height: "100vh",
        backgroundColor: theme.palette.mode === "dark" ? "#212121" : "#fafafa",
        overflowY: "scroll",
        display: "flex",
        flexDirection: "column",
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
          icon={<ForumRounded />}
          text="نظرات"
        />

        {/* CommentsSlider */}
        <CommentsSlider />
      </CardContent>
    </Card>
  );
};

export default Comments;
