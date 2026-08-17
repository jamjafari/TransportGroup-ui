import { useContext } from 'react';
import MissionContext from './MissionContext';

const useMissionContext = () => {
  const context = useContext(MissionContext);

  if (!context) {
    throw new Error('useMissionContext must be used inside MissionProvider.');
  }

  return context;
};

export default useMissionContext;
