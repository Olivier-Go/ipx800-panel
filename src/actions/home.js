// action types
export const SET_SNACKBAR = 'SET_SNACKBAR';
export const RESET_SNACKBAR = 'RESET_SNACKBAR';

// action creators
export const setSnackbar = (severity, message) => ({
  type: SET_SNACKBAR,
  severity,
  message,
});

export const resetSnackbar = () => ({
  type: RESET_SNACKBAR,
});
