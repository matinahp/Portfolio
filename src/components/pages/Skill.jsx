import {
  Divider,
  Chip,
  Typography,
  Box,
  LinearProgress,
  Badge,
} from "@mui/material";

const Skill = ({ icon, color, name, value }) => {
  return (
    <>
      <Divider
        textAlign="right"
        sx={{
          "&::before, &::after": {
            borderColor: `${color}.main`,
          },
          mt: 4,
        }}
      >
        <Chip
          icon={<Box component={"img"} src={icon} sx={{ height: 30 }}></Box>}
          color={color}
          label={name}
          sx={{ p: 3, color: "text.primary" }}
        />
      </Divider>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Box sx={{ minWidth: 35 }}>
          <Typography variant="body2" color="grey">
            <Badge
              variant="standard"
              badgeContent={`${Math.round(value)}%`}
              color={color}
              sx={{ m: 2 }}
            />
          </Typography>
        </Box>
        <Box sx={{ width: "100%", mr: 1 }}>
          <LinearProgress
            variant="determinate"
            value={value}
            color={color}
            sx={{ height: 10, borderRadius: 2, backgroundColor: "#9e9e9e" }}
          />
        </Box>
      </Box>
    </>
  );
};

export default Skill;
