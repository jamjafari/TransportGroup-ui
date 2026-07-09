import React, { memo } from 'react';

import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
} from '@mui/lab';

import { Typography, Box } from '@mui/material';

import {
  AppTimelinePropTypes,
  AppTimelineDefaultProps,
} from './AppTimeline.types';

const AppTimeline = ({
  items,

  position,
}) => {
  return (
    <Timeline position={position}>
      {items.map((item, index) => (
        <TimelineItem key={item.id || index}>
          <TimelineOppositeContent color="text.secondary" sx={{ flex: 0.25 }}>
            {item.time}
          </TimelineOppositeContent>

          <TimelineSeparator>
            <TimelineDot
              color={item.color || 'primary'}

              variant={item.variant || 'filled'}
            >
              {item.icon}
            </TimelineDot>

            {index !== items.length - 1 && <TimelineConnector />}
          </TimelineSeparator>

          <TimelineContent>
            <Box>
              <Typography variant="subtitle2" fontWeight={600}>
                {item.title}
              </Typography>

              {item.description && (
                <Typography variant="body2" color="text.secondary">
                  {item.description}
                </Typography>
              )}
            </Box>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
};

AppTimeline.propTypes = AppTimelinePropTypes;

AppTimeline.defaultProps = AppTimelineDefaultProps;

export default memo(AppTimeline);
