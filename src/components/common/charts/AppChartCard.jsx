import React, { memo } from 'react';

import {
  Card,
  CardHeader,
  CardContent,
  Box,
  Typography,
  IconButton,
  Divider,
} from '@mui/material';

import MoreVertIcon from '@mui/icons-material/MoreVert';

import {
  AppChartCardPropTypes,
  AppChartCardDefaultProps,
} from './AppChartCard.types';

const AppChartCard = ({
  title,

  subheader,

  action,

  menu,

  height,

  children,

  footer,
}) => {
  return (
    // ✅ کارت جهت صفحه را می‌گیرد (عنوان و منو در فارسی سمت راست).
    // نمودارهای داخل کارت خودشان LtrScope دارند و جهتشان با useChartDirection آینه می‌شود.
    <Card
      elevation={0}

      sx={{
        height,

        display: 'flex',

        flexDirection: 'column',
      }}
    >
      <CardHeader
        title={
          <Typography variant="cardTitle">
            {title}
          </Typography>
        }

        subheader={subheader}

        slotProps={{ subheader: { variant: 'cardSubtitle' } }}

        action={
          action ||
          (menu && (
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          ))
        }
      />

      <Divider />

      <CardContent
        sx={{
          flex: 1,

          display: 'flex',

          flexDirection: 'column',

          p: 2,
        }}
      >
        <Box
          flex={1}

          display="flex"

          alignItems="center"

          justifyContent="center"
        >
          {children}
        </Box>
      </CardContent>

      {footer && (
        <>
          <Divider />

          <Box
            px={2}

            py={1.5}
          >
            {footer}
          </Box>
        </>
      )}
    </Card>
  );
};

AppChartCard.propTypes = AppChartCardPropTypes;

AppChartCard.defaultProps = AppChartCardDefaultProps;

export default memo(AppChartCard);
