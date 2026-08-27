import React, { memo, useMemo } from 'react';

import Grid from '@mui/material/Grid';

import {
  AppFormSection,
  AppSelectform,
  AppTextField,
  AppJalaliDatePicker,
  AppAutocompleteform,
} from '@/components';
const ServiceGeneralSection = ({
  values,
  errors,
  onChange,
  setFieldValue,
  vehicles,
  vehiclesLoading,
  vendors,
  vendorsLoading,
  serviceTypes,
  serviceTypesLoading,
}) => {
  const selectedVehicle = useMemo(
    () => vehicles.find((v) => v.id === values.vehicleId) || null,
    [vehicles, values.vehicleId],
  );

  const currentKmHint = selectedVehicle
    ? `کارکرد فعلی ثبت‌شده: ${selectedVehicle.currentKM?.toLocaleString() ?? '—'} کیلومتر`
    : 'ابتدا خودرو را از بخش اطلاعات پایه انتخاب کنید';
  return (
    <AppFormSection title="اطلاعات  سرویس">
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 6 }}>
          <AppAutocompleteform
            fullWidth
            required
            label="پلاک خودرو"
            name="vehicleId"
            options={vehicles}
            loading={vehiclesLoading}
            value={
              vehicles.find((vehicle) => vehicle.id === values.vehicleId) ||
              null
            }
            getOptionLabel={(option) => option?.plateNumber || ''}
            isOptionEqualToValue={(option, value) => option?.id === value?.id}
            onChange={(event, value) => {
              setFieldValue('vehicleId', value?.id || null);
            }}
            error={!!errors?.vehicleId}
            helperText={errors?.vehicleId}
          />
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <AppAutocompleteform
            fullWidth
            label="نام تامین کننده"
            name="vendorId"
            options={vendors}
            loading={vendorsLoading}
            value={
              vendors.find((vendor) => vendor.id === values.vendorId) || null
            }
            getOptionLabel={(option) =>
              option?.vendorName ? `${option.vendorName} ` : ''
            }
            isOptionEqualToValue={(option, value) => option?.id === value?.id}
            onChange={(event, value) => {
              setFieldValue('vendorId', value?.id || null);
            }}
            error={!!errors?.vendorId}
            helperText={errors?.vendorId}
          />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <AppAutocompleteform
            fullWidth
            required
            label="نوع سرویس "
            name="serviceTypeId"
            options={serviceTypes}
            loading={serviceTypesLoading}
            value={
              serviceTypes.find(
                (serviceType) => serviceType.id === values.serviceTypeId,
              ) || null
            }
            getOptionLabel={(option) => option?.title || ''}
            isOptionEqualToValue={(option, value) => option?.id === value?.id}
            onChange={(event, value) => {
              setFieldValue('serviceTypeId', value?.id || null);
            }}
            error={!!errors?.serviceTypeId}
            helperText={errors?.serviceTypeId}
          />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <AppTextField
            fullWidth
            required
            type="number"
            label="کیلومتر خودرو  "
            name="odometerKM"
            value={values.odometerKM}
            onChange={onChange}
            error={!!errors?.odometerKM}
            helperText={errors?.odometerKM || currentKmHint}
          />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <AppJalaliDatePicker
            required
            label="تاریخ  سرویس"
            name="serviceDate"
            value={values.serviceDate}
            onChange={(value) => setFieldValue('serviceDate', value)}
            error={!!errors?.serviceDate}
            helperText={errors?.serviceDate}
          />
        </Grid>
      </Grid>
    </AppFormSection>
  );
};

export default memo(ServiceGeneralSection);
