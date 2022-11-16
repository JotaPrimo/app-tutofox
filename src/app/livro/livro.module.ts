import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LivroRoutingModule } from './livro-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IndexComponent } from '../pages/livro/index/index.component';
import { EditComponent } from '../pages/livro/edit/edit.component';
import { CreateComponent } from '../pages/livro/create/create.component';


@NgModule({
  declarations: [
    IndexComponent,
    EditComponent,
    CreateComponent
  ],
  imports: [
    CommonModule,
    LivroRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class LivroModule { }
