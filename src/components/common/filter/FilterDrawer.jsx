import React, { memo } from 'react';

import {
  Drawer,
  Box,
  Stack,
  Typography,
  Divider,
  IconButton,
} from '@mui/material';

import CloseIcon from '@mui/icons-material/Close';

import FilterAltIcon from '@mui/icons-material/FilterAlt';

import { AppButton } from '../../buttons';

import { AppLoader } from '../../loading';

import { FilterDrawerPropTypes } from './FilterDrawer.types';

const FilterDrawer = ({
  open,

  title = 'Filters',

  children,

  loading = false,

  width = 380,

  onApply,

  onReset,

  onClose,
}) => {
  return (
    <Drawer
      anchor="right"

      open={open}

      onClose={onClose}
    >
      <Box
        sx={{
          width,

          height: '100%',

          display: 'flex',

          flexDirection: 'column',
        }}
      >
        <Box
          sx={{
            p: 2,
          }}
        >
          <Stack
            direction="row"

            justifyContent="space-between"

            alignItems="center"
          >
            <Stack
              direction="row"

              spacing={1}

              alignItems="center"
            >
              <FilterAltIcon />

              <Typography
                variant="h6"

                fontWeight={600}
              >
                {title}
              </Typography>
            </Stack>

            <IconButton onClick={onClose}>
              <CloseIcon />
            </IconButton>
          </Stack>
        </Box>

        <Divider />

        <Box
          sx={{
            flex: 1,

            overflow: 'auto',

            p: 2,

            position: 'relative',
          }}
        >
          {loading && <AppLoader overlay />}

          <Stack spacing={2}>{children}</Stack>
        </Box>

        <Divider />

        <Box
          sx={{
            p: 2,
          }}
        >
          <Stack
            direction="row"

            spacing={2}
          >
            <AppButton
              fullWidth

              variant="outlined"

              onClick={onReset}
            >
              Reset
            </AppButton>

            <AppButton
              fullWidth

              onClick={onApply}
            >
              Apply
            </AppButton>
          </Stack>
        </Box>
      </Box>
    </Drawer>
  );
};

FilterDrawer.propTypes = FilterDrawerPropTypes;

export default memo(FilterDrawer);
