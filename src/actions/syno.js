// action types
export const SYNO_FETCH_INFOS = 'SYNO_FETCH_INFOS';
export const SET_SYNO_INFOS = 'SET_SYNO_INFOS';
export const SYNO_FETCH_AUTHENTICATION = 'SYNO_FETCH_AUTHENTICATION';
export const SET_SYNO_AUTHENTICATION = 'SET_SYNO_AUTHENTICATION';
export const SYNO_FETCH_PUSH_DEVICES = 'SYNO_FETCH_PUSH_DEVICES';
export const SET_SYNO_PUSH_DEVICES = 'SET_SYNO_PUSH_DEVICES';
export const SET_SYNO_NOTIFICATION_FILTERS = 'SET_SYNO_NOTIFICATION_FILTERS';
export const SEND_SYNO_PUSH_NOTIFICATION = 'SEND_SYNO_PUSH_NOTIFICATION';
export const SYNO_FETCH_LOGOUT = 'SYNO_FETCH_LOGOUT';

// action creators
export const synoFetchInfos = () => ({
  type: SYNO_FETCH_INFOS,
});

export const setSynoInfos = (path) => ({
  type: SET_SYNO_INFOS,
  path,
});

export const fetchSynoAuthentication = () => ({
  type: SYNO_FETCH_AUTHENTICATION,
});

export const setSynoAuthentication = (sid) => ({
  type: SET_SYNO_AUTHENTICATION,
  sid,
});

export const fetchSynoPushDevices = () => ({
  type: SYNO_FETCH_PUSH_DEVICES,
});

export const setSynoPushDevices = (pushDevices) => ({
  type: SET_SYNO_PUSH_DEVICES,
  pushDevices,
});

export const setSynoNotificationFilters = () => ({
  type: SET_SYNO_NOTIFICATION_FILTERS,
});

export const sendSynoPushNotification = (value) => ({
  type: SEND_SYNO_PUSH_NOTIFICATION,
  value,
});

export const fetchSynoLougout = () => ({
  type: SYNO_FETCH_LOGOUT,
});
