import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksRoutingModule } from './books-routing.module';
import { BooksPageComponent } from './page/books-page/books-page.component';
import { SharedModule } from '@shared/shared.module';


@NgModule({
  declarations: [
    BooksPageComponent
  ],
  imports: [
    CommonModule,
    BooksRoutingModule,
    SharedModule
  ]
})
export class BooksModule { }
