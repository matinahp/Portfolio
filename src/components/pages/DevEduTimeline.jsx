import { SchoolRounded } from "@mui/icons-material";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineDot,
  TimelineContent,
  TimelineConnector,
  TimelineOppositeContent,
} from "@mui/lab";
import { Slide, Typography } from "@mui/material";
import { devEdu } from "../../constants/details";

const DevEduTimeline = ({ loading }) => {
  return (
    <>
      <Timeline position="right" sx={{ direction: "ltr" }}>
        {devEdu.map((item, index) => (
          <Slide
            direction="up"
            in={loading}
            style={{
              transitionDelay: loading ? `${index + 6}99ms` : "0ms",
            }}
          >
            <TimelineItem key={index}>
              <TimelineOppositeContent color="text.secondary" sx={{ mt: 2 }}>
                {item.year}
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot color="info" variant="outlined">
                  <SchoolRounded color="info" />
                </TimelineDot>
                {index !== 2 ? <TimelineConnector /> : null}
              </TimelineSeparator>
              <TimelineContent>
                <Typography variant="body1" color="text.primary">
                  {item.cert}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.major}
                </Typography>
              </TimelineContent>
            </TimelineItem>
          </Slide>
        ))}
      </Timeline>
    </>
  );
};

export default DevEduTimeline;
