import { decryptAES, encryptAES } from 'src/utils/tools';
import {
  FETCH_AUTHENTICATION,
  CHECK_PASSWORD,
  setUserAuth,
  resetPassword,
} from '../actions/login';
import { setSnackbar } from '../actions/home';


const loginMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_AUTHENTICATION: {
      const token = sessionStorage.getItem('token');
      if (token && decryptAES(token, process.env.API_KEY, token) === process.env.PIN) {
        store.dispatch(setUserAuth());
      }

      next(action);
      break;
    }

    case CHECK_PASSWORD: {
      const { password } = store.getState().login;
      // Password verification
      let pin = '';
      // eslint-disable-next-line no-return-assign
      password.map((i) => pin += i);

      if (pin === process.env.PIN) {
        const token = encryptAES(pin, process.env.API_KEY);
        sessionStorage.setItem('token', token);
        store.dispatch(setUserAuth());
      }
      else if (pin.length === 4) {
        store.dispatch(resetPassword());
        store.dispatch(setSnackbar('error', 'Code d\'accès incorrect'));
      }

      next(action);
      break;
    }

    default:
      next(action);
  }
};

export default loginMiddleware;
