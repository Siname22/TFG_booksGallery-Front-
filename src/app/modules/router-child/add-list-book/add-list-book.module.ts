import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddListBookRoutingModule } from './add-list-book-routing.module';
import { AddListBookPageComponent } from './add-list-book-page/add-list-book-page.component';


@NgModule({
  declarations: [
    AddListBookPageComponent
  ],
  imports: [
    CommonModule,
    AddListBookRoutingModule
  ]
})
export class AddListBookModule { }
