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

  // Coluna atualmente ordenada
  sortedColumn: string = '';
  // Ordem ascendente (true) ou descendente (false)
  isAscending: boolean = true;

  // Filtros agrupados em um objeto
  filters = {
    name: '',
    email: '',
    phone: ''
  };

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
    })
  }

  // Aplicar filtros aos dados
  applyFilters(): Person[] {
    return this.persons.filter(data => {
      return data.name.toLowerCase().includes(this.filters.name.toLowerCase()) &&
        data.email.toLowerCase().includes(this.filters.email.toLowerCase()) &&
        data.phone.toLowerCase().includes(this.filters.phone.toLowerCase());
    });
  }

  // Limpar filtros
  clearFilters(): void {
    this.filters.name = '';
    this.filters.email = '';
    this.filters.phone = '';
  }

  // Função para atualizar a página atual
  onPageChange(newPage: number): void {
    this.paginationConfig.currentPage = newPage;
  }

  // Função para ordenar os dados com base na coluna
  // Função para ordenar os dados com base na coluna
  sortByColumn(column: keyof Person): void {
    if (this.sortedColumn === column) {
      this.isAscending = !this.isAscending;
    } else {
      this.sortedColumn = column;
      this.isAscending = true;
    }

    this.persons.sort((a, b) => {
      const aValue = a[column];
      const bValue = b[column];

      if (typeof aValue === 'string' && typeof bValue === 'string') {
        const comparison = aValue.localeCompare(bValue);
        return this.isAscending ? comparison : -comparison;
      } else if (typeof aValue === 'number' && typeof bValue === 'number') {
        return this.isAscending ? aValue - bValue : bValue - aValue;
      }

      return 0; // Se os tipos forem diferentes ou não suportados, não ordena
    });
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
