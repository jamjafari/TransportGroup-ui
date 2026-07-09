import { useCallback, useEffect, useReducer } from 'react';

import { buildQuery } from './buildQuery';

import { syncAdapter } from './syncAdapter';

import { serverStateReducer } from './serverStateReducer';

const initialState = {
  rows: [],

  totalCount: 0,

  loading: false,

  error: null,
};

const useServerDataGrid = ({
  endpoint,
  page,
  pageSize,
  sortField,
  sortDirection,
  filters,
  search,
}) => {
  const [state, dispatch] = useReducer(serverStateReducer, initialState);

  const fetchData = useCallback(async () => {
    dispatch({
      type: 'SET_LOADING',
      payload: true,
    });

    try {
      const query = buildQuery({
        page,
        pageSize,
        sortField,
        sortDirection,
        filters,
        search,
      });

      const data = await syncAdapter({
        endpoint,
        query,
      });

      dispatch({
        type: 'SET_DATA',
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: 'SET_ERROR',
        payload: error,
      });
    }
  }, [endpoint, page, pageSize, sortField, sortDirection, filters, search]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return {
    ...state,

    refetch: fetchData,
  };
};

export default useServerDataGrid;
