import React, { memo } from 'react';

import { Chip } from '@mui/material';
import { useTranslation } from 'react-i18next';

import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import BuildCircleIcon from '@mui/icons-material/BuildCircle';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import EngineeringIcon from '@mui/icons-material/Engineering';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import PendingActionsIcon from '@mui/icons-material/PendingActions';
import CancelIcon from '@mui/icons-material/Cancel';

import { statusLabels } from '@/utils/statusLabels';
import { StatusChipPropTypes } from './StatusChip.types';

// ✅ برچسب از statusLabels.js می‌آید (تنها منبع)، این‌جا فقط رنگ و آیکن هر وضعیت است.
const statusMap = {
  TankFull: { color: 'success', icon: <CheckCircleIcon /> },
  TankNotFull: { color: 'warning', icon: <WarningAmberIcon /> },
  Approved: { color: 'success', icon: <CheckCircleIcon /> },
  Pending: { color: 'warning', icon: <PendingActionsIcon /> },
  Planned: { color: 'info', icon: <PendingActionsIcon /> },
  Rejected: { color: 'error', icon: <CancelIcon /> },
  Conditional: { color: 'warning', icon: <PendingActionsIcon /> },
  Active: { color: 'success', icon: <CheckCircleIcon /> },
  Inactive: { color: 'default', icon: <HighlightOffIcon /> },
  Running: { color: 'primary', icon: <LocalShippingIcon /> },
  Completed: { color: 'success', icon: <TaskAltIcon /> },
  Mission: { color: 'primary', icon: <LocalShippingIcon /> },
  Repair: { color: 'warning', icon: <EngineeringIcon /> },
  Canceled: { color: 'error', icon: <HighlightOffIcon /> },
  Cancelled: { color: 'error', icon: <HighlightOffIcon /> },
  Warning: { color: 'warning', icon: <WarningAmberIcon /> },
  Critical: { color: 'error', icon: <WarningAmberIcon /> },
  Expired: { color: 'error', icon: <HighlightOffIcon /> },
  Required: { color: 'warning', icon: <BuildCircleIcon /> },
  Overdue: { color: 'error', icon: <MiscellaneousServicesIcon /> },
  ServiceCompleted: { color: 'success', icon: <CheckCircleIcon /> },
  Success: { color: 'success', icon: <CheckCircleIcon /> },
  warning: { color: 'warning', icon: <BuildCircleIcon /> },
  error: { color: 'error', icon: <HighlightOffIcon /> },
  primary: { color: 'primary', icon: <LocalShippingIcon /> },
  InRepair: { color: 'warning', icon: <EngineeringIcon /> },
  Sold: { color: 'default', icon: <HighlightOffIcon /> },
  ExpiringSoon: { color: 'warning', icon: <WarningAmberIcon /> },
};

const StatusChip = ({ status, size = 'small' }) => {
  const { t } = useTranslation();

  const meta = statusMap[status] ?? {
    color: 'info',
    icon: <HelpOutlineIcon />,
  };

  const label = t(statusLabels[status] ?? status);

  return (
    <Chip
      size={size}
      label={label}
      color={meta.color}
      icon={meta.icon}
      variant="filled"
      sx={{
        minWidth: 100,
        marginLeft: 'auto', // قرار گرفتن Chip در سمت راست

        '& .MuiChip-label': {
          width: '100%',
          textAlign: 'center',
          paddingLeft: 1,
          paddingRight: 0,
        },

        '& .MuiChip-icon': {
          marginLeft: 0,
          marginRight: 2,
        },

        '& .MuiChip-labelWrapper': {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        },
      }}
    />
  );
};

StatusChip.propTypes = StatusChipPropTypes;

export default memo(StatusChip);
