// context/useAccidentContext.js
import { useContext } from 'react';
import AccidentContext from './AccidentContext';

const useAccidentContext = () => {
  const context = useContext(AccidentContext);
  if (!context)
    throw new Error('useAccidentContext must be used inside AccidentProvider.');
  return context;
};

export default useAccidentContext;
