import React, { memo } from 'react';

import { TextField } from '@mui/material';

import moment from 'jalali-moment';

import {
  AppJalaliDatePickerPropTypes,
  AppJalaliDatePickerDefaultProps,
} from './AppJalaliDatePicker.types';

const AppJalaliDatePicker = ({
  name,
  label,
  value,
  onChange,
  helperText,
  error,
  disabled,
  required,
  fullWidth,
}) => {
  const handleChange = (e) => {
    const gregorian = moment(e.target.value, 'jYYYY/jMM/jDD').format(
      'YYYY-MM-DD',
    );

    onChange(gregorian);
  };

  const displayValue = value
    ? moment(value, 'YYYY-MM-DD').format('jYYYY/jMM/jDD')
    : '';

  return (
    <TextField
      name={name}

      label={label}

      type="text"

      value={displayValue}

      onChange={handleChange}

      helperText={helperText}

      error={error}

      disabled={disabled}

      required={required}

      fullWidth={fullWidth}

      placeholder="1402/01/01"
    />
  );
};

AppJalaliDatePicker.propTypes = AppJalaliDatePickerPropTypes;

AppJalaliDatePicker.defaultProps = AppJalaliDatePickerDefaultProps;

export default memo(AppJalaliDatePicker);
