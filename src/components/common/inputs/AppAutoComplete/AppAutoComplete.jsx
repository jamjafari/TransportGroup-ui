import React, { memo } from 'react';

import { TextField, CircularProgress, Autocomplete, Box } from '@mui/material';

import {
  AppAutocompletePropTypes,
  AppAutocompleteDefaultProps,
} from './AppAutoComplete.types';

const AppAutoComplete = ({
  label,
  value,
  options,
  loading,
  required,
  disabled,

  onChange,
}) => {
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
        getOptionLabel={(option) => option.title}
        onChange={(_, option) => onChange(option?.id ?? null)}
        renderInput={(params) => (
          <TextField
            {...params}

            label={label}
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
