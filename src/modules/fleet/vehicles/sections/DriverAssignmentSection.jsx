import React, { memo, useEffect, useState } from 'react';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';

import {
  AppFormSection,
  AppSelectform,
  AppJalaliDatePicker,
  AppButton,
  AppTextField,
} from '@/components';
import { formatJalaliDate } from '@/utils';
import { validate, hasErrors } from '@/validation';

import useDriver from '../../../drivers/hooks/useDriver';
import useVehicleAssignments from '../hooks/useVehicleAssignments';

const emptyDraft = {
  driverId: '',
  fromDate: null,
  description: '',
};

const DriverAssignmentSection = ({ vehicleId }) => {
  const { drivers, getDrivers } = useDriver();
  const { assignments, loadAssignments, createAssignment, finishAssignment } =
    useVehicleAssignments();

  const [draft, setDraft] = useState(emptyDraft);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    getDrivers();
  }, [getDrivers]);

  useEffect(() => {
    if (vehicleId) loadAssignments(vehicleId);
  }, [vehicleId, loadAssignments]);

  const driverOptions = drivers.map((d) => ({
    value: d.id,
    label: `${d.firstName} ${d.lastName} (${d.personnelCode})`,
  }));

  const handleAssign = async () => {
    const validationErrors = validate(
      {
        driverId: [(v) => (v ? null : 'انتخاب راننده الزامی است')],
        fromDate: [(v) => (v ? null : 'تاریخ شروع الزامی است')],
      },
      draft,
    );

    setErrors(validationErrors);
    if (hasErrors(validationErrors)) return;

    setSubmitting(true);

    try {
      await createAssignment({ ...draft, vehicleId });
      setDraft(emptyDraft);
      setErrors({});
      await loadAssignments(vehicleId);
    } catch (error) {
      setErrors({ driverId: error.message });
    } finally {
      setSubmitting(false);
    }
  };

  const handleFinish = async (id) => {
    await finishAssignment(id);
    await loadAssignments(vehicleId);
  };

  const currentAssignment = assignments.find((a) => a.isActive);
  const historyAssignments = assignments.filter((a) => !a.isActive);

  return (
    <AppFormSection title="راننده‌ی خودرو" divider>
      {!currentAssignment && (
        <Grid container spacing={2} alignItems="flex-end">
          <Grid size={{ xs: 12, md: 5 }}>
            <AppSelectform
              fullWidth
              label="راننده"
              value={draft.driverId}
              options={driverOptions}
              onChange={(value) =>
                setDraft((prev) => ({ ...prev, driverId: value }))
              }
              error={!!errors.driverId}
              helperText={errors.driverId}
            />
          </Grid>

          <Grid size={{ xs: 12, md: 3 }}>
            <AppJalaliDatePicker
              label="تاریخ شروع"
              value={draft.fromDate}
              onChange={(value) =>
                setDraft((prev) => ({ ...prev, fromDate: value }))
              }
              error={!!errors.fromDate}
              helperText={errors.fromDate}
            />
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <AppTextField
              fullWidth
              label="توضیحات"
              value={draft.description}
              onChange={(e) =>
                setDraft((prev) => ({ ...prev, description: e.target.value }))
              }
            />
          </Grid>
        </Grid>
      )}

      {!currentAssignment && (
        <Box mt={2}>
          <AppButton onClick={handleAssign} disabled={submitting}>
            تخصیص راننده
          </AppButton>
        </Box>
      )}

      <Box mt={3}>
        <Typography variant="subtitle2" mb={1}>
          راننده‌ی فعلی
        </Typography>

        {currentAssignment ? (
          <List>
            <ListItem
              secondaryAction={
                <AppButton
                  size="small"
                  color="warning"
                  onClick={() => handleFinish(currentAssignment.id)}
                >
                  پایان تخصیص
                </AppButton>
              }
            >
              <ListItemText
                primary={currentAssignment.driverName}
                secondary={`از تاریخ ${formatJalaliDate(currentAssignment.fromDate)}`}
              />
            </ListItem>
          </List>
        ) : (
          <Typography variant="body2" color="text.secondary">
            راننده‌ای به این خودرو تخصیص داده نشده است.
          </Typography>
        )}

        {historyAssignments.length > 0 && (
          <>
            <Typography variant="subtitle2" mt={2} mb={1}>
              تاریخچه
            </Typography>

            <List>
              {historyAssignments.map((a) => (
                <ListItem key={a.id}>
                  <ListItemText
                    primary={a.driverName}
                    secondary={`از ${formatJalaliDate(a.fromDate)} تا ${formatJalaliDate(a.toDate)}`}
                  />
                </ListItem>
              ))}
            </List>
          </>
        )}
      </Box>
    </AppFormSection>
  );
};

export default memo(DriverAssignmentSection);
