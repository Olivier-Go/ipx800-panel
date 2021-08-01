import {
  SET_SNACKBAR,
  RESET_SNACKBAR,
  SET_CONNECTED,
} from '../actions/home';

const initialState = {
  device: '',
  // Display SnackBar
  snackbar: false,
  snackbarType: '',
  snackbarMessage: '',
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

    case SET_CONNECTED:
      return {
        ...state,
        device: action.value,
      };

    default: return state;
  }
};

export default homeReducer;
