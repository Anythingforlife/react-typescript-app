import authenticationService from '../services/authenticationService';
import {
  Credentials,
  AuthenticationResponse,
} from '../model/authentication-model';
import {ToasterType} from '../helpers/enum';
import {storageService} from '../services/storageService';

const loginUser = (credentials: Credentials) => {
  return (dispatch: Function) => {
    dispatch({type: 'AUTHENTICATING_INITIALIZED', payload: credentials});
    authenticationService
      .login(credentials)
      .then((response: AuthenticationResponse) => {
        storageService.storeData('security', JSON.stringify(response));
        dispatch({
          type: 'AUTHENTICATING_SUCCEEDED',
          payload: {message: 'success', type: ToasterType.Success},
        });
      })
      .catch((err: Error) => {
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

export default {loginUser};
