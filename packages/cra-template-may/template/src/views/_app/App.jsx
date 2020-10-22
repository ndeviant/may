import React, { useMemo } from 'react';
import { create } from 'jss';
import {
  StylesProvider,
  jssPreset,
  ThemeProvider,
} from '@material-ui/core/styles';
import { SnackbarProvider } from 'notistack';

import { configureAxios } from 'helpers/axios';
import createTheme from 'styles/theme';
import { useGlobalStyles } from 'styles/global';
import 'styles/vendor/reset.css';

import Routes from './Routes/Routes';

const jss = create({
  ...jssPreset(),
  insertionPoint: document.getElementById('jss-insertion-point'),
});

configureAxios();

function App() {
  useGlobalStyles();

  const theme = useMemo(() => {
    return createTheme();
  }, []);

  return (
    <StylesProvider jss={jss}>
      <ThemeProvider theme={theme}>
        <SnackbarProvider maxSnack={3}>
          <Routes />
        </SnackbarProvider>
      </ThemeProvider>
    </StylesProvider>
  );
}

export default App;
