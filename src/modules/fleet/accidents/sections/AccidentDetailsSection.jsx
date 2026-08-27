import React, { memo, useMemo } from 'react';

import Grid from '@mui/material/Grid';

import {
  AppFormSection,
  AppSelectform,
  AppTextField,
  AppSwitch,
} from '@/components';

import { accidentSeverityOptions } from '../constants';

const AccidentDetailsSection = ({
  values,
  errors,
  onChange,
  setFieldValue,
  vehicles,
}) => {
  const selectedVehicle = useMemo(
    () => vehicles.find((v) => v.id === values.vehicleId) || null,
    [vehicles, values.vehicleId],
  );
  return (
    <AppFormSection title="جزئیات و خسارت">
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 6 }}>
          <AppSelectform
            fullWidth
            required
            label="شدت تصادف"
            value={values.severity}
            options={accidentSeverityOptions}
            onChange={(value) => setFieldValue('severity', value)}
            error={!!errors?.severity}
            helperText={errors?.severity}
          />
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <AppTextField
            fullWidth
            type="number"
            label="کیلومتر خودرو در لحظه تصادف"
            name="odometerKm"
            value={values.odometerKm}
            onChange={onChange}
            error={!!errors?.odometerKm}
            helperText={
              errors?.odometerKm ||
              (selectedVehicle
                ? `کارکرد فعلی ثبت‌شده: ${selectedVehicle.currentKM?.toLocaleString() ?? '—'} کیلومتر`
                : 'ابتدا خودرو را انتخاب کنید')
            }
          />
        </Grid>

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

        <Grid size={{ xs: 12, md: 6 }}>
          <AppSwitch
            label="طرف مقابل داشته است؟"
            checked={values.thirdPartyInvolved}
            onChange={(e) =>
              setFieldValue('thirdPartyInvolved', e.target.checked)
            }
          />
        </Grid>

        {values.thirdPartyInvolved && (
          <Grid size={{ xs: 12, md: 6 }}>
            <AppTextField
              fullWidth
              label="اطلاعات طرف مقابل"
              name="thirdPartyDetails"
              value={values.thirdPartyDetails}
              onChange={onChange}
            />
          </Grid>
        )}

        <Grid size={{ xs: 12, md: 4 }}>
          <AppTextField
            fullWidth
            type="number"
            label="برآورد هزینه خسارت (تومان)"
            name="estimatedDamageCost"
            value={values.estimatedDamageCost}
            onChange={onChange}
          />
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <AppTextField
            fullWidth
            label="شماره گزارش پلیس"
            name="policeReportNumber"
            value={values.policeReportNumber}
            onChange={onChange}
          />
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <AppTextField
            fullWidth
            label="شماره پرونده بیمه"
            name="insuranceClaimNumber"
            value={values.insuranceClaimNumber}
            onChange={onChange}
          />
        </Grid>
      </Grid>
    </AppFormSection>
  );
};

export default memo(AccidentDetailsSection);
