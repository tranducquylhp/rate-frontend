import {StudyProgram} from './study-program';

export interface StandardOutput {
  id?: number;
  name: string;
  rate?: string;
  studyProgram: StudyProgram;
}
