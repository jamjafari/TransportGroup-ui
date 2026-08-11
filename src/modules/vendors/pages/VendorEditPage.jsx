import React, { memo, useCallback, useEffect, useState } from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { useNavigate, useParams } from 'react-router-dom';

import VendorForm from '../components/VendorForm';
import VendorDocumentSection from '../sections/VendorDocumentSection';

import { gregorianYearToJalali } from '@/utils';
import { AppCard } from '@/components';

import useVendor from '../hooks/useVendor';

const VendorEditPage = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const { getVendorById, updateVendor } = useVendor();

  const [vendor, setVendor] = useState(null);

  useEffect(() => {
    const loadVendor = async () => {
      const data = await getVendorById(id);
      console.log('Vendor ID from API:', data?.id);
      setVendor({
        ...data,
      });
    };

    loadVendor();
  }, [id, getVendorById]);

  const handleSubmit = useCallback(
    async (values) => {
      try {
        await updateVendor(values);
        navigate('/vendors');
      } catch (error) {
        console.error(error);
      }
    },
    [id, updateVendor, navigate],
  );

  if (!vendor) {
    return null;
  }

  return (
    <Box sx={{ maxWidth: 900, mx: 'auto', py: 3 }}>
      <Typography variant="h5" fontWeight={700} mb={3}>
        ویرایش تامین کننده
      </Typography>

      <AppCard sx={{ p: 4, mb: 3 }}>
        <VendorForm initialValues={vendor} onSubmit={handleSubmit} />
      </AppCard>

      <AppCard sx={{ p: 4 }}>
        <VendorDocumentSection vendorId={id} />
      </AppCard>
    </Box>
  );
};

export default memo(VendorEditPage);
