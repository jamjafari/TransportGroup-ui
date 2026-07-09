import React, { memo } from 'react';

import { Container } from '@mui/material';

import DashboardSpacing from './DashboardSpacing';

import {
  DashboardContainerPropTypes,
  DashboardContainerDefaultProps,
} from './DashboardContainer.types';

const DashboardContainer = ({
  children,

  maxWidth,
}) => {
  return (
    <Container
      maxWidth={maxWidth}

      sx={{
        py: DashboardSpacing.page,
      }}
    >
      {children}
    </Container>
  );
};

DashboardContainer.propTypes = DashboardContainerPropTypes;

DashboardContainer.defaultProps = DashboardContainerDefaultProps;

export default memo(DashboardContainer);
