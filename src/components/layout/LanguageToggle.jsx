import { IconButton, Tooltip } from '@mui/material';
import TranslateIcon from '@mui/icons-material/Translate';
import { useTranslation } from 'react-i18next';

import useLocale from '@/context/locale/useLocale';

// ✅ تغییر زبان، کنار دکمه‌ی تغییر حالت روشن/تیره.
// setLocale صفحه را بازگذاری می‌کند تا جهت، فونت، تقویم و کش RTL/LTR
// هم‌زمان و بدون حالت نیمه‌تغییریافته عوض شوند.
const LanguageToggle = () => {
  const { t } = useTranslation();
  const { locale, locales, setLocale } = useLocale();

  const next = locale.code === 'fa' ? 'en' : 'fa';

  return (
    <Tooltip title={locales[next].label}>
      <IconButton
        onClick={() => setLocale(next)}
        aria-label={t('تغییر زبان')}
        color="inherit"
      >
        <TranslateIcon />
      </IconButton>
    </Tooltip>
  );
};

export default LanguageToggle;
