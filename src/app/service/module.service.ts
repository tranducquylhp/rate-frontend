import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Module} from '../interface/module';

@Injectable({
  providedIn: 'root'
})
export class ModuleService {

  constructor(private http: HttpClient) { }

  API_URL = 'https://rate-project.herokuapp.com/modules';

  create(module: Module): Observable<Module> {
    return this.http.post<Module>(this.API_URL, module);
  }

  detail(id: string): Observable<Module> {
    return this.http.get<Module>(this.API_URL + '/' + id);
  }

  delete(id: number): Observable<Module> {
    return this.http.delete<Module>(this.API_URL + '/' + id);
  }

  edit(module: Module): Observable<Module> {
    return this.http.put<Module>(this.API_URL, module);
  }

  getAllModule(): Observable<Module[]> {
    return this.http.get<Module[]>(this.API_URL);
  }
}
