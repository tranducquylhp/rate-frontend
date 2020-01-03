import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../interface/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  private USER_API = 'http://rate-project.herokuapp.com/users';
  private USER_CURRENT = 'http://rate-project.herokuapp.com/userCurrent';
  register(user): Observable<User> {
    return this.http.post<User>('http://rate-project.herokuapp.com/register', user);
  }
}
