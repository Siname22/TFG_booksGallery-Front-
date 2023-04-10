import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from '@modules/router-raiz/home/page/home-page/home-page.component';

const routes: Routes = [
 {
  path:'auth', //TODO: (public) http://locallhost:4200/ <-------
  loadChildren:() => import('@modules/router-raiz/auth/auth.module').then(m => m.AuthModule),
 },
 {
  path:'', //TODO: (private) http://locallhost:4200/ <-------
  component: HomePageComponent,
  loadChildren:() => import('./modules/router-raiz/home/home.module').then(m => m.HomeModule),
 }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
