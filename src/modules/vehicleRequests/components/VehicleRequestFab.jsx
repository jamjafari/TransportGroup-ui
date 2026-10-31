import { memo, useCallback, useEffect, useState } from 'react';

import { Badge, Fab } from '@mui/material';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import { useTranslation } from 'react-i18next';

import { useAuth } from '@/hooks';
import useTenantContext from '@/context/tenant/useTenantContext';
import { formatNumber } from '@/utils';

import * as vehicleRequestApi from '../api/vehicleRequestApi';

import VehicleRequestDialog from './VehicleRequestDialog';

const BADGE_REFRESH_MS = 60 * 1000;

// ✅ دکمه‌ی «درخواست خودرو» در گوشه‌ی پایین، سمت مخالف سایدبار — جایگاه ثابت را MainLayout می‌دهد
// (کنار دکمه‌ی «دستیار هوش مصنوعی»).
//
// فقط وقتی دیده می‌شود که سوپرادمین قابلیت را برای سازمان کاربر فعال کرده باشد
// (Tenant.VehicleRequestsEnabled)؛ سرور هم همین را بررسی می‌کند. سوپرادمین خودش آن را نمی‌بیند.
//
// شمارنده: برای مدیر نقلیه درخواست‌های در انتظار پاسخ، برای همه پاسخ‌های دیده‌نشده‌ی
// درخواست‌های خودشان. هر دقیقه و بعد از هر کار در دیالوگ به‌روز می‌شود.
const VehicleRequestFab = () => {
  const { t, i18n } = useTranslation();
  const { can } = useAuth();
  const { tenant } = useTenantContext();
  const [open, setOpen] = useState(false);
  const [badge, setBadge] = useState(null);

  const visible = !!tenant?.vehicleRequestsEnabled && !can('Tenant.ManageAll');

  const refreshBadge = useCallback(async () => {
    const response = await vehicleRequestApi.getBadge();
    if (response.success) setBadge(response.data);
  }, []);

  useEffect(() => {
    if (!visible) return undefined;

    // بار اول هم مثل دفعات بعد از داخل یک callback زمان‌دار اجرا می‌شود (نه همزمان داخل effect)
    const first = setTimeout(refreshBadge, 0);
    const timer = setInterval(refreshBadge, BADGE_REFRESH_MS);
    return () => {
      clearTimeout(first);
      clearInterval(timer);
    };
  }, [visible, refreshBadge]);

  if (!visible) {
    return null;
  }

  const count = badge?.total ?? 0;

  const badgeHint = [
    badge?.pendingToReview
      ? t('{{n}} درخواست در انتظار پاسخ', { count: badge.pendingToReview, n: formatNumber(badge.pendingToReview) })
      : null,
    badge?.unseenResponses
      ? t('{{n}} پاسخ تازه', { count: badge.unseenResponses, n: formatNumber(badge.unseenResponses) })
      : null,
  ]
    .filter(Boolean)
    .join(i18n.dir() === 'rtl' ? '، ' : ', ');

  return (
    <>
      <Badge
        color="error"
        overlap="rectangular"
        invisible={count === 0}
        badgeContent={count > 99 ? `${formatNumber(99)}+` : formatNumber(count)}
      >
        <Fab
          variant="extended"
          color="primary"
          onClick={() => setOpen(true)}
          aria-label={badgeHint ? `${t('درخواست خودرو')} — ${badgeHint}` : t('درخواست خودرو')}
          title={badgeHint || undefined}
          sx={{ gap: 1 }}
        >
          <DirectionsCarIcon />
          {t('درخواست خودرو')}
        </Fab>
      </Badge>

      <VehicleRequestDialog
        open={open}
        onClose={() => {
          setOpen(false);
          refreshBadge();
        }}
        onActivity={refreshBadge}
      />
    </>
  );
};

export default memo(VehicleRequestFab);
