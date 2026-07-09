import { LAYOUT_TYPES } from '../layout/layoutTypes';

export const group = (title, children = [], props = {}) => ({
  type: LAYOUT_TYPES.GROUP,

  title,

  children,

  ...props,
});

export default group;
