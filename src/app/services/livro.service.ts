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
      .pipe(catchError(this.errorHandler))
  }


}
