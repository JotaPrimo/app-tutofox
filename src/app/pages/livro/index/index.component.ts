import { Component, OnInit } from '@angular/core';
import { Livro } from '../livro';

// services
import { AlertService } from 'src/app/alerts/alert.service';
import { LivroService } from '../livro.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})

export class IndexComponent implements OnInit {

  livros: Livro[] = [];

  // Filtros agrupados em um objeto
  filters = {
    titulo: '',
    autor: '',
    isbn: '',
  };

  constructor(
    public livroService: LivroService,
    public alertService: AlertService
  ) { }


  ngOnInit(): void {
    this.livroService.getAll().subscribe((data: any) => {
      this.livros = data.data;
    })
  }

  // Aplicar filtros aos dados
  applyFilters(): Livro[] {
    console.log(this.filters);

    return this.livros.filter(data => {
      return data.titulo.toLowerCase().includes(this.filters.titulo.toLowerCase()) &&
        data.autor.toLowerCase().includes(this.filters.autor.toLowerCase()) &&
        data.isbn.includes(this.filters.isbn)
    });
  }


  deleteLivro(idLivro: number) {
    this.alertService
      .returnConfirmationAlertDelete()
      .then((result) => {
        if (result.isConfirmed) {
          this.livroService.delete(idLivro).subscribe(res => {
            console.log(res);

            this.livros = this.livros.filter(item => item.id !== idLivro);
          });
          this.alertService.showSuccess('Person deleted success');
        } else {
          this.alertService.showWarnig('Operação cancelada');
        }
      });
  }



}
