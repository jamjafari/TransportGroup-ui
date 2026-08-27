import { useCallback, useState } from 'react';

import * as serviceTypeApi from '@/modules/serviceTypes/api/serviceTypeApi';
const useServiceServiceTypes = () => {
  const [serviceTypes, setServiceTypes] = useState([]);
  const [loading, setLoading] = useState(false);

  const getServiceTypes = useCallback(async () => {
    try {
      setLoading(true);

      const response = await serviceTypeApi.getServiceTypes();
      console.log('ServiceType API response:', response);
      console.log('ServiceType data:', response?.data);

      if (response?.success) {
        setServiceTypes(response.data || []);
      } else {
        setServiceTypes([]);
      }

      return response?.data || [];
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    serviceTypes,
    loading,
    getServiceTypes,
  };
};

export default useServiceServiceTypes;
