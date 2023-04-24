import { Component, Input, OnInit } from '@angular/core';
import { BooksModel } from '@core/models/books.model';


@Component({
  selector: 'app-card-books',
  templateUrl: './card-books.component.html',
  styleUrls: ['./card-books.component.css']
})
export class CardBooksComponent implements OnInit{

  @Input() books:BooksModel = {id:0, nombre:'',saga:'',portada:'',editorial:'',sinopsis:'', favoritos:false};
  constructor(){ }

  ngOnInit(): void {
    
  }

}
