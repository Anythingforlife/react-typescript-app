import authenticationService from '../services/authenticationService';
import {
  Credentials,
  AuthenticationResponse,
  RegistrationModel,
} from '../model/authentication-model';
import {ToasterType} from '../_helpers/enum';
import {storageService} from '../services/storageService';
import history from '../_helpers/history';
import {SuccessResponse} from '../model/common';

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
          type: 'CREATE_TOASTER_REQUESTED',
          payload: {message: err.message, type: ToasterType.Error},
        });
        dispatch({
          type: 'AUTHENTICATING_FAILED',
          payload: {error: err.message},
        });
      });
  };
};

const userRegistration = (registration: RegistrationModel) => {
  return (dispatch: Function) => {
    dispatch({type: 'SHOW_LOADER'});
    dispatch({type: 'REGISTRATION_INITIALIZED'});
    authenticationService
      .register(registration)
      .then((response: SuccessResponse) => {
        dispatch({type: 'HIDE_LOADER'});
        dispatch({
          type: 'CREATE_TOASTER_REQUESTED',
          payload: {message: response.message, type: ToasterType.Success},
        });
        dispatch({
          type: 'REGISTRATION_SUCCEEDED',
          payload: {message: 'success', type: ToasterType.Success},
        });
        setTimeout(() => {
          history.push('/');
        }, 500);
      })
      .catch((err: Error) => {
        dispatch({type: 'HIDE_LOADER'});
        dispatch({
          type: 'CREATE_TOASTER_REQUESTED',
          payload: {message: err.message, type: ToasterType.Error},
        });
        dispatch({
          type: 'REGISTRATION_FAILED',
          payload: {error: err.message},
        });
      });
  };
};

const logoutSession = () => {
  return (dispatch: Function) => {
    dispatch({type: 'LOGOUT_SESSION'});
    authenticationService.logout();
  };
};

export default {loginUser, userRegistration, logoutSession};
