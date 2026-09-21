import React, { memo, useEffect } from 'react';

import { Box, Typography, Stack, Chip } from '@mui/material';
import RoomIcon from '@mui/icons-material/Room';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

import { AppFormSection, AppButton } from '@/components';
import { formatJalaliDate } from '@/utils';

import useMissionGps from '../hooks/useMissionGps';

const MissionGpsHistorySection = ({ missionId }) => {
  const { points, loading, getGpsPoints } = useMissionGps();

  useEffect(() => {
    if (missionId) {
      getGpsPoints(missionId);
    }
  }, [missionId, getGpsPoints]);

  const openInMap = (lat, lng) => {
    window.open(`https://www.google.com/maps?q=${lat},${lng}`, '_blank');
  };

  return (
    <AppFormSection title="تاریخچه‌ی موقعیت مکانی (GPS)" divider>
      {loading && (
        <Typography variant="body2" color="text.secondary">
          در حال بارگذاری...
        </Typography>
      )}

      {!loading && points.length === 0 && (
        <Typography variant="body2" color="text.secondary">
          هیچ موقعیتی برای این مأموریت ثبت نشده است.
        </Typography>
      )}

      <Stack spacing={1}>
        {points.map((point, index) => (
          <Box
            key={point.id}
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              p: 1.5,
              border: '1px solid',
              borderColor: 'divider',
              borderRadius: 1,
            }}
          >
            <Stack direction="row" alignItems="center" spacing={1}>
              <Chip
                size="small"
                label={`نقطه ${index + 1}`}
                icon={<RoomIcon />}
              />

              <Typography variant="body2">
                {point.latitude.toFixed(5)}, {point.longitude.toFixed(5)}
              </Typography>

              <Typography variant="caption" color="text.secondary">
                {formatJalaliDate(point.recordedAt)}
              </Typography>
            </Stack>

            <AppButton
              size="small"
              variant="outlined"
              startIcon={<OpenInNewIcon />}
              onClick={() => openInMap(point.latitude, point.longitude)}
            >
              نقشه
            </AppButton>
          </Box>
        ))}
      </Stack>
    </AppFormSection>
  );
};

export default memo(MissionGpsHistorySection);
