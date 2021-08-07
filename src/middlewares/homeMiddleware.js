import axios from 'axios';
import { decryptAES, xmlToJson } from 'src/utils/tools';
import {
  FETCH_STATUS,
  FETCH_OUTPUTS,
  SET_OUTPUT,
  fetchOutputs,
  setSnackbar,
  setStatus,
  setOutputsDefault,
} from '../actions/home';
import { synoFetchInfos } from '../actions/syno';

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

    case SET_OUTPUT: {
      axios({
        method: 'post',
        url: `${process.env.API_URL}/leds.cgi?led=${action.value}`,
        auth: {
          username: auth.split(':')[0],
          password: auth.split(':')[1],
        },
      })
        .then(() => {
          if (action.value === 3) store.dispatch(synoFetchInfos());
          store.dispatch(fetchOutputs());
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
