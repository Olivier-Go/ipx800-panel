import axios from 'axios';
import { decryptAES, xmlToJson } from 'src/utils/tools';
import {
  FETCH_STATUS,
  FETCH_OUTPUTS,
  setSnackbar,
  setStatus,
  setOutputsDefault,
} from '../actions/home';

const auth = decryptAES(process.env.API_CIPHERTEXT, process.env.API_KEY);

const HomeMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_STATUS: {
      axios({
        method: 'get',
        url: `${process.env.API_URL}/globalstatus.xml`,
        auth: {
          username: auth.split(':')[0],
          password: auth.split(':')[1],
        },
      })
        .then((response) => {
          const json = xmlToJson(response.data);
          if (json.response) store.dispatch(setStatus(json.response));
        })
        .catch((error) => {
          // eslint-disable-next-line no-console
          console.warn(error);
          store.dispatch(setSnackbar('error', 'Echec de la connexion à l\'appareil'));
        })
        .finally(() => {
        });

      next(action);
      break;
    }

    case FETCH_OUTPUTS: {
      axios({
        method: 'get',
        url: `${process.env.API_URL}/api/xdevices.json?cmd=20`,
        auth: {
          username: auth.split(':')[0],
          password: auth.split(':')[1],
        },
      })
        .then((response) => {
          store.dispatch(setOutputsDefault(response.data));
        })
        .catch((error) => {
          // eslint-disable-next-line no-console
          console.warn(error);
          store.dispatch(setSnackbar('error', 'Echec de la connexion à l\'appareil'));
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
