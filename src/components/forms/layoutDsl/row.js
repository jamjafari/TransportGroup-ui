import { LAYOUT_TYPES } from '../layout/layoutTypes';

export const row = (children = [], props = {}) => ({
  type: LAYOUT_TYPES.ROW,

  children,

  ...props,
});

export default row;
