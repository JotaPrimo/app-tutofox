import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AlertService } from 'src/app/alert.service';
import Swal from 'sweetalert2';
import { Endereco } from '../endereco';
import { EnderecoService } from '../endereco.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  enderecos: Endereco[] = [];

  constructor(
    private enderecoService: EnderecoService,
    private serviceAlert: AlertService
  ) { }

  ngOnInit(): void {
    this.getList();
  }

  getList() {
    this.enderecoService.getAll().subscribe((data) => {
      this.enderecos = data
    }, (err) => {
      this.serviceAlert.error('Listagem de endereços não pode ser carregada');
    });
  }

  delete(idEndereco: number) {

    this.serviceAlert.confirm().then((result) => {
      if (result.isConfirmed) {
        this.enderecoService.delete(idEndereco).subscribe(res => {
          this.serviceAlert.success('Registro deletado com sucesso', 'Tudo Certo')
          this.enderecos = this.enderecos.filter(item => item.id !== idEndereco);
        }, (err) => {
          this.serviceAlert.error('Não foi deletar', 'Erro');
        });
      }
    })

  }


}
