'use client';

// MATERIAL - UI
import Timeline from '@mui/lab/Timeline';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineSeparator from '@mui/lab/TimelineSeparator';

// PROJECT IMPORTS
import MainCard from 'components/MainCard';

// ==============================|| TIMELINE - BASIC ||============================== //

export default function BasicTimeline() {
  const basicTimelineCodeString = `<Timeline>
  <TimelineItem>
    <TimelineSeparator>
      <TimelineDot variant="outlined" color="primary" />
      <TimelineConnector />
    </TimelineSeparator>
    <TimelineContent>Eat</TimelineContent>
  </TimelineItem>
  <TimelineItem>
    <TimelineSeparator>
      <TimelineDot variant="outlined" color="primary" />
      <TimelineConnector />
    </TimelineSeparator>
    <TimelineContent>Code</TimelineContent>
  </TimelineItem>
  <TimelineItem sx={{ minHeight: 'auto' }}>
    <TimelineSeparator>
      <TimelineDot variant="outlined" color="primary" />
    </TimelineSeparator>
    <TimelineContent>Sleep</TimelineContent>
  </TimelineItem>
</Timeline>`;

  return (
    <MainCard title="Basic" codeString={basicTimelineCodeString}>
      <Timeline>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot variant="outlined" color="primary" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Eat</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot variant="outlined" color="primary" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Code</TimelineContent>
        </TimelineItem>
        <TimelineItem sx={{ minHeight: 'auto' }}>
          <TimelineSeparator>
            <TimelineDot variant="outlined" color="primary" />
          </TimelineSeparator>
          <TimelineContent>Sleep</TimelineContent>
        </TimelineItem>
      </Timeline>
    </MainCard>
  );
}
