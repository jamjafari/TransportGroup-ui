import React, { memo } from 'react';

import Grid from '@mui/material/Grid';
import { attachmentCategoryOptions } from '../constants';

import {
  AppFormSection,
  AppSelectform,
  AppTextField,
  AppFormGrid,
} from '@/components';

const VendorGeneralSection = ({ values, errors, onChange, setFieldValue }) => {
  return (
    <AppFormSection title="اطلاعات  تامین کننده قطعه یا خدمات">
      <AppFormGrid>
        <Grid size={{ xs: 12, md: 6 }}>
          <AppTextField
            fullWidth
            required
            label="نام تامین کننده "
            name="vendorName"
            value={values.vendorName}
            onChange={onChange}
            error={!!errors?.vendorName}
            helperText={errors?.vendorName}
          />
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <AppTextField
            fullWidth

            label=" کد تامین کننده"
            name="vendorCode"
            value={values.vendorCode}
            onChange={onChange}
            error={!!errors?.vendorCode}
            helperText={errors?.vendorCode}
          />
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <AppSelectform
            fullWidth
            required
            label="نوع تامین کننده"
            name="vendorType"
            value={values.vendorType}
            options={attachmentCategoryOptions}
            onChange={(value) => setFieldValue('vendorType', value)}
            error={!!errors?.vendorType}
            helperText={errors?.vendorType}
          />
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <AppTextField
            fullWidth
            required

            label="  شماره موبایل"
            name="mobileNumber"
            value={values.mobileNumber}
            onChange={onChange}
            error={!!errors?.mobileNumber}
            helperText={errors?.mobileNumber}
          />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <AppTextField
            fullWidth

            label="شخص مسئول"
            name="contactPerson"
            value={values.contactPerson}
            onChange={onChange}
            error={!!errors?.contactPerson}
            helperText={errors?.contactPerson}
          />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <AppTextField
            fullWidth

            label="شماره تلفن"
            name="phoneNumber"
            value={values.phoneNumber}
            onChange={onChange}
            error={!!errors?.phoneNumber}
            helperText={errors?.phoneNumber}
          />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <AppTextField
            fullWidth

            label="ایمیل "
            name="email"
            value={values.email}
            onChange={onChange}
            error={!!errors?.email}
            helperText={errors?.email}
          />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <AppTextField
            fullWidth

            label="آدرس"
            name="address"
            value={values.address}
            onChange={onChange}
            error={!!errors?.address}
            helperText={errors?.address}
          />
        </Grid>
      </AppFormGrid>
    </AppFormSection>
  );
};

export default memo(VendorGeneralSection);
