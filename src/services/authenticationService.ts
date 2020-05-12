import {User} from '../model/user-model';
import {
  Credentials,
  AuthenticationResponse,
} from '../model/authentication-model';

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

function register(user: User) {
  // return httpService.postMethod('users/register', user);
}

function logout() {
  // storageService.removeData('user');
}
