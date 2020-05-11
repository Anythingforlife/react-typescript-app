import {combineReducers} from 'redux';
import authentication from './reducers/authentication';
import notifications from './reducers/notifications';

const appReducer = combineReducers({
  authentication,
  notifications,
});

const rootReducer = (state: any, action: any) => {
  if (action.type === 'CLEAR_REDUX_STORE') {
    state = undefined;
  }

  return appReducer(state, action);
};

export default rootReducer;
