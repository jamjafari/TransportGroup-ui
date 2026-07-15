import React, { memo } from 'react';

import * as Mui from '@mui/material';

import Stack from '@mui/system/Stack';

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

// console.log('Stack:', Mui.Stack);
// console.log('Grid:', Mui.Grid);
// console.log('Equal:', Mui.Stack === Mui.Grid);

AppStack.propTypes = AppStackPropTypes;

AppStack.defaultProps = AppStackDefaultProps;

export default memo(AppStack);
