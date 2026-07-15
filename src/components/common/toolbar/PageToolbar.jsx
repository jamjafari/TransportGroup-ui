import React, { memo } from 'react';

import { Paper, Typography, Divider, Box } from '@mui/material';

import Stack from '@mui/system/Stack';

import { PageToolbarPropTypes } from './PageToolbar.types';

const PageToolbar = ({
  title,

  search,

  filters,

  actions,

  children,

  sx,
}) => {
  return (
    <Paper
      elevation={0}

      sx={{
        p: 2,

        mb: 3,

        borderRadius: 2,

        ...sx,
      }}
    >
      <Stack spacing={2}>
        {title && (
          <Typography
            variant="h6"

            fontWeight={600}
          >
            {title}
          </Typography>
        )}

        <Stack
          direction={{
            xs: 'column',

            md: 'row',
          }}

          spacing={2}

          alignItems={{
            md: 'center',
          }}

          justifyContent="space-between"
        >
          <Stack
            direction={{
              xs: 'column',

              sm: 'row',
            }}

            spacing={2}

            flex={1}
          >
            {search}

            {filters}
          </Stack>

          <Stack
            direction="row"

            spacing={1}
          >
            {actions}
          </Stack>
        </Stack>

        {children && (
          <>
            <Divider />

            <Box>{children}</Box>
          </>
        )}
      </Stack>
    </Paper>
  );
};

PageToolbar.propTypes = PageToolbarPropTypes;

export default memo(PageToolbar);
