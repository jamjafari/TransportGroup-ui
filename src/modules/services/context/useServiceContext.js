import { useContext } from 'react';
import ServiceContext from './ServiceContext';

const useServiceContext = () => {
  const context = useContext(ServiceContext);

  if (!context) {
    throw new Error('useServiceContext must be used inside ServiceProvider.');
  }

  return context;
};

export default useServiceContext;
