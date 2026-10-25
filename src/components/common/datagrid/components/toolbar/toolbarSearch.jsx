import React, { memo } from 'react';

import { TextField, InputAdornment, IconButton } from '@mui/material';
import { useTranslation } from 'react-i18next';

import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';

// این کامپوننت از TextField خام MUI استفاده می‌کند (نه AppTextField)،
// پس ترجمه‌ی خودکار خانواده‌ی فرم شاملش نمی‌شود و placeholder را خودش ترجمه می‌کند.
const ToolbarSearch = ({ value, onChange, onClear }) => {
  const { t } = useTranslation();

  return (
    <TextField
      size="small"
      placeholder={t('جستجو...')}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      sx={{
        minWidth: 260,
      }}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon fontSize="small" />
          </InputAdornment>
        ),

        endAdornment: value ? (
          <InputAdornment position="end">
            <IconButton size="small" onClick={onClear}>
              <ClearIcon fontSize="small" />
            </IconButton>
          </InputAdornment>
        ) : null,
      }}
    />
  );
};

export default memo(ToolbarSearch);
