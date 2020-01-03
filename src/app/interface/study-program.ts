import {User} from './user';
import {StandardOutput} from './standard-output';

export interface StudyProgram {
  id?: number;
  name: string;
  description: string;
  goal: string;
  user?: User;
  standardOutput: StandardOutput[];
}
