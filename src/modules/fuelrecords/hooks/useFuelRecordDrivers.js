import { useCallback, useState } from 'react';

import * as driverApi from '@/modules/drivers/api/driverApi';
const useFuelRecordDrivers = () => {
  const [drivers, setDrivers] = useState([]);
  const [loading, setLoading] = useState(false);

  const getDrivers = useCallback(async () => {
    try {
      setLoading(true);

      const response = await driverApi.getDrivers();
      console.log('Driver API response:', response);
      console.log('Driver data:', response?.data);

      if (response?.success) {
        setDrivers(response.data || []);
      } else {
        setDrivers([]);
      }

      return response?.data || [];
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    drivers,
    loading,
    getDrivers,
  };
};

export default useFuelRecordDrivers;
