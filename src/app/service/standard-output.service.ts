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

  create(studyProgramId: number, standardOutput: StandardOutput): Observable<StandardOutput> {
    return this.http.post<StandardOutput>(this.API_URL + '/' + studyProgramId + '/standardOutputs', standardOutput);
  }

  detail(studyProgramId, standardOutputId: string): Observable<StandardOutput> {
    return this.http.get<StandardOutput>(this.API_URL + '/' + studyProgramId + '/standardOutputs/' + standardOutputId);
  }

  delete(studyProgramId, standardOutputId: number): Observable<StandardOutput> {
    return this.http.delete<StandardOutput>(this.API_URL + '/' + studyProgramId + '/standardOutputs/' + standardOutputId);
  }

  edit(studyProgramId: number, standardOutput: StandardOutput): Observable<StandardOutput> {
    return this.http.put<StandardOutput>(this.API_URL + '/' + studyProgramId + '/standardOutputs', standardOutput);
  }

  getAllStandardOutput(studyProgramId: number): Observable<StandardOutput[]> {
    return this.http.get<StandardOutput[]>(this.API_URL + '/' + studyProgramId + '/standardOutputs');
  }
}
