import { Component, OnDestroy, OnInit } from '@angular/core';
import { BooksModel } from '@core/models/books.model';
import { BookService } from '@modules/router-child/router-books/books/services/books.service';
import { Subscription, Observable, of } from 'rxjs';


@Component({
  selector: 'app-books-page',
  templateUrl: './books-page.component.html',
  styleUrls: ['./books-page.component.css']
})
export class BooksPageComponent implements OnInit, OnDestroy {
  dataBooks:Array<BooksModel> = []
  listObervers$ : Array<Subscription> = []
  listResult$: Observable<BooksModel[]> = of([])

  constructor(private bookService: BookService){ }

  ngOnInit(): void {
    this.bookService.getAllBooks$()
      .subscribe((response: BooksModel[]) =>{
        console.log('Todos los libros del user: ', response)
        this.dataBooks = response
      })
    this.receiveData
  }

  ngOnDestroy(): void {
  }

  receiveData(event: any): void{
    if(window.confirm('¿Seguro que quieres elimar el libro?') == true){
      this.bookService.deleteBook_Id$(event)
      .subscribe((response: BooksModel[]) =>{
        console.log(response)
        this.dataBooks = response
        console.log('datos que sigue teniendo el user = ', this.dataBooks)
        window.location.reload()
      })
    } 
  }
  changeFavorite(event:any): void{
    this.bookService.changeFav$(event)
    .subscribe((response:BooksModel[]) =>{
      this.dataBooks = response
      console.log(this.dataBooks)
      window.location.reload()
    })
  }

}
