import { Component, Input, OnInit } from '@angular/core';
import { BooksModel } from '@core/models/books.model';


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
