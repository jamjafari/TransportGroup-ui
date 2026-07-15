import PropTypes from 'prop-types';

export const DashboardHeaderPropTypes = {
  lastUpdate: PropTypes.string,

  loading: PropTypes.bool,

  onRefresh: PropTypes.func,

  onFilter: PropTypes.func,

  onExport: PropTypes.func,
};

export const DashboardHeaderDefaultProps = {
  lastUpdate: '',

  loading: false,

  onRefresh: () => {},

  onFilter: () => {},

  onExport: () => {},
};
