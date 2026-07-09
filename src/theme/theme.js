import { createTheme } from '@mui/material/styles';

import colors from './colors';
import typography from './typography';
import components from './components';

const theme = createTheme({
  palette: {
    mode: 'light',

    primary: {
      main: colors.primary,
    },

    secondary: {
      main: colors.secondary,
    },

    success: {
      main: colors.success,
    },

    warning: {
      main: colors.warning,
    },

    error: {
      main: colors.error,
    },

    info: {
      main: colors.info,
    },

    background: {
      default: colors.background,

      paper: colors.paper,
    },

    text: {
      primary: colors.textPrimary,

      secondary: colors.textSecondary,
    },
  },

  typography,

  shape: {
    borderRadius: 12,
  },

  components,
});

export default theme;
