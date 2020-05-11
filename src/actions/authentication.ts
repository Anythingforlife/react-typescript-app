import authenticationService from '../services/authenticationService';
import Credentials from '../model/credentials';
import {storageService} from '../services/storageService';

const loginUser = (credentials: Credentials) => {
  return (dispatch: Function) => {
    dispatch({type: 'AUTHENTICATING_INITIALIZED', payload: credentials});
    authenticationService
      .login(credentials)
      .then((response: any) => {
        console.log(response);
      })
      .catch((err: any) => {
        console.log(err);
        // dispatch({
        //   type: 'AUTHENTICATING_FAILED',
        //   payload: {error: err.message},
        // });
      });
  };
};

export default {loginUser};

// console.log(res.data.login.token);
// localStorage.setItem('access_token', res.data.login.token);
// dispatch({type: 'AUTHENTICATING_SUCCEEDED', payload: {users: res.data.login}});
