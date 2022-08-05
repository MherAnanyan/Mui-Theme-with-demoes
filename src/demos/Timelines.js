import Timeline from "@mui/lab/Timeline"
import TimelineItem from "@mui/lab/TimelineItem"
import TimelineSeparator from "@mui/lab/TimelineSeparator"
import TimelineConnector from "@mui/lab/TimelineConnector"
import TimelineContent from "@mui/lab/TimelineContent"
import TimelineDot from "@mui/lab/TimelineDot"
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent"
import { Wrapper } from "../Wrapper"
import { Box } from "@mui/material"

export const Timelines = () => {
  return (
    <Wrapper title="Timeline">
      <Box sx={{ width: 400 }}>
        <Box sx={{ display: "flex" }}>
          <Timeline position="left">
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot />
              </TimelineSeparator>
              <TimelineContent>Filled</TimelineContent>
            </TimelineItem>
          </Timeline>

          <Timeline position="left">
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot variant="outlined" />
              </TimelineSeparator>
              <TimelineContent>Outlined</TimelineContent>
            </TimelineItem>
          </Timeline>
        </Box>

        <Box sx={{ display: "flex" }}>
          <Timeline position="left">
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot />
              </TimelineSeparator>
              <TimelineContent>Left</TimelineContent>
            </TimelineItem>
          </Timeline>

          <Timeline position="left">
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot />
              </TimelineSeparator>
              <TimelineContent>Right</TimelineContent>
            </TimelineItem>
          </Timeline>
        </Box>

        <Timeline>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
            </TimelineSeparator>
            <TimelineContent>Standard</TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color="primary" />
            </TimelineSeparator>
            <TimelineContent>Primary</TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color="secondary" />
            </TimelineSeparator>
            <TimelineContent>Secondary</TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color="error" />
            </TimelineSeparator>
            <TimelineContent>Error</TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color="warning" />
            </TimelineSeparator>
            <TimelineContent>Warning</TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color="info" />
            </TimelineSeparator>
            <TimelineContent>Info</TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color="success" />
            </TimelineSeparator>
            <TimelineContent>Success</TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineOppositeContent color="text.secondary">
              Opposing
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
            </TimelineSeparator>
            <TimelineContent>Main</TimelineContent>
          </TimelineItem>
        </Timeline>
        <Timeline>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>Main</TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>Main</TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
            </TimelineSeparator>
            <TimelineContent>Main</TimelineContent>
          </TimelineItem>
        </Timeline>

        <Timeline position="right">
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>Left aligned</TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>Left aligned</TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
            </TimelineSeparator>
            <TimelineContent>Left aligned</TimelineContent>
          </TimelineItem>
        </Timeline>

        <Timeline position="left">
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>Right aligned</TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>Right aligned</TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
            </TimelineSeparator>
            <TimelineContent>Right aligned</TimelineContent>
          </TimelineItem>
        </Timeline>

        <Timeline>
          <TimelineItem>
            <TimelineOppositeContent color="text.secondary">
              Opposing
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>Main</TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent color="text.secondary">
              Opposing
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>Main</TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent color="text.secondary">
              Opposing
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
            </TimelineSeparator>
            <TimelineContent>Main</TimelineContent>
          </TimelineItem>
        </Timeline>

        <Timeline position="alternate">
          <TimelineItem>
            <TimelineOppositeContent color="text.secondary">
              Alternating
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>Main</TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent color="text.secondary">
              Alternating
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>Main</TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent color="text.secondary">
              Alternating
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
            </TimelineSeparator>
            <TimelineContent>Main</TimelineContent>
          </TimelineItem>
        </Timeline>
      </Box>
    </Wrapper>
  )
}
