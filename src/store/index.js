import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from 'src/reducers';

const enhancers = composeWithDevTools(
  applyMiddleware(

  ),
);

const store = createStore(
  // reducer
  rootReducer,
  // enhancer
  enhancers,
);

export default store;
