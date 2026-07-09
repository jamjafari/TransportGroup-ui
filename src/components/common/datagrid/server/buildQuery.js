export const buildQuery = ({
  page,
  pageSize,
  sortField,
  sortDirection,
  filters = [],
  search,
}) => {
  const query = {};

  query.page = page;

  query.pageSize = pageSize;

  if (sortField) {
    query.sort = {
      field: sortField,

      direction: sortDirection,
    };
  }

  if (search) {
    query.search = search;
  }

  if (filters.length) {
    query.filters = filters;
  }

  return query;
};
