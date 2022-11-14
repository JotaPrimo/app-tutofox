import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { delay } from 'rxjs';
import { AlertService } from 'src/app/alert.service';
import { Person } from '../person';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  idPerson: number | any;
  form: FormGroup | any;
  person: Person | any;

  constructor(
    public personService: PersonService,
    private route: ActivatedRoute,
    private alertService: AlertService,
    private toastrService: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.idPerson = this.route.snapshot.params['idPerson'];
    this.personService.find(this.idPerson).pipe(delay(200)).subscribe(
      (data: Person) => {
        this.person = data
      }
    );

    this.form = new FormGroup({
      name:  new FormControl('', [ Validators.required, Validators.pattern('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ \-\']+') ]),
      email: new FormControl('', [ Validators.required, Validators.email]),
      phone: new FormControl('', [ Validators.required, Validators.pattern("^[0-9]*$") ])
    });

  }

  get f() {
    return this.form.controls;
  }

  submit() {
    this.personService.update(this.idPerson, this.form.value).subscribe(
      res => {
       this.toastrService.success('Atualizado  com sucesso', 'Tudo Certo');
        this.router.navigateByUrl('person/index');
      }
    )
  }


}
