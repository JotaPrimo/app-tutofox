import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { ListComponent } from "./list/list.component";
import { CreateComponent } from "./create/create.component";
import { EditComponent } from "./edit/edit.component";

const routes: Routes = [
  { path: 'user', redirectTo: 'user/list', pathMatch: 'full' },
  { path: 'user/list', component: ListComponent },
  { path: 'user/create', component: CreateComponent },
  { path: 'user/edit/:idUser', component: EditComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
