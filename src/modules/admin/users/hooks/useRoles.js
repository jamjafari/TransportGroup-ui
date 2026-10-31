import { useCallback, useState } from 'react';

import * as roleApi from '../api/roleApi';
import toApiError from '@/services/apiError';

const unwrap = (response) => {
  if (!response.success) {
    throw toApiError(response, 'خطا در ارتباط با سرور');
  }
  return response.data;
};

const useRoles = () => {
  const [roles, setRoles] = useState([]);
  const [loading, setLoading] = useState(false);

  const getRoles = useCallback(async () => {
    try {
      setLoading(true);
      const response = await roleApi.getRoles();
      const data = unwrap(response);
      setRoles(data);
      return data;
    } finally {
      setLoading(false);
    }
  }, []);

  return { roles, loading, getRoles };
};

export default useRoles;
