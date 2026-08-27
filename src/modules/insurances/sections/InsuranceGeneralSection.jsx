import React, { memo } from 'react';

import Grid from '@mui/material/Grid';

import { AppFormSection, AppAutocompleteform } from '@/components';

const InsuranceGeneralSection = ({
  values,
  errors,
  setFieldValue,
  vehicles,
  vehiclesLoading,
  vendors,
  vendorsLoading,
}) => {
  return (
    <AppFormSection title="اطلاعات پایه بیمه">
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
            required
            label="نام شرکت بیمه گذار "
            name="vendorId"
            options={vendors}
            loading={vendorsLoading}
            value={
              vendors.find((vendor) => vendor.id === values.vendorId) || null
            }
            getOptionLabel={(option) => option?.vendorName || ''}
            isOptionEqualToValue={(option, value) => option?.id === value?.id}
            onChange={(event, value) => {
              setFieldValue('vendorId', value?.id || null);
            }}
            error={!!errors?.vendorId}
            helperText={errors?.vendorId}
          />
        </Grid>
      </Grid>
    </AppFormSection>
  );
};

export default memo(InsuranceGeneralSection);
