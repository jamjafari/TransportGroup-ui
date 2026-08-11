import createCache from '@emotion/cache';
import { prefixer } from 'stylis';

const ltrCache = createCache({
  key: 'muiltr',
  stylisPlugins: [prefixer], // بدون rtlPlugin
});

export default ltrCache;
