import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { ListComponent } from "./list/list.component";
import { CreateComponent } from "./create/create.component";
import { EditComponent } from "./edit/edit.component";
import { AddUserGuardGuard } from '../guards/add-user-guard.guard';

const routes: Routes = [
  { path: 'user', redirectTo: 'user/list', pathMatch: 'full' },
  { path: 'user/list', component: ListComponent },
  { path: 'user/create', component: CreateComponent, canActivate: [AddUserGuardGuard] },
  { path: 'user/edit/:idUser', component: EditComponent, canActivate: [AddUserGuardGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
