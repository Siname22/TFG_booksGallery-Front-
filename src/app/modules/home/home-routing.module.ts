import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './page/home-page/home-page.component';

const routes: Routes = [
 {
  path:'books',
  loadChildren:() => import('@modules/books/books.module').then(m => m.BooksModule)
 },
 {
  path:'favorites',
  loadChildren:() => import('@modules/favorites/favorites.module').then(m => m.FavoritesModule)
 },
 {
  path:'explore',
  loadChildren:() => import('@modules/explore/explore.module').then(m => m.ExploreModule)
 },
 {
  path:'**', //TODO: 404 cuando no existe la ruta
  redirectTo: '/books'
 }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
