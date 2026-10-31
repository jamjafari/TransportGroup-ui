import React, { memo, useEffect, useRef, useState } from 'react';

import { Box, Tooltip } from '@mui/material';

import abbreviateHeader from '../utils/abbreviateHeader';

// فضای فلش مرتب‌سازی TableSortLabel که کنار متن جا می‌گیرد (آیکون ۱۸px + فاصله‌ها)
const SORT_ICON_SPACE = 26;


// ✅ عنوان ستون جدول: اگر در یک خط جا نشود، به حروف اول خلاصه و کامل آن در tooltip نشان داده می‌شود.
// اندازه‌گیری با ResizeObserver (اجرای اول هنگام observe) تا با تغییر عرض ستون/صفحه به‌روز بماند.
const GridHeaderLabel = ({ text }) => {
  const containerRef = useRef(null);
  const measureRef = useRef(null);
  const [overflows, setOverflows] = useState(false);

  useEffect(() => {
    // ✅ فضای واقعی ستون (data-header-slot در GridHeader با flex: 1 و minWidth: 0)،
    // نه containerRef که هم‌اندازه‌ی خودِ متن کوچک و بزرگ می‌شد و تقریباً همه را «جا نشده» نشان می‌داد
    const slot = containerRef.current?.closest('[data-header-slot]') ?? containerRef.current;
    const measure = measureRef.current;
    if (!slot || !measure || typeof ResizeObserver === 'undefined') return undefined;

    const observer = new ResizeObserver(() => {
      setOverflows(measure.scrollWidth + SORT_ICON_SPACE > slot.clientWidth + 1);
    });
    observer.observe(slot);
    return () => observer.disconnect();
  }, [text]);

  const short = overflows ? abbreviateHeader(text) : null;

  const label = (
    <Box
      component="span"
      sx={
        overflows
          ? { whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', display: 'block' }
          : undefined
      }
    >
      {short ?? text}
    </Box>
  );

  return (
    <Box ref={containerRef} sx={{ position: 'relative', minWidth: 0, maxWidth: '100%', display: 'flex', justifyContent: 'center' }}>
      {/* متن کامل در یک خط و نامرئی، فقط برای اندازه‌گیری */}
      <Box
        ref={measureRef}
        component="span"
        aria-hidden
        sx={{ position: 'absolute', visibility: 'hidden', whiteSpace: 'nowrap', pointerEvents: 'none', insetInlineStart: 0 }}
      >
        {text}
      </Box>

      {overflows ? (
        <Tooltip
          title={text}
          arrow
          placement="top"
          // ✅ متن پیش‌فرض tooltip در MUI حدود ۱۱px است و با B Mitra خوانا نیست
          slotProps={{ tooltip: { sx: { typography: 'bodyText', fontWeight: 600, px: 1.5, py: 1 } } }}
        >
          <Box component="span" aria-label={text} sx={{ minWidth: 0, cursor: 'help' }}>
            {label}
          </Box>
        </Tooltip>
      ) : (
        label
      )}
    </Box>
  );
};

export default memo(GridHeaderLabel);
