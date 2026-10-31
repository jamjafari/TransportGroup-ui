import React, { createContext, memo, useContext } from 'react';

import { useTranslation } from 'react-i18next';

import { Alert, AlertTitle, Box } from '@mui/material';

// ✅ خطای ذخیره‌ی فرم (پیام‌های اعتبارسنجی سرور و ...) بالای دکمه‌های فرم.
//
// صفحه خطای ذخیره را با FormSaveErrorProvider به فرم می‌دهد و AppFormActions آن را
// بالای دکمه‌ها نشان می‌دهد؛ پس خودِ کامپوننت‌های فرم تغییری لازم ندارند.
// پیام‌های سرور از قبل به زبان صفحه هستند (Accept-Language)؛ t() فقط پیام‌های
// پیش‌فرض فارسیِ سمت کلاینت را ترجمه می‌کند و بقیه را دست‌نخورده برمی‌گرداند.
const FormSaveErrorContext = createContext(null);

export const FormSaveErrorProvider = ({ error, children }) => (
  <FormSaveErrorContext.Provider value={error}>
    {children}
  </FormSaveErrorContext.Provider>
);

const FormSaveErrorAlert = () => {
  const { t } = useTranslation();
  const error = useContext(FormSaveErrorContext);

  if (!error) return null;

  const messages = error.errors?.length ? error.errors : [error.message];

  return (
    <Alert severity="error" sx={{ mb: 2 }}>
      <AlertTitle>{t('ذخیره انجام نشد')}</AlertTitle>

      {messages.length === 1 ? (
        t(messages[0])
      ) : (
        <Box component="ul" sx={{ m: 0, pl: 2.5 }}>
          {messages.map((message) => (
            <li key={message}>{t(message)}</li>
          ))}
        </Box>
      )}
    </Alert>
  );
};

export default memo(FormSaveErrorAlert);
