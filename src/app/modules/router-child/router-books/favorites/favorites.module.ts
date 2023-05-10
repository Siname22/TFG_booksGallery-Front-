import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { FavoritePageComponent } from './favorite-page/favorite-page.component';
import { SharedModule } from '@shared/shared.module';
import { FavoritesRoutingModule } from './favorites-routing.module';


@NgModule({
  declarations: [
    FavoritePageComponent
  ],
  imports: [
    CommonModule,
    FavoritesRoutingModule,
    SharedModule
  ]
})
export class favoritosModule { }
