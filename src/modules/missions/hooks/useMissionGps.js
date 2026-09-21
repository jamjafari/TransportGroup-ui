import { useCallback, useState } from 'react';

import * as missionGpsApi from '../api/missionGpsApi';

const unwrap = (response) => {
  if (!response.success) {
    throw new Error(response.errors?.[0] || 'خطا در ارتباط با سرور');
  }
  return response.data;
};

const useMissionGps = () => {
  const [points, setPoints] = useState([]);
  const [loading, setLoading] = useState(false);

  const getGpsPoints = useCallback(async (missionId) => {
    try {
      setLoading(true);
      const response = await missionGpsApi.getMissionGpsPoints(missionId);
      const data = unwrap(response);
      setPoints(data);
      return data;
    } finally {
      setLoading(false);
    }
  }, []);

  return { points, loading, getGpsPoints };
};

export default useMissionGps;
