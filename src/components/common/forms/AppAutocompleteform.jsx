import React, { memo } from 'react';

import { Autocomplete, TextField } from '@mui/material';

import {
  AppAutocompletePropTypes,
  AppAutocompleteDefaultProps,
} from './AppAutocompleteform.types';

const AppAutocompleteform = ({
  id,
  name,
  label,
  value,
  options,
  placeholder,
  helperText,
  error,
  disabled,
  required,
  fullWidth,
  size,
  loading,
  multiple,
  disableClearable,
  getOptionLabel,
  isOptionEqualToValue,
  onChange,
  onInputChange,
  ...rest
}) => {
  return (
    <Autocomplete
      id={id}

      value={value}

      options={options}

      loading={loading}

      multiple={multiple}

      disabled={disabled}

      disableClearable={disableClearable}

      getOptionLabel={getOptionLabel}

      isOptionEqualToValue={isOptionEqualToValue}

      onChange={onChange}

      onInputChange={onInputChange}

      renderInput={(params) => (
        <TextField
          {...params}

          name={name}

          label={label}

          placeholder={placeholder}

          error={error}

          helperText={helperText}

          required={required}

          fullWidth={fullWidth}

          size={size}
        />
      )}

      {...rest}
    />
  );
};

AppAutocompleteform.propTypes = AppAutocompletePropTypes;

AppAutocompleteform.defaultProps = AppAutocompleteDefaultProps;

export default memo(AppAutocompleteform);
