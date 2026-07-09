import PropTypes from 'prop-types';

export const AppPaginationPropTypes = {
  page: PropTypes.number.isRequired,

  pageSize: PropTypes.number.isRequired,

  totalCount: PropTypes.number.isRequired,

  pageSizeOptions: PropTypes.array,

  onPageChange: PropTypes.func.isRequired,

  onPageSizeChange: PropTypes.func.isRequired,
};
