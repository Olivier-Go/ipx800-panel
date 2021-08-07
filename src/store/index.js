import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import loginMiddleware from 'src/middlewares/loginMiddleware';
import homeMiddleware from 'src/middlewares/homeMiddleware';
import synoMiddleware from 'src/middlewares/synoMiddleware';

import rootReducer from 'src/reducers';

const enhancers = composeWithDevTools(
  applyMiddleware(
    loginMiddleware,
    homeMiddleware,
    synoMiddleware,
  ),
);

const store = createStore(
  // reducer
  rootReducer,
  // enhancer
  enhancers,
);

export default store;
