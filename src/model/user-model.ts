export interface User {
  id?: number;
  firstName: String;
  lastName: String;
  email: String;
  password: String;
  role: String;
  username?: String;
  confirmPassword?: String;
}
