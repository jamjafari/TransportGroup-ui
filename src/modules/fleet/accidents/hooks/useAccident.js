import { useCallback } from 'react';

import { useAccidentContext } from '../context';
import * as accidentApi from '../api/accidentApi';

const unwrap = (response) => {
  if (!response.success) {
    throw new Error(response.errors?.[0] || 'خطا در ارتباط با سرور');
  }
  return response.data;
};

const useAccident = () => {
  const {
    accidents,
    setAccidents,
    selectedAccident,
    setSelectedAccident,
    loading,
    setLoading,
  } = useAccidentContext();

  const getAccidents = useCallback(async () => {
    try {
      setLoading(true);
      const response = await accidentApi.getAccidents();
      const data = unwrap(response);
      setAccidents(data);
      return data;
    } finally {
      setLoading(false);
    }
  }, [setLoading, setAccidents]);

  const getAccidentById = useCallback(
    async (id) => {
      try {
        setLoading(true);
        const response = await accidentApi.getAccidentById(id);
        const data = unwrap(response);
        setSelectedAccident(data);
        return data;
      } finally {
        setLoading(false);
      }
    },
    [setLoading, setSelectedAccident],
  );

  const createAccident = useCallback(
    async (accident) => {
      try {
        setLoading(true);
        const response = await accidentApi.createAccident(accident);
        return unwrap(response);
      } finally {
        setLoading(false);
      }
    },
    [setLoading],
  );

  const updateAccident = useCallback(
    async (accident) => {
      try {
        setLoading(true);
        const response = await accidentApi.updateAccident(accident);
        return unwrap(response);
      } finally {
        setLoading(false);
      }
    },
    [setLoading],
  );

  const deleteAccident = useCallback(
    async (id) => {
      try {
        setLoading(true);
        const response = await accidentApi.deleteAccident(id);
        return unwrap(response);
      } finally {
        setLoading(false);
      }
    },
    [setLoading],
  );

  return {
    accidents,
    selectedAccident,
    loading,
    getAccidents,
    getAccidentById,
    createAccident,
    updateAccident,
    deleteAccident,
  };
};

export default useAccident;
