import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { Livro } from '../livro/livro';
import { ServiceService } from '../service/service.service';

@Injectable({
  providedIn: 'root'
})
export class LivroService extends ServiceService {

  private apiURL = "http://localhost:8000/api/livro/";

  constructor(private httpClient: HttpClient) {
    super();
  }

  getAll(): Observable<Livro[]> {
    return this.httpClient.get<Livro[]>(this.apiURL).pipe(catchError(this.errorHandler));
  }

  create(livro: Livro): Observable<Livro> {
    return this.httpClient.post<Livro>(this.apiURL, JSON.stringify(livro), this.httpOptions)
      .pipe(catchError(this.errorHandler));
  }


  findById(idLivro: number): Observable<Livro> {
    return this.httpClient.get<Livro>(this.apiURL + idLivro)
      .pipe(catchError(this.errorHandler))
  }

  update(idLivro: number, livro: Livro) {
    return this.httpClient.put<Livro>(this.apiURL + idLivro, JSON.stringify(livro), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  delete(idLivro: number) {
    return this.httpClient.delete<Livro>(this.apiURL + this.apiURL, this.httpOptions).pipe(catchError(this.errorHandler));
  }

}
