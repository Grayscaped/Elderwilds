import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";

const getDaysSince = (dateString) => {
  const [day, month, year] = dateString.split("/").map(Number);
  const date = new Date(year, month - 1, day);

  const today = new Date();

  // Remove time component to avoid partial-day issues
  date.setHours(0, 0, 0, 0);
  today.setHours(0, 0, 0, 0);

  const diffMs = today - date;
  return Math.floor(diffMs / (1000 * 60 * 60 * 24));
};

export default function component({style, events=[]}) {
  return (
    <Timeline position="alternate" style={style}>
      {events.map((event, index) => (
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot/>
              <TimelineConnector />
            </TimelineSeparator>

            <TimelineContent>
              <p style={{margin:"0"}}>{event.date} <span style={{margin:"0", opacity:"0.8"}}>{getDaysSince(event.date)} days ago</span></p>
              <h3 style={{margin:"0"}}>{event.title}</h3>
            </TimelineContent>
          </TimelineItem>
                ))}

          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot/>
              <TimelineConnector color="success" />
            </TimelineSeparator>

            <TimelineContent>
              <p style={{margin:"0"}}>???</p>
            </TimelineContent>
          </TimelineItem>

    </Timeline>
  );
}
