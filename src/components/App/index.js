// == Import npm
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';

// == Import components
import { CssBaseline, Container } from '@material-ui/core';
import Header from '../../containers/Header';
import Pages from '../../containers/Pages';
import Footer from '../../containers/Footer';

// == Import styles
import appTheme from './appTheme';
import appStyles from './appStyles';

// == Composant
const App = () => {
  const classes = appStyles();
  const { pathname } = useLocation();
  const auth = pathname !== '/login';

  useEffect(() => {

  }, []);

  return (
    <ThemeProvider theme={appTheme}>
      <CssBaseline />
      <Container className={classes.wrapper}>
        {auth && (
          <Header />
        )}
        <Pages />
        {auth && (
          <Footer />
        )}
      </Container>
    </ThemeProvider>
  );
};

// == Export
export default App;
