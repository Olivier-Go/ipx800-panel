import {
  SET_SYNO_INFOS,
  SET_SYNO_AUTHENTICATION,
  SET_SYNO_PUSH_DEVICES,
} from '../actions/syno';

const initialState = {
  path: '',
  sid: '',
  pushDevices: {},
};

const synoReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_SYNO_INFOS:
      return {
        ...state,
        path: action.path,
      };

    case SET_SYNO_AUTHENTICATION:
      return {
        ...state,
        sid: action.sid,
      };

    case SET_SYNO_PUSH_DEVICES:
      return {
        ...state,
        pushDevices: action.pushDevices,
      };

    default: return state;
  }
};

export default synoReducer;
