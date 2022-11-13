import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { delay } from 'rxjs';
import { AlertService } from 'src/app/alert.service';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  public idUser: number | any;
  public form: FormGroup | any;
  public user: User | any;

  constructor(
    public userService: UserService,
    private route: ActivatedRoute,
    private router: Router,
    private alertService: AlertService
  ) { }

  ngOnInit(): void {
    this.idUser = this.route.snapshot.params['idUser'];
    this.user = this.userService.findById(this.idUser).subscribe((data: User) => {
      this.user = data;
    });

    this.initFormGroup();

  }

   initFormGroup() {
    this.form = new FormGroup({
      name:  new FormControl('', [ Validators.required, Validators.pattern('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ \-\']+') ]),
      email: new FormControl('', [ Validators.required, Validators.email])      
    });
  }


  get f() {
    return this.form.controls;
  }

  submit() {
    this.userService.update(this.idUser, this.form.value).subscribe(
      res => {
        this.alertService.success('Dados atualizados com sucesso', 'Tudo Certo')
        this.router.navigateByUrl('user/list');
      }
    )
  }

}
