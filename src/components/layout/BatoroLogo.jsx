import { memo, useId } from 'react';

import { Box, Toolbar, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

// ✅ لوگوی «باتورو»: نمای جلوی پیکان کلاسیک (بدنه‌ی پهن و کوتاه، جلوپنجره‌ی کرومی تمام‌عرض با
// چراغ‌های گرد، سپر کرومی با دو ضربه‌گیر عمودی، راهنماهای نارنجی زیر سپر) با چراغ‌های روشن.
// SVG است تا در هر اندازه‌ای تیز بماند.
export const BatoroCar = memo(({ height = 40 }) => {
  // شناسه‌های یکتا برای gradientها (اگر لوگو دو بار در صفحه باشد تداخل نکنند)
  const id = useId().replace(/:/g, '');
  const g = (name) => `${name}-${id}`;
  const url = (name) => `url(#${g(name)})`;

  return (
    <Box component="svg" viewBox="0 0 200 110" sx={{ height, width: 'auto', display: 'block', overflow: 'visible' }} aria-hidden>
      <defs>
        <linearGradient id={g('body')} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#A9DAF7" />
          <stop offset="1" stopColor="#5AA7DC" />
        </linearGradient>
        <linearGradient id={g('glass')} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#5E7388" />
          <stop offset="1" stopColor="#24313F" />
        </linearGradient>
        <linearGradient id={g('chrome')} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#FFFFFF" />
          <stop offset="0.5" stopColor="#BFC5CE" />
          <stop offset="1" stopColor="#7E8794" />
        </linearGradient>
        <radialGradient id={g('lens')}>
          <stop offset="0" stopColor="#FFFFFF" />
          <stop offset="0.6" stopColor="#FFF3B0" />
          <stop offset="1" stopColor="#F5C842" />
        </radialGradient>
        <radialGradient id={g('glow')}>
          <stop offset="0" stopColor="#FFF4B8" stopOpacity="0.9" />
          <stop offset="0.5" stopColor="#FFD54F" stopOpacity="0.35" />
          <stop offset="1" stopColor="#FFD54F" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* خطوط کم‌رنگ حرکت در دو طرف */}
      <g stroke="#FFD54F" strokeLinecap="round" strokeWidth="2" opacity="0.75">
        <line x1="0" y1="58" x2="7" y2="58" />
        <line x1="2" y1="68" x2="7" y2="68" />
        <line x1="193" y1="58" x2="200" y2="58" />
        <line x1="193" y1="68" x2="198" y2="68" />
      </g>

      {/* سایه */}
      <ellipse cx="100" cy="104" rx="90" ry="4" fill="#000" opacity="0.3" />

      {/* لاستیک‌ها */}
      <rect x="22" y="84" width="22" height="19" rx="3" fill="#1A1D22" />
      <rect x="156" y="84" width="22" height="19" rx="3" fill="#1A1D22" />

      {/* اتاق: سقف صاف، ستون‌های باریک */}
      <path d="M50 47 L63 15 Q65 10 71 10 H129 Q135 10 137 15 L150 47 Z" fill={url('body')} stroke="#3A3F47" strokeWidth="1.6" />
      <path d="M59 45 L70 17 H130 L141 45 Z" fill={url('glass')} stroke="#3A3F47" strokeWidth="1.2" />
      <path d="M74 41 L84 20" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" opacity="0.35" />
      <rect x="95" y="18" width="10" height="4" rx="1" fill="#1A1D22" />
      <path d="M78 45 L100 40" stroke="#1A1D22" strokeWidth="1.4" strokeLinecap="round" />

      {/* آینه‌های بغل */}
      <rect x="38" y="38" width="11" height="6" rx="2" fill="#2B2F36" />
      <rect x="151" y="38" width="11" height="6" rx="2" fill="#2B2F36" />

      {/* بدنه‌ی جلو: پهن و کوتاه */}
      <path d="M14 52 Q14 45 22 45 H178 Q186 45 186 52 V84 Q186 90 180 90 H20 Q14 90 14 84 Z" fill={url('body')} stroke="#3A3F47" strokeWidth="1.6" />
      <line x1="20" y1="50" x2="180" y2="50" stroke="#3A3F47" strokeWidth="1" opacity="0.45" />

      {/* جلوپنجره‌ی کرومی تمام‌عرض */}
      <rect x="17" y="54" width="166" height="22" rx="2.5" fill="#262A31" stroke={url('chrome')} strokeWidth="2.2" />
      {/* (gradient روی خط کاملاً افقی رندر نمی‌شود؛ رنگ ثابت کرومی) */}
      <g stroke="#B9C0CA" strokeWidth="1.6">
        <line x1="50" y1="58.5" x2="150" y2="58.5" />
        <line x1="50" y1="62.8" x2="150" y2="62.8" />
        <line x1="50" y1="67.1" x2="150" y2="67.1" />
        <line x1="50" y1="71.4" x2="150" y2="71.4" />
      </g>
      <rect x="93" y="59" width="14" height="12" rx="2" fill={url('chrome')} stroke="#4B5563" strokeWidth="0.8" />

      {/* چراغ‌های مستطیلی روشن (مثل پیکان) */}
      {[33, 167].map((cx) => (
        <g key={cx}>
          <ellipse cx={cx} cy="65" rx="30" ry="22" fill={url('glow')} />
          <rect x={cx - 14} y="56" width="28" height="18" rx="2.5" fill={url('chrome')} stroke="#4B5563" strokeWidth="1" />
          <rect x={cx - 11.5} y="58.5" width="23" height="13" rx="1.5" fill={url('lens')} />
          <rect x={cx - 9} y="60" width="7" height="2.5" rx="1" fill="#FFFFFF" opacity="0.9" />
        </g>
      ))}

      {/* سپر کرومی با دو ضربه‌گیر عمودی */}
      <rect x="10" y="78" width="180" height="7" rx="3.5" fill={url('chrome')} stroke="#4B5563" strokeWidth="1" />
      <rect x="64" y="73" width="6" height="15" rx="2" fill={url('chrome')} stroke="#4B5563" strokeWidth="0.8" />
      <rect x="130" y="73" width="6" height="15" rx="2" fill={url('chrome')} stroke="#4B5563" strokeWidth="0.8" />

      {/* راهنماهای نارنجی زیر سپر */}
      <rect x="24" y="87" width="15" height="4.5" rx="1.5" fill="#F59E0B" />
      <rect x="161" y="87" width="15" height="4.5" rx="1.5" fill="#F59E0B" />

      {/* پلاک */}
      <rect x="81" y="87" width="38" height="11" rx="1.5" fill="#FFFFFF" stroke="#1E3A8A" strokeWidth="1" />
      <rect x="81" y="87" width="7" height="11" rx="1" fill="#1E40AF" />
      <line x1="92" y1="92.5" x2="115" y2="92.5" stroke="#1F2937" strokeWidth="1.3" strokeLinecap="round" />
    </Box>
  );
});
BatoroCar.displayName = 'BatoroCar';

// ✅ جایگاه بالای سایدبار (همان ارتفاع نوار بالا، بالای «داشبورد»): خودرو و نام کنار هم.
// در حالت جمع‌شده فقط خودرو.
const BatoroLogo = ({ collapsed = false }) => {
  const { t } = useTranslation();

  return (
    <Toolbar
      component={RouterLink}
      to="/dashboard"
      aria-label={t('باتورو')}
      disableGutters
      sx={{
        justifyContent: 'center',
        alignItems: 'center',
        gap: 1.5,
        px: 1,
        textDecoration: 'none',
        borderBottom: '1px solid',
        borderBottomColor: 'divider',
      }}
    >
      <BatoroCar height={collapsed ? 34 : 50} />
      {!collapsed && (
        <Typography
          component="span"
          sx={{ fontSize: 26, fontWeight: 800, lineHeight: 1, letterSpacing: 0.5, color: 'sidebar.text' }}
        >
          {t('باتورو')}
        </Typography>
      )}
    </Toolbar>
  );
};

export default memo(BatoroLogo);
