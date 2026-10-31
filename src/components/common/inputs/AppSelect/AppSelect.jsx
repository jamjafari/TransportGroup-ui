import React, { memo } from 'react';
import { StatusChip } from '@/components';
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  CircularProgress,
  Box,
} from '@mui/material';

import { AppSelectPropTypes, AppSelectDefaultProps } from './AppSelect.types';
import useTranslatedField from '@/components/common/forms/useTranslatedField';

const AppSelect = ({
  label,
  value,
  items,
  loading,
  required,
  disabled,
  fullWidth,
  onChange,
  renderAsStatus = false,
}) => {
  // ✅ مثل AppSelectform: برچسب و عنوان گزینه‌ها ترجمه می‌شوند (StatusChip خودش ترجمه می‌کند)
  const { tr } = useTranslatedField();

  const translatedLabel = tr(label);

  return (
    <Box
      sx={{
        width: '100%',
      }}
    >
      <FormControl
        sx={{
          width: '100%',
        }}

        required={required}
        disabled={disabled || loading}
      >
        <InputLabel>{translatedLabel}</InputLabel>

        <Select
          value={value ?? ''}
          label={translatedLabel}
          onChange={(event) => onChange(event.target.value)}
          renderValue={(selected) => {
            if (!renderAsStatus) {
              const item = items.find((x) => x.id === selected);

              return tr(item?.title) ?? '';
            }

            return <StatusChip status={selected} />;
          }}
        >
          {loading ? (
            <MenuItem disabled>
              <CircularProgress size={18} />
            </MenuItem>
          ) : (
            items.map((item) => (
              <MenuItem key={item.id} value={item.id}>
                {renderAsStatus ? <StatusChip status={item.id} /> : tr(item.title)}
              </MenuItem>
            ))
          )}
        </Select>
      </FormControl>
    </Box>
  );
};

AppSelect.propTypes = AppSelectPropTypes;

AppSelect.defaultProps = AppSelectDefaultProps;

export default memo(AppSelect);
