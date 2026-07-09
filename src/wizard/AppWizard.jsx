import React from 'react';

import FormBuilder from '@/components/forms/builder/FormBuilder';

import WizardProvider from './WizardProvider';

import WizardHeader from './components/WizardHeader/WizardHeader';
import WizardBody from './components/WizardBody/WizardBody';
import WizardFooter from './components/WizardFooter/WizardFooter';

const AppWizard = ({
  steps,
  initialStep = 0,

  defaultValues,
  resolver,

  onSubmit,
}) => {
  return (
    <WizardProvider steps={steps} initialStep={initialStep}>
      <FormBuilder
        standalone
        schema={{ fields: [] }}
        defaultValues={defaultValues}
        resolver={resolver}
        onSubmit={onSubmit}
      >
        <WizardHeader />

        <WizardBody />

        <WizardFooter />
      </FormBuilder>
    </WizardProvider>
  );
};

export default AppWizard;
