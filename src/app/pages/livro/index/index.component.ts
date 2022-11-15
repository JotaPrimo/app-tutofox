import { Component, OnInit } from '@angular/core';
import { AlertService } from 'src/app/alert.service';
import { Livro } from 'src/app/livro/livro';
import { LivroService } from 'src/app/services/livro.service';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  public livros: Livro[] = [];

  constructor(
    private alertService: AlertService,
    private livroService: LivroService

  ) { }

  ngOnInit(): void {
    this.getList();
  }

  public getList() {
    this.livroService.getAll().subscribe((data: Livro[]) => {
      this.livros = data;
    }, (err) => {
      this.alertService.error('Não foi possivel carregar os livros')
    });
  }

}
