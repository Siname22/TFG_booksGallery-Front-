import { Component, OnDestroy, OnInit } from '@angular/core';
import { BooksModel } from '@core/models/books.model';
import { BookService } from '@modules/router-child/router-books/books/services/books.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-books-page',
  templateUrl: './books-page.component.html',
  styleUrls: ['./books-page.component.css']
})
export class BooksPageComponent implements OnInit, OnDestroy {
  dataBooks:Array<BooksModel> = []
  listObervers$ : Array<Subscription> = []

  constructor(private boookService: BookService){ }

  ngOnInit(): void {
    this.boookService.getAllBooks$()
      .subscribe((response: BooksModel[]) =>{
        console.log(response)
        this.dataBooks = response
      })
  }

  ngOnDestroy(): void {

  }

}
