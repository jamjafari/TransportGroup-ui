import React from 'react';

import { FormProvider, useForm } from 'react-hook-form';

const RHFProvider = ({
  children,
  defaultValues,
  resolver,
  mode = 'onChange',
}) => {
  const methods = useForm({
    defaultValues,

    resolver,

    mode,
  });

  return <FormProvider {...methods}>{children}</FormProvider>;
};

export default RHFProvider;
