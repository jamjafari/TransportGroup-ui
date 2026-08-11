import React, { memo, useEffect } from 'react';

import Grid from '@mui/material/Grid';
import useExpenseVehicles from '../hooks/useExpenseVehicles';
import useExpenseExpenseTypes from '../hooks/useExpenseExpenseTypes';
import useExpenseVendors from '../hooks/useExpenseVendors';

import {
  AppFormSection,
  AppSelectform,
  AppJalaliDatePicker,
  AppTextField,
  AppAutocompleteform,
} from '@/components';

const ExpenseGeneralSection = ({ values, errors, onChange, setFieldValue }) => {
  const {
    vehicles,
    loading: vehiclesLoading,
    getVehicles,
  } = useExpenseVehicles();
  const {
    expenseTypes,
    loading: expenseTypesLoading,
    getExpenseTypes,
  } = useExpenseExpenseTypes();
  const { vendors, loading: vendorsLoading, getVendors } = useExpenseVendors();
  useEffect(() => {
    getVehicles();
    getExpenseTypes();
    getVendors();
  }, [getVehicles, getExpenseTypes, getVendors]);

  const vehicleOptions = vehicles.map((vehicle) => ({
    value: vehicle.id,
    label: vehicle.plateNumber,
  }));
  const expenseTypeOptions = expenseTypes.map((expenseType) => ({
    value: expenseType.id,
    label: expenseType.title,
  }));
  const vendorOptions = vendors.map((vendor) => ({
    value: vendor.id,
    label: vendor.vendorName,
  }));
  return (
    <AppFormSection title="اطلاعات  مورد نیاز هزینه جدید">
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
            label=" نوع هزینه"
            name="expenseTypeId"
            options={expenseTypes}
            loading={expenseTypesLoading}
            value={
              expenseTypes.find(
                (expenseType) => expenseType.id === values.expenseTypeId,
              ) || null
            }
            getOptionLabel={(option) => option?.title || ''}
            isOptionEqualToValue={(option, value) => option?.id === value?.id}
            onChange={(event, value) => {
              setFieldValue('expenseTypeId', value?.id || null);
            }}
            error={!!errors?.expenseTypeId}
            helperText={errors?.expenseTypeId}
          />
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <AppJalaliDatePicker
            required
            label="تاریخ هزینه"
            name="expenseDate"
            value={values.expenseDate}
            onChange={(value) => setFieldValue('expenseDate', value)}
            error={!!errors?.expenseDate}
            helperText={errors?.expenseDate}
          />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <AppTextField
            fullWidth
            required
            type="number"
            label="مقدار هزینه (تومان) "
            name="amount"
            value={values.amount}
            onChange={onChange}
            error={!!errors?.amount}
            helperText={errors?.amount}
          />
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <AppTextField
            fullWidth
            required

            label="  شماره فاکتور"
            name="invoiceNumber"
            value={values.invoiceNumber}
            onChange={onChange}
            error={!!errors?.invoiceNumber}
            helperText={errors?.invoiceNumber}
          />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <AppAutocompleteform
            fullWidth
            required
            label="نام تامین کننده "
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

export default memo(ExpenseGeneralSection);
