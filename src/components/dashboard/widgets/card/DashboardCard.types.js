import PropTypes from 'prop-types';

export const InfoCardPropTypes = {
  title: PropTypes.string,

  subtitle: PropTypes.string,

  icon: PropTypes.node,

  footer: PropTypes.node,

  action: PropTypes.node,

  items: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

      label: PropTypes.string,

      value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.node,
      ]),
    }),
  ),
};

export const InfoCardDefaultProps = {
  title: '',

  subtitle: '',

  icon: null,

  footer: null,

  action: null,

  items: [],
};

export const StatusCardPropTypes = {
  title: PropTypes.string,

  subtitle: PropTypes.string,

  icon: PropTypes.node,

  status: PropTypes.string.isRequired,

  color: PropTypes.oneOf([
    'primary',

    'secondary',

    'success',

    'error',

    'warning',

    'info',
  ]),

  description: PropTypes.string,

  footer: PropTypes.node,

  action: PropTypes.node,
};

export const StatusCardDefaultProps = {
  title: '',

  subtitle: '',

  icon: null,

  color: 'primary',

  description: '',

  footer: null,

  action: null,
};

export const ActionCardPropTypes = {
  title: PropTypes.string,

  subtitle: PropTypes.string,

  icon: PropTypes.node,

  description: PropTypes.string,

  actions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,

      label: PropTypes.string.isRequired,

      icon: PropTypes.node,

      color: PropTypes.string,

      variant: PropTypes.string,

      onClick: PropTypes.func,
    }),
  ),
};

export const ActionCardDefaultProps = {
  title: '',

  subtitle: '',

  icon: null,

  description: '',

  actions: [],
};

export const ChartCardPropTypes = {
  title: PropTypes.string,

  subtitle: PropTypes.string,

  icon: PropTypes.node,

  action: PropTypes.node,

  footer: PropTypes.node,

  chart: PropTypes.node.isRequired,

  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export const ChartCardDefaultProps = {
  title: '',

  subtitle: '',

  icon: null,

  action: null,

  footer: null,

  height: 300,
};

export const TableCardPropTypes = {
  title: PropTypes.string,

  subtitle: PropTypes.string,

  icon: PropTypes.node,

  action: PropTypes.node,

  footer: PropTypes.node,

  children: PropTypes.node,

  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export const TableCardDefaultProps = {
  title: '',

  subtitle: '',

  icon: null,

  action: null,

  footer: null,

  children: null,

  height: 420,
};
export const AlertCardPropTypes = {
  title: PropTypes.string,

  subtitle: PropTypes.string,

  icon: PropTypes.node,

  footer: PropTypes.node,

  action: PropTypes.node,

  alerts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,

      title: PropTypes.string,

      message: PropTypes.string.isRequired,

      severity: PropTypes.oneOf(['success', 'info', 'warning', 'error']),
    }),
  ),
};

export const AlertCardDefaultProps = {
  title: '',

  subtitle: '',

  icon: null,

  footer: null,

  action: null,

  alerts: [],
};
