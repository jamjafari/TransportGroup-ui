import React, { memo, useCallback, useEffect, useState } from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { useNavigate, useParams } from 'react-router-dom';

import TenantForm from '../components/TenantForm';
import useTenant from '../hooks/useTenant';
import { AppCard } from '@/components';

const TenantEditPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getTenantById, updateTenant } = useTenant();

  const [tenant, setTenant] = useState(null);

  useEffect(() => {
    const loadTenant = async () => {
      const data = await getTenantById(id);

      setTenant({
        ...data,
      });
    };

    loadTenant();
  }, [id, getTenantById]);

  const handleSubmit = useCallback(
    async (values) => {
      try {
        await updateTenant({ ...values, id });
        navigate('/admin/tenants');
      } catch (error) {
        console.error(error);
      }
    },
    [id, updateTenant, navigate],
  );

  if (!tenant) return null;

  return (
    <Box sx={{ maxWidth: 900, mx: 'auto', py: 3 }}>
      <Typography variant="h5" fontWeight={700} mb={3}>
        ویرایش سازمان
      </Typography>

      <AppCard sx={{ p: 4 }}>
        <TenantForm
          initialValues={tenant}
          onSubmit={handleSubmit}
          isEdit={true}
        />
      </AppCard>
    </Box>
  );
};

export default memo(TenantEditPage);
