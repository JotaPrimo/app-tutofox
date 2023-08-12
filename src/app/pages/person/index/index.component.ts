import { Component } from '@angular/core';


import { PersonService } from "../person.service";
import { Person } from '../person';
import { AlertService } from 'src/app/alerts/alert.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})

export class IndexComponent {

  // array de persons
  persons: Person[] = [];

  paginationConfig = {
    currentPage: 1,
    itemsPerPage: 10
  };

  constructor(
    public personService: PersonService,
    public alertService: AlertService) { }

  ngOnInit(): void {
    // assim que iniciar o componente, carregar a listagem de usuarios
    this.personService.getAll().subscribe((data: Person[]) => {
      this.persons = data;
      // this.data = data;
    })
  }

  // Função para atualizar a página atual
  onPageChange(newPage: number): void {
    this.paginationConfig.currentPage = newPage;
  }

  deletePerson(idPerson: number) {
    this.alertService
      .returnConfirmationAlertDelete()
      .then((result) => {
        if (result.isConfirmed) {
          this.personService.delete(idPerson).subscribe(res => {
            console.log(res);

            this.persons = this.persons.filter(item => item.id !== idPerson);
          });
          this.alertService.showSuccess('Person deleted success');
        } else {
          this.alertService.showWarnig('Operação cancelada');
        }
      });
  }


}
