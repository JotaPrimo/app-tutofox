import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService } from 'src/app/alert.service';
import { delay } from 'rxjs';
import { Livro } from 'src/app/livro/livro';
import { LivroService } from 'src/app/services/livro.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  form: FormGroup | any;
  idLivro: number | any;
  livro: Livro | any;

  constructor(
    private formBuilder: FormBuilder,
    public serviceLivro: LivroService,
    private route: ActivatedRoute,
    private router: Router,
    private alertService: AlertService
  ) { }

  ngOnInit(): void {
    this.idLivro = this.route.snapshot.params['idLivro'];
    this.livro = this.serviceLivro.findById(this.idLivro).pipe(delay(500)).subscribe((data: Livro) => {
      this.livro = data;
    });

    this.initForm();
  }



  get formControls() {
    return this.form.controls;
  }

  initForm() {
    this.form = this.formBuilder.group({
      titulo: new FormControl('', [ Validators.required, Validators.maxLength(15), Validators.minLength(5), Validators.pattern("[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$") ]),
      autor: new FormControl('', [ Validators.required ]),
      isbn: new FormControl('', [ Validators.required ]),
      qntd_exemplares: new FormControl('', [ Validators.required ])
    });
  }

  submit() {
    this.serviceLivro.update(this.idLivro, this.form.value).subscribe(
      res => {
        this.alertService.success('Atualizado  com sucesso', 'Tudo Certo');
        this.router.navigateByUrl('livro/index');
      }
    )
  }



}
