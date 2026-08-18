import React, { memo } from 'react';

import { Box } from '@mui/material';

import Stack from '@mui/material/Stack';

import {
  AppFormActionsPropTypes,
  AppFormActionsDefaultProps,
} from './AppFormActions.types';

const AppFormActions = ({ children, align, spacing, divider }) => {
  return (
    <Box>
      {divider && <Box borderTop="1px solid" borderColor="divider" mb={2} />}

      <Stack direction="row" spacing={spacing} justifyContent={align}>
        {children}
      </Stack>
    </Box>
  );
};

AppFormActions.propTypes = AppFormActionsPropTypes;

AppFormActions.defaultProps = AppFormActionsDefaultProps;

export default memo(AppFormActions);
