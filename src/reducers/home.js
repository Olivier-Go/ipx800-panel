import {
  SET_SNACKBAR,
  RESET_SNACKBAR,
} from '../actions/home';

const initialState = {
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

    default: return state;
  }
};

export default homeReducer;
