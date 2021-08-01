// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
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
const App = ({ userAuth, fetchAuth }) => {
  const classes = appStyles();

  useEffect(() => {
    fetchAuth();
  }, []);

  return (
    <ThemeProvider theme={appTheme}>
      <CssBaseline />
      <Container className={classes.wrapper}>
        {userAuth && (
          <Header />
        )}
        <Pages />
        {userAuth && (
          <Footer />
        )}
      </Container>
    </ThemeProvider>
  );
};

App.propTypes = {
  userAuth: PropTypes.bool.isRequired,
  fetchAuth: PropTypes.func.isRequired,
};

// == Export
export default App;
