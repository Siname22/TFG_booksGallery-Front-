import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddBookRoutingModule } from './add-book-routing.module';
import { AddBookPageComponent } from './add-book-page/add-book-page.component';


@NgModule({
  declarations: [
    AddBookPageComponent
  ],
  imports: [
    CommonModule,
    AddBookRoutingModule
  ]
})
export class AddBookModule { }
