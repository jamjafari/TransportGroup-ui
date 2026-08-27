import React, { memo, useMemo } from 'react';

import Grid from '@mui/material/Grid';

import { AppFormSection, AppTextField } from '@/components';

const InspectionDetailsSection = ({ values, errors, onChange, vehicles }) => {
  const selectedVehicle = useMemo(
    () => vehicles.find((v) => v.id === values.vehicleId) || null,
    [vehicles, values.vehicleId],
  );

  return (
    <AppFormSection title="جزئیات تکمیلی">
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 4 }}>
          <AppTextField
            fullWidth
            label="شماره گواهی معاینه فنی"
            name="certificateNumber"
            value={values.certificateNumber}
            onChange={onChange}
          />
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <AppTextField
            fullWidth
            type="number"
            label="کیلومتر خودرو"
            name="odometerKM"
            value={values.odometerKM}
            onChange={onChange}
            error={!!errors?.odometerKM}
            helperText={
              errors?.odometerKM ||
              (selectedVehicle
                ? `کارکرد فعلی ثبت‌شده: ${selectedVehicle.currentKM?.toLocaleString() ?? '—'} کیلومتر`
                : 'ابتدا خودرو را انتخاب کنید')
            }
          />
        </Grid>

        {/* <Grid size={{ xs: 12, md: 4 }}>
          <AppTextField
            fullWidth
            type="number"
            label="هزینه (تومان)"
            name="cost"
            value={values.cost}
            onChange={onChange}
          />
        </Grid> */}

        <Grid size={{ xs: 12 }}>
          <AppTextField
            fullWidth
            multiline
            minRows={2}
            label="توضیحات"
            name="description"
            value={values.description}
            onChange={onChange}
          />
        </Grid>
      </Grid>
    </AppFormSection>
  );
};

export default memo(InspectionDetailsSection);
