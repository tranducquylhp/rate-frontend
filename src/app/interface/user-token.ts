import {Role} from './role';
import {Module} from './module';

export interface UserToken {
  id?: number;
  name: string;
  username: string;
  password: string;
  confirmPassword: string;
  accessToken: string;
  module: Module[];
  role: Role;
}
