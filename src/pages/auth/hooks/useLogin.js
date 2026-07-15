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

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError('');

    setLoading(true);

    try {
      await login({
        username,
        password,
        rememberMe,
      });

      navigate('/dashboard');
    } catch (err) {
      setError(err.message || 'نام کاربری یا رمز عبور صحیح نیست.');
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
