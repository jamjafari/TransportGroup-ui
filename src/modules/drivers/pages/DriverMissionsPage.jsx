import React, { memo, useEffect, useCallback } from 'react';

import { useNavigate } from 'react-router-dom';
import { Box, Typography, Stack } from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';
import { missionStatusOptions } from '../constants';

import { AppCard, StatusChip, AppLoader } from '@/components';

import useDriverMissions from '../hooks/useDriverMissions';

const ENDED_STATUSES = [3, 4]; // Completed, Canceled — ✅ اگه اسم Enum فرق داشت این اعداد را هم اصلاح کنید

const DriverMissionsPage = () => {
  const missionLabel = useCallback(
    (value) =>
      missionStatusOptions.find((option) => option.value === value)?.label ??
      '—',
    [],
  );
  const navigate = useNavigate();
  const { missions, loading, getMyMissions } = useDriverMissions();

  useEffect(() => {
    getMyMissions();
  }, [getMyMissions]);

  if (loading) return <AppLoader />;

  return (
    <Box sx={{ maxWidth: 480, mx: 'auto', p: 2 }}>
      <Typography variant="h6" fontWeight={700} mb={2}>
        مأموریت‌های من
      </Typography>

      {missions.length === 0 && (
        <Typography variant="body2" color="text.secondary">
          هیچ مأموریتی برای شما ثبت نشده است.
        </Typography>
      )}

      <Stack spacing={2}>
        {missions.map((mission) => {
          const isEnded = ENDED_STATUSES.includes(mission.status);

          return (
            <Box
              key={mission.id}
              onClick={() => navigate(`/driver/missions/${mission.id}`)}
              sx={{ cursor: 'pointer', opacity: isEnded ? 0.6 : 1 }}
            >
              <AppCard>
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                  mb={1}
                >
                  <Typography variant="subtitle1" fontWeight={700}>
                    {mission.missionCode}
                  </Typography>

                  <Stack direction="row" alignItems="center" spacing={0.5}>
                    {isEnded && <LockIcon fontSize="small" color="disabled" />}
                    <StatusChip status={missionLabel(mission.status)} />
                  </Stack>
                </Stack>

                <Typography variant="body2" color="text.secondary">
                  {mission.originLocationName} ←{' '}
                  {mission.destinationLocationName}
                </Typography>

                <Typography variant="caption" color="text.secondary">
                  {mission.vehicleName}
                </Typography>
              </AppCard>
            </Box>
          );
        })}
      </Stack>
    </Box>
  );
};

export default memo(DriverMissionsPage);
