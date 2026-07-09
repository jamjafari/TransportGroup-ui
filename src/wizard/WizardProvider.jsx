import React, { useCallback, useMemo, useState } from 'react';

import WizardContext from './WizardContext';

const WizardProvider = ({ children, steps = [], initialStep = 0 }) => {
  const [currentStep, setCurrentStep] = useState(initialStep);

  const next = useCallback(() => {
    setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
  }, [steps.length]);

  const previous = useCallback(() => {
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  }, []);

  const goTo = useCallback(
    (index) => {
      if (index >= 0 && index < steps.length) {
        setCurrentStep(index);
      }
    },
    [steps.length],
  );

  const value = useMemo(
    () => ({
      steps,

      currentStep,

      current: steps[currentStep] ?? null,

      isFirst: currentStep === 0,

      isLast: currentStep === steps.length - 1,

      next,

      previous,

      goTo,
    }),
    [steps, currentStep, next, previous, goTo],
  );

  return (
    <WizardContext.Provider value={value}>{children}</WizardContext.Provider>
  );
};

export default WizardProvider;
