import { useCallback, useState } from 'react';

import * as tireAssignmentApi from '../api/tireAssignmentApi';

const unwrap = (response) => {
  if (!response.success) {
    throw new Error(response.errors?.[0] || 'خطا در ارتباط با سرور');
  }
  return response.data;
};

const useTireAssignments = () => {
  const [assignments, setAssignments] = useState([]);
  const [loading, setLoading] = useState(false);

  const loadAssignments = useCallback(async (vehicleId) => {
    try {
      setLoading(true);
      const response =
        await tireAssignmentApi.getTireAssignmentsByVehicle(vehicleId);
      const data = unwrap(response);
      setAssignments(data);
      return data;
    } finally {
      setLoading(false);
    }
  }, []);

  const createAssignment = useCallback(async (assignment) => {
    const response = await tireAssignmentApi.createTireAssignment(assignment);
    return unwrap(response);
  }, []);

  const unassign = useCallback(async (id, payload) => {
    const response = await tireAssignmentApi.unassignTire(id, payload);
    return unwrap(response);
  }, []);

  return { assignments, loading, loadAssignments, createAssignment, unassign };
};

export default useTireAssignments;
