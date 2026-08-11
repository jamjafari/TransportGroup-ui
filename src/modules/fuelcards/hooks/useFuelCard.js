import { useCallback } from 'react';

import { useFuelCardContext } from '../context';
import * as fuelCardApi from '../api/fuelCardApi';

const useFuelCard = () => {
  const {
    fuelCards,
    setFuelCards,
    selectedFuelCard,
    setSelectedFuelCard,
    loading,
    setLoading,
    filters,
    setFilters,
  } = useFuelCardContext();

  const unwrap = (response) => {
    if (!response.success) {
      throw new Error(response.errors?.[0] || 'خطا در ارتباط با سرور');
    }
    return response.data;
  };

  const getFuelCards = useCallback(async () => {
    try {
      setLoading(true);
      const response = await fuelCardApi.getFuelCards(filters);
      const data = unwrap(response);
      setFuelCards(data);
      return data;
    } finally {
      setLoading(false);
    }
  }, [filters, setLoading, setFuelCards]);

  const getFuelCardById = useCallback(
    async (id) => {
      try {
        setLoading(true);
        const response = await fuelCardApi.getFuelCardById(id);
        const data = unwrap(response);
        setSelectedFuelCard(data);
        return data;
      } finally {
        setLoading(false);
      }
    },
    [setLoading, setSelectedFuelCard],
  );

  const createFuelCard = useCallback(
    async (fuelCard) => {
      try {
        setLoading(true);
        const response = await fuelCardApi.createFuelCard(fuelCard);
        return unwrap(response);
      } finally {
        setLoading(false);
      }
    },
    [setLoading],
  );

  const updateFuelCard = useCallback(
    async (fuelCard) => {
      console.log('UPDATE fuelCard:', fuelCard);
      try {
        setLoading(true);
        const response = await fuelCardApi.updateFuelCard(fuelCard);
        return unwrap(response);
      } finally {
        setLoading(false);
      }
    },
    [setLoading],
  );

  const deleteFuelCard = useCallback(
    async (id) => {
      try {
        setLoading(true);
        const response = await fuelCardApi.deleteFuelCard(id);
        return unwrap(response);
      } finally {
        setLoading(false);
      }
    },
    [setLoading],
  );

  return {
    fuelCards,
    selectedFuelCard,
    loading,
    filters,
    setFilters,
    getFuelCards,
    getFuelCardById,
    createFuelCard,
    updateFuelCard,
    deleteFuelCard,
  };
};

export default useFuelCard;
