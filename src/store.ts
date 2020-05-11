import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}


const composeEnhancers = window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] as typeof compose || compose;

// const composeEnhancers =
//   typeof window === 'object' && window__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
//     ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
//         trace: true,
//       })
//     : compose;

const enhancer = composeEnhancers(applyMiddleware(thunk));

export const store = createStore(rootReducer, enhancer);
