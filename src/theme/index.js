import { createTheme } from '@mui/material/styles';

import colors from './colors';
import typography from './typography';
import spacing from './spacing';
import shadows from './shadows';
import radius from './radius';
import components from './components';

const theme = createTheme({
  palette: colors,
  typography,
  spacing,
  shadows,

  shape: {
    borderRadius: radius.md,
  },

  components,
});

export default theme;
