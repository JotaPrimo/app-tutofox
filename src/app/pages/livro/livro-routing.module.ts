import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// componentes
import { IndexComponent } from './index/index.component';
import { EditComponent } from './edit/edit.component';
import { CreateComponent } from './create/create.component';

const routes: Routes = [
  { path: 'livro', redirectTo: 'livro/index', pathMatch: 'full' },
  { path: 'livro/index', component: IndexComponent },
  { path: 'livro/create', component: CreateComponent },
  { path: 'livro/edit/:idLivro', component: EditComponent }
];


// const routes: Routes = [
//   { path: 'person', redirectTo: 'person/index', pathMatch: 'full' },
//   { path: 'person/index', component: IndexComponent },
//   { path: 'person/create', component: CreateComponent },
//   { path: 'person/edit/:idPerson', component: EditComponent }
// ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})


export class LivroRoutingModule { }
