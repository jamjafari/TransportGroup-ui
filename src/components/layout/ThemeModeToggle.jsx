import { IconButton, Tooltip } from '@mui/material';
import { useColorScheme } from '@mui/material/styles';

import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

// ✅ تغییر حالت روشن/تیره.
// حالت انتخاب‌شده را MUI خودش در localStorage ذخیره می‌کند (کلید mui-mode)،
// پس نیازی به نگه‌داری دستی آن نیست.
const ThemeModeToggle = () => {
  const { mode, systemMode, setMode } = useColorScheme();

  // در اولین رندر mode مقدار undefined دارد؛ تا مشخص شدن آن چیزی نمایش نمی‌دهیم
  // تا آیکن اشتباه پرش نکند.
  if (!mode) {
    return null;
  }

  // وقتی mode برابر 'system' است، حالت واقعی را systemMode مشخص می‌کند
  const isDark = (mode === 'system' ? systemMode : mode) === 'dark';

  const label = isDark ? 'حالت روشن' : 'حالت تیره';

  return (
    <Tooltip title={label}>
      <IconButton
        onClick={() => setMode(isDark ? 'light' : 'dark')}
        aria-label={label}
        color="inherit"
      >
        {isDark ? <LightModeIcon /> : <DarkModeIcon />}
      </IconButton>
    </Tooltip>
  );
};

export default ThemeModeToggle;
