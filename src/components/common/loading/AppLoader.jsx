import React, { memo } from 'react';

import { Box, CircularProgress, Typography, Backdrop } from '@mui/material';

import Stack from '@mui/system/Stack';

import { AppLoaderPropTypes } from './AppLoader.types';

const LoaderContent = ({
  size,

  text,

  sx,
}) => (
  <Stack
    spacing={2}

    alignItems="center"

    sx={sx}
  >
    <CircularProgress size={size} />

    {text && (
      <Typography
        variant="body2"

        color="text.secondary"
      >
        {text}
      </Typography>
    )}
  </Stack>
);

const AppLoader = ({
  size = 40,

  text = 'Loading...',

  fullScreen = false,

  overlay = false,

  sx,
}) => {
  if (fullScreen) {
    return (
      <Backdrop
        open

        sx={{
          zIndex: 1400,

          bgcolor: 'rgba(255,255,255,.65)',
        }}
      >
        <LoaderContent
          size={size}

          text={text}

          sx={sx}
        />
      </Backdrop>
    );
  }

  if (overlay) {
    return (
      <Box
        sx={{
          position: 'absolute',

          inset: 0,

          display: 'flex',

          justifyContent: 'center',

          alignItems: 'center',

          bgcolor: 'rgba(255,255,255,.65)',

          zIndex: 10,
        }}
      >
        <LoaderContent
          size={size}

          text={text}

          sx={sx}
        />
      </Box>
    );
  }

  return (
    <Box
      sx={{
        width: '100%',

        py: 5,

        display: 'flex',

        justifyContent: 'center',

        alignItems: 'center',
      }}
    >
      <LoaderContent
        size={size}

        text={text}

        sx={sx}
      />
    </Box>
  );
};

AppLoader.propTypes = AppLoaderPropTypes;

export default memo(AppLoader);
