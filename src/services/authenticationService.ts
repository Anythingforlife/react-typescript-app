import Credentials from '../model/credentials';
import Users from '../model/users';

export default {
  login,
  register,
  logout,
};

function login(credentials: Credentials) {
  console.log('api called');
  return fetch(`${process.env.REACT_APP_SERVER_URL}authentication/login`, {
    method: 'post',
    body: JSON.stringify(credentials),
  });
  // return fetch({method: 'post', url: `users/authenticate`});
}

function register(user: Users) {
  // return httpService.postMethod('users/register', user);
}

function logout() {
  // storageService.removeData('user');
}
