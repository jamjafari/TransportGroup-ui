import React, { memo } from 'react';

import { Stack, Typography, Box } from '@mui/material';

import { AppJalaliDatePicker } from '@/components';

import {
  AppDateRangePickerPropTypes,
  AppDateRangePickerDefaultProps,
} from './AppDateRangePicker.types';

const AppDateRangePicker = ({ label, value, disabled, onChange }) => {
  const handleFromDate = (date) => {
    onChange({ ...value, from: date });
  };

  const handleToDate = (date) => {
    onChange({ ...value, to: date });
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Stack spacing={2} sx={{ width: '100%' }}>
        {label && (
          <Typography variant="body2" fontWeight={600}>
            {label}
          </Typography>
        )}

        <AppJalaliDatePicker
          label="از تاریخ"
          value={value?.from}
          disabled={disabled}
          onChange={handleFromDate}
        />

        <AppJalaliDatePicker
          label="تا تاریخ"
          value={value?.to}
          disabled={disabled}
          onChange={handleToDate}
        />
      </Stack>
    </Box>
  );
};

AppDateRangePicker.propTypes = AppDateRangePickerPropTypes;
AppDateRangePicker.defaultProps = AppDateRangePickerDefaultProps;

export default memo(AppDateRangePicker);
