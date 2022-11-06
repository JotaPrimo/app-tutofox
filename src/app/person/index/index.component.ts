import { Component, OnInit } from '@angular/core';
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
    private personService: PersonService
  ) { }

  // iniciando o oninit serviços
  ngOnInit(): void {
    this.personService.getAll().subscribe((data: Person[]) => {
      this.persons = data;
      console.log(this.persons)
    });
  }

  delete(idPerson: number) {
    this.personService.delete(idPerson).subscribe(
      res => {
        this.persons = this.persons.filter(item => item.id !== idPerson);
        console.log('Person deleted succesfully!')
      }
    );
  }



}
