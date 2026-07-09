import React, { memo } from 'react';

import { Stack } from '@mui/material';

import { AppStackPropTypes, AppStackDefaultProps } from './AppStack.types';

const AppStack = ({
  children,
  direction,
  spacing,
  alignItems,
  justifyContent,
  flexWrap,
}) => {
  return (
    <Stack
      direction={direction}
      spacing={spacing}
      alignItems={alignItems}
      justifyContent={justifyContent}
      flexWrap={flexWrap}
    >
      {children}
    </Stack>
  );
};

AppStack.propTypes = AppStackPropTypes;

AppStack.defaultProps = AppStackDefaultProps;

export default memo(AppStack);
