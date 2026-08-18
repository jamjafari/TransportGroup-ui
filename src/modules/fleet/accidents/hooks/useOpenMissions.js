import { useCallback, useState } from 'react';

import * as openMissionsApi from '../api/openMissionsApi';

const useOpenMissions = () => {
  const [missions, setMissions] = useState([]);
  const [loading, setLoading] = useState(false);

  const loadOpenMissions = useCallback(async (vehicleId) => {
    if (!vehicleId) {
      setMissions([]);
      return [];
    }

    try {
      setLoading(true);
      const response =
        await openMissionsApi.getOpenMissionsByVehicle(vehicleId);

      if (response?.success) {
        setMissions(response.data || []);
        return response.data;
      }

      setMissions([]);
      return [];
    } finally {
      setLoading(false);
    }
  }, []);

  return { missions, loading, loadOpenMissions };
};

export default useOpenMissions;
