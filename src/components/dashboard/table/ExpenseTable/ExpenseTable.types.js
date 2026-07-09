import PropTypes from 'prop-types';

export const ExpenseTablePropTypes = {
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export const ExpenseTableDefaultProps = {
  height: 450,
};
