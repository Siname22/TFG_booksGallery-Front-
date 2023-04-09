import { Component, Input, OnInit } from '@angular/core';
import { BooksModel } from '@core/models/books.model';
import * as dataRaw from '../../../data/books.json'

@Component({
  selector: 'app-result-books',
  templateUrl: './result-books.component.html',
  styleUrls: ['./result-books.component.css']
})
export class ResultBooksComponent implements OnInit{
  @Input() books: BooksModel[] = []
  optionSort:{ property: string | null, order: string } = { property: null, order: 'asc' }
  constructor(){ }

  ngOnInit(): void {
    const { data }: any = (dataRaw as any).default
    this.books = data
  }

  changeSort(property: string): void {
    const { order } = this.optionSort
    this.optionSort ={
      property,
      order: order === 'asc' ? 'desc' : 'asc'
    }
    console.log(this.optionSort);

  }
}
