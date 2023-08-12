import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs';

import { Person } from './person';


@Injectable({
  providedIn: 'root'
})
export class PersonService {

  // primeiro definir a url
  private apiURL = "http://localhost:8000/api/person/";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }


  // usar o httpCliente para processar as requisições
  constructor(private httpClient: HttpClient) { }

  // ações do crud
  getAll(): Observable<Person[]> {
    return this.httpClient.get<Person[]>(this.apiURL).pipe(
      catchError(this.errorHandler)
    )
  }


  create(person: Person): Observable<Person> {
    return this.httpClient.post<Person>(this.apiURL, JSON.stringify(person), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  find(idPerson: number): Observable<Person> {
    return this.httpClient.get<Person>(this.apiURL + idPerson)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  update(idPerson: number, person: Person) {
    return this.httpClient.put<Person>(this.apiURL + idPerson, JSON.stringify(person), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  delete(idPerson: number) {
    return this.httpClient.delete<Person>(this.apiURL + idPerson, this.httpOptions)
      .pipe(catchError(this.errorHandler))
  }


  errorHandler(error: { error: { message: string; }; status: any; message: any; }) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage)
  }

}
