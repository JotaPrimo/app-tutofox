import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { IndexComponent } from "../endereco/index/index.component";
import { CreateComponent } from "../endereco/create/create.component";
import { EditComponent } from "../endereco/edit/edit.component";

const routes: Routes = [
  { path: 'endereco', redirectTo: 'endereco/index', pathMatch: 'full' },
  { path: 'endereco/index', component: IndexComponent },
  { path: 'endereco/create', component: CreateComponent },
  { path: 'endereco/edit/:idEndereco', component:EditComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EnderecoRoutingModule { }
