import radius from './radius';
import shadows from './shadows';

// ✅ رنگ‌ها از tokens.js می‌آیند، نه به‌صورت ثابت در همین فایل.
// الگوی (theme.vars || theme).palette باعث می‌شود مقدار به CSS Variable تبدیل شود
// و با تغییر حالت روشن/تیره بدون رندر دوباره‌ی کامپوننت‌ها عوض شود.
const palette = (theme) => (theme.vars || theme).palette;

// نکته: برای body نیازی به override نیست — خودِ CssBaseline رنگ پس‌زمینه و متن را
// از background.default و text.primary می‌خواند و با تغییر حالت خودکار عوض می‌شود.
const components = {
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
      paper: ({ theme }) => ({
        backgroundColor: palette(theme).sidebar.main,

        color: palette(theme).sidebar.text,

        borderRight: 'none',
      }),
    },
  },

  MuiAppBar: {
    styleOverrides: {
      root: ({ theme }) => ({
        backgroundColor: palette(theme).surface.header,

        color: palette(theme).surface.headerText,

        boxShadow: 'none',
      }),
    },
  },

  MuiListItemButton: {
    styleOverrides: {
      root: ({ theme }) => ({
        borderRadius: 10,

        marginBottom: 4,

        '&.Mui-selected': {
          backgroundColor: palette(theme).sidebar.active,

          color: palette(theme).sidebar.text,
        },

        '&:hover': {
          backgroundColor: palette(theme).sidebar.hover,
        },
      }),
    },
  },

  MuiDivider: {
    styleOverrides: {
      root: ({ theme }) => ({
        borderColor: palette(theme).divider,
      }),
    },
  },
};

export default components;
