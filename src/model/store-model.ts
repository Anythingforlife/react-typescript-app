import {DefaultRootState} from 'react-redux';

export interface Action<T = any> {
  type: T;
  payload: T;
}

export interface State<T = any> extends DefaultRootState {
  authentication: T;
  app: T;
}
