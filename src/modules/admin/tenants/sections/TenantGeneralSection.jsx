import React, { memo } from 'react';

import Grid from '@mui/material/Grid';

import {
  AppFormSection,
  AppTextField,
  AppSwitch,
  AppSelect,
  AppJalaliDatePicker,
} from '@/components';

const PLAN_ITEMS = [
  { id: 'Basic', title: 'Basic' },
  { id: 'Pro', title: 'Pro' },
  { id: 'Enterprise', title: 'Enterprise' },
];

const TenantGeneralSection = ({
  values,
  errors,
  onChange,
  setFieldValue,
  isEdit,
}) => {
  return (
    <AppFormSection title="اطلاعات سازمان (تننت)" divider>
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 6 }}>
          <AppTextField
            fullWidth
            required
            label="نام سازمان"
            name="name"
            value={values.name}
            onChange={onChange}
            error={!!errors?.name}
            helperText={errors?.name}
          />
        </Grid>

        {/* ✅ نام انگلیسی (اختیاری) — در محیط انگلیسی به‌جای نام فارسی نمایش داده می‌شود */}
        <Grid size={{ xs: 12, md: 6 }}>
          <AppTextField
            fullWidth
            label="نام انگلیسی سازمان"
            name="nameEn"
            value={values.nameEn ?? ''}
            onChange={onChange}
            error={!!errors?.nameEn}
            helperText={
              errors?.nameEn ||
              'اختیاری؛ اگر خالی بماند، در حالت انگلیسی هم نام فارسی نمایش داده می‌شود'
            }
          />
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <AppTextField
            fullWidth
            required
            disabled={isEdit}
            label="Slug (شناسه یکتا)"
            name="slug"
            value={values.slug}
            onChange={onChange}
            error={!!errors?.slug}
            helperText={errors?.slug || 'بعد از ایجاد قابل تغییر نیست'}
          />
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <AppSelect
            fullWidth
            label="پلن اشتراک"
            items={PLAN_ITEMS}
            value={values.subscriptionPlan || ''}
            onChange={(value) => setFieldValue('subscriptionPlan', value)}
          />
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <AppJalaliDatePicker
            required
            label="تاریخ انقضاء"
            name="subscriptionExpiresAt"
            value={values.subscriptionExpiresAt}
            onChange={(value) => setFieldValue('subscriptionExpiresAt', value)}
            error={!!errors?.subscriptionExpiresAt}
            helperText={errors?.subscriptionExpiresAt}
          />
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <AppTextField
            fullWidth
            type="number"
            label="حداکثر تعداد خودرو"
            name="maxVehicles"
            value={values.maxVehicles ?? ''}
            onChange={onChange}
            helperText="خالی بگذارید برای نامحدود"
          />
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <AppTextField
            fullWidth
            type="number"
            label="حداکثر تعداد کاربر"
            name="maxUsers"
            value={values.maxUsers ?? ''}
            onChange={onChange}
            helperText="خالی بگذارید برای نامحدود"
          />
        </Grid>

        {isEdit && (
          <Grid size={{ xs: 12, md: 6 }}>
            <AppSwitch
              label="سازمان فعال است"
              name="isActive"
              checked={values.isActive}
              onChange={(e) => setFieldValue('isActive', e.target.checked)}
            />
          </Grid>
        )}

        {/* ✅ قابلیت «درخواست خودرو» برای همین سازمان (فقط سوپرادمین این فرم را می‌بیند) */}
        <Grid size={{ xs: 12, md: 6 }}>
          <AppSwitch
            label="درخواست خودرو فعال است"
            name="vehicleRequestsEnabled"
            checked={!!values.vehicleRequestsEnabled}
            onChange={(e) => setFieldValue('vehicleRequestsEnabled', e.target.checked)}
          />
        </Grid>

        {/* ✅ دستیار اسناد: اگر خواندن محلی مطمئن نباشد، تصویر سند برای هوش مصنوعی ابری فرستاده شود؟ */}
        <Grid size={{ xs: 12, md: 6 }}>
          <AppSwitch
            label="خواندن ابری اسناد فعال است"
            name="documentCloudReadingEnabled"
            checked={!!values.documentCloudReadingEnabled}
            onChange={(e) => setFieldValue('documentCloudReadingEnabled', e.target.checked)}
            helperText="تصویر سندهایی که دستیار به‌تنهایی مطمئن نیست برای خواندن دقیق‌تر به سرویس ابری فرستاده می‌شود"
          />
        </Grid>
      </Grid>
    </AppFormSection>
  );
};

export default memo(TenantGeneralSection);
