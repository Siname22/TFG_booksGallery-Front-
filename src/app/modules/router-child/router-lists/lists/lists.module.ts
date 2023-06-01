import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListsRoutingModule } from './lists-routing.module';
import { SharedModule } from '@shared/shared.module';
import { ListPageComponent } from './list-page/list-page.component';
import { PopupAddBookListComponent } from './popup-add-book-list/popup-add-book-list.component';
import { SectionComponent } from './popup-add-book-list/section/section.component';
import { CardBookComponent } from './popup-add-book-list/card-book/card-book.component';



@NgModule({
  declarations: [
    ListPageComponent,
    PopupAddBookListComponent,
    SectionComponent,
    CardBookComponent
  ],
  imports: [
    CommonModule,
    ListsRoutingModule,
    SharedModule
  ]
})
export class ListsModule { }
