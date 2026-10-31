import React, { memo, useCallback, useEffect, useState } from 'react';

import { Alert, Box, Stack, Tab, Tabs } from '@mui/material';
import { useTranslation } from 'react-i18next';

import { AppDialog, AppSelectform } from '@/components';
import { useAuth } from '@/hooks';

import * as vehicleRequestApi from '../api/vehicleRequestApi';
import { REQUEST_STATUS_FILTERS } from '../constants';

import NewVehicleRequestForm from './NewVehicleRequestForm';
import VehicleRequestList from './VehicleRequestList';

const TAB_NEW = 'new';
const TAB_MINE = 'mine';
const TAB_MANAGE = 'manage';

// ✅ دیالوگ درخواست خودرو: ثبت درخواست، «درخواست‌های من»، و برای مدیر نقلیه «مدیریت درخواست‌ها».
// onActivity: هر بار که چیزی شمارنده‌ی دکمه را عوض کند (ثبت، پاسخ، دیده شدن پاسخ‌ها) صدا زده می‌شود
const VehicleRequestDialog = ({ open, onClose, onActivity }) => {
  const { t } = useTranslation();
  const { can } = useAuth();
  const isManager = can('VehicleRequest.Manage');

  const [tab, setTab] = useState(TAB_NEW);
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [statusFilter, setStatusFilter] = useState(1); // مدیر: پیش‌فرض «در انتظار»
  const [notice, setNotice] = useState('');

  const load = useCallback(async () => {
    if (tab === TAB_NEW) return;

    setLoading(true);
    setError('');

    const response =
      tab === TAB_MINE
        ? await vehicleRequestApi.getMyRequests()
        : await vehicleRequestApi.getAllRequests(statusFilter || null);

    setLoading(false);

    if (!response.success) {
      setRequests([]);
      setError(response.errors?.filter(Boolean).join(' — ') || t('خطا در دریافت اطلاعات'));
      return;
    }

    setRequests(response.data ?? []);

    // پاسخ‌های تازه همین حالا دیده شدند → شمارنده‌ی دکمه کم شود
    if (tab === TAB_MINE) {
      await vehicleRequestApi.markResponsesSeen();
    }
    onActivity?.();
  }, [tab, statusFilter, t, onActivity]);

  useEffect(() => {
    if (!open) return undefined;
    // از یک callback زمان‌دار، نه همزمان داخل effect (load فوراً setLoading می‌کند)
    const id = setTimeout(load, 0);
    return () => clearTimeout(id);
  }, [open, load]);

  return (
    <AppDialog open={open} onClose={onClose} title="درخواست خودرو" maxWidth="md">
      {/* ✅ متن‌های پیش‌فرض MUI (زبانه ۱۴px، Alert ۱۴px) با فونت B Mitra خیلی ریز بودند؛
          همه به مقیاس مشترک theme/typography.js برده شدند */}
      <Stack
        spacing={2}
        sx={{
          "& .MuiTab-root": { typography: "statLabel", textTransform: "none" },
          "& .MuiAlert-message": { typography: "bodyText" },
        }}
      >
        <Tabs
          value={tab}
          onChange={(_, value) => {
            setNotice('');
            setTab(value);
          }}
          variant="scrollable"
        >
          <Tab value={TAB_NEW} label={t('درخواست جدید')} />
          <Tab value={TAB_MINE} label={t('درخواست‌های من')} />
          {isManager && <Tab value={TAB_MANAGE} label={t('مدیریت درخواست‌ها')} />}
        </Tabs>

        {notice && <Alert severity="success">{notice}</Alert>}

        {tab === TAB_NEW && (
          <NewVehicleRequestForm
            onCreated={() => {
              onActivity?.();
              setNotice(t('درخواست شما ثبت شد و پس از بررسی مدیر نقلیه نتیجه همین‌جا نمایش داده می‌شود.'));
              setTab(TAB_MINE);
            }}
          />
        )}

        {tab !== TAB_NEW && (
          <>
            {tab === TAB_MANAGE && (
              <Box sx={{ maxWidth: 260 }}>
                <AppSelectform
                  label="وضعیت"
                  value={statusFilter}
                  options={REQUEST_STATUS_FILTERS}
                  onChange={(value) => setStatusFilter(value)}
                />
              </Box>
            )}

            {error ? (
              <Alert severity="error">{error}</Alert>
            ) : (
              <VehicleRequestList
                mode={tab}
                requests={requests}
                loading={loading}
                onChanged={load}
                emptyText={tab === TAB_MINE ? 'هنوز درخواستی ثبت نکرده‌اید.' : 'درخواستی یافت نشد.'}
              />
            )}
          </>
        )}
      </Stack>
    </AppDialog>
  );
};

export default memo(VehicleRequestDialog);
