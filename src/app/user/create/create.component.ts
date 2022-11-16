import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService } from 'src/app/alert.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  form: FormGroup = this.formBuilder.group({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    tipo_user: new FormControl('',  [Validators.required])
  });

  constructor(
    public route: ActivatedRoute,
    public router: Router,
    public userService: UserService,
    private serviceAlert: AlertService,
    public formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
  }

  get f() {
    return this.form.controls;
  }

  submit() {
    return this.userService.create(this.form.value).subscribe(
      res => {
        this.serviceAlert.success('Operação realizada com sucesso');
        this.router.navigateByUrl('user');
      }
    );
  }

}
