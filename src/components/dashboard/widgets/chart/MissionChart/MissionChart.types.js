import PropTypes from 'prop-types';

export const MissionChartPropTypes = {
  title: PropTypes.string,

  subtitle: PropTypes.string,

  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export const MissionChartDefaultProps = {
  title: 'مأموریت‌ها',

  subtitle: '30 روز اخیر',

  height: 320,
};
