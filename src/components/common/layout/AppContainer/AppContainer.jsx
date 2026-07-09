import React, { memo } from 'react';

import { Container } from '@mui/material';

import {
  AppContainerPropTypes,
  AppContainerDefaultProps,
} from './AppContainer.types';

const AppContainer = ({ children, maxWidth, disableGutters, fixed }) => {
  return (
    <Container
      maxWidth={maxWidth}
      disableGutters={disableGutters}
      fixed={fixed}
    >
      {children}
    </Container>
  );
};

AppContainer.propTypes = AppContainerPropTypes;

AppContainer.defaultProps = AppContainerDefaultProps;

export default memo(AppContainer);
