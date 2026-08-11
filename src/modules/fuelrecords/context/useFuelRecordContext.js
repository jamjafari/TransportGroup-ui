import { useContext } from 'react';
import FuelRecordContext from './FuelRecordContext';

const useFuelRecordContext = () => {
  const context = useContext(FuelRecordContext);

  if (!context) {
    throw new Error(
      'useFuelRecordContext must be used inside FuelRecordProvider.',
    );
  }

  return context;
};

export default useFuelRecordContext;
