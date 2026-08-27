// context/useInspectionContext.js
import { useContext } from 'react';
import InspectionContext from './InspectionContext';

const useInspectionContext = () => {
  const context = useContext(InspectionContext);
  if (!context)
    throw new Error(
      'useInspectionContext must be used inside InspectionProvider.',
    );
  return context;
};

export default useInspectionContext;
