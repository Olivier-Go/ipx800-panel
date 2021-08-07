import axios from 'axios';
import { decryptAES } from 'src/utils/tools';
import {
  SYNO_FETCH_INFOS,
  SYNO_FETCH_AUTHENTICATION,
  SYNO_FETCH_PUSH_DEVICES,
  SYNO_FETCH_NOTIFICATION_FILTERS,
  SET_SYNO_NOTIFICATION_FILTERS,
  SEND_SYNO_PUSH_NOTIFICATION,
  SYNO_FETCH_LOGOUT,
  synoFetchInfos,
  setSynoInfos,
  fetchSynoAuthentication,
  setSynoAuthentication,
  fetchSynoPushDevices,
  setSynoPushDevices,
  fetchSynoNotificationFilters,
  setSynoNotificationFilters,
  sendSynoPushNotification,
  fetchSynoLougout,
} from '../actions/syno';
import {
  setSnackbar,
  setNotificationsStatus,
  setNotificationsStatusLoader,
  setAlarmLoaderProgress,
} from '../actions/home';

const auth = decryptAES(process.env.API_CIPHERTEXT, process.env.API_KEY);

const SynoMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    /*
    * FETCH SURVEILLANCE STATION CAMERA API INFORMATIONS
    */
    case SYNO_FETCH_INFOS: {
      axios({
        method: 'get',
        url: `${process.env.SYNO_API_URL}/webapi/query.cgi?api=SYNO.API.Info&method=Query&version=1&query=SYNO.SurveillanceStation.Camera`,
      })
        .then((response) => {
          if (response.data.success) {
            const { path } = response.data.data['SYNO.SurveillanceStation.Camera'];
            store.dispatch(setSynoInfos(path));
            store.dispatch(fetchSynoAuthentication(action.setData));
            store.dispatch(setAlarmLoaderProgress(action.setData ? 40 : 100));
          }
        })
        .catch((error) => {
          // eslint-disable-next-line no-console
          console.warn(error);
          store.dispatch(setSnackbar('error', 'Echec de la connexion à Surveillance Station'));
          store.dispatch(setAlarmLoaderProgress(100));
        })
        .finally(() => {
        });

      next(action);
      break;
    }

    /*
    * FETCH SURVEILLANCE STATION AUTHENTICATION
    */
    case SYNO_FETCH_AUTHENTICATION: {
      const { path } = store.getState().syno;
      axios({
        method: 'get',
        url: `${process.env.SYNO_API_URL}/webapi/${path}?api=SYNO.API.Auth&method=login&version=7&account=${auth.split(':')[0]}&passwd=${auth.split(':')[1]}&session=SurveillanceStation&format=sid-`,
      })
        .then((response) => {
          if (response.data.success) {
            const { sid } = response.data.data;
            store.dispatch(setSynoAuthentication(sid));
            store.dispatch(fetchSynoPushDevices(action.setData));
            store.dispatch(setAlarmLoaderProgress(action.setData ? 50 : 100));
          }
        })
        .catch((error) => {
          // eslint-disable-next-line no-console
          console.warn(error);
          store.dispatch(setSnackbar('error', 'Echec de l\'authentification à Surveillance Station'));
          store.dispatch(setAlarmLoaderProgress(100));
        })
        .finally(() => {
        });

      next(action);
      break;
    }

    /*
    * FETCH LIST OF PUSH SERVICE PAIRED DEVICES
    */
    case SYNO_FETCH_PUSH_DEVICES: {
      const { path, sid } = store.getState().syno;
      axios({
        method: 'get',
        url: `${process.env.SYNO_API_URL}/webapi/${path}?api=SYNO.SurveillanceStation.Notification.PushService&version=1&method=ListMobileDevice&_sid=${sid}`,
      })
        .then((response) => {
          if (response.data.success) {
            const pushDevices = response.data.data.list;
            if (!pushDevices.length) {
              store.dispatch(setSnackbar('error', 'Le Service Push DSCAM n\'est activé sur aucun téléphone'));
              store.dispatch(setAlarmLoaderProgress(100));
            }
            else if (action.setData) {
              store.dispatch(setSynoPushDevices(pushDevices));
              store.dispatch(setSynoNotificationFilters());
              store.dispatch(setAlarmLoaderProgress(70));
            }
            else {
              store.dispatch(fetchSynoNotificationFilters());
            }
          }
        })
        .catch((error) => {
          // eslint-disable-next-line no-console
          console.warn(error);
          store.dispatch(setSnackbar('error', 'Echec récupération des appareils pairés à Surveillance Station'));
          store.dispatch(setAlarmLoaderProgress(100));
        })
        .finally(() => {
        });

      next(action);
      break;
    }

    /*
    * FETCH SURVEILLANCE STATION NOTIFICATION FILTERS
    */
    case SYNO_FETCH_NOTIFICATION_FILTERS: {
      const { path, sid } = store.getState().syno;
      if (path && sid) {
        axios({
          method: 'get',
          url: `${process.env.SYNO_API_URL}/webapi/${path}?api=SYNO.SurveillanceStation.Notification.Filter&version=1&method=Get&_sid=${sid}`,
        })
          .then((response) => {
            if (response.data.success) {
              const { list } = response.data.data;
              list.map((event) => {
                if (event.eventGroupType === 2 && event.eventType === 7) {
                  /*
                  * 7=5 => push mobile notifications enabled
                  */
                  switch (event.filter) {
                    case 5:
                      store.dispatch(setNotificationsStatus(true));
                      store.dispatch(setNotificationsStatusLoader(false));
                      break;
                    default:
                      store.dispatch(setNotificationsStatus(false));
                      store.dispatch(setNotificationsStatusLoader(false));
                  }
                }
                return false;
              });
            }
          })
          .catch((error) => {
            // eslint-disable-next-line no-console
            console.warn(error);
            store.dispatch(setSnackbar('error', 'Echec récupération état des notifications Surveillance Station'));
          })
          .finally(() => {
          });
      }
      else {
        store.dispatch(synoFetchInfos(false));
      }

      next(action);
      break;
    }

    /*
    * SET SURVEILLANCE STATION NOTIFICATION FILTERS
    * 7=0 => disable notification
    * 7=5 => enable notification
    */
    case SET_SYNO_NOTIFICATION_FILTERS: {
      const { path, sid, pushDevices } = store.getState().syno;
      const { outputs } = store.getState().home;
      const alarmRelais = outputs.OUT4;

      if (typeof alarmRelais === 'number') {
        if (alarmRelais === 0) {
          axios({
            method: 'get',
            url: `${process.env.SYNO_API_URL}/webapi/${path}?7=0&api=SYNO.SurveillanceStation.Notification.Filter&version=1&method=Set&_sid=${sid}`,
          })
            .then((response) => {
              if (response.data.success) {
                pushDevices.map((device) => {
                  store.dispatch(setAlarmLoaderProgress(90));
                  store.dispatch(sendSynoPushNotification('Notifications d\'alarme désactivées depuis IPX800-Panel'));
                  store.dispatch(setSnackbar('info', `${device.deviceName} : Notifications désactivées`));
                  return false;
                });
                store.dispatch(setNotificationsStatus(false));
                store.dispatch(setNotificationsStatusLoader(false));
              }
            })
            .catch((error) => {
              // eslint-disable-next-line no-console
              console.warn(error);
              store.dispatch(setSnackbar('error', 'Echec désactivation des notifications Surveillance Station'));
              store.dispatch(setAlarmLoaderProgress(100));
            })
            .finally(() => {
            });
        }
        else if (alarmRelais === 1) {
          axios({
            method: 'get',
            url: `${process.env.SYNO_API_URL}/webapi/${path}?7=5&api=SYNO.SurveillanceStation.Notification.Filter&version=1&method=Set&_sid=${sid}`,
          })
            .then((response) => {
              if (response.data.success) {
                pushDevices.map((device) => {
                  store.dispatch(setAlarmLoaderProgress(90));
                  store.dispatch(sendSynoPushNotification('Notifications d\'alarme activées depuis IPX800-Panel'));
                  store.dispatch(setSnackbar('success', `${device.deviceName} : Notifications activées`));
                  return false;
                });
                store.dispatch(setNotificationsStatus(true));
                store.dispatch(setNotificationsStatusLoader(false));
              }
            })
            .catch((error) => {
              // eslint-disable-next-line no-console
              console.warn(error);
              store.dispatch(setSnackbar('error', 'Echec activation des notifications Surveillance Station'));
              store.dispatch(setAlarmLoaderProgress(100));
            })
            .finally(() => {
            });
        }
      }

      next(action);
      break;
    }

    /*
    * SEND PUSH NOTIFICATION TO SURVEILLANCE STATION
    */
    case SEND_SYNO_PUSH_NOTIFICATION: {
      const { path, sid } = store.getState().syno;
      axios({
        method: 'get',
        url: `${process.env.SYNO_API_URL}/webapi/${path}?api=SYNO.SurveillanceStation.ExternalEvent&method=Trigger&version=1&eventId=1&eventName="${action.value}"&_sid=${sid}`,
      })
        .then(() => {
          store.dispatch(fetchSynoLougout());
        })
        .catch((error) => {
          // eslint-disable-next-line no-console
          console.warn(error);
        })
        .finally(() => {
          store.dispatch(setAlarmLoaderProgress(100));
        });

      next(action);
      break;
    }

    /*
    * FETCH SURVEILLANCE STATION LOGOUT
    */
    case SYNO_FETCH_LOGOUT: {
      const { path, sid } = store.getState().syno;
      axios({
        method: 'get',
        url: `${process.env.SYNO_API_URL}/webapi/${path}?api=SYNO.API.Auth&method=logout&version=2&session=SurveillanceStation&_sid=${sid}`,
      })
        .then(() => {})
        .catch((error) => {
          // eslint-disable-next-line no-console
          console.warn(error);
          store.dispatch(setSnackbar('error', 'Erreur déconnexion API Surveillance Station'));
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

export default SynoMiddleware;
