import { useCallback, useState } from 'react';

import * as vehicleApi from '@/modules/fleet/vehicles/api/vehicleApi';
const useMissionVehicles = () => {
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(false);

  const getVehicles = useCallback(async () => {
    try {
      setLoading(true);

      const response = await vehicleApi.getVehicles();
      console.log('Vehicle API response:', response);
      console.log('Vehicle data:', response?.data);

      if (response?.success) {
        setVehicles(response.data || []);
      } else {
        setVehicles([]);
      }

      return response?.data || [];
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    vehicles,
    loading,
    getVehicles,
  };
};

export default useMissionVehicles;
