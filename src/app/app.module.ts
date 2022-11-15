
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { PersonModule } from './person/person.module';

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { EnderecoModule } from './endereco/endereco.module';
import { ToastrModule } from 'ngx-toastr';
import { UserModule } from './user/user.module';
import { FormsComponent } from './forms/forms.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { IndexComponent } from './pages/livro/index/index.component';
import { CreateComponent } from './pages/livro/create/create.component';
import { EditComponent } from './pages/livro/edit/edit.component';
import { LivroModule } from './livro/livro.module';
import { NgxMaskModule } from 'ngx-mask';


@NgModule({
  declarations: [
    AppComponent,
    FormsComponent,
    ReactiveFormsComponent,
    NavbarComponent,
    IndexComponent,
    CreateComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PersonModule,
    EnderecoModule,
    UserModule,
    LivroModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({}),
    NgxMaskModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
