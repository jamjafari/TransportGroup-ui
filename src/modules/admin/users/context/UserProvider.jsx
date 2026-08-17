// context/UserProvider.jsx
import { useMemo, useState } from 'react';
import UserContext from './UserContext';

const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [filters, setFilters] = useState({ search: '' });

  const value = useMemo(
    () => ({
      users,
      setUsers,
      selectedUser,
      setSelectedUser,
      loading,
      setLoading,
      filters,
      setFilters,
    }),
    [users, selectedUser, loading, filters],
  );

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export default UserProvider;
