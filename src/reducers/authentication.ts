import {fromJS} from 'immutable';
import {Action} from '../model/store-model';

const initialState = fromJS({
  email: '',
  password: '',
  isLogin: false,
  role: null,
  firstName: null,
  lastName: null,
  error: null,
});

export default (state = initialState, action: Action) => {
  switch (action.type) {
    case 'AUTHENTICATING_INITIALIZED':
      return state.merge({
        email: action.payload.email,
        password: action.payload.password,
      });
    case 'AUTHENTICATING_SUCCEEDED':
      return state.merge({
        isLogin: true,
        email: action.payload.email,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        role: action.payload.role,
      });
    case 'AUTHENTICATING_FAILED':
      return state.merge({
        isLogin: false,
        error: action.payload.error,
      });
    default:
      return state;
  }
};
