import React, { memo } from 'react';

import { Stepper, Step, StepLabel } from '@mui/material';

import useWizard from '../../useWizard';

const WizardHeader = () => {
  const { steps, currentStep } = useWizard();

  return (
    <Stepper activeStep={currentStep} sx={{ mb: 4 }}>
      {steps.map((step, index) => (
        <Step key={step.id ?? index}>
          <StepLabel>{step.title}</StepLabel>
        </Step>
      ))}
    </Stepper>
  );
};

export default memo(WizardHeader);
