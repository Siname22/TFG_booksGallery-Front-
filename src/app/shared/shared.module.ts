import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { SectionGenericComponent } from './components/section-generic/section-generic.component';
import { CardBooksComponent } from './components/card-books/card-books.component';
import { ResultBooksComponent } from './components/result-books/result-books.component';
import { OrderListPipe } from './pipe/order-list.pipe';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DetailBookComponent } from './components/detail-book/detail-book.component';

@NgModule({
  declarations: [
    SideBarComponent,
    SectionGenericComponent,
    CardBooksComponent,
    ResultBooksComponent,
    OrderListPipe,
    DetailBookComponent,
    ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports:[
    SideBarComponent,
    SectionGenericComponent,
    CardBooksComponent,
    ResultBooksComponent,
    OrderListPipe,
    DetailBookComponent,
  ]
})
export class SharedModule { }
