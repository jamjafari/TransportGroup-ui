import { memo } from 'react';

import { Box } from '@mui/material';

// ✅ جاده‌ی مارپیچ تزئینی پشت منوی کناری، از بالا تا پایین.
// با پرسپکتیو: بالا (دور) ۱۰٪ و پایین (نزدیک) ۸۰٪ عرض سایدبار را می‌گیرد؛
// خط‌چین وسط هم همین‌طور: دوردست کوتاه، باریک و به‌هم‌نزدیک، نزدیک بلند، پهن و با فاصله.
// مختصات در کادر 100×100 است و با preserveAspectRatio="none" به اندازه‌ی سایدبار کشیده می‌شود.

// (theme.vars || theme): در حالت cssVariables، theme.palette همیشه طرح روشن است؛
// vars به متغیر CSS تبدیل می‌شود تا رنگ با حالت تاریک/روشن عوض شود.
const palette = (theme) => (theme.vars || theme).palette;

const STEPS = 80;

const roadAt = (t) => {
  const halfWidth = 5 + 35 * t; // ۱۰٪ ⇐ ۸۰٪
  // دامنه‌ی پیچ‌ها طوری که جاده از لبه‌ها بیرون نزند
  const amplitude = (50 - halfWidth - 1) * 0.85;
  // پیچ‌های بیشتر در دوردست (بالا)، کمتر در نزدیک (پایین)
  const phase = 2 * Math.PI * 2.4 * (1 - Math.pow(1 - t, 1.6));
  return { center: 50 + amplitude * Math.sin(phase), halfWidth };
};

const fmt = (n) => n.toFixed(2);

const edges = Array.from({ length: STEPS + 1 }, (_, i) => {
  const t = i / STEPS;
  return { y: t * 100, ...roadAt(t) };
});

const ROAD_PATH = [
  ...edges.map((p, i) => `${i ? 'L' : 'M'}${fmt(p.center - p.halfWidth)} ${fmt(p.y)}`),
  ...[...edges].reverse().map((p) => `L${fmt(p.center + p.halfWidth)} ${fmt(p.y)}`),
  'Z',
].join(' ');

// خط‌چین وسط: هر خط یک چهارضلعی باریک روی محور جاده؛ طول، فاصله و پهنا با نزدیک‌شدن (t) بزرگ می‌شوند.
const dashLength = (t) => 0.5 + 3.5 * t; // بر حسب درصد ارتفاع
const dashWidth = (t) => roadAt(t).halfWidth * 0.05; // متناسب با پهنای جاده

const buildDashes = () => {
  const parts = [];
  let y = 0.5;

  while (y < 100) {
    const t0 = y / 100;
    const len = dashLength(t0);
    const y1 = Math.min(y + len, 100);

    // چند نقطه در طول هر خط تا روی پیچ‌ها هم خم شود
    const samples = [0, 0.5, 1].map((k) => {
      const yy = y + (y1 - y) * k;
      const t = yy / 100;
      return { y: yy, x: roadAt(t).center, w: dashWidth(t) / 2 };
    });

    parts.push(
      [
        ...samples.map((s, i) => `${i ? 'L' : 'M'}${fmt(s.x - s.w)} ${fmt(s.y)}`),
        ...[...samples].reverse().map((s) => `L${fmt(s.x + s.w)} ${fmt(s.y)}`),
        'Z',
      ].join(' '),
    );

    // فاصله هم با پرسپکتیو بزرگ می‌شود؛ در نزدیک (پایین) نسبت به طول خط هم بیشتر (حس واقعی)
    y = y1 + len * (0.8 + 2 * t0);
  }

  return parts.join(' ');
};

const DASHES_PATH = buildDashes();

const SidebarRoad = () => (
  <Box
    component="svg"
    viewBox="0 0 100 100"
    preserveAspectRatio="none"
    aria-hidden
    sx={{
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      // پشت محتوای Drawer (Paper خودش stacking context است)
      zIndex: -1,
      pointerEvents: 'none',
    }}
  >
    <Box component="path" d={ROAD_PATH} sx={{ fill: (theme) => palette(theme).sidebar.road }} />
    <Box component="path" d={DASHES_PATH} sx={{ fill: (theme) => palette(theme).sidebar.roadLine }} />
  </Box>
);

export default memo(SidebarRoad);
