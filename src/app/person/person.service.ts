import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from "@angular/common/http";
import { catchError, Observable, throwError } from 'rxjs';
import { Person } from './person';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  private apiUrl = "http://localhost:8000/api/person/";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  // preciso instanciar o httpClient
  constructor(private httpClient: HttpClient) { }

  // get all precisa doobservable e do subscrib
  // vamos tipar o retorno
  getAll(): Observable<Person[]> {
    return this.httpClient.get<Person[]>(this.apiUrl)
      .pipe(
        catchError(this.errorHandler)
      )
  }


  create(person: Person): Observable<Person> {
    return this.httpClient.post<Person>(this.apiUrl, JSON.stringify(person), this.httpOptions)
      .pipe(catchError(this.errorHandler))
  }

  find(idPerson: number): Observable<Person> {
    return this.httpClient.get<Person>(this.apiUrl + idPerson)
      .pipe(catchError(this.errorHandler))
  }

  update(idPerson: number, person: Person) {
    return this.httpClient.put<Person>(this.apiUrl + idPerson, JSON.stringify(person), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  delete(idPerson: number) {
    return this.httpClient.delete<Person>(this.apiUrl + idPerson, this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
        )
  }


  errorHandler(error: any) {
    let errorMessage = '';

    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }

    return throwError(errorMessage);

  }


}
