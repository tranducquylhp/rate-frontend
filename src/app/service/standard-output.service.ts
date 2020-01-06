import { Injectable } from '@angular/core';
import {Module} from '../interface/module';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {StandardOutput} from '../interface/standard-output';

@Injectable({
  providedIn: 'root'
})
export class StandardOutputService {

  constructor(private http: HttpClient) { }
  API_URL = 'https://rate-project.herokuapp.com/modules';

  create(moduleId: number, standardOutput: StandardOutput): Observable<StandardOutput> {
    return this.http.post<StandardOutput>(this.API_URL + '/' + moduleId + '/standardOutputs', standardOutput);
  }

  detail(moduleId, standardOutputId: string): Observable<StandardOutput> {
    return this.http.get<StandardOutput>(this.API_URL + '/' + moduleId + '/standardOutputs/' + standardOutputId);
  }

  delete(moduleId, standardOutputId: number): Observable<StandardOutput> {
    return this.http.delete<StandardOutput>(this.API_URL + '/' + moduleId + '/standardOutputs/' + standardOutputId);
  }

  edit(moduleId: number, standardOutput: StandardOutput): Observable<StandardOutput> {
    return this.http.put<StandardOutput>(this.API_URL + '/' + moduleId + '/standardOutputs', standardOutput);
  }

  getAllStandardOutput(moduleId: number): Observable<StandardOutput[]> {
    return this.http.get<StandardOutput[]>(this.API_URL + '/' + moduleId + '/standardOutputs');
  }
}
