import React, { memo, useCallback } from 'react';

import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';

import { useNavigate } from 'react-router-dom';

import MissionForm from '../components/MissionForm';

import useMission from '../hooks/useMission';
import { AppCard } from '@/components';

const MissionCreatePage = () => {
  const navigate = useNavigate();

  const { createMission } = useMission();

  const handleSubmit = useCallback(
    async (values) => {
      console.log('Submit clicked');
      console.log(values);
      try {
        const createdId = await createMission(values);
        navigate(`/missions`);
      } catch (error) {
        console.error(error);
      }
    },
    [createMission, navigate],
  );

  return (
    <Box sx={{ maxWidth: 900, mx: 'auto', py: 3 }}>
      <Typography variant="h5" fontWeight={700} mb={3}>
        ماموریت جدید
      </Typography>

      <AppCard sx={{ p: 4 }}>
        <MissionForm onSubmit={handleSubmit} />
      </AppCard>
    </Box>
  );
};

export default memo(MissionCreatePage);
