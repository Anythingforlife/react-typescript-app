import {User} from './user-model';

export interface Credentials {
  email: string;
  password: string;
}

export interface RegistrationModel {
  firstName: String;
  lastName: String;
  email: String;
  username?: String;
  password: String;
  confirmPassword: String;
  role: String;
}

export interface AuthenticationResponse extends Response {
  token?: string;
  user?: User;
}
