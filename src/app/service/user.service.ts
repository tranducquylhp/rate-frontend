import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../interface/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  private USER_API = 'https://rate-project.herokuapp.com/users';
  private USER_CURRENT = 'https://rate-project.herokuapp.com/userCurrent';
  register(user): Observable<User> {
    return this.http.post<User>('https://rate-project.herokuapp.com/register', user);
  }

  detail(id): Observable<User> {
    return this.http.get<User>(this.USER_API + `/${id}`);
  }

  newPassword(user: User, id: number): Observable<User> {
    return this.http.post<User>(`https://rate-project.herokuapp.com/new-password/${id}`, user);
  }

  login(user: User): Observable<User> {
    return this.http.post<User>( 'https://rate-project.herokuapp.com/login', user);
  }
}
