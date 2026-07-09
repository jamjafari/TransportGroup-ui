import { LAYOUT_TYPES } from '../layout/layoutTypes';

export const section = (title, children = [], props = {}) => ({
  type: LAYOUT_TYPES.SECTION,

  title,

  children,

  ...props,
});

export default section;
