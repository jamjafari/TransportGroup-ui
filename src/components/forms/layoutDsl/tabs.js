import { LAYOUT_TYPES } from '../layout/layoutTypes';

export const tabs = (tabs = [], props = {}) => ({
  type: LAYOUT_TYPES.TABS,

  tabs,

  ...props,
});

export default tabs;
