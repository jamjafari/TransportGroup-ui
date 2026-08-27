import { useCallback } from 'react';

import { useInspectionContext } from '../context';
import * as inspectionApi from '../api/inspectionApi';

const unwrap = (response) => {
  if (!response.success) {
    throw new Error(response.errors?.[0] || 'خطا در ارتباط با سرور');
  }
  return response.data;
};

const useInspection = () => {
  const {
    inspections,
    setInspections,
    selectedInspection,
    setSelectedInspection,
    loading,
    setLoading,
    filters,
  } = useInspectionContext();

  const getInspections = useCallback(async () => {
    try {
      setLoading(true);
      const response = await inspectionApi.getInspections(filters);
      const data = unwrap(response);
      setInspections(data);
      return data;
    } finally {
      setLoading(false);
    }
  }, [filters, setLoading, setInspections]);

  const getInspectionById = useCallback(
    async (id) => {
      try {
        setLoading(true);
        const response = await inspectionApi.getInspectionById(id);
        const data = unwrap(response);
        setSelectedInspection(data);
        return data;
      } finally {
        setLoading(false);
      }
    },
    [setLoading, setSelectedInspection],
  );

  const createInspection = useCallback(
    async (inspection) => {
      try {
        setLoading(true);
        const response = await inspectionApi.createInspection(inspection);
        return unwrap(response);
      } finally {
        setLoading(false);
      }
    },
    [setLoading],
  );

  const updateInspection = useCallback(
    async (inspection) => {
      try {
        setLoading(true);
        const response = await inspectionApi.updateInspection(inspection);
        return unwrap(response);
      } finally {
        setLoading(false);
      }
    },
    [setLoading],
  );

  const deleteInspection = useCallback(
    async (id) => {
      try {
        setLoading(true);
        const response = await inspectionApi.deleteInspection(id);
        return unwrap(response);
      } finally {
        setLoading(false);
      }
    },
    [setLoading],
  );

  return {
    inspections,
    selectedInspection,
    loading,
    getInspections,
    getInspectionById,
    createInspection,
    updateInspection,
    deleteInspection,
  };
};

export default useInspection;
