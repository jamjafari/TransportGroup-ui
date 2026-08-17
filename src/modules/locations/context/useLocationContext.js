import { useContext } from 'react';
import LocationContext from './LocationContext';

const useLocationContext = () => {
  const context = useContext(LocationContext);

  if (!context) {
    throw new Error('useLocationContext must be used inside LocationProvider.');
  }

  return context;
};

export default useLocationContext;
