import React, { memo } from 'react';

import { TextField, CircularProgress, Autocomplete, Box } from '@mui/material';

import {
  AppAutocompletePropTypes,
  AppAutocompleteDefaultProps,
} from './AppAutoComplete.types';
import useTranslatedField from '@/components/common/forms/useTranslatedField';

const AppAutoComplete = ({
  label,
  value,
  options,
  loading,
  required,
  disabled,

  onChange,
}) => {
  // ✅ مثل AppAutocompleteform: ترجمه در getOptionLabel، نه با ساختن آرایه‌ی تازه‌ی options
  // (Autocomplete گزینه‌ها را با هویت شیء مقایسه می‌کند)
  const { tr } = useTranslatedField();

  const selectedItem = options.find((item) => item.id === value) ?? null;

  return (
    <Box
      sx={{
        width: '100%',
      }}
    >
      <Autocomplete
        sx={{
          width: '100%',
        }}
        disabled={disabled || loading}
        loading={loading}
        options={options}
        value={selectedItem}
        getOptionLabel={(option) => tr(option?.title) ?? ''}
        onChange={(_, option) => onChange(option?.id ?? null)}
        renderInput={(params) => (
          <TextField
            {...params}

            label={tr(label)}
            required={required}
            InputProps={{
              ...params.InputProps,
              endAdornment: (
                <>
                  {loading && <CircularProgress size={18} />}

                  {params.InputProps.endAdornment}
                </>
              ),
            }}
          />
        )}
      />
    </Box>
  );
};

AppAutoComplete.propTypes = AppAutocompletePropTypes;

AppAutoComplete.defaultProps = AppAutocompleteDefaultProps;

export default memo(AppAutoComplete);
