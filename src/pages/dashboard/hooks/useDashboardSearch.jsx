import { useContext } from 'react';

import DashboardSearchContext from '../context/DashboardSearchContext';

const useDashboardSearch = () => {
  return useContext(DashboardSearchContext);
};

export default useDashboardSearch;
