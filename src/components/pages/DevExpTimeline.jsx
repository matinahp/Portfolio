import { IntegrationInstructionsRounded } from "@mui/icons-material";
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
import { devWork } from "../../constants/details";

const DevExpTimeline = ({ loading }) => {
  return (
    <>
      <Timeline position="left" sx={{ direction: "ltr" }}>
        {devWork.map((item, index) => (
          <Slide
            key={index}
            direction="up"
            in={loading}
            style={{
              transitionDelay: loading ? `${index + 3}99ms` : "0ms",
            }}
          >
            <TimelineItem>
              <TimelineOppositeContent color="text.secondary" sx={{ mt: 2 }}>
                {item.year}
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot color="warning" variant="outlined">
                  <IntegrationInstructionsRounded color="warning" />
                </TimelineDot>
                {index !== 6 ? <TimelineConnector /> : null}
              </TimelineSeparator>
              <TimelineContent>
                <Typography variant="body1" color="text.primary">
                  {item.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.CLang}
                </Typography>
              </TimelineContent>
            </TimelineItem>
          </Slide>
        ))}
      </Timeline>
    </>
  );
};

export default DevExpTimeline;
