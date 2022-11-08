import { Component, OnInit } from '@angular/core';
import { Endereco } from '../endereco';
import { EnderecoService } from '../endereco.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  enderecos: Endereco[] = [];

  constructor(private enderecoService: EnderecoService) { }

  ngOnInit(): void {
    this.enderecoService.getAll().subscribe((data) => {
      this.enderecos = data
    });
  }


  delete(idEndereco: number) {
    this.enderecoService.delete(idEndereco).subscribe(res => {
      this.enderecos = this.enderecos.filter(item => item.id !== idEndereco);
    })
  }

}
