import React, { memo } from 'react';

import {
  Card,
  CardContent,
  Typography,
  Stack,
  Avatar,
  Box,
} from '@mui/material';

import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import ErrorIcon from '@mui/icons-material/Error';
import EventBusyIcon from '@mui/icons-material/EventBusy';
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';
import BuildIcon from '@mui/icons-material/Build';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import AssignmentIcon from '@mui/icons-material/Assignment';
import SecurityIcon from '@mui/icons-material/Security';

const ICONS = {
  check: CheckCircleIcon,

  warning: WarningAmberIcon,

  error: ErrorIcon,

  expired: EventBusyIcon,

  fuel: LocalGasStationIcon,

  service: BuildIcon,

  vehicle: DirectionsCarIcon,

  money: AttachMoneyIcon,

  report: AssignmentIcon,

  insurance: SecurityIcon,
};

const ICON_BY_COLOR = {
  success: CheckCircleIcon,

  warning: WarningAmberIcon,

  error: ErrorIcon,

  secondary: EventBusyIcon,

  primary: DirectionsCarIcon,

  info: AssignmentIcon,
};

const KpiCard = ({
  title,

  value,

  color = 'primary',

  icon,
}) => {
  const IconComponent =
    icon && ICONS[icon] ? ICONS[icon] : ICON_BY_COLOR[color] || AssignmentIcon;

  return (
    <Card
      elevation={1}
      sx={{
        borderRadius: 2,

        height: '100%',
      }}
    >
      <CardContent>
        <Stack
          direction="row"

          justifyContent="space-between"

          alignItems="center"
        >
          <Box>
            <Typography
              variant="body2"
              fontSize={18}
              fontWeight={800}
              color="text.secondary"
            >
              {title}
            </Typography>

            <Typography
              variant="h4"

              fontWeight={700}
            >
              {value}
            </Typography>
          </Box>

          <Avatar
            sx={{
              bgcolor: `${color}.light`,

              color: `${color}.main`,

              width: 56,

              height: 56,
            }}
          >
            <IconComponent />
          </Avatar>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default memo(KpiCard);
