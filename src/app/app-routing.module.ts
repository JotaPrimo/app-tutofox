import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';

const routes: Routes = [{
  path: 'reactive-form',
  component: ReactiveFormsComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
