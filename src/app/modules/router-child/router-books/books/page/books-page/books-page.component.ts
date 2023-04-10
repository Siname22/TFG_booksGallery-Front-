import { Component, OnDestroy, OnInit } from '@angular/core';
import { BooksModel } from '@core/models/books.model';
import * as dataRaw from '../../../../../../data/books.json'


@Component({
  selector: 'app-books-page',
  templateUrl: './books-page.component.html',
  styleUrls: ['./books-page.component.css']
})
export class BooksPageComponent implements OnInit, OnDestroy {
  dataBooks:Array<BooksModel> = [
    
  ]

  constructor(){ }

  ngOnInit(): void {
    const { data } :any = (dataRaw as any).default
    this.dataBooks = data;
  }

  ngOnDestroy(): void {

  }

}
