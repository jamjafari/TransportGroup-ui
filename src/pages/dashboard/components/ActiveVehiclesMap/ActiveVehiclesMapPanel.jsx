import React, { memo, useEffect, useMemo } from 'react';

import { Box, IconButton, Typography, Stack, Alert } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polyline,
  CircleMarker,
  useMap,
} from 'react-leaflet';
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

// ✅ هر مأموریت یک رنگ — اگر تعداد مأموریت‌ها بیشتر شد، رنگ‌ها از اول تکرار می‌شوند
const MISSION_COLORS = [
  '#e6194b',
  '#3cb44b',
  '#4363d8',
  '#f58231',
  '#911eb4',
  '#42a5a6',
  '#f032e6',
  '#9a6324',
  '#800000',
  '#000075',
];

// ✅ مختصات خالی یا خارج از محدوده‌ی معتبر نادیده گرفته می‌شود تا نقشه به‌هم نریزد
const toLatLng = (lat, lng) => {
  if (lat == null || lng == null) return null;
  const latNum = Number(lat);
  const lngNum = Number(lng);
  if (Math.abs(latNum) > 90 || Math.abs(lngNum) > 180) return null;
  return [latNum, lngNum];
};

// مبدا: دایره‌ی توخالی | مقصد: مربع توپر | خودرو: سنجاق با آیکون خودرو
const createIcons = (color) => ({
  origin: L.divIcon({
    className: '',
    html: `<div style="width:16px;height:16px;border-radius:50%;background:#fff;border:4px solid ${color};box-shadow:0 0 3px rgba(0,0,0,.5)"></div>`,
    iconSize: [24, 24],
    iconAnchor: [12, 12],
    popupAnchor: [0, -12],
  }),
  destination: L.divIcon({
    className: '',
    html: `<div style="width:18px;height:18px;background:${color};border:3px solid #fff;box-shadow:0 0 3px rgba(0,0,0,.5)"></div>`,
    iconSize: [24, 24],
    iconAnchor: [12, 12],
    popupAnchor: [0, -12],
  }),
  vehicle: L.divIcon({
    className: '',
    html: `<div style="width:30px;height:30px;border-radius:50% 50% 50% 0;transform:rotate(-45deg);background:${color};border:2px solid #fff;box-shadow:0 0 4px rgba(0,0,0,.5);display:flex;align-items:center;justify-content:center"><span style="transform:rotate(45deg);font-size:15px">🚚</span></div>`,
    iconSize: [30, 30],
    iconAnchor: [15, 30],
    popupAnchor: [0, -30],
  }),
});

// ✅ بزرگ‌نمایی خودکار نقشه تا همه‌ی نقاط دیده شوند
const FitBounds = ({ points }) => {
  const map = useMap();

  useEffect(() => {
    if (points.length === 1) {
      map.setView(points[0], 13);
    } else if (points.length > 1) {
      map.fitBounds(points, { padding: [40, 40] });
    }
  }, [map, points]);

  return null;
};

const MissionPopup = ({ mission, title }) => (
  <Popup>
    <Typography variant="subtitle2" fontWeight={700}>
      {mission.missionCode}
      {title ? ` — ${title}` : ''}
    </Typography>
    <Typography variant="body2">{mission.vehicleName}</Typography>
    {mission.driverName && (
      <Typography variant="body2">راننده: {mission.driverName}</Typography>
    )}
    <Typography variant="body2">
      {mission.originLocationName || '—'} ←{' '}
      {mission.destinationLocationName || '—'}
    </Typography>
    <Typography variant="caption" color="text.secondary">
      آخرین به‌روزرسانی:{' '}
      {mission.recordedAt
        ? new Date(mission.recordedAt).toLocaleString('fa-IR')
        : '—'}
    </Typography>
  </Popup>
);

const LegendShape = ({ type }) => {
  const base = { width: 12, height: 12, flexShrink: 0 };
  if (type === 'track') {
    return (
      <Box sx={{ ...base, display: 'flex', alignItems: 'center' }}>
        <Box sx={{ width: '100%', height: 3, bgcolor: '#555' }} />
      </Box>
    );
  }
  const sx =
    type === 'origin'
      ? {
          ...base,
          borderRadius: '50%',
          border: '3px solid #555',
          bgcolor: '#fff',
        }
      : type === 'destination'
        ? { ...base, bgcolor: '#555' }
        : {
            ...base,
            borderRadius: '50% 50% 50% 0',
            transform: 'rotate(-45deg)',
            bgcolor: '#555',
          };

  return <Box sx={sx} />;
};

const ActiveVehiclesMapPanel = ({ open, onClose }) => {
  const { locations, loading, getLocations } = useActiveVehiclesLocations();

  useEffect(() => {
    if (open) {
      getLocations();
    }
  }, [open, getLocations]);

  const missions = useMemo(
    () =>
      [...locations]
        .sort((a, b) => a.missionId - b.missionId)
        .map((loc, index) => {
          const color = MISSION_COLORS[index % MISSION_COLORS.length];
          return {
            ...loc,
            color,
            icons: createIcons(color),
            current: toLatLng(loc.latitude, loc.longitude),
            // ✅ مسیر طی‌شده: همه‌ی نقاط ثبت‌شده‌ی معتبر به ترتیب زمان
            track: (loc.points || [])
              .map((p) => ({
                id: p.id,
                recordedAt: p.recordedAt,
                position: toLatLng(p.latitude, p.longitude),
              }))
              .filter((p) => p.position),
            origin: toLatLng(loc.originLatitude, loc.originLongitude),
            destination: toLatLng(
              loc.destinationLatitude,
              loc.destinationLongitude,
            ),
          };
        })
        .filter(
          (m) => m.current || m.origin || m.destination || m.track.length > 0,
        ),
    [locations],
  );

  const allPoints = useMemo(
    () =>
      missions.flatMap((m) =>
        [
          m.origin,
          m.destination,
          m.current,
          ...m.track.map((p) => p.position),
        ].filter(Boolean),
      ),
    [missions],
  );

  if (!open) return null;

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

      {!loading && missions.length === 0 && (
        <Alert severity="info" sx={{ m: 2 }}>
          هیچ موقعیت مکانی ثبت‌شده‌ای برای خودروهای در مأموریت وجود ندارد.
        </Alert>
      )}

      <Box sx={{ flexGrow: 1, position: 'relative' }}>
        <MapContainer
          center={DEFAULT_CENTER}
          zoom={12}
          style={{ height: '100%', width: '100%' }}
        >
          <TileLayer
            attribution="&copy; OpenStreetMap contributors"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          <FitBounds points={allPoints} />

          {missions.map((mission) => (
            <React.Fragment key={mission.missionId}>
              {mission.origin && mission.destination && (
                <Polyline
                  positions={[mission.origin, mission.destination]}
                  pathOptions={{
                    color: mission.color,
                    weight: 3,
                    dashArray: '8 8',
                  }}
                />
              )}

              {mission.origin && (
                <Marker position={mission.origin} icon={mission.icons.origin}>
                  <MissionPopup
                    mission={mission}
                    title={`مبدا: ${mission.originLocationName || ''}`}
                  />
                </Marker>
              )}

              {mission.destination && (
                <Marker
                  position={mission.destination}
                  icon={mission.icons.destination}
                >
                  <MissionPopup
                    mission={mission}
                    title={`مقصد: ${mission.destinationLocationName || ''}`}
                  />
                </Marker>
              )}

              {mission.track.length > 1 && (
                <Polyline
                  positions={mission.track.map((p) => p.position)}
                  pathOptions={{ color: mission.color, weight: 4 }}
                />
              )}

              {/* نقطه‌ی آخر با سنجاق خودرو نمایش داده می‌شود */}
              {mission.track.slice(0, -1).map((point) => (
                <CircleMarker
                  key={point.id}
                  center={point.position}
                  radius={5}
                  pathOptions={{
                    color: '#fff',
                    weight: 1.5,
                    fillColor: mission.color,
                    fillOpacity: 1,
                  }}
                >
                  <Popup>
                    <Typography variant="subtitle2" fontWeight={700}>
                      {mission.missionCode}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      {new Date(point.recordedAt).toLocaleString('fa-IR')}
                    </Typography>
                  </Popup>
                </CircleMarker>
              ))}

              {mission.current && (
                <Marker
                  position={mission.current}
                  icon={mission.icons.vehicle}
                  zIndexOffset={1000}
                >
                  <MissionPopup mission={mission} title="موقعیت فعلی" />
                </Marker>
              )}
            </React.Fragment>
          ))}
        </MapContainer>

        {missions.length > 0 && (
          <Box
            sx={{
              position: 'absolute',
              top: 12,
              right: 12,
              zIndex: 1000,
              bgcolor: 'background.paper',
              borderRadius: 1,
              boxShadow: 2,
              p: 1.5,
              maxHeight: '60%',
              overflowY: 'auto',
              minWidth: 180,
            }}
          >
            <Stack spacing={0.75}>
              {missions.map((mission) => (
                <Stack
                  key={mission.missionId}
                  direction="row"
                  alignItems="center"
                  spacing={1}
                >
                  <Box
                    sx={{
                      width: 14,
                      height: 14,
                      borderRadius: '50%',
                      bgcolor: mission.color,
                      flexShrink: 0,
                    }}
                  />
                  <Typography variant="body2" fontWeight={600}>
                    {mission.missionCode}
                  </Typography>
                  {!mission.current && (
                    <Typography variant="caption" color="text.secondary">
                      (بدون موقعیت)
                    </Typography>
                  )}
                </Stack>
              ))}
            </Stack>

            <Stack
              spacing={0.5}
              sx={{
                mt: 1.5,
                pt: 1,
                borderTop: '1px solid',
                borderColor: 'divider',
              }}
            >
              {[
                ['origin', 'مبدا'],
                ['destination', 'مقصد'],
                ['track', 'مسیر ثبت‌شده توسط راننده'],
                ['vehicle', 'موقعیت فعلی خودرو'],
              ].map(([type, label]) => (
                <Stack
                  key={type}
                  direction="row"
                  alignItems="center"
                  spacing={1}
                >
                  <LegendShape type={type} />
                  <Typography variant="caption">{label}</Typography>
                </Stack>
              ))}
            </Stack>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default memo(ActiveVehiclesMapPanel);
