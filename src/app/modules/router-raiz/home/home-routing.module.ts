import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path:'books',
    loadChildren:() => import('@modules/router-child/router-books/books/books.module').then(m => m.BooksModule),
  },
  {
    path:'books/detail/:id',
    loadChildren:() =>import('@modules/router-child/router-books/detail/detail.module').then(m => m.DetailModule)
  },  
  {
    path:'addBook',
    loadChildren:() => import('@modules/router-child/add-book/add-book.module').then(m => m.AddBookModule)
  },
  {
    path:'addListBook',
    loadChildren:() => import('@modules/router-child/add-list-book/add-list-book.module').then(m => m.AddListBookModule)
  },
  {
    path:'explore',
    loadChildren:() => import('@modules/router-child/explore/explore.module').then(m => m.ExploreModule)
  },
  {
    path:'favorites',
    loadChildren:() => import('@modules/router-child/router-books/favorites/favorites.module').then(m => m.FavoritesModule)
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
