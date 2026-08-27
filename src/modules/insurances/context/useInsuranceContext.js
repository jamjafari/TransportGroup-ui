import { useContext } from 'react';
import InsuranceContext from './InsuranceContext';

const useInsuranceContext = () => {
  const context = useContext(InsuranceContext);

  if (!context) {
    throw new Error(
      'useInsuranceContext must be used inside InsuranceProvider.',
    );
  }

  return context;
};

export default useInsuranceContext;
