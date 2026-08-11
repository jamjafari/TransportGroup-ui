import React, { memo } from 'react';

import { Chip } from '@mui/material';

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
import { StatusChipPropTypes } from './StatusChip.types';

const statusMap = {
  TankFull: {
    label: 'باک پر',
    color: 'success',
    icon: <CheckCircleIcon />,
  },

  TankNotFull: {
    label: 'باک پر نیست',
    color: 'warning',
    icon: <WarningAmberIcon />,
  },
  Approved: {
    label: 'تایید شده',
    color: 'success',
    icon: <CheckCircleIcon />,
  },

  Pending: {
    label: 'در انتظار تایید',
    color: 'warning',
    icon: <PendingActionsIcon />,
  },

  Rejected: {
    label: 'رد شده',
    color: 'error',
    icon: <CancelIcon />,
  },
  Active: {
    label: 'فعال',
    color: 'success',
    icon: <CheckCircleIcon />,
  },

  Inactive: {
    label: 'غیرفعال',
    color: 'default',
    icon: <HighlightOffIcon />,
  },

  Running: {
    label: 'در حال انجام',
    color: 'primary',
    icon: <LocalShippingIcon />,
  },

  Completed: {
    label: 'تکمیل شده',
    color: 'success',
    icon: <TaskAltIcon />,
  },

  Mission: {
    label: 'در مأموریت',
    color: 'primary',
    icon: <LocalShippingIcon />,
  },

  Repair: {
    label: 'در تعمیرگاه',
    color: 'warning',
    icon: <EngineeringIcon />,
  },

  Canceled: {
    label: 'لغو شده',
    color: 'error',
    icon: <HighlightOffIcon />,
  },
  Cancelled: {
    label: 'لغو شده',
    color: 'error',
    icon: <HighlightOffIcon />,
  },
  Warning: {
    label: 'هشدار',
    color: 'warning',
    icon: <WarningAmberIcon />,
  },

  Critical: {
    label: 'هشدار آخر',
    color: 'error',
    icon: <WarningAmberIcon />,
  },

  Expired: {
    label: 'منقضی شده',
    color: 'error',
    icon: <HighlightOffIcon />,
  },

  Required: {
    label: 'نیازمند سرویس',
    color: 'warning',
    icon: <BuildCircleIcon />,
  },
  Overdue: {
    label: ' معوق',
    color: 'error',
    icon: <MiscellaneousServicesIcon />,
  },
  ServiceCompleted: {
    label: 'انجام شده',
    color: 'success',
    icon: <CheckCircleIcon />,
  },
  Success: {
    label: 'تایید شده',
    color: 'success',
    icon: <CheckCircleIcon />,
  },

  warning: {
    label: 'هشدار',
    color: 'warning',
    icon: <BuildCircleIcon />,
  },

  error: {
    label: 'هشدار جدی',
    color: 'error',
    icon: <HighlightOffIcon />,
  },

  primary: {
    label: 'در عملیات',
    color: 'primary',
    icon: <LocalShippingIcon />,
  },
  InRepair: {
    label: 'در حال تعمیر',
    color: 'warning',
    icon: <EngineeringIcon />,
  },

  Sold: {
    label: 'فروخته‌شده',
    color: 'default',
    icon: <HighlightOffIcon />,
  },
};

const StatusChip = ({
  status,

  size = 'small',
}) => {
  const item = statusMap[status] ?? {
    label: status,

    color: 'info',

    icon: <HelpOutlineIcon />,
  };

  return (
    <Chip
      size={size}

      label={item.label}

      color={item.color}

      icon={item.icon}

      variant="filled"
      sx={{
        minWidth: 130,
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
