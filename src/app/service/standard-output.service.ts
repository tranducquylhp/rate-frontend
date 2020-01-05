import { Injectable } from '@angular/core';
import {StudyProgram} from '../interface/study-program';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {StandardOutput} from '../interface/standard-output';

@Injectable({
  providedIn: 'root'
})
export class StandardOutputService {

  constructor(private http: HttpClient) { }
  API_URL = 'https://rate-project.herokuapp.com/studyPrograms';

  create(studyProgramId: number, standardOutput: StandardOutput): Observable<StudyProgram> {
    return this.http.post<StudyProgram>(this.API_URL + '/' + studyProgramId + '/standardOutputs', standardOutput);
  }

  detail(studyProgramId, standardOutputId: string): Observable<StudyProgram> {
    return this.http.get<StudyProgram>(this.API_URL + '/' + studyProgramId + '/standardOutputs/' + standardOutputId);
  }

  delete(studyProgramId, standardOutputId: string): Observable<StudyProgram> {
    return this.http.delete<StudyProgram>(this.API_URL + '/' + studyProgramId + '/standardOutputs/' + standardOutputId);
  }

  edit(studyProgramId: number, standardOutput: StandardOutput): Observable<StudyProgram> {
    return this.http.put<StudyProgram>(this.API_URL + '/' + studyProgramId + '/standardOutputs', standardOutput);
  }

  getAllStudyProgram(studyProgramId: number): Observable<StudyProgram[]> {
    return this.http.get<StudyProgram[]>(this.API_URL + '/' + studyProgramId + '/standardOutputs');
  }
}
