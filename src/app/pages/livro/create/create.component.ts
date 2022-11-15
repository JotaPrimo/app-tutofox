import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/alert.service';
import { Livro } from 'src/app/livro/livro';
import { LivroService } from 'src/app/services/livro.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  livro: Livro | any;
  form: FormGroup | any;


  constructor(
    public alertService: AlertService,
    public formBuilder: FormBuilder,
    public livroService: LivroService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  get formControls() {
    return this.form.controls;
  }

  initForm() {
    this.form = this.formBuilder.group({
      titulo: new FormControl('', [ Validators.required, Validators.maxLength(15), Validators.minLength(5), Validators.pattern("[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$") ]),
      autor: new FormControl('', [ Validators.required, Validators.maxLength(5), Validators.minLength(5), Validators.pattern('([aA-zZ]+)') ]),
      isbn: new FormControl('', [ Validators.required ]),
      qntd_exemplares: new FormControl('', [ Validators.required ])
    });
  }

  submit() {

  }

  upperCaseFields() {
    this.form.get('titulo')?.valueChanges.subscribe( (event: any) => {
      this.form.get('titulo')?.setValue(event.toUpperCase(), {emitEvent: false})
    })
  }


}
