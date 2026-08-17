import { useCallback } from 'react';

import { useMissionContext } from '../context';
import * as missionApi from '../api/missionApi';

const useMission = () => {
  const {
    missions,
    setMissions,
    selectedMission,
    setSelectedMission,
    loading,
    setLoading,
    filters,
    setFilters,
  } = useMissionContext();

  const unwrap = (response) => {
    if (!response.success) {
      throw new Error(response.errors?.[0] || 'خطا در ارتباط با سرور');
    }
    return response.data;
  };

  const getMissions = useCallback(async () => {
    try {
      setLoading(true);
      const response = await missionApi.getMissions(filters);
      const data = unwrap(response);
      setMissions(data);
      return data;
    } finally {
      setLoading(false);
    }
  }, [filters, setLoading, setMissions]);

  const getMissionById = useCallback(
    async (id) => {
      try {
        setLoading(true);
        const response = await missionApi.getMissionById(id);
        const data = unwrap(response);
        setSelectedMission(data);
        return data;
      } finally {
        setLoading(false);
      }
    },
    [setLoading, setSelectedMission],
  );

  const createMission = useCallback(
    async (mission) => {
      try {
        setLoading(true);
        const response = await missionApi.createMission(mission);
        return unwrap(response);
      } finally {
        setLoading(false);
      }
    },
    [setLoading],
  );

  const updateMission = useCallback(
    async (mission) => {
      console.log('UPDATE mission:', mission);
      try {
        setLoading(true);
        const response = await missionApi.updateMission(mission);
        return unwrap(response);
      } finally {
        setLoading(false);
      }
    },
    [setLoading],
  );

  const deleteMission = useCallback(
    async (id) => {
      try {
        setLoading(true);
        const response = await missionApi.deleteMission(id);
        return unwrap(response);
      } finally {
        setLoading(false);
      }
    },
    [setLoading],
  );

  return {
    missions,
    selectedMission,
    loading,
    filters,
    setFilters,
    getMissions,
    getMissionById,
    createMission,
    updateMission,
    deleteMission,
  };
};

export default useMission;
