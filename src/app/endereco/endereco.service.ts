import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Endereco } from './endereco';

@Injectable({
  providedIn: 'root'
})
export class EnderecoService {

  private apiURL = "http://localhost:8000/api/endereco/";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Endereco[]> {
    return this.httpClient.get<Endereco[]>(this.apiURL).pipe(
      catchError(this.errorHandler)
    )
  }

  create(endereco: Endereco): Observable<Endereco> {
    return this.httpClient.post<Endereco>(this.apiURL, JSON.stringify(endereco), this.httpOptions).pipe(
      catchError(this.errorHandler)
    )
  }

  find(idEndereco: number): Observable<Endereco> {
    return this.httpClient.get<Endereco>(this.apiURL + idEndereco).pipe(
      catchError(this.errorHandler)
    )
  }

  update(idEndereco: number, endereco: Endereco) {
    return this.httpClient.put<Endereco>(this.apiURL + idEndereco, JSON.stringify(endereco), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  delete(idEndereco: number) {
    return this.httpClient.delete<Endereco>(this.apiURL + idEndereco, this.httpOptions).pipe(
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
