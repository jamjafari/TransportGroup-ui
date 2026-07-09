import PropTypes from 'prop-types';

export const DashboardTripsPropTypes = {
  loading: PropTypes.bool,

  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,

      tripNo: PropTypes.string,

      driverName: PropTypes.string,

      vehicle: PropTypes.string,

      origin: PropTypes.string,

      destination: PropTypes.string,

      startTime: PropTypes.string,

      status: PropTypes.string,
    }),
  ),

  onRowClick: PropTypes.func,
};

export const DashboardTripsDefaultProps = {
  loading: false,

  data: [],

  onRowClick: undefined,
};
