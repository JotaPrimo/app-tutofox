import { Component, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';
import { LivroService } from '../livro.service';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/alerts/alert.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})

export class CreateComponent implements OnInit {

  form: FormGroup;

  constructor(
    public livroService: LivroService,
    private router: Router,
    public alertService: AlertService
  ) { }


  ngOnInit(): void {
    this.mounteFormGroup();
  }


  mounteFormGroup() {
    this.form = new FormGroup({
      titulo: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(190)]),
      autor: new FormControl('', Validators.required),
      isbn: new FormControl('', [Validators.required, Validators.minLength(5)]),
      qntd_exemplares: new FormControl('', [Validators.required, Validators.minLength(5)]),
    });
  }

  get f() {
    return this.form.controls;
  }

  submit() {
    this.livroService.create(this.form.value).subscribe((res) => {
      this.alertService.showSuccess('Livro cadastrado com sucesso')
      this.router.navigateByUrl('livro/index')
    }, err => {
      this.alertService.showError('Ocorreu um erro')
    })
  }

  isFieldInvalid(field: any): boolean {
    return field.invalid && (field.dirty || field.touched);
  }

  isFormValid() {
    return this.form.valid;
  }

}
