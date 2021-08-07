import React from 'react';
import PropTypes from 'prop-types';
import {
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

// == Import components
import { Snackbar } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import Home from 'src/containers/Pages/Home';
import Login from 'src/containers/Pages/Login';
import PrivateRoute from './PrivateRoute';

// Snackbar Alert & transition effect
const Alert = (props) => (
  <MuiAlert elevation={6} variant="filled" {...props} />
);

const Pages = ({
  userAuth,
  snackbar,
  snackbarType,
  snackbarMessage,
  resetSnackbar,
}) => {
  const handleClose = (reason) => {
    if (reason === 'clickaway') {
      return;
    }
    resetSnackbar();
  };

  return (
    <>
      <Switch>
        <PrivateRoute
          exact
          path="/"
          component={Home}
          isAuthenticated={userAuth}
        />
        {!userAuth ? (
          <Route exact path="/login">
            <Login />
          </Route>
        ) : (
          <Redirect to="/" push />
        )}
      </Switch>
      <Snackbar
        open={snackbar}
        autoHideDuration={3500}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity={snackbarType}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </>
  );
};

Pages.propTypes = {
  userAuth: PropTypes.bool.isRequired,
  snackbar: PropTypes.bool.isRequired,
  snackbarType: PropTypes.string.isRequired,
  snackbarMessage: PropTypes.string.isRequired,
  resetSnackbar: PropTypes.func.isRequired,
};


export default Pages;
