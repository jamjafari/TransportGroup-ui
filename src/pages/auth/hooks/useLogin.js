import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { useAuth } from '@/hooks';

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
      console.log('LOGIN START');

      const result = await login({
        username,
        password,
        rememberMe,
      });

      if (result.mustChangePassword) {
        navigate('/change-password', { state: { username } });
        return;
      }

      navigate('/dashboard');
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
