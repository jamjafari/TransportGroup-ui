import React, { memo } from 'react';

import { Box, Typography, Divider } from '@mui/material';

import useTranslatedField from './useTranslatedField';

import {
  AppFormSectionPropTypes,
  AppFormSectionDefaultProps,
} from './AppFormSection.types';

const AppFormSection = ({ title, subtitle, children, divider }) => {
  const { tr } = useTranslatedField();

  return (
    <Box
      sx={{
        width: '100%',
      }}
    >
      {(title || subtitle) && (
        // ✅ textAlign از 'right' به 'start' تغییر کرد: 'start' در فارسی راست
        // و در انگلیسی چپ است، پس در هر دو زبان عنوان به ابتدای خط می‌چسبد.
        <Box
          mb={2}
          sx={{
            width: '100%',
            textAlign: 'start',
          }}
        >
          {/* align حذف شد — MUI مقدار 'start' را در propTypes نمی‌پذیرد و
              textAlign والد به‌هرحال ارث می‌رسد. */}
          {title && (
            <Typography variant="subtitle1" fontWeight={700}>
              {tr(title)}
            </Typography>
          )}

          {subtitle && (
            <Typography variant="body2" color="text.secondary">
              {tr(subtitle)}
            </Typography>
          )}
        </Box>
      )}

      {children}

      {divider && (
        <Box mt={2}>
          <Divider />
        </Box>
      )}
    </Box>
  );
};

AppFormSection.propTypes = AppFormSectionPropTypes;

AppFormSection.defaultProps = AppFormSectionDefaultProps;

export default memo(AppFormSection);
