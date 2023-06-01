import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BooksPageComponent } from '@modules/router-child/router-books/books/page/books-page/books-page.component';
import { ListPageComponent } from '@modules/router-child/router-lists/lists/list-page/list-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import { SharedModule } from "./shared/shared.module";
import { SectionComponent } from '@modules/router-child/router-lists/lists/popup-add-book-list/section/section.component';

@NgModule({
    declarations: [
        AppComponent
    ],
    providers: [
        BooksPageComponent,
        ListPageComponent,
        SectionComponent
    ],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MatDialogModule,
        SharedModule
    ]
})
export class AppModule { }
