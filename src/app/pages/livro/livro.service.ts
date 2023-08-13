import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Livro } from './livro';
import { Person } from '../person/person';
import { AlertService } from 'src/app/alerts/alert.service';

@Injectable({
  providedIn: 'root'
})
export class LivroService {


  // metodos do repository
  private apiURL = "http://localhost:8000/api/livro/";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Livro[]> {
    return this.httpClient.get<Livro[]>(this.apiURL)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  findById(idLivro: number): Observable<Livro> {
    return this.httpClient.get<Livro>(this.apiURL + idLivro)
      .pipe(
        catchError(this.errorHandler)
      );
  }

  create(livro: Livro): Observable<Livro> {
    return this.httpClient.post<Livro>(this.apiURL, JSON.stringify(livro), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      );
  }

  update(idLivro: number, livro: Livro) {
    return this.httpClient.put<Person>(this.apiURL + idLivro, JSON.stringify(livro), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  delete(idLivro: number) {
    return this.httpClient.delete<Livro>(this.apiURL + idLivro, this.httpOptions)
      .pipe(catchError(this.errorHandler))
  }


  errorHandler(error: { error: { message: string; }; status: any; message: any; }) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }


}
