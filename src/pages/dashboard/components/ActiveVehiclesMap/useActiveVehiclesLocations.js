import { useCallback, useState } from 'react';

import { apiClient } from '@/services';

const unwrap = (response) => {
  if (!response.success) {
    throw new Error(response.errors?.[0] || 'خطا در ارتباط با سرور');
  }
  return response.data;
};

const useActiveVehiclesLocations = () => {
  const [locations, setLocations] = useState([]);
  const [loading, setLoading] = useState(false);

  const getLocations = useCallback(async () => {
    try {
      setLoading(true);
      const response = await apiClient.get('/missions/active-locations');
      const data = unwrap(response);
      setLocations(data);
      return data;
    } finally {
      setLoading(false);
    }
  }, []);

  return { locations, loading, getLocations };
};

export default useActiveVehiclesLocations;
