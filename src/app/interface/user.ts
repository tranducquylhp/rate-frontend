import {Module} from './module';
import {Role} from './role';

export interface User {
  id?: number;
  name: string;
  username: string;
  password: string;
  confirmPassword: string;
  modules: Module[];
  role: Role;
}
