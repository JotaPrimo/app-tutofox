import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
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
    public formBuilder: FormBuilder,
    public alertService: AlertService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.lowerCaseFields();
  }


  get f(){
    return this.form.controls;
  }

  submit() {

    return this.enderecoService.create(this.form.value).subscribe(
      res => {
        this.alertService.success('Endereço cadastrado com sucesso')
        this.router.navigateByUrl('endereco/index');
      }, (err) => {
        this.alertService.error('Ocorreu um erro', 'Erro')
      }
    )

  }

  lowerCaseFields() {
    this.form.get('logradouro')?.valueChanges.subscribe( (event: any) => {
      this.form.get('logradouro')?.setValue(event.toLowerCase(), {emitEvent: false})
    })
  }


}
