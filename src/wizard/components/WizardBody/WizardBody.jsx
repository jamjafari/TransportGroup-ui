import React, { memo } from 'react';

import FormBuilder from '@/components/forms/builder/FormBuilder';

import useWizard from '../../useWizard';

const WizardBody = () => {
  const { current } = useWizard();

  if (!current) {
    return null;
  }

  return (
    <FormBuilder
      standalone={false}
      schema={current.schema}
      onSubmit={current.onSubmit}
    />
  );
};

export default memo(WizardBody);
