import React, { memo } from 'react';

import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Divider,
  Typography,
  IconButton,
  Box,
  Alert,
  CircularProgress,
} from '@mui/material';

import Stack from '@mui/system/Stack';

import RefreshIcon from '@mui/icons-material/Refresh';

import {
  BaseTableWidgetPropTypes,
  BaseTableWidgetDefaultProps,
} from './BaseTableWidget.types';

const BaseTableWidget = ({
  title,

  subtitle,

  loading,

  error,

  refresh,

  actions,

  toolbar,

  footer,

  children,

  height,
}) => {
  return (
    <Card
      sx={{
        height,
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
      }}
    >
      <CardHeader
        title={
          <Typography variant="h6" fontWeight={600}>
            {title}
          </Typography>
        }

        subheader={subtitle}

        action={
          <Stack direction="row" spacing={1} alignItems="center">
            {actions}

            {refresh && (
              <IconButton size="small" onClick={refresh}>
                <RefreshIcon fontSize="small" />
              </IconButton>
            )}
          </Stack>
        }
      />

      {toolbar && (
        <>
          <Divider />

          <Box p={2}>{toolbar}</Box>
        </>
      )}

      <Divider />

      <CardContent
        sx={{
          flex: 1,
          p: 0,
          overflow: 'hidden',
        }}
      >
        {loading ? (
          <Stack justifyContent="center" alignItems="center" height="100%">
            <CircularProgress />
          </Stack>
        ) : error ? (
          <Box p={2}>
            <Alert severity="error">
              {typeof error === 'string' ? error : 'خطا در دریافت اطلاعات'}
            </Alert>
          </Box>
        ) : (
          children
        )}
      </CardContent>

      {footer && (
        <>
          <Divider />

          <CardActions>{footer}</CardActions>
        </>
      )}
    </Card>
  );
};

BaseTableWidget.propTypes = BaseTableWidgetPropTypes;

BaseTableWidget.defaultProps = BaseTableWidgetDefaultProps;

export default memo(BaseTableWidget);
