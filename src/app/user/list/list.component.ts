import { Component, OnInit } from '@angular/core';
import { delay } from 'rxjs';
import { AlertService } from 'src/app/alert.service';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  users: User[] = [];

  constructor(
    private serviceAlert: AlertService,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.getList();
  }

  getList() {
    this.userService.getAll().subscribe((data) => {
      this.users = data;
    }, (err) => {
      this.serviceAlert.error('Não foi possivel carregar a lista de users')
    })
  }

  delete(idUser: number) {
    this.serviceAlert.confirm().then((result) => {
      if (result.isConfirmed) {
        this.userService.delete(idUser).subscribe((res) => {
          this.serviceAlert.success('User deletado com sucesso');
          this.users = this.users.filter(item => item.id !== idUser);
        }, (err) => {
          this.serviceAlert.error('Ocorreu um erro')
        })
      }
    })
  }



}
