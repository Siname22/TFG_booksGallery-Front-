import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddBookRoutingModule } from './add-book-routing.module';
import { AddBookPageComponent } from './add-book-page/add-book-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchComponent } from '@modules/router-child/explore/components/search/search.component';


@NgModule({
  declarations: [
    AddBookPageComponent,
    
  ],
  imports: [
    CommonModule,
    AddBookRoutingModule,
    ReactiveFormsModule,
  ]
})
export class AddBookModule { }
