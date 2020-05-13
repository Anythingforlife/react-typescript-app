import {combineReducers} from 'redux';
import authentication from './reducers/authentication-reducer';
import app from './reducers/app-reducer';
import {Action} from './model/store-model';

const appReducer = combineReducers({
  authentication,
  app,
});

const rootReducer = (state: any, action: Action) => {
  if (action.type === 'CLEAR_REDUX_STORE') {
    // eslint-disable-next-line no-param-reassign
    state = {authentication: null, app: null};
  }

  return appReducer(state, action);
};

export default rootReducer;
