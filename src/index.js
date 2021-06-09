import React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';

import App from './App';
import Theme from './theme';

ReactDOM.render(
  <ThemeProvider theme={ Theme }>
    <CssBaseline />
    <App />
  </ThemeProvider>,

  document.getElementById('root')

);
