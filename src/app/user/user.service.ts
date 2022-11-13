import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, delay, Observable } from 'rxjs';
import { ServiceService } from '../service/service.service';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService extends ServiceService {

  private apiURL = "http://localhost:8000/api/user/";


  constructor(private httpClient: HttpClient) {
    super();
  }

  getAll(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.apiURL).pipe(catchError(this.errorHandler))
  }

  create(user: User): Observable<User> {
    return this.httpClient.post<User>(this.apiURL, JSON.stringify(user), this.httpOptions)
      .pipe(catchError(this.errorHandler))
  }

  findById(idUser: number): Observable<User> {
    return this.httpClient.get<User>(this.apiURL + idUser)
      .pipe(catchError(this.errorHandler))
  }

  update(idUser: number): Observable<User> {
    return this.httpClient.put<User>(this.apiURL, this.httpOptions).pipe(catchError(this.errorHandler))
  }

  delete(idUser: number) {
    return this.httpClient.delete<User>(this.apiURL, this.httpOptions).pipe(catchError(this.errorHandler))
  }

}
