import authenticationService from '../services/authenticationService';
import {
  Credentials,
  AuthenticationResponse,
} from '../model/authentication-model';
import {ToasterType} from '../_helpers/enum';
import {storageService} from '../services/storageService';

const loginUser = (credentials: Credentials) => {
  return (dispatch: Function) => {
    dispatch({type: 'SHOW_LOADER'});
    dispatch({type: 'AUTHENTICATING_INITIALIZED', payload: credentials});
    authenticationService
      .login(credentials)
      .then((response: AuthenticationResponse) => {
        storageService.storeData('security', JSON.stringify(response));
        dispatch({type: 'HIDE_LOADER'});
        dispatch({
          type: 'AUTHENTICATING_SUCCEEDED',
          payload: {message: 'success', type: ToasterType.Success},
        });
      })
      .catch((err: Error) => {
        dispatch({type: 'HIDE_LOADER'});
        dispatch({
          type: 'CREATE_NOTIFICATION_REQUESTED',
          payload: {message: err.message, type: ToasterType.Error},
        });
        dispatch({
          type: 'AUTHENTICATING_FAILED',
          payload: {error: err.message},
        });
      });
  };
};

const logoutSession = () => {
  return (dispatch: Function) => {
    sessionStorage.removeItem('security');
    dispatch({type: 'LOGOUT_SESSION'});
  };
};

export default {loginUser, logoutSession};
