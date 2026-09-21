import React, { memo, useEffect } from 'react';

import { Box, IconButton, Typography, Stack, Alert } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

import useActiveVehiclesLocations from './useActiveVehiclesLocations';

// ✅ رفع یک مشکل شناخته‌شده: آیکون پیش‌فرض Leaflet با Vite/Bundlerها درست لود نمی‌شود
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const DEFAULT_CENTER = [35.6892, 51.389]; // تهران — مرکز پیش‌فرض وقتی هیچ نقطه‌ای نیست

const ActiveVehiclesMapPanel = ({ open, onClose }) => {
  const { locations, loading, getLocations } = useActiveVehiclesLocations();

  useEffect(() => {
    if (open) {
      getLocations();
    }
  }, [open, getLocations]);

  if (!open) return null;

  const pointsWithLocation = locations.filter(
    (l) => l.latitude != null && l.longitude != null,
  );

  const center =
    pointsWithLocation.length > 0
      ? [pointsWithLocation[0].latitude, pointsWithLocation[0].longitude]
      : DEFAULT_CENTER;

  return (
    <Box
      sx={{
        position: 'absolute',
        inset: 0,
        zIndex: 1200,
        bgcolor: 'background.paper',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{ px: 3, py: 2, borderBottom: '1px solid', borderColor: 'divider' }}
      >
        <Typography variant="h6" fontWeight={700}>
          نقشه‌ی خودروهای در مأموریت
        </Typography>

        <IconButton onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </Stack>

      {!loading && pointsWithLocation.length === 0 && (
        <Alert severity="info" sx={{ m: 2 }}>
          هیچ موقعیت مکانی ثبت‌شده‌ای برای خودروهای در مأموریت وجود ندارد.
        </Alert>
      )}

      <Box sx={{ flexGrow: 1 }}>
        <MapContainer
          center={center}
          zoom={12}
          style={{ height: '100%', width: '100%' }}
        >
          <TileLayer
            attribution="&copy; OpenStreetMap contributors"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {pointsWithLocation.map((loc) => (
            <Marker
              key={loc.missionId}
              position={[loc.latitude, loc.longitude]}
            >
              <Popup>
                <Typography variant="subtitle2" fontWeight={700}>
                  {loc.missionCode}
                </Typography>
                <Typography variant="body2">{loc.vehicleName}</Typography>
                {loc.driverName && (
                  <Typography variant="body2">
                    راننده: {loc.driverName}
                  </Typography>
                )}
                <Typography variant="caption" color="text.secondary">
                  آخرین به‌روزرسانی:{' '}
                  {loc.recordedAt
                    ? new Date(loc.recordedAt).toLocaleString('fa-IR')
                    : '—'}
                </Typography>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </Box>
    </Box>
  );
};

export default memo(ActiveVehiclesMapPanel);
