import React, { memo } from 'react';

import { Box } from '@mui/material';

import AppContainer from '../AppContainer';
import AppContent from '../AppContent';

import { AppPagePropTypes, AppPageDefaultProps } from './AppPage.types';

const AppPage = ({ children, maxWidth, disableContainer, padding }) => {
  const content = disableContainer ? (
    children
  ) : (
    <AppContainer maxWidth={maxWidth}>{children}</AppContainer>
  );

  return (
    <Box display="flex" flexDirection="column" minHeight="100%">
      <AppContent padding={padding}>{content}</AppContent>
    </Box>
  );
};

AppPage.propTypes = AppPagePropTypes;

AppPage.defaultProps = AppPageDefaultProps;

export default memo(AppPage);
