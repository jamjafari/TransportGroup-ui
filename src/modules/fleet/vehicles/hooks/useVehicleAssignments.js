import { useCallback, useState } from 'react';

import * as vehicleAssignmentApi from '../api/vehicleAssignmentApi';

const unwrap = (response) => {
  if (!response.success) {
    throw new Error(response.errors?.[0] || 'خطا در ارتباط با سرور');
  }
  return response.data;
};

const useVehicleAssignments = () => {
  const [assignments, setAssignments] = useState([]);
  const [loading, setLoading] = useState(false);

  const loadAssignments = useCallback(async (vehicleId) => {
    try {
      setLoading(true);
      const response =
        await vehicleAssignmentApi.getAssignmentsByVehicle(vehicleId);
      const data = unwrap(response);
      setAssignments(data);
      return data;
    } finally {
      setLoading(false);
    }
  }, []);

  const createAssignment = useCallback(async (assignment) => {
    const response = await vehicleAssignmentApi.createAssignment(assignment);
    return unwrap(response);
  }, []);

  const finishAssignment = useCallback(async (id) => {
    const response = await vehicleAssignmentApi.finishAssignment(id);
    return unwrap(response);
  }, []);

  return {
    assignments,
    loading,
    loadAssignments,
    createAssignment,
    finishAssignment,
  };
};

export default useVehicleAssignments;
