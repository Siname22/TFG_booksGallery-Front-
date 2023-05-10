import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  /* rutas generalizadas */
  {
    path:'books_gallery',
    loadChildren:() => import('@modules/router-child/router-books/books/books.module').then(m => m.BooksModule),
  },
  {
    path:'detail_book/:id',
    loadChildren:() =>import('@modules/router-child/router-books/detail-book/detail-book.module').then(m => m.DetailModule)
  },
  {
    path:'favoritos',
    loadChildren:() => import('@modules/router-child/router-books/favorites/favorites.module').then(m => m.favoritosModule)
  },
  {
    path:'explore',
    loadChildren:() => import('@modules/router-child/explore/explore.module').then(m => m.ExploreModule)
  },
  {
    path:'list_user/:id/:name',
    loadChildren:() => import('@modules/router-child/router-lists/lists/lists.module').then(m => m.ListsModule)
  },

  /* rutas para configuraciones de las galerias */
  {
    path:'add_book_to_gallery',
    loadChildren:() => import('@modules/router-child/add-book/add-book.module').then(m => m.AddBookModule)
  },

  {
    path:'addListBook',
    loadChildren:() => import('@modules/router-child/add-list-book/add-list-book.module').then(m => m.AddListBookModule)
  },
  
  
  {
    path:'**', //TODO: 404 cuando no existe la ruta
    redirectTo: '/books_gallery'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
