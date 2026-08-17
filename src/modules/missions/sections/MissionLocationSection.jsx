import React, { memo, useEffect } from 'react';

import Grid from '@mui/material/Grid';
import useMissionLocation from '../hooks/useMissionLocation';

import {
  AppFormSection,
  AppSelectform,
  AppJalaliDatePicker,
  AppTextField,
  AppAutocompleteform,
} from '@/components';

const MissionLocationSection = ({
  values,
  errors,
  onChange,
  setFieldValue,
}) => {
  const {
    locations,
    loading: locationsLoading,
    getLocations,
  } = useMissionLocation();

  useEffect(() => {
    getLocations();
  }, [getLocations]);

  const locationOptions = locations.map((location) => ({
    value: location.id,
    label: location.Name,
  }));

  return (
    <AppFormSection title="مبدا و مقصد">
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 6 }}>
          <AppAutocompleteform
            fullWidth
            required
            label="مبدا "
            name="originLocationId"
            options={locations}
            loading={locationsLoading}
            value={
              locations.find(
                (location) => location.id === values.originLocationId,
              ) || null
            }
            getOptionLabel={(option) => option?.name || ''}
            isOptionEqualToValue={(option, value) => option?.id === value?.id}
            onChange={(event, value) => {
              setFieldValue('originLocationId', value?.id || null);
            }}
            error={!!errors?.originLocationId}
            helperText={errors?.originLocationId}
          />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <AppAutocompleteform
            fullWidth
            required
            label="مقصد "
            name="destinationLocationId"
            options={locations}
            loading={locationsLoading}
            value={
              locations.find(
                (location) => location.id === values.destinationLocationId,
              ) || null
            }
            getOptionLabel={(option) => option?.name || ''}
            isOptionEqualToValue={(option, value) => option?.id === value?.id}
            onChange={(event, value) => {
              setFieldValue('destinationLocationId', value?.id || null);
            }}
            error={!!errors?.destinationLocationId}
            helperText={errors?.destinationLocationId}
          />
        </Grid>
      </Grid>
    </AppFormSection>
  );
};

export default memo(MissionLocationSection);
