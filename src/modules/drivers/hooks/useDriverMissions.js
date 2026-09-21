import { useCallback, useState } from 'react';

import * as missionGpsApi from '../api/missionGpsApi';

const unwrap = (response) => {
  if (!response.success) {
    throw new Error(response.errors?.[0] || 'خطا در ارتباط با سرور');
  }
  return response.data;
};

const useDriverMissions = () => {
  const [missions, setMissions] = useState([]);
  const [points, setPoints] = useState([]);
  const [loading, setLoading] = useState(false);

  const getMyMissions = useCallback(async () => {
    try {
      setLoading(true);
      const response = await missionGpsApi.getMyMissions();
      const data = unwrap(response);
      setMissions(data);
      return data;
    } finally {
      setLoading(false);
    }
  }, []);

  const recordGpsPoint = useCallback(async (missionId, coords) => {
    const response = await missionGpsApi.recordGpsPoint(missionId, coords);
    return unwrap(response);
  }, []);

  const getGpsPoints = useCallback(async (missionId) => {
    try {
      setLoading(true);
      const response = await missionGpsApi.getGpsPoints(missionId);
      const data = unwrap(response);
      setPoints(data);
      return data;
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    missions,
    points,
    loading,
    getMyMissions,
    recordGpsPoint,
    getGpsPoints,
  };
};

export default useDriverMissions;
