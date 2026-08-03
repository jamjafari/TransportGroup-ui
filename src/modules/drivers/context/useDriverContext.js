import { useContext } from 'react';
import DriverContext from './DriverContext';

const useDriverContext = () => {
  const context = useContext(DriverContext);

  if (!context) {
    throw new Error('useDriverContext must be used inside DriverProvider.');
  }

  return context;
};

export default useDriverContext;
