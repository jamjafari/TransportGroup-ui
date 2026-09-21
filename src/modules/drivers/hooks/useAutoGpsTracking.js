import { useCallback, useEffect, useRef, useState } from 'react';

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
      const msg = err.message || 'خطا در ثبت خودکار موقعیت';
      setError(msg);

      // ✅ اضافه شد — اگر مأموریت در همین حین توسط دفتردار پایان‌یافته/لغو شده، ثبت خودکار را متوقف کن
      if (msg.includes('پایان رسیده') || msg.includes('تخصیص داده نشده')) {
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
