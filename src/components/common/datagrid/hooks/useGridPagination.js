import { useState, useMemo, useCallback } from 'react';

const useGridPagination = (
  rows = [],

  initialPage = 1,

  initialPageSize = 10,
) => {
  const [page, setPage] = useState(initialPage);

  const [pageSize, setPageSizeState] = useState(initialPageSize);

  const totalCount = rows.length;

  const totalPages = Math.max(
    1,

    Math.ceil(totalCount / pageSize),
  );

  const currentPage = Math.min(
    page,

    totalPages,
  );

  const pagedRows = useMemo(() => {
    const start = (currentPage - 1) * pageSize;

    const end = start + pageSize;

    return rows.slice(
      start,

      end,
    );
  }, [rows, currentPage, pageSize]);

  const goToPage = useCallback(
    (value) => {
      setPage(
        Math.min(
          Math.max(
            value,

            1,
          ),

          totalPages,
        ),
      );
    },

    [totalPages],
  );

  const nextPage = useCallback(() => {
    setPage((previous) =>
      Math.min(
        previous + 1,

        totalPages,
      ),
    );
  }, [totalPages]);

  const previousPage = useCallback(() => {
    setPage((previous) =>
      Math.max(
        previous - 1,

        1,
      ),
    );
  }, []);

  const setPageSize = useCallback(
    (size) => {
      setPageSizeState(size);

      setPage(1);
    },

    [],
  );

  return {
    rows: pagedRows,

    page: currentPage,

    pageSize,

    totalCount,

    totalPages,

    setPage: goToPage,

    nextPage,

    previousPage,

    setPageSize,
  };
};

export default useGridPagination;
