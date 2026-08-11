import { useCallback, useState } from 'react';

import * as vendorApi from '@/modules/vendors/api/vendorApi';
const useExpenseVendors = () => {
  const [vendors, setVendors] = useState([]);
  const [loading, setLoading] = useState(false);

  const getVendors = useCallback(async () => {
    try {
      setLoading(true);

      const response = await vendorApi.getVendors();
      console.log('Vendor API response:', response);
      console.log('Vendor data:', response?.data);

      if (response?.success) {
        setVendors(response.data || []);
      } else {
        setVendors([]);
      }

      return response?.data || [];
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    vendors,
    loading,
    getVendors,
  };
};

export default useExpenseVendors;
