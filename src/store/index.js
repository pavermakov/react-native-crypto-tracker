import { Platform } from 'react-native';
import { createStore, applyMiddleware, compose } from 'redux';
import devTools from 'remote-redux-devtools';
import promise from 'redux-promise';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from '../reducers';

const middleware = applyMiddleware(thunk, promise, logger);
const tools = devTools({
  name: Platform.OS,
  hostname: 'localhost',
  port: 5678,
});
const preloadedState = compose(middleware, tools);
const store = createStore(rootReducer, preloadedState);

export default store;
