import { useCallback } from 'react';

import { useInsuranceContext } from '../context';
import * as insuranceApi from '../api/insuranceApi';

const useInsurance = () => {
  const {
    insurances,
    setInsurances,
    selectedInsurance,
    setSelectedInsurance,
    loading,
    setLoading,
    filters,
    setFilters,
  } = useInsuranceContext();

  const unwrap = (response) => {
    if (!response.success) {
      throw new Error(response.errors?.[0] || 'خطا در ارتباط با سرور');
    }
    return response.data;
  };

  const getInsurances = useCallback(async () => {
    try {
      setLoading(true);
      const response = await insuranceApi.getInsurances(filters);
      const data = unwrap(response);
      setInsurances(data);
      return data;
    } finally {
      setLoading(false);
    }
  }, [filters, setLoading, setInsurances]);

  const getInsuranceById = useCallback(
    async (id) => {
      try {
        setLoading(true);
        const response = await insuranceApi.getInsuranceById(id);
        const data = unwrap(response);
        setSelectedInsurance(data);
        return data;
      } finally {
        setLoading(false);
      }
    },
    [setLoading, setSelectedInsurance],
  );

  const createInsurance = useCallback(
    async (insurance) => {
      try {
        setLoading(true);
        const response = await insuranceApi.createInsurance(insurance);
        return unwrap(response);
      } finally {
        setLoading(false);
      }
    },
    [setLoading],
  );

  const updateInsurance = useCallback(
    async (insurance) => {
      console.log('UPDATE insurance:', insurance);
      try {
        setLoading(true);
        const response = await insuranceApi.updateInsurance(insurance);
        return unwrap(response);
      } finally {
        setLoading(false);
      }
    },
    [setLoading],
  );

  const deleteInsurance = useCallback(
    async (id) => {
      try {
        setLoading(true);
        const response = await insuranceApi.deleteInsurance(id);
        return unwrap(response);
      } finally {
        setLoading(false);
      }
    },
    [setLoading],
  );

  return {
    insurances,
    selectedInsurance,
    loading,
    filters,
    setFilters,
    getInsurances,
    getInsuranceById,
    createInsurance,
    updateInsurance,
    deleteInsurance,
  };
};

export default useInsurance;
