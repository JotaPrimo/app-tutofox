import { Component } from '@angular/core';

import { PersonService } from "../person.service";
import { Person } from '../person';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})

export class IndexComponent {
  persons: Person[] = []; // array de persons

  constructor(public personService: PersonService) { }

  ngOnInit(): void {
    // assim que iniciar o componente, carregar a listagem de usuarios
    this.personService.getAll().subscribe((data: Person[]) => {
      this.persons = data;
      console.log(this.persons);
    })
  }

  deletePerson(idPerson: number) {
    this.personService.delete(idPerson).subscribe(res => {
      this.persons = this.persons.filter(item => item.id !== idPerson);
      console.log("Person deleted succesfully");
    })
  }


}
