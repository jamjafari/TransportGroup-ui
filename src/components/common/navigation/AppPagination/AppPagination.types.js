import PropTypes from 'prop-types';

export const AppPaginationPropTypes = {
  page: PropTypes.number,

  pageSize: PropTypes.number,

  total: PropTypes.number,

  pageSizeOptions: PropTypes.arrayOf(PropTypes.number),

  onPageChange: PropTypes.func,

  onPageSizeChange: PropTypes.func,
};

export const AppPaginationDefaultProps = {
  page: 1,

  pageSize: 10,

  total: 0,

  pageSizeOptions: [
    10,

    25,

    50,

    100,
  ],

  onPageChange: () => {},

  onPageSizeChange: () => {},
};
