import { useContext } from 'react';

import WizardContext from './WizardContext';

const useWizard = () => {
  const context = useContext(WizardContext);

  if (!context) {
    throw new Error('useWizard must be used within WizardProvider');
  }

  return context;
};

export default useWizard;
