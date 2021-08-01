import axios from 'axios';
import { decryptAES } from 'src/utils/tools';
import { FETCH_CONNECTION, setSnackbar, setConnected } from '../actions/home';


const HomeMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_CONNECTION: {
      axios({
        method: 'post',
        url: `${process.env.API_URL}/api/xdevices.json?`,
        headers: {
          Authorization: decryptAES(process.env.API_CIPHERTEXT, process.env.API_KEY),
        },
      })
        .then((response) => {
          store.dispatch(setConnected(response.data.product));
        })
        .catch((error) => {
          // eslint-disable-next-line no-console
          console.warn(error);
          store.dispatch(setSnackbar('error', 'Echec de la connexion à l\'appareil'));
          store.dispatch(setConnected());
        })
        .finally(() => {
        });

      next(action);
      break;
    }

    default:
      next(action);
  }
};

export default HomeMiddleware;
