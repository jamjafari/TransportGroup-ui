import React, { memo, useCallback, useEffect, useState } from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { useNavigate, useParams } from 'react-router-dom';

import MissionForm from '../components/MissionForm';
import MissionGpsHistorySection from '../sections/MissionGpsHistorySection'; // ✅ اضافه شد

import { gregorianYearToJalali } from '@/utils';
import { AppCard } from '@/components';

import useMission from '../hooks/useMission';

const MissionEditPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getMissionById, updateMission } = useMission();

  const [mission, setMission] = useState(null);

  useEffect(() => {
    const loadMission = async () => {
      const data = await getMissionById(id);

      setMission({
        ...data,
        startDate: data.startDate ? new Date(data.startDate) : null,
        endDate: data.endDate ? new Date(data.endDate) : null,
      });
    };

    loadMission();
  }, [id, getMissionById]);

  const handleSubmit = useCallback(
    async (values) => {
      try {
        await updateMission(values);
        navigate('/missions');
      } catch (error) {
        console.error(error);
      }
    },
    [id, updateMission, navigate],
  );

  if (!mission) {
    return null;
  }

  return (
    <Box sx={{ maxWidth: 900, mx: 'auto', py: 3 }}>
      <Typography variant="h5" fontWeight={700} mb={3}>
        ویرایش ماموریت
      </Typography>

      <AppCard sx={{ p: 4, mb: 3 }}>
        <MissionForm initialValues={mission} onSubmit={handleSubmit} />
      </AppCard>

      <AppCard sx={{ p: 4 }}>
        <MissionGpsHistorySection missionId={id} />
      </AppCard>
    </Box>
  );
};

export default memo(MissionEditPage);
