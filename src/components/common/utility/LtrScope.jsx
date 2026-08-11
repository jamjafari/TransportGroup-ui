import React, { memo } from 'react';

import { CacheProvider } from '@emotion/react';
import { Box } from '@mui/material';

import ltrCache from '@/theme/ltrCache';

const LtrScope = ({ children, ...boxProps }) => {
  return (
    <CacheProvider value={ltrCache}>
      <Box dir="ltr" sx={{ direction: 'ltr' }} {...boxProps}>
        {children}
      </Box>
    </CacheProvider>
  );
};

export default memo(LtrScope);
