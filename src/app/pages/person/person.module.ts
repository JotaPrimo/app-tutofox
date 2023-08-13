import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// routing
import { PersonRoutingModule } from './person-routing.module';

// componentes
import { IndexComponent } from './index/index.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';

// forms
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

// icons
import { SortIconComponent } from 'src/app/components/sort-icon/sort-icon.component';

@NgModule({
  declarations: [
    SortIconComponent,
    IndexComponent,
    CreateComponent,
    EditComponent,
  ],
  imports: [
    CommonModule,
    PersonRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
  ]
})
export class PersonModule { }
