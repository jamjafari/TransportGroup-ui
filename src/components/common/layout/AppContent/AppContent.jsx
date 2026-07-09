import React, { memo } from 'react';

import { Box } from '@mui/material';

import {
  AppContentPropTypes,
  AppContentDefaultProps,
} from './AppContent.types';

const AppContent = ({ children, padding }) => {
  return (
    <Box flex={1} p={padding} overflow="auto">
      {children}
    </Box>
  );
};

AppContent.propTypes = AppContentPropTypes;

AppContent.defaultProps = AppContentDefaultProps;

export default memo(AppContent);
