import React, { memo, useCallback, useEffect, useState } from 'react';

import { Box } from '@mui/material';

import { AppFormPropTypes, AppFormDefaultProps } from './AppForm.types';

const AppForm = ({
  children,
  initialValues,
  onSubmit,
  spacing,
  noValidate,
}) => {
  const setFieldValue = useCallback((name, value) => {
    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  }, []);

  const resetForm = useCallback(() => {
    setValues(initialValues);
  }, [initialValues]);
  const [values, setValues] = useState(initialValues);

  useEffect(() => {
    setValues(initialValues);
  }, [initialValues]);

  const handleChange = useCallback((event) => {
    const { name, value } = event.target;

    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  }, []);

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();
      console.log('AppForm submit');
      console.log(values);
      onSubmit?.(values);
    },
    [onSubmit, values],
  );

  return (
    <Box component="form" onSubmit={handleSubmit} noValidate={noValidate}>
      <Box display="flex" flexDirection="column" gap={spacing}>
        {typeof children === 'function'
          ? children({
              values,
              handleChange,
              setFieldValue,
              resetForm,
            })
          : children}
      </Box>
    </Box>
  );
};

AppForm.propTypes = AppFormPropTypes;

AppForm.defaultProps = {
  ...AppFormDefaultProps,
  initialValues: {},
};

export default memo(AppForm);
