// action types
export const SET_SNACKBAR = 'SET_SNACKBAR';
export const RESET_SNACKBAR = 'RESET_SNACKBAR';
export const FETCH_STATUS = 'FETCH_STATUS';
export const FETCH_OUTPUTS = 'FETCH_OUTPUTS';
export const SET_STATUS = 'SET_STATUS';
export const SET_OUTPUTS_DEFAULT = 'SET_OUTPUTS_DEFAULT';
export const SET_OUTPUT = 'SET_OUTPUT';
export const SET_NOTIFICATIONS_LABEL = 'SET_NOTIFICATIONS_LABEL';

// action creators
export const setSnackbar = (severity, message) => ({
  type: SET_SNACKBAR,
  severity,
  message,
});

export const resetSnackbar = () => ({
  type: RESET_SNACKBAR,
});

export const fetchStatus = () => ({
  type: FETCH_STATUS,
});

export const fetchOutputs = () => ({
  type: FETCH_OUTPUTS,
});

export const setStatus = (value) => ({
  type: SET_STATUS,
  value,
});

export const setOutputsDefault = (value) => ({
  type: SET_OUTPUTS_DEFAULT,
  value,
});

export const setOutput = (value) => ({
  type: SET_OUTPUT,
  value,
});

export const setNotificationsLabel = (value) => ({
  type: SET_NOTIFICATIONS_LABEL,
  value,
});
