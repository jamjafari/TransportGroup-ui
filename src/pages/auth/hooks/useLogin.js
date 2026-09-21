import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { useAuth } from '@/hooks';
import { getPostLoginRedirect } from '@/utils/authRedirect'; // ✅ اضافه شد

const useLogin = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

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
      if (err.response?.status === 401) {
        setError('نام کاربری یا رمز عبور صحیح نیست.');
      } else if (!err.response) {
        setError('خطا در برقراری ارتباط با سرور. اتصال اینترنت را بررسی کنید.');
      } else {
        setError('خطایی رخ داد. لطفاً دوباره تلاش کنید.');
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
