import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// imports
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { EnderecoRoutingModule } from './endereco-routing.module';
import { IndexComponent } from './index/index.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { SearchComponent } from './search/search.component';



@NgModule({
  declarations: [
    IndexComponent,
    CreateComponent,
    EditComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    EnderecoRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class EnderecoModule { }
