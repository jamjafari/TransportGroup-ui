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
    // ✅ dir به‌جای sx={{ direction: 'ltr' }}: cssjanus مقدار direction را
    // برمی‌گرداند، پس آن اعلان در عمل کارت را RTL می‌کرد. صفت dir هیچ‌وقت
    // توسط افزونه تغییر نمی‌کند. (نمودارها به LTR نیاز دارند.)
    <Card
      elevation={0}

      dir="ltr"

      sx={{
        height,

        display: 'flex',

        flexDirection: 'column',
      }}
    >
      <CardHeader
        title={
          <Typography
            variant="h6"

            fontWeight={700}
          >
            {title}
          </Typography>
        }

        subheader={subheader}

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
