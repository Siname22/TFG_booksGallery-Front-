import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BooksPageComponent } from '@modules/router-child/router-books/books/page/books-page/books-page.component';
import { ListPageComponent } from '@modules/router-child/router-lists/lists/list-page/list-page.component';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    BooksPageComponent,
    ListPageComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
