import { ThemeProvider } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';

import theme from './index';

const AppThemeProvider = ({ children }) => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    {children}
  </ThemeProvider>
);

export default AppThemeProvider;
