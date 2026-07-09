import { LAYOUT_TYPES } from '../layout/layoutTypes';

export const grid = (fields = [], props = {}) => ({
  type: LAYOUT_TYPES.GRID,

  fields,

  spacing: 2,

  ...props,
});

export default grid;
