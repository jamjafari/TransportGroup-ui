import React, { memo, useCallback, useEffect, useState } from 'react';
import Stack from '@mui/material/Stack';

import { AppForm, AppFormActions, AppButton } from '@/components';
import { hasErrors, validate } from '@/validation';

import InspectionGeneralSection from '../sections/InspectionGeneralSection';
import InspectionDetailsSection from '../sections/InspectionDetailsSection';

import * as vehicleApi from '@/modules/fleet/vehicles/api/vehicleApi';
import * as vendorApi from '@/modules/vendors/api/vendorApi'; // مسیر رو با اسم واقعی هماهنگ کن

import { sanitizeNumericFields } from '@/utils';

import inspectionSchema from '../schemas/inspectionSchema';

const defaultValues = {
  vehicleId: null,
  vendorId: null,
  inspectionDate: null,
  expiryDate: null,
  result: '',
  cost: '',
  certificateNumber: '',
  odometerKM: '',
  description: '',
};

const InspectionForm = ({ initialValues = defaultValues, onSubmit }) => {
  const [errors, setErrors] = useState({});
  const [vehicles, setVehicles] = useState([]);
  const [vendors, setVendors] = useState([]);
  const [vehiclesLoading, setVehiclesLoading] = useState(false);
  const [vendorsLoading, setVendorsLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setVehiclesLoading(true);
      const response = await vehicleApi.getVehicles();
      if (response?.success) setVehicles(response.data || []);
      setVehiclesLoading(false);
    })();

    (async () => {
      setVendorsLoading(true);
      const response = await vendorApi.getVendors();
      if (response?.success) setVendors(response.data || []);
      setVendorsLoading(false);
    })();
  }, []);

  const handleValidatedSubmit = useCallback(
    (values) => {
      const validationErrors = validate(inspectionSchema, values);
      setErrors(validationErrors);

      if (!hasErrors(validationErrors)) {
        onSubmit?.(sanitizeNumericFields(values, ['cost', 'odometerKM']));
      }
    },
    [onSubmit],
  );

  return (
    <AppForm
      initialValues={initialValues}
      onSubmit={handleValidatedSubmit}
      noValidate
    >
      {({ values, handleChange, setFieldValue, resetForm }) => (
        <Stack spacing={4}>
          <InspectionGeneralSection
            values={values}
            errors={errors}
            setFieldValue={setFieldValue}
            vehicles={vehicles}
            vehiclesLoading={vehiclesLoading}
            vendors={vendors}
            vendorsLoading={vendorsLoading}
          />

          <InspectionDetailsSection
            values={values}
            errors={errors}
            onChange={handleChange}
            vehicles={vehicles}
          />

          <AppFormActions align="flex-end" spacing={2} divider>
            <AppButton
              variant="outlined"
              onClick={() => {
                resetForm();
                setErrors({});
              }}
            >
              انصراف
            </AppButton>

            <AppButton type="submit" variant="contained">
              ذخیره
            </AppButton>
          </AppFormActions>
        </Stack>
      )}
    </AppForm>
  );
};

export default memo(InspectionForm);
