import PropTypes from 'prop-types';

export const DashboardErrorPropTypes = {
  title: PropTypes.string,

  description: PropTypes.string,

  onRetry: PropTypes.func,
};

export const DashboardErrorDefaultProps = {
  title: 'خطا در دریافت اطلاعات',

  description: 'امکان دریافت اطلاعات وجود ندارد.',

  onRetry: null,
};
