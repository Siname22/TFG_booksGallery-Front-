import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { BooksModel } from '@core/models/books.model';
import { BookService } from '@modules/router-child/router-books/books/services/books.service';
import { PopuUpService } from './services/popu-up.service';


@Component({
  selector: 'app-popup-add-book-list',
  templateUrl: './popup-add-book-list.component.html',
  styleUrls: ['./popup-add-book-list.component.css'],
})
export class PopupAddBookListComponent implements OnInit{
  dataBooks:Array<BooksModel> =[]
  listId:any

  constructor(private bookService: BookService){
    
  }

  ngOnInit(): void {
    this.bookService.getAllBooks$()
      .subscribe((response: BooksModel[]) =>{
        console.log('Todos los libros del user: ', response)
        this.dataBooks = response
      })
      
  }

  
  
}
