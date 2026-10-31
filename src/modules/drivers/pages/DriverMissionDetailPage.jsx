import React, { memo, useCallback, useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import { Box, Typography, Stack, Alert, Chip } from "@mui/material";
import MyLocationIcon from "@mui/icons-material/MyLocation";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import StopIcon from "@mui/icons-material/Stop";
import { missionStatusOptions } from "../constants";

import { AppCard, AppButton, StatusChip, AppSelect } from "@/components";

import useDriverMissions from "../hooks/useDriverMissions";
import useGeolocation from "../hooks/useGeolocation";
import useAutoGpsTracking from "../hooks/useAutoGpsTracking";
import i18n from '@/i18n';
import { formatDateTime, formatNumber, getDateLocale } from '@/utils';
const ENDED_STATUSES = [3, 4]; // Completed, Canceled

const INTERVAL_OPTIONS = [
  { id: 1, title: "هر ۱ دقیقه" },
  { id: 5, title: "هر ۵ دقیقه" },
  { id: 10, title: "هر ۱۰ دقیقه" },
  { id: 15, title: "هر ۱۵ دقیقه" },
  { id: 30, title: "هر ۳۰ دقیقه" },
];

const DriverMissionDetailPage = () => {
  const { id } = useParams();
  const { missions, points, getMyMissions, recordGpsPoint, getGpsPoints } =
    useDriverMissions();
  const missionLabel = useCallback(
    (value) =>
      missionStatusOptions.find((option) => option.value === value)?.label ??
      "—",
    [],
  );
  const {
    getCurrentPosition,
    loading: geoLoading,
    error: geoError,
  } = useGeolocation();

  const [submitting, setSubmitting] = useState(false);
  // ✅ نوع پیام جدا از متن نگه داشته می‌شود؛ قبلاً رنگ از وجود کلمه‌ی «موفقیت» در متن
  // حدس زده می‌شد که با ترجمه‌ی پیام‌ها در انگلیسی پیام موفقیت را قرمز نشان می‌داد.
  const [message, setMessage] = useState(null); // { severity: 'success' | 'error', text }
  const [intervalMinutes, setIntervalMinutes] = useState(5); // ✅ اضافه شد

  const mission = missions.find((m) => String(m.id) === String(id));

  useEffect(() => {
    if (missions.length === 0) {
      getMyMissions();
    }
    getGpsPoints(id);
  }, [id, missions.length, getMyMissions, getGpsPoints]);

  // ✅ اضافه شد
  const {
    isTracking,
    lastRecordedAt,
    error: autoError,
    start: startAutoTracking,
    stop: stopAutoTracking,
  } = useAutoGpsTracking({
    missionId: id,
    intervalMinutes,
    getCurrentPosition,
    recordGpsPoint,
  });
  // ✅ اضافه شد — هشدار قبل از بستن/ترک صفحه وقتی ثبت خودکار فعال است
  useEffect(() => {
    if (!isTracking && autoError) {
      setMessage({ severity: "error", text: autoError });
    }
  }, [isTracking, autoError]);

  useEffect(() => {
    if (!isTracking) return;

    const handleBeforeUnload = (event) => {
      event.preventDefault();
      event.returnValue = ""; // مرورگرهای مدرن پیام سفارشی رو نادیده می‌گیرن و متن پیش‌فرض خودشون رو نشون می‌دن
      return "";
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [isTracking]);

  // ✅ هر بار که یک نقطه‌ی جدید (چه دستی، چه خودکار) ثبت شد، تاریخچه رو رفرش کن
  useEffect(() => {
    if (lastRecordedAt) {
      getGpsPoints(id);
    }
  }, [lastRecordedAt, id, getGpsPoints]);

  const handleRecord = useCallback(async () => {
    setMessage(null);
    setSubmitting(true);

    try {
      const coords = await getCurrentPosition();
      await recordGpsPoint(id, coords);
      setMessage({ severity: "success", text: i18n.t("موقعیت با موفقیت ثبت شد.") });
      getGpsPoints(id);
    } catch (err) {
      setMessage({ severity: "error", text: err.message || i18n.t("خطا در ثبت موقعیت") });
    } finally {
      setSubmitting(false);
    }
  }, [id, getCurrentPosition, recordGpsPoint, getGpsPoints]);
  const isEnded = mission ? ENDED_STATUSES.includes(mission.status) : false; // ✅ اضافه شد

  return (
    <Box sx={{ maxWidth: 480, mx: "auto", p: 2 }}>
      <Typography variant="h6" fontWeight={700} mb={2}>
        {mission?.missionCode || i18n.t("مأموریت")}
      </Typography>

      {mission && (
        <AppCard sx={{ p: 2, mb: 2 }}>
          <Stack direction="row" justifyContent="space-between" mb={1}>
            <Typography variant="body2">{i18n.t('مبدا')}</Typography>
            <Typography variant="body2" fontWeight={600}>
              {mission.originLocationName}
            </Typography>
          </Stack>
          <Stack direction="row" justifyContent="space-between" mb={1}>
            <Typography variant="body2">{i18n.t('مقصد')}</Typography>
            <Typography variant="body2" fontWeight={600}>
              {mission.destinationLocationName}
            </Typography>
          </Stack>
          <Stack direction="row" justifyContent="space-between">
            <Typography variant="body2">{i18n.t('وضعیت')}</Typography>
            <StatusChip status={missionLabel(mission.status)} />
          </Stack>
        </AppCard>
      )}

      {isEnded ? (
        <Alert severity="info" sx={{ mb: 3 }}>
          {i18n.t('این مأموریت به پایان رسیده است. امکان ثبت موقعیت جدید برای آن وجود ندارد.')}
        </Alert>
      ) : (
        <>
          {message && (
            <Alert severity={message.severity} sx={{ mb: 2 }}>
              {message.text}
            </Alert>
          )}
          {geoError && !message && (
            <Alert severity="error" sx={{ mb: 2 }}>
              {geoError}
            </Alert>
          )}

          <AppButton
            fullWidth
            size="large"
            startIcon={<MyLocationIcon />}
            loading={submitting || geoLoading}
            onClick={handleRecord}
            sx={{ mb: 3 }}
            labelKey="ثبت موقعیت فعلی (دستی)"
          />

          {/* ✅ بخش جدید: ثبت خودکار */}
          <AppCard sx={{ p: 2, mb: 3 }}>
            <Typography variant="subtitle2" fontWeight={700} mb={2}>
              {i18n.t('ثبت خودکار موقعیت')}
            </Typography>

            {isTracking ? (
              <Stack spacing={1.5}>
                <Chip
                  color="success"
                  label={i18n.t('ثبت خودکار فعال — {{minutes}} دقیقه یک‌بار', { minutes: intervalMinutes })}
                />

                {lastRecordedAt && (
                  <Typography variant="caption" color="text.secondary">
                    {i18n.t("آخرین ثبت: {{time}}", {
                      time: lastRecordedAt.toLocaleTimeString(getDateLocale().numberLocale),
                    })}
                  </Typography>
                )}

                {autoError && <Alert severity="warning">{autoError}</Alert>}

                <AppButton
                  fullWidth
                  color="error"
                  variant="outlined"
                  startIcon={<StopIcon />}
                  onClick={stopAutoTracking}
                  labelKey="توقف ثبت خودکار"
                ></AppButton>

                <Alert severity="info" sx={{ fontSize: 12 }}>
                  {i18n.t('توجه: تا وقتی این صفحه باز و روشن باشد، ثبت خودکار ادامه دارد. با قفل کردن صفحه‌ی گوشی، ممکن است متوقف شود.')}
                </Alert>
              </Stack>
            ) : (
              <Stack spacing={1.5}>
                <AppSelect
                  label="بازه‌ی زمانی ثبت"
                  items={INTERVAL_OPTIONS}
                  value={intervalMinutes}
                  onChange={(value) => setIntervalMinutes(value)}
                />

                <AppButton
                  fullWidth
                  variant="contained"
                  color="success"
                  startIcon={<PlayArrowIcon />}
                  onClick={startAutoTracking}
                  labelKey="شروع ثبت خودکار"
                ></AppButton>
              </Stack>
            )}
          </AppCard>
        </>
      )}
      <Typography variant="subtitle2" fontWeight={700} mb={1}>
        {i18n.t("تاریخچه‌ی موقعیت‌های ثبت‌شده ({{total}})", { total: formatNumber(points.length) })}
      </Typography>

      <Stack spacing={1}>
        {points.map((point) => (
          <AppCard key={point.id} sx={{ p: 1.5 }}>
            <Typography variant="caption" color="text.secondary">
              {formatDateTime(point.recordedAt)}
            </Typography>
            <Typography variant="body2">
              {point.latitude.toFixed(5)}, {point.longitude.toFixed(5)}
            </Typography>
          </AppCard>
        ))}
      </Stack>
    </Box>
  );
};

export default memo(DriverMissionDetailPage);
