import { combineReducers } from 'redux';

// import reducers
import loginReducer from './login';
import homeReducer from './home';

const rootReducer = combineReducers({
  login: loginReducer,
  home: homeReducer,
});

export default rootReducer;
