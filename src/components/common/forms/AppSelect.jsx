import React, { memo } from 'react';

import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
} from '@mui/material';

import { AppSelectPropTypes, AppSelectDefaultProps } from './AppSelect.types';

const AppSelect = ({
  id,
  name,
  label,
  value,
  options,
  placeholder,
  error,
  helperText,
  disabled,
  fullWidth,
  required,
  size,
  variant,
  onChange,
  onBlur,
  renderValue,
  children,
  ...rest
}) => {
  const labelId = `${id || name}-label`;

  return (
    <FormControl
      fullWidth={fullWidth}

      error={error}

      disabled={disabled}

      required={required}

      size={size}

      variant={variant}
    >
      {label && <InputLabel id={labelId}>{label}</InputLabel>}

      <Select
        id={id}

        name={name}

        labelId={labelId}

        value={value}

        label={label}

        displayEmpty

        renderValue={
          renderValue ||
          ((selected) => {
            if (
              selected === '' ||
              selected === null ||
              selected === undefined
            ) {
              return placeholder;
            }

            const option = options.find((item) => item.value === selected);

            return option ? option.label : selected;
          })
        }

        onChange={onChange}

        onBlur={onBlur}

        {...rest}
      >
        {placeholder && <MenuItem value="">{placeholder}</MenuItem>}

        {children ||
          options.map((option) => (
            <MenuItem
              key={option.value}

              value={option.value}

              disabled={option.disabled}
            >
              {option.label}
            </MenuItem>
          ))}
      </Select>

      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  );
};

AppSelect.propTypes = AppSelectPropTypes;

AppSelect.defaultProps = AppSelectDefaultProps;

export default memo(AppSelect);
