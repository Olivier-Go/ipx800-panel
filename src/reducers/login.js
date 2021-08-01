import {
  SET_PASSWORD,
  CLEAR_PASSWORD,
  RESET_PASSWORD,
  SET_USER_AUTH,
} from '../actions/login';

const initialState = {
  password: [],
  userAuth: false,
};

const loginReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_PASSWORD:
      return {
        ...state,
        password: [...state.password, action.value],
      };

    case CLEAR_PASSWORD: {
      const currentPwd = [...state.password];
      currentPwd.pop();
      return {
        ...state,
        password: currentPwd,
      };
    }

    case RESET_PASSWORD:
      return {
        ...state,
        password: [],
      };

    case SET_USER_AUTH:
      return {
        ...state,
        userAuth: true,
      };

    default: return state;
  }
};

export default loginReducer;
