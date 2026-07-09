import { LAYOUT_TYPES } from '../layout/layoutTypes';

export const column = (children = [], props = {}) => ({
  type: LAYOUT_TYPES.COLUMN,

  children,

  ...props,
});

export default column;
