import React, { memo } from 'react';

import Grid from '@mui/material/Grid';

import {
  AppFormSection,
  AppAutocompleteform,
  AppSelectform,
  AppJalaliDatePicker,
} from '@/components';

import { INSPECTION_RESULT_OPTIONS } from '../constants';

const InspectionGeneralSection = ({
  values,
  errors,
  setFieldValue,
  vehicles,
  vehiclesLoading,
  vendors,
  vendorsLoading,
}) => {
  return (
    <AppFormSection title="اطلاعات معاینه فنی" divider>
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
            onChange={(event, value) =>
              setFieldValue('vehicleId', value?.id || null)
            }
            error={!!errors?.vehicleId}
            helperText={errors?.vehicleId}
          />
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <AppAutocompleteform
            fullWidth
            label="مرکز معاینه فنی"
            options={vendors}
            loading={vendorsLoading}
            value={vendors.find((v) => v.id === values.vendorId) || null}
            getOptionLabel={(option) => option?.vendorName || ''}
            isOptionEqualToValue={(option, value) => option?.id === value?.id}
            onChange={(event, value) =>
              setFieldValue('vendorId', value?.id || null)
            }
          />
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <AppJalaliDatePicker
            required
            label="تاریخ انجام معاینه"
            value={values.inspectionDate}
            onChange={(value) => setFieldValue('inspectionDate', value)}
            error={!!errors?.inspectionDate}
            helperText={errors?.inspectionDate}
          />
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <AppJalaliDatePicker
            required
            label="تاریخ انقضا"
            value={values.expiryDate}
            onChange={(value) => setFieldValue('expiryDate', value)}
            error={!!errors?.expiryDate}
            helperText={errors?.expiryDate}
          />
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <AppSelectform
            fullWidth
            required
            label="نتیجه معاینه"
            value={values.result}
            options={INSPECTION_RESULT_OPTIONS}
            onChange={(value) => setFieldValue('result', value)}
            error={!!errors?.result}
            helperText={errors?.result}
          />
        </Grid>
      </Grid>
    </AppFormSection>
  );
};

export default memo(InspectionGeneralSection);
