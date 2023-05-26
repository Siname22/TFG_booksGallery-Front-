import { Component, Input, OnInit } from '@angular/core';
import { BooksModel } from '@core/models/books.model';
import { SearchService } from '@modules/router-child/explore/services/search.service';


@Component({
  selector: 'app-result-books',
  templateUrl: './result-books.component.html',
  styleUrls: ['./result-books.component.css']
})
export class ResultBooksComponent implements OnInit{
  @Input() books: BooksModel[] = []
  
  optionSort:{ property: string | null, order: string } = { property: null, order: 'asc' }
  constructor(private searchService: SearchService){ }

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

  addBook(nameBook:string){
    const name  = nameBook;
    this.searchService.addBook$(name)
    .subscribe((response: any) =>{
      console.log(response)
      window.alert('Has añadido a tu galeria el libro: ' + name)
      window.location.reload()
    })
  }
}
  
