// action types
export const SET_PASSWORD = 'SET_PASSWORD';
export const CLEAR_PASSWORD = 'CLEAR_PASSWORD';
export const CHECK_PASSWORD = 'CHECK_PASSWORD';
export const RESET_PASSWORD = 'RESET_PASSWORD';
export const SET_USER_AUTH = 'SET_USER_AUTH';
export const FETCH_AUTHENTICATION = 'FETCH_AUTHENTICATION';

// action creators
export const setPassword = (value) => ({
  type: SET_PASSWORD,
  value,
});

export const clearPassword = () => ({
  type: CLEAR_PASSWORD,
});

export const checkPassword = () => ({
  type: CHECK_PASSWORD,
});

export const resetPassword = () => ({
  type: RESET_PASSWORD,
});

export const setUserAuth = () => ({
  type: SET_USER_AUTH,
});

export const fetchAuth = () => ({
  type: FETCH_AUTHENTICATION,
});
