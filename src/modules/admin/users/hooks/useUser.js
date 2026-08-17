import { useCallback } from 'react';

import { useUserContext } from '../context';
import * as userApi from '../api/userApi';

const unwrap = (response) => {
  if (!response.success) {
    throw new Error(response.errors?.[0] || 'خطا در ارتباط با سرور');
  }
  return response.data;
};

const useUser = () => {
  const {
    users,
    setUsers,
    selectedUser,
    setSelectedUser,
    loading,
    setLoading,
    filters,
    setFilters,
  } = useUserContext();

  const getUsers = useCallback(async () => {
    try {
      setLoading(true);
      const response = await userApi.getUsers(filters);
      const data = unwrap(response);
      setUsers(data);
      return data;
    } finally {
      setLoading(false);
    }
  }, [filters, setLoading, setUsers]);

  const getUserById = useCallback(
    async (id) => {
      try {
        setLoading(true);
        const response = await userApi.getUserById(id);
        const data = unwrap(response);
        setSelectedUser(data);
        return data;
      } finally {
        setLoading(false);
      }
    },
    [setLoading, setSelectedUser],
  );

  const createUser = useCallback(
    async (user) => {
      try {
        setLoading(true);
        const response = await userApi.createUser(user);
        return unwrap(response);
      } finally {
        setLoading(false);
      }
    },
    [setLoading],
  );

  const updateUser = useCallback(
    async (user) => {
      try {
        setLoading(true);
        const response = await userApi.updateUser(user);
        return unwrap(response);
      } finally {
        setLoading(false);
      }
    },
    [setLoading],
  );

  const deleteUser = useCallback(
    async (id) => {
      try {
        setLoading(true);
        const response = await userApi.deleteUser(id);
        return unwrap(response);
      } finally {
        setLoading(false);
      }
    },
    [setLoading],
  );

  const resetPassword = useCallback(async (payload) => {
    const response = await userApi.resetPassword(payload);
    return unwrap(response);
  }, []);

  return {
    users,
    selectedUser,
    loading,
    filters,
    setFilters,
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    resetPassword,
  };
};

export default useUser;
