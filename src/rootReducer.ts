import {combineReducers} from 'redux';
import authentication from './reducers/authentication';
import notifications from './reducers/notifications';
import {Action} from './model/store-model';

const appReducer = combineReducers({
  authentication,
  notifications,
});

const rootReducer = (state: any, action: Action) => {
  if (action.type === 'CLEAR_REDUX_STORE') {
    // eslint-disable-next-line no-param-reassign
    state = {authentication: null, notifications: null};
  }

  return appReducer(state, action);
};

export default rootReducer;
