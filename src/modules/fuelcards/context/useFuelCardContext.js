import { useContext } from 'react';
import FuelCardContext from './FuelCardContext';

const useFuelCardContext = () => {
  const context = useContext(FuelCardContext);

  if (!context) {
    throw new Error('useFuelCardContext must be used inside FuelCardProvider.');
  }

  return context;
};

export default useFuelCardContext;
