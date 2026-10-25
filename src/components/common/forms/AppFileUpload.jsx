import React, { memo, useState } from 'react';

import { Box, Button, Typography } from '@mui/material';

import {
  AppFileUploadPropTypes,
  AppFileUploadDefaultProps,
} from './AppFileUpload.types';
import {
  ALLOWED_ATTACHMENT_EXTENSIONS,
  validateAttachmentFile,
} from '@/constants/attachmentTypes';

import useTranslatedField from './useTranslatedField';

const AppFileUpload = ({
  label,
  accept,
  multiple,
  disabled,
  error,
  helperText,
  onChange,
  value,
}) => {
  const [fileError, setFileError] = useState('');

  const { t, tr } = useTranslatedField();

  // ✅ نوع و حجم فایل پیش از ارسال بررسی می‌شود (سرور هم دوباره بررسی می‌کند)
  const handleChange = (event) => {
    const files = Array.from(event.target.files || []);
    const message = files.map((f) => validateAttachmentFile(f)).find(Boolean);

    if (message) {
      setFileError(message);
      event.target.value = '';
      return;
    }

    setFileError('');
    onChange?.(event);
  };

  const shownError = error || !!fileError;
  const shownHelperText = fileError || helperText;

  return (
    <Box>
      {label && (
        <Typography variant="body2" fontWeight={600} mb={1}>
          {tr(label)}
        </Typography>
      )}

      <Button
        variant="outlined"

        component="label"

        disabled={disabled}

        color={shownError ? 'error' : 'primary'}
      >
        {/* ✅ قبلاً عیناً «Upload File» بود — یعنی در حالت فارسی هم انگلیسی
            نمایش داده می‌شد. الان مثل بقیه‌ی برنامه کلید فارسی دارد. */}
        {t('انتخاب فایل')}
        <input
          hidden

          type="file"

          accept={accept || ALLOWED_ATTACHMENT_EXTENSIONS.join(',')}

          multiple={multiple}

          onChange={handleChange}
        />
      </Button>

      {shownHelperText && (
        <Typography
          variant="caption"
          color={shownError ? 'error' : 'text.secondary'}
          display="block"
          mt={1}
        >
          {tr(shownHelperText)}
        </Typography>
      )}

      {value && (
        <Box mt={1}>
          <Typography variant="caption">{t('انتخاب‌شده:')}</Typography>

          <Typography variant="body2">
            {multiple
              ? t('{{count}} فایل', { count: value.length })
              : value?.name || value}
          </Typography>
        </Box>
      )}
    </Box>
  );
};

AppFileUpload.propTypes = AppFileUploadPropTypes;

AppFileUpload.defaultProps = AppFileUploadDefaultProps;

export default memo(AppFileUpload);
