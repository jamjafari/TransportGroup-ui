import { createContext } from 'react';

const WizardContext = createContext({
  steps: [],

  currentStep: 0,

  current: null,

  isFirst: true,

  isLast: false,

  next: () => {},

  previous: () => {},

  goTo: () => {},

  setCurrentStep: () => {},
});

WizardContext.displayName = 'WizardContext';

export default WizardContext;
