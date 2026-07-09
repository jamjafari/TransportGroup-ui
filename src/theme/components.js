import colors from './colors';
import radius from './radius';
import shadows from './shadows';

const components = {
  MuiCssBaseline: {
    styleOverrides: {
      body: {
        backgroundColor: colors.background,

        color: colors.textPrimary,
      },
    },
  },

  MuiPaper: {
    styleOverrides: {
      root: {
        borderRadius: radius.lg,

        boxShadow: shadows.card,
      },
    },
  },

  MuiCard: {
    styleOverrides: {
      root: {
        borderRadius: radius.lg,

        boxShadow: shadows.card,
      },
    },
  },

  MuiButton: {
    defaultProps: {
      disableElevation: true,
    },

    styleOverrides: {
      root: {
        borderRadius: radius.md,

        textTransform: 'none',

        fontWeight: 600,

        height: 44,
      },
    },
  },

  MuiOutlinedInput: {
    styleOverrides: {
      root: {
        borderRadius: radius.md,
      },
    },
  },

  MuiTextField: {
    defaultProps: {
      fullWidth: true,

      variant: 'outlined',

      size: 'medium',
    },
  },

  MuiDrawer: {
    styleOverrides: {
      paper: {
        backgroundColor: colors.sidebar,

        color: '#ffffff',

        borderRight: 'none',
      },
    },
  },

  MuiAppBar: {
    styleOverrides: {
      root: {
        backgroundColor: '#ffffff',

        color: colors.textPrimary,

        boxShadow: '0 2px 6px rgba(0,0,0,.06)',
      },
    },
  },

  MuiListItemButton: {
    styleOverrides: {
      root: {
        borderRadius: 10,

        marginBottom: 4,

        '&.Mui-selected': {
          backgroundColor: colors.sidebarActive,

          color: '#ffffff',
        },

        '&:hover': {
          backgroundColor: colors.sidebarHover,
        },
      },
    },
  },

  MuiDivider: {
    styleOverrides: {
      root: {
        borderColor: colors.border,
      },
    },
  },
};

export default components;
