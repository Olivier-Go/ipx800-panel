// action types
export const SET_SNACKBAR = 'SET_SNACKBAR';
export const RESET_SNACKBAR = 'RESET_SNACKBAR';
export const FETCH_CONNECTION = 'FETCH_CONNECTION';
export const SET_CONNECTED = 'SET_CONNECTED';

// action creators
export const setSnackbar = (severity, message) => ({
  type: SET_SNACKBAR,
  severity,
  message,
});

export const resetSnackbar = () => ({
  type: RESET_SNACKBAR,
});

export const fetchConnection = () => ({
  type: FETCH_CONNECTION,
});

export const setConnected = (value) => ({
  type: SET_CONNECTED,
  value,
});
