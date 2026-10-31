import { useCallback, useEffect, useRef, useState } from 'react';

import i18n from '@/i18n';

// ✅ پیام‌های سرور که یعنی «دیگر ثبت نکن» (مأموریت پایان یافته / به این راننده تخصیص ندارد).
// پاسخ سرور کد خطای جدا ندارد، پس متن هر دو زبان بررسی می‌شود؛ پیام‌های بک‌اند از
// Localized.Text در MissionService می‌آیند و با تغییر آن‌ها این فهرست هم باید به‌روز شود.
const STOP_TRACKING_MESSAGES = [
  'پایان رسیده',
  'تخصیص داده نشده',
  'has ended',
  'not assigned to you',
];

const useAutoGpsTracking = ({
  missionId,
  intervalMinutes,
  getCurrentPosition,
  recordGpsPoint,
}) => {
  const [isTracking, setIsTracking] = useState(false);
  const [lastRecordedAt, setLastRecordedAt] = useState(null);
  const [error, setError] = useState('');
  const intervalRef = useRef(null);

  // ✅ جابه‌جا شد — باید قبل از recordOnce تعریف بشه چون recordOnce بهش نیاز داره
  const stop = useCallback(() => {
    setIsTracking(false);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  const recordOnce = useCallback(async () => {
    try {
      const coords = await getCurrentPosition();
      await recordGpsPoint(missionId, coords);
      setLastRecordedAt(new Date());
      setError('');
    } catch (err) {
      const msg = err.message || i18n.t('خطا در ثبت خودکار موقعیت');
      setError(msg);

      // ✅ اضافه شد — اگر مأموریت در همین حین توسط دفتردار پایان‌یافته/لغو شده، ثبت خودکار را متوقف کن
      if (STOP_TRACKING_MESSAGES.some((part) => msg.includes(part))) {
        stop();
      }
    }
  }, [missionId, getCurrentPosition, recordGpsPoint, stop]);

  const start = useCallback(() => {
    setIsTracking(true);
    recordOnce();
    intervalRef.current = setInterval(recordOnce, intervalMinutes * 60 * 1000);
  }, [recordOnce, intervalMinutes]);

  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  return { isTracking, lastRecordedAt, error, start, stop };
};

export default useAutoGpsTracking;
