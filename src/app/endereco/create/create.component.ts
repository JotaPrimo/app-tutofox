import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError } from 'rxjs';
import { AlertService } from 'src/app/alert.service';
import { Endereco } from '../endereco';
import { EnderecoService } from '../endereco.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  form: FormGroup = this.formBuilder.group({
    logradouro:  new FormControl('', [ Validators.required, Validators.pattern('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ \-\']+') ]),
    tipo: new FormControl('', [ Validators.required, Validators.pattern('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ \-\']+')]),
    cidade: new FormControl('', [ Validators.required, Validators.pattern('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ \-\']+')]),
    estado: new FormControl('', [ Validators.required])
  });

  constructor(
    public enderecoService: EnderecoService,
    private router: Router,
    public formBuilder: FormBuilder,
    private alertService: AlertService
  ) { }

  ngOnInit(): void {


  }


  get f(){
    return this.form.controls;
  }

  submit() {

    return this.enderecoService.create(this.form.value).subscribe(
      res => {
        console.log('Person created successfully!');
        this.alertService.success('Operação realizada com sucesso');
        this.router.navigateByUrl('person/index');
      }, (err) => {
        this.alertService.error('Ocorreu um erro')
      }
    )

  }


}
