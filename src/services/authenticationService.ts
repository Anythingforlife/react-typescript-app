import {
  Credentials,
  AuthenticationResponse,
  RegistrationModel,
} from '../model/authentication-model';
import {storageService} from './storageService';
import {SuccessResponse} from '../model/common';

export default {
  login,
  register,
  logout,
};

async function login(
  credentials: Credentials
): Promise<AuthenticationResponse> {
  const response = await fetch(
    `${process.env.REACT_APP_SERVER_URL}authentication/login`,
    {
      method: 'post',
      body: JSON.stringify(credentials),
      headers: {'Content-Type': 'application/json'},
    }
  );
  const res = await response.json();

  if (!response.ok) {
    return Promise.reject(res);
  }

  return res;
}

async function register(data: RegistrationModel): Promise<SuccessResponse> {
  const response = await fetch(
    `${process.env.REACT_APP_SERVER_URL}authentication/register`,
    {
      method: 'post',
      body: JSON.stringify(data),
      headers: {'Content-Type': 'application/json'},
    }
  );
  const res = await response.json();

  if (!response.ok) {
    return Promise.reject(res);
  }
  return res;
}

function logout() {
  storageService.removeData('security');
}
