import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/alert.service';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  // preciso trazer os formGroup
  form: FormGroup | any;

  // service and router

  constructor(
    public personService: PersonService,
    public alertService: AlertService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      name:  new FormControl('', [ Validators.required, Validators.pattern('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ \-\']+') ]),
      email: new FormControl('', [ Validators.required, Validators.email ]),
      phone: new FormControl('', [ Validators.required, Validators.pattern("^[0-9]*$") ]),
    });
  }

  get f(){
    return this.form.controls;
  }

  submit() {
    console.log(this.form.value);
    return this.personService.create(this.form.value).subscribe(
      res => {
        console.log('Person created successfully!');
        this.alertService.success('Operação realizada com sucesso');
        this.router.navigateByUrl('person/index');
      }
    );
  }

}
