import { combineReducers } from 'redux';

// import reducers
import loginReducer from './login';
import homeReducer from './home';
import synoReducer from './syno';

const rootReducer = combineReducers({
  login: loginReducer,
  home: homeReducer,
  syno: synoReducer,
});

export default rootReducer;
