import { useCallback, useState } from 'react';

const useGeolocation = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const getCurrentPosition = useCallback(() => {
    return new Promise((resolve, reject) => {
      if (!navigator.geolocation) {
        const err = 'مرورگر شما از موقعیت‌یابی پشتیبانی نمی‌کند';
        setError(err);
        reject(new Error(err));
        return;
      }

      setLoading(true);
      setError('');

      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLoading(false);
          resolve({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (geoError) => {
          setLoading(false);
          const message =
            geoError.code === geoError.PERMISSION_DENIED
              ? 'اجازه‌ی دسترسی به موقعیت مکانی داده نشد'
              : 'خطا در دریافت موقعیت مکانی';
          setError(message);
          reject(new Error(message));
        },
        {
          enableHighAccuracy: true,
          timeout: 15000,
          maximumAge: 0,
        },
      );
    });
  }, []);

  return { getCurrentPosition, loading, error };
};

export default useGeolocation;
