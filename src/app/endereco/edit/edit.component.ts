import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { delay } from 'rxjs';
import { AlertService } from 'src/app/alert.service';
import { Endereco } from '../endereco';
import { EnderecoService } from '../endereco.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  idEndereco: number | any;
  form: FormGroup | any;
  endereco: Endereco | any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public enderecoService: EnderecoService,
    public alertService: AlertService
  ) { }

  ngOnInit(): void {
    this.idEndereco = this.route.snapshot.params['idEndereco'];
    this.endereco = this.enderecoService.find(this.idEndereco).pipe(delay(500)).subscribe((data: Endereco) => {
      this.endereco = data;
    });

    this.form = new FormGroup({
      logradouro: new FormControl('', [ Validators.required ]),
      tipo: new FormControl('', [ Validators.required ]),
      cidade: new FormControl('', [ Validators.required ]),
      estado: new FormControl('', [ Validators.required ]),
    });
  }

  get f() {
    return this.form.controls;
  }

  submit() {
    
    this.enderecoService.update(this.idEndereco, this.form.value).subscribe(
      res => {
        this.alertService.success('Dados atualizados com sucesso', 'Tudo Certo')
        this.router.navigateByUrl('endereco/index');
      }
    )
  }

  lowerCaseFields() { 
    this.form.get('logradouro')?.valueChanges.subscribe( (event: any) => {
      this.form.get('logradouro')?.setValue(event.toLowerCase(), {emitEvent: false})
    });
  }

}
