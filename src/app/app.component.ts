import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './forms/forms.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public listComidas: Array<{id: number, comida: string}> = [
    { id: 1 , comida: 'X-Salada' },
    { id: 2, comida: 'X-Bacon' },
    { id: 3, comida: 'X-Tudo' },
  ]

  public submitForm(form: NgForm) {
    console.log('Form subnmetido')
  }

}
