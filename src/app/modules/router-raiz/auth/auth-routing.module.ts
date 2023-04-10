import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './page/login-page/login-page.component';

const routes: Routes = [
  {
    path: 'login',//TODO http://localhost:4200/auth/login
    component: LoginPageComponent
  },
  //Redireccion de rutas que no existen
  {
    path: '**',
    redirectTo: '/auth/login'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }