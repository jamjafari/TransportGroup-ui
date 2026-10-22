import React, { memo } from 'react';
import Grid from '@mui/material/Grid';

import useLocale from '@/context/locale/useLocale';

// ✅ flex-direction توسط cssjanus برنمی‌گردد، پس 'row-reverse' ثابت باعث می‌شد
// همه‌ی فرم‌های برنامه در حالت چپ‌به‌راست آینه‌ای شوند.
//
// برای اینکه ظاهر فارسی دقیقاً مثل قبل بماند، در RTL همان 'row-reverse'
// حفظ شده و در LTR از 'row' استفاده می‌شود؛ نتیجه این است که در هر دو زبان
// اولین فیلد در سمت چپ قرار می‌گیرد — همان چیزی که امروز در فارسی دیده می‌شود.
const AppFormGrid = ({ children, spacing = 2, direction, ...props }) => {
  const { isRtl } = useLocale();

  return (
    <Grid
      container
      spacing={spacing}
      direction={direction ?? (isRtl ? 'row-reverse' : 'row')}
      {...props}
    >
      {children}
    </Grid>
  );
};

export default memo(AppFormGrid);
