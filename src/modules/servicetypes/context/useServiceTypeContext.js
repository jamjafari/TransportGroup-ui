import { useContext } from 'react';
import ServiceTypeContext from './ServiceTypeContext';

const useServiceTypeContext = () => {
  const context = useContext(ServiceTypeContext);

  if (!context) {
    throw new Error(
      'useServiceTypeContext must be used inside ServiceTypeProvider.',
    );
  }

  return context;
};

export default useServiceTypeContext;
