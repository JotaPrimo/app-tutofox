import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  public listComidas: Array<{id: number, comida: string}> = [
    { id: 1 , comida: 'X-Salada' },
    { id: 2, comida: 'X-Bacon' },
    { id: 3, comida: 'X-Tudo' },
  ]

  constructor() { }

  ngOnInit(): void {
  }

  public submitForm(form: NgForm) {
    console.log('Tralaá')
  }

}
