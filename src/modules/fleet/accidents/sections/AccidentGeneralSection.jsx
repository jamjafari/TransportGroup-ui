import React, { memo, useEffect } from 'react';

import Grid from '@mui/material/Grid';

import {
  AppFormSection,
  AppAutocompleteform,
  AppSelectform,
  AppJalaliDatePicker,
  AppTimePicker,
} from '@/components';

import useOpenMissions from '../hooks/useOpenMissions';

const AccidentGeneralSection = ({
  values,
  errors,
  setFieldValue,
  vehicles,
  vehiclesLoading,
  drivers,
  driversLoading,
}) => {
  const {
    missions,
    loading: missionsLoading,
    loadOpenMissions,
  } = useOpenMissions();

  useEffect(() => {
    loadOpenMissions(values.vehicleId);
  }, [values.vehicleId, loadOpenMissions]);

  return (
    <AppFormSection title="اطلاعات تصادف" divider>
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 6 }}>
          <AppAutocompleteform
            fullWidth
            required
            label="پلاک خودرو"
            options={vehicles}
            loading={vehiclesLoading}
            value={vehicles.find((v) => v.id === values.vehicleId) || null}
            getOptionLabel={(option) => option?.plateNumber || ''}
            isOptionEqualToValue={(option, value) => option?.id === value?.id}
            onChange={(event, value) => {
              setFieldValue('vehicleId', value?.id || null);
              setFieldValue('missionId', null); // با عوض شدن خودرو، ماموریت انتخاب‌شده پاک شود
            }}
            error={!!errors?.vehicleId}
            helperText={errors?.vehicleId}
          />
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <AppAutocompleteform
            fullWidth
            label="راننده"
            options={drivers}
            loading={driversLoading}
            value={drivers.find((d) => d.id === values.driverId) || null}
            getOptionLabel={(option) =>
              option ? `${option.firstName} ${option.lastName}` : ''
            }
            isOptionEqualToValue={(option, value) => option?.id === value?.id}
            onChange={(event, value) =>
              setFieldValue('driverId', value?.id || null)
            }
            error={!!errors?.driverId}
            helperText={errors?.driverId}
          />
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <AppSelectform
            fullWidth
            label="ماموریت مرتبط (اختیاری)"
            value={values.missionId || ''}
            options={missions.map((m) => ({
              value: m.id,
              label: m.missionCode,
            }))}
            onChange={(value) => setFieldValue('missionId', value)}
            disabled={!values.vehicleId || missionsLoading}
            placeholder={values.vehicleId}
          />
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <AppJalaliDatePicker
            required
            label="تاریخ تصادف"
            value={values.accidentDate}
            onChange={(value) => setFieldValue('accidentDate', value)}
            error={!!errors?.accidentDate}
            helperText={errors?.accidentDate}
          />
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <AppTimePicker
            fullWidth
            label="ساعت تصادف"
            value={values.accidentTime ?? ''}
            onChange={(event) =>
              setFieldValue('accidentTime', event.target.value)
            }
          />
        </Grid>
      </Grid>
    </AppFormSection>
  );
};

export default memo(AccidentGeneralSection);
