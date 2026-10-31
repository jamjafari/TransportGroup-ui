import React, { memo, useState } from 'react';

import { Alert, Box, Paper, Stack, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

import { AppButton, StatusChip } from '@/components';
import { formatDate } from '@/utils';

import * as vehicleRequestApi from '../api/vehicleRequestApi';
import { REQUEST_STATUS, formatTime } from '../constants';

import RespondPanel from './RespondPanel';

const PENDING = 1;

const dateTime = (date, time) =>
  [formatDate(date), formatTime(time)].filter(Boolean).join(' ');

// ✅ یک کارت برای هر درخواست. mode="mine": لغو درخواست در انتظار؛ mode="manage": تأیید/رد.
const RequestCard = ({ request, mode, onChanged }) => {
  const { t, i18n } = useTranslation();
  const [responding, setResponding] = useState(null); // 'approve' | 'reject' | null
  const [cancelling, setCancelling] = useState(false);
  const [error, setError] = useState('');

  const arrow = i18n.dir() === 'rtl' ? '←' : '→';
  const isPending = request.status === PENDING;

  const handleCancel = async () => {
    setCancelling(true);
    const response = await vehicleRequestApi.cancelRequest(request.id);
    setCancelling(false);
    if (!response.success) {
      setError(response.errors?.filter(Boolean).join(' — ') || t('ذخیره انجام نشد'));
      return;
    }
    onChanged?.();
  };

  return (
    <Paper variant="outlined" sx={{ p: 2 }}>
      <Stack direction="row" justifyContent="space-between" alignItems="flex-start" spacing={1}>
        <Box sx={{ minWidth: 0 }}>
          <Typography variant="statLabel">
            {request.subject}
          </Typography>
          <Typography variant="bodyText" fontWeight={600}>
            {request.originLocationName} {arrow} {request.destinationLocationName}
          </Typography>
        </Box>
        <StatusChip status={REQUEST_STATUS[request.status]} size="medium" />
      </Stack>

      <Stack spacing={0.5} sx={{ mt: 1 }}>
        <Typography variant="bodyText" color="text.secondary">
          {t('رفت: {{value}}', { value: dateTime(request.departureDate, request.departureTime) })}
          {request.returnDate &&
            ` · ${t('برگشت: {{value}}', { value: dateTime(request.returnDate, request.returnTime) })}`}
        </Typography>

        {mode === 'manage' && (
          <Typography variant="bodyText" color="text.secondary">
            {t('درخواست‌دهنده: {{name}}', { name: request.requesterName })}
          </Typography>
        )}

        {request.description && <Typography variant="bodyText">{request.description}</Typography>}

        {request.missionCode && (
          <Alert severity="success" sx={{ py: 0 }}>
            {t('مأموریت {{code}} — خودرو {{plate}}، راننده {{driver}}', {
              code: request.missionCode,
              plate: request.vehiclePlateNumber ?? '—',
              driver: request.driverName ?? '—',
            })}
          </Alert>
        )}

        {request.responseNote && (
          <Alert severity={request.status === 3 ? 'error' : 'info'} sx={{ py: 0 }}>
            {t('پاسخ مدیر نقلیه: {{note}}', { note: request.responseNote })}
          </Alert>
        )}

        {error && <Alert severity="error">{error}</Alert>}
      </Stack>

      {isPending && !responding && (
        <Stack direction="row" spacing={1} justifyContent="flex-end" sx={{ mt: 1.5 }}>
          {mode === 'mine' && (
            <AppButton
              size="medium"
              variant="outlined"
              color="error"
              loading={cancelling}
              onClick={handleCancel}
              labelKey="لغو درخواست"
            />
          )}
          {mode === 'manage' && (
            <>
              <AppButton
                size="medium"
                variant="outlined"
                color="error"
                onClick={() => setResponding('reject')}
                labelKey="رد کردن"
              />
              <AppButton
                size="medium"
                variant="contained"
                color="success"
                onClick={() => setResponding('approve')}
                labelKey="تأیید"
              />
            </>
          )}
        </Stack>
      )}

      {responding && (
        <RespondPanel
          request={request}
          mode={responding}
          onCancel={() => setResponding(null)}
          onDone={() => {
            setResponding(null);
            onChanged?.();
          }}
        />
      )}
    </Paper>
  );
};

const VehicleRequestList = ({ requests, loading, mode, onChanged, emptyText }) => {
  const { t } = useTranslation();

  if (loading) {
    return <Typography variant="bodyText">{t('در حال بارگذاری...')}</Typography>;
  }

  if (!requests.length) {
    return (
      <Typography variant="bodyText" color="text.secondary" sx={{ py: 3, textAlign: 'center' }}>
        {t(emptyText)}
      </Typography>
    );
  }

  return (
    <Stack spacing={1.5}>
      {requests.map((request) => (
        <RequestCard key={request.id} request={request} mode={mode} onChanged={onChanged} />
      ))}
    </Stack>
  );
};

export default memo(VehicleRequestList);
