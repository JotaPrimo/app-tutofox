import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from '../pages/livro/create/create.component';
import { EditComponent } from '../pages/livro/edit/edit.component';
import { IndexComponent } from '../pages/livro/index/index.component';

const routes: Routes = [
  { path: 'livro', pathMatch: 'full', redirectTo: 'livro/index' },
  { path: 'livro/index', component: IndexComponent },
  { path: 'livro/create', component: CreateComponent },
  { path: 'livro/edit/:idLivro', component: EditComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LivroRoutingModule { }
