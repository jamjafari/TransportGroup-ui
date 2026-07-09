import React, { memo } from 'react';

import { Stepper, Step, StepLabel, Box } from '@mui/material';

import {
  AppStepperPropTypes,
  AppStepperDefaultProps,
} from './AppStepper.types';

const AppStepper = ({
  activeStep,

  steps,

  orientation,

  alternativeLabel,

  sx,
}) => {
  return (
    <Box sx={sx}>
      <Stepper
        activeStep={activeStep}

        orientation={orientation}

        alternativeLabel={alternativeLabel}
      >
        {steps.map((step) => (
          <Step
            key={step.id}

            completed={step.completed}

            disabled={step.disabled}
          >
            <StepLabel>{step.label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
};

AppStepper.propTypes = AppStepperPropTypes;

AppStepper.defaultProps = AppStepperDefaultProps;

export default memo(AppStepper);
