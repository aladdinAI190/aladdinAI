import '../styles/globals.css';
import { createTheme, ThemeProvider, StyledEngineProvider } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: [
      'Montserrat',
      'sans-serif',
    ].join(','),
  },
});

export default function App({ Component, pageProps }) {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </StyledEngineProvider>
  );
}
