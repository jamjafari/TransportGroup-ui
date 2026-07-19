import React, { memo } from 'react';

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  Typography,
  CircularProgress,
  Box,
} from '@mui/material';

import CloseIcon from '@mui/icons-material/Close';

import { AppDialogPropTypes } from './AppDialog.types';

const AppDialog = ({
  open,

  title,

  children,

  actions,

  loading = false,

  maxWidth = 'md',

  fullWidth = true,

  dividers = true,

  onClose,
}) => {
  return (
    <Dialog
      open={open}

      onClose={onClose}

      maxWidth={maxWidth}

      fullWidth={fullWidth}
    >
      {title && (
        <DialogTitle>
          <Box
            display="flex"

            justifyContent="space-between"

            alignItems="center"
          >
            <Typography
              variant="h6"

              fontWeight={600}
            >
              {title}
            </Typography>

            {onClose && (
              <IconButton onClick={onClose}>
                <CloseIcon />
              </IconButton>
            )}
          </Box>
        </DialogTitle>
      )}

      <DialogContent
        dividers={dividers}
        sx={{
          direction: 'rtl',
        }}
      >
        {loading ? (
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            sx={{
              direction: 'rtl',
            }}
          >
            <CircularProgress />
          </Box>
        ) : (
          children
        )}
      </DialogContent>

      {actions && (
        <DialogActions
          sx={{
            direction: 'rtl',
          }}
        >
          {actions}
        </DialogActions>
      )}
    </Dialog>
  );
};

AppDialog.propTypes = AppDialogPropTypes;

export default memo(AppDialog);
