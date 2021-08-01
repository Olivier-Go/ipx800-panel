import { CHECK_PASSWORD, setUserAuth, resetPassword } from '../actions/login';
import { setSnackbar } from '../actions/home';


const loginMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case CHECK_PASSWORD: {
      const { password } = store.getState().login;
      // Password verification
      let pin = '';
      // eslint-disable-next-line no-return-assign
      password.map((i) => pin += i);

      if (pin === process.env.PIN) {
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
