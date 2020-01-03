import {StudyProgram} from './study-program';
import {Role} from './role';

export interface UserToken {
  id?: number;
  name: string;
  username: string;
  password: string;
  confirmPassword: string;
  accessToken: string;
  studyProgram: StudyProgram[];
  role: Role;
}
