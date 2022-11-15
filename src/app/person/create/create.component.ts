import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/alert.service';
import { Person } from '../person';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  person: Person | any;

  // preciso trazer os formGroup
  public form: FormGroup = this.formBuilder.group({
    name:  new FormControl('', [ Validators.required, Validators.minLength(5), Validators.maxLength(15) ]),
    email: new FormControl('', [ Validators.required, Validators.email ]),
    phone: new FormControl('', [ Validators.required, Validators.pattern("^[0-9]*$") ])
  });

  // service and router

  constructor(
    public personService: PersonService,
    public alertService: AlertService,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {

  }

  get f() {
    return this.form.controls;
  }

  submit() {
    return this.personService.create(this.form.value).subscribe(
      res => {
        console.log('Person created successfully!');
        this.alertService.success('Operação realizada com sucesso');
        this.router.navigateByUrl('person/index');
      }
    );
  }

}
