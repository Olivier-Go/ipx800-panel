import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import loginMiddleware from 'src/middlewares/loginMiddleware';

import rootReducer from 'src/reducers';

const enhancers = composeWithDevTools(
  applyMiddleware(
    loginMiddleware,
  ),
);

const store = createStore(
  // reducer
  rootReducer,
  // enhancer
  enhancers,
);

export default store;
