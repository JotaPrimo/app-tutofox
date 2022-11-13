import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AlertService } from 'src/app/alert.service';
import { Person } from '../person';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  persons: Person[] = [];

  constructor(
    private personService: PersonService,
    private alertService: AlertService
  ) { }

  // iniciando o oninit serviços
  ngOnInit(): void {
    this.getList();
  }

  getList() {
    this.personService.getAll().subscribe((data: Person[]) => {
      this.persons = data;
    }, (err) => {
      this.alertService.error('Listagem de persons não pode ser carregada')
    });
  }

  delete(idPerson: number) {
    this.personService.delete(idPerson).subscribe(
      res => {
        this.alertService.success('Person deletada com sucesso', 'Tudo Certo');
        this.persons = this.persons.filter(item => item.id !== idPerson);
      },
      // Caso de erro
      (err) => {
        this.alertService.success('Ocorreu um erro', 'Erro')
      }
    );

  }



}
