import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';

import {
  Card,
  CardContent,
  Typography,
  Stack,
  Avatar,
  Box,
  LinearProgress,
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
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';

import { formatNumber } from '@/utils';

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
  subtitle, // ✅ جدید — متن زیر عدد، مثلاً "از ابتدای سال"
  percent, // ✅ جدید — عدد ۰ تا ۱۰۰، اگه بدی یه نوار پیشرفت نمایش داده میشه
  trend, // ✅ جدید — { direction: 'up' | 'down', label: '۱۲٪ نسبت به ماه قبل' }
  onClick, // ✅ جدید — اگه بدی کارت کلیک‌پذیر میشه
}) => {
  // ✅ متن‌های رشته‌ای کارت همین‌جا ترجمه می‌شوند؛ صدازننده‌هایی که خودشان t() زده‌اند
  // بی‌تغییر می‌مانند (متن ترجمه‌شده کلید en.json نیست و دست‌نخورده برمی‌گردد)
  const { t } = useTranslation();
  const tr = (text) => (typeof text === 'string' && text ? t(text) : text);

  const IconComponent =
    icon && ICONS[icon] ? ICONS[icon] : ICON_BY_COLOR[color] || AssignmentIcon;

  const TrendIcon =
    trend?.direction === 'down' ? TrendingDownIcon : TrendingUpIcon;
  const trendColor =
    trend?.direction === 'down' ? 'error.main' : 'success.main';

  return (
    <Card
      elevation={1}
      onClick={onClick}
      sx={{
        borderRadius: 2,
        height: '100%',
        cursor: onClick ? 'pointer' : 'default',
        transition: 'box-shadow 0.2s, transform 0.2s',
        '&:hover': onClick
          ? { boxShadow: 4, transform: 'translateY(-2px)' }
          : {},
      }}
    >
      <CardContent>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="flex-start"
        >
          <Box flex={1}>
            <Typography variant="statLabel" color="text.secondary">
              {tr(title)}
            </Typography>

            <Typography variant="statValue" sx={{ mt: 0.5 }}>
              {value}
            </Typography>

            {subtitle && (
              <Typography
                variant="meta"
                color="text.secondary"
                display="block"
                mt={0.5}
              >
                {tr(subtitle)}
              </Typography>
            )}

            {trend && (
              <Stack direction="row" alignItems="center" spacing={0.5} mt={0.5}>
                <TrendIcon sx={{ fontSize: 16, color: trendColor }} />
                <Typography variant="meta" sx={{ color: trendColor }}>
                  {tr(trend.label)}
                </Typography>
              </Stack>
            )}
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

        {typeof percent === 'number' && (
          <Box mt={2}>
            <LinearProgress
              variant="determinate"
              value={Math.min(100, Math.max(0, percent))}
              color={color === 'secondary' ? 'inherit' : color}
              sx={{ height: 6, borderRadius: 3 }}
            />
            <Typography
              variant="meta"
              color="text.secondary"
              mt={0.5}
              display="block"
            >
              {t('{{percent}}٪ از کل', {
                percent: formatNumber(percent, { maximumFractionDigits: 0 }),
              })}
            </Typography>
          </Box>
        )}
      </CardContent>
    </Card>
  );
};

export default memo(KpiCard);
