import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {

  public cadastroForm: FormGroup = this.formBuilder.group({
    name: ['', [ Validators.required, Validators.minLength(5), ]]
  })

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

}
