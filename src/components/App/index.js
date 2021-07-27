// == Import npm
import React, { useEffect } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';

// == Import components
import { CssBaseline, Container } from '@material-ui/core';
import Header from '../../containers/Header';

// == Import styles
import appTheme from './appTheme';
import appStyles from './appStyles';

// == Composant
const App = () => {
  const classes = appStyles();

  useEffect(() => {

  }, []);

  return (
    <ThemeProvider theme={appTheme}>
      <CssBaseline />
      <Container className={classes.wrapper}>
        <Header />
      </Container>
    </ThemeProvider>
  );
};

// == Export
export default App;
