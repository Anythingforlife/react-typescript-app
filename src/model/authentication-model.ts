import {User} from './user-model';

export interface Credentials {
  email: string;
  password: string;
}

export interface AuthenticationResponse extends Response {
  token?: string;
  user?: User;
}
