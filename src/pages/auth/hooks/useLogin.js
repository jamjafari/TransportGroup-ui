import { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { useAuth } from '@/hooks';
import { getPostLoginRedirect } from '@/utils/authRedirect'; // ✅ اضافه شد

const useLogin = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const { t } = useTranslation();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async () => {
    setError('');
    setLoading(true);

    try {
      const result = await login({ username, password, rememberMe });

      if (result.mustChangePassword) {
        navigate('/force-change-password', { state: { username } });
        return;
      }

      navigate(getPostLoginRedirect(result.user)); // ✅ اصلاح شد
    } catch (err) {
      if (err.response?.status === 429) {
        // ✅ قفل موقت بعد از تلاش‌های ناموفق متعدد.
        // پیام err.response.data?.message از سرور می‌آید و هنوز فقط فارسی است
        // (بخش بعدی — Accept-Language سمت بک‌اند — آن را هم ترجمه می‌کند)؛
        // پیام‌های fallback زیر که فقط سمت کلاینت هستند از همین حالا ترجمه می‌شوند.
        setError(
          err.response.data?.message ||
            t('تعداد تلاش‌ها زیاد است. لطفاً چند دقیقه‌ی دیگر دوباره تلاش کنید.'),
        );
      } else if (err.response?.status === 401) {
        setError(
          err.response.data?.message || t('نام کاربری یا رمز عبور صحیح نیست.'),
        );
      } else if (!err.response) {
        setError(t('خطا در برقراری ارتباط با سرور. اتصال اینترنت را بررسی کنید.'));
      } else {
        setError(
          err.response.data?.message || t('خطایی رخ داد. لطفاً دوباره تلاش کنید.'),
        );
      }
    } finally {
      setLoading(false);
    }
  };

  return {
    username,
    password,
    rememberMe,
    loading,
    error,
    setUsername,
    setPassword,
    setRememberMe,
    handleSubmit,
  };
};

export default useLogin;
