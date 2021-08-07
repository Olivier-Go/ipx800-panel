// action types
export const SET_SNACKBAR = 'SET_SNACKBAR';
export const RESET_SNACKBAR = 'RESET_SNACKBAR';
export const FETCH_STATUS = 'FETCH_STATUS';
export const FETCH_OUTPUTS = 'FETCH_OUTPUTS';
export const SET_STATUS = 'SET_STATUS';
export const SET_OUTPUTS_DEFAULT = 'SET_OUTPUTS_DEFAULT';
export const SET_OUTPUT = 'SET_OUTPUT';
export const SET_NOTIFICATIONS_STATUS = 'SET_NOTIFICATIONS_STATUS';
export const SET_NOTIFICATIONS_STATUS_LOADER = 'SET_NOTIFICATIONS_STATUS_LOADER';
export const SET_ALARM_LOADER_PROGRESS = 'SET_ALARM_LOADER_PROGRESS';

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

export const setNotificationsStatus = (value) => ({
  type: SET_NOTIFICATIONS_STATUS,
  value,
});

export const setNotificationsStatusLoader = (value) => ({
  type: SET_NOTIFICATIONS_STATUS_LOADER,
  value,
});

export const setAlarmLoaderProgress = (value) => ({
  type: SET_ALARM_LOADER_PROGRESS,
  value,
});
