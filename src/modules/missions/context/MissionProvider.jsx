import { useMemo, useState } from 'react';
import MissionContext from './MissionContext';

const MissionProvider = ({ children }) => {
  const [missions, setMissions] = useState([]);
  const [selectedMission, setSelectedMission] = useState(null);
  const [loading, setLoading] = useState(false);

  const [filters, setFilters] = useState({
    search: '',
    status: null,
  });

  const value = useMemo(
    () => ({
      missions,
      setMissions,

      selectedMission,
      setSelectedMission,

      loading,
      setLoading,

      filters,
      setFilters,
    }),
    [missions, selectedMission, loading, filters],
  );

  return (
    <MissionContext.Provider value={value}>{children}</MissionContext.Provider>
  );
};

export default MissionProvider;
