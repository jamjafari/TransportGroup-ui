import { useCallback, useState } from 'react';

import * as locationApi from '@/modules/locations/api/locationApi';
const useMissionLocations = () => {
  const [locations, setLocations] = useState([]);
  const [loading, setLoading] = useState(false);

  const getLocations = useCallback(async () => {
    try {
      setLoading(true);

      const response = await locationApi.getLocations();
      console.log('Location API response:', response);
      console.log('Location data:', response?.data);

      if (response?.success) {
        setLocations(response.data || []);
      } else {
        setLocations([]);
      }

      return response?.data || [];
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    locations,
    loading,
    getLocations,
  };
};

export default useMissionLocations;
