import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {StudyProgram} from '../interface/study-program';

@Injectable({
  providedIn: 'root'
})
export class StudyProgramService {

  constructor(private http: HttpClient) { }

  API_URL = 'https://rate-project.herokuapp.com/studyPrograms';

  create(studyProgram: StudyProgram): Observable<StudyProgram> {
    return this.http.post<StudyProgram>(this.API_URL, studyProgram);
  }

  detail(id: string): Observable<StudyProgram> {
    return this.http.get<StudyProgram>(this.API_URL + '/' + id);
  }

  delete(id: number): Observable<StudyProgram> {
    return this.http.delete<StudyProgram>(this.API_URL + '/' + id);
  }

  edit(studyProgram: StudyProgram): Observable<StudyProgram> {
    return this.http.put<StudyProgram>(this.API_URL, studyProgram);
  }

  getAllStudyProgram(): Observable<StudyProgram[]> {
    return this.http.get<StudyProgram[]>(this.API_URL);
  }
}
