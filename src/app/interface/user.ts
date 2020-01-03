import {StudyProgram} from './study-program';
import {Role} from './role';

export interface User {
  id?: number;
  name: string;
  username: string;
  password: string;
  confirmPassword: string;
  accessToken?: string;
  studyProgram: StudyProgram[];
  role: Role;
}
