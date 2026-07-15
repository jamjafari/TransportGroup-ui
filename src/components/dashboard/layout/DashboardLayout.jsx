import React, { memo } from 'react';

import Stack from '@mui/system/Stack';

import DashboardContainer from './DashboardContainer';

import DashboardSpacing from './DashboardSpacing';

import {
  DashboardLayoutPropTypes,
  DashboardLayoutDefaultProps,
} from './DashboardLayout.types';

const DashboardLayout = ({ children }) => {
  return (
    <DashboardContainer>
      <Stack spacing={DashboardSpacing.section}>{children}</Stack>
    </DashboardContainer>
  );
};

DashboardLayout.propTypes = DashboardLayoutPropTypes;

DashboardLayout.defaultProps = DashboardLayoutDefaultProps;

export default memo(DashboardLayout);
