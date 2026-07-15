import React, { memo } from 'react';

import { Grid, Typography, Box } from '@mui/material';

import {
  DescriptionListPropTypes,
  DescriptionListDefaultProps,
} from './DescriptionList.types';

const DescriptionList = ({
  items,

  columns,

  labelWidth,
}) => {
  return (
    <Grid container spacing={2}>
      {items.map((item, index) => (
        <Grid size={{ xs: 12, md: 12 / columns }} key={item.key || index}>
          <Box display="flex" alignItems="flex-start" gap={1}>
            <Typography
              variant="body2"
              color="text.secondary"
              fontWeight={600}
              sx={{
                minWidth: labelWidth,
              }}
            >
              {item.label}
            </Typography>

            <Typography
              variant="body2"
              sx={{
                wordBreak: 'break-word',
              }}
            >
              {item.value ?? '-'}
            </Typography>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

DescriptionList.propTypes = DescriptionListPropTypes;

DescriptionList.defaultProps = DescriptionListDefaultProps;

export default memo(DescriptionList);
