import { useContext } from 'react';
import TireContext from './TireContext';

const useTireContext = () => {
  const context = useContext(TireContext);

  if (!context) {
    throw new Error('useDriverContext must be used inside TireProvider.');
  }

  return context;
};

export default useTireContext;
