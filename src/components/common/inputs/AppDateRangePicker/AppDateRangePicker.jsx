import React, { memo } from 'react';

import { Stack, Typography, Box } from '@mui/material';

import { DashboardGrid, DashboardColumn } from '@/components';

import { AppDatePicker } from '@/components';

import {
  AppDateRangePickerPropTypes,
  AppDateRangePickerDefaultProps,
} from './AppDateRangePicker.types';

const AppDateRangePicker = ({ label, value, disabled, onChange }) => {
  const handleFromDate = (event) => {
    onChange({
      ...value,
      fromDate: event.target.value,
    });
  };

  const handleToDate = (event) => {
    onChange({
      ...value,
      toDate: event.target.value,
    });
  };

  return (
    <Box
      sx={{
        width: '100%',
      }}
    >
      <Stack
        spacing={2}
        sx={{
          width: '100%',
        }}
      >
        {label && (
          <Typography variant="body2" fontWeight={600}>
            {label}
          </Typography>
        )}

        <AppDatePicker
          label="از تاریخ"
          value={value?.fromDate}
          disabled={disabled}
          onChange={handleFromDate}
        />

        <AppDatePicker
          label="تا تاریخ"
          value={value?.toDate}
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
