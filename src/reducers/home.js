import {
  SET_SNACKBAR,
  RESET_SNACKBAR,
  SET_STATUS,
  SET_OUTPUTS_DEFAULT,
  SET_NOTIFICATIONS_STATUS,
} from '../actions/home';

const initialState = {
  // device
  status: {},
  outputs: {},
  // Display SnackBar
  snackbar: false,
  snackbarType: '',
  snackbarMessage: '',
  // Status Icons
  iconStatus: false,
  notificationsStatus: false,
};

const homeReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_SNACKBAR:
      return {
        ...state,
        snackbar: true,
        snackbarType: action.severity,
        snackbarMessage: action.message,
      };

    case RESET_SNACKBAR:
      return {
        ...state,
        snackbar: false,
        snackbarMessage: '',
      };

    case SET_STATUS:
      return {
        ...state,
        status: action.value,
        iconStatus: true,
      };

    case SET_OUTPUTS_DEFAULT:
      return {
        ...state,
        outputs: action.value,
      };

    case SET_NOTIFICATIONS_STATUS:
      return {
        ...state,
        notificationsStatus: action.value,
      };

    default: return state;
  }
};

export default homeReducer;
