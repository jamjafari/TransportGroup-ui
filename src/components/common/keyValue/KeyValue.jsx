import React, { memo } from 'react';

import { Box, Typography } from '@mui/material';

import { KeyValuePropTypes, KeyValueDefaultProps } from './KeyValue.types';

const KeyValue = ({
  label,

  value,

  direction,

  divider,

  labelWidth,
}) => {
  return (
    <Box>
      <Box
        display="flex"

        flexDirection={direction}

        alignItems={direction === 'row' ? 'center' : 'flex-start'}

        gap={1}
      >
        <Typography
          variant="body2"

          color="text.secondary"

          fontWeight={600}

          sx={{
            minWidth: labelWidth,
          }}
        >
          {label}
        </Typography>

        <Typography variant="body2">{value ?? '-'}</Typography>
      </Box>

      {divider && (
        <Box
          mt={1}

          borderBottom="1px solid"

          borderColor="divider"
        />
      )}
    </Box>
  );
};

KeyValue.propTypes = KeyValuePropTypes;

KeyValue.defaultProps = KeyValueDefaultProps;

export default memo(KeyValue);
