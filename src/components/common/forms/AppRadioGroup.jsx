import React, { memo } from 'react';

import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormHelperText,
} from '@mui/material';

import useTranslatedField from './useTranslatedField';

import {
  AppRadioGroupPropTypes,
  AppRadioGroupDefaultProps,
} from './AppRadioGroup.types';

const AppRadioGroup = ({
  name,
  label,
  value,
  options,
  onChange,
  row,
  error,
  helperText,
  disabled,
  color,
  size,
}) => {
  const { tr, trOptions } = useTranslatedField();

  return (
    <FormControl
      error={error}

      disabled={disabled}
    >
      {label && <FormLabel>{tr(label)}</FormLabel>}

      <RadioGroup
        name={name}

        value={value}

        onChange={onChange}

        row={row}
      >
        {trOptions(options).map((option) => (
          <FormControlLabel
            key={option.value}

            value={option.value}

            control={
              <Radio
                color={color}

                size={size}
              />
            }

            label={option.label}

            disabled={option.disabled}
          />
        ))}
      </RadioGroup>

      {helperText && <FormHelperText>{tr(helperText)}</FormHelperText>}
    </FormControl>
  );
};

AppRadioGroup.propTypes = AppRadioGroupPropTypes;

AppRadioGroup.defaultProps = AppRadioGroupDefaultProps;

export default memo(AppRadioGroup);
