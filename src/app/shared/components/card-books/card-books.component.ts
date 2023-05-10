import { Component, Input, OnInit } from '@angular/core';
import { BooksModel } from '@core/models/books.model';
import { BooksPageComponent } from '@modules/router-child/router-books/books/page/books-page/books-page.component';
import { ListPageComponent } from '@modules/router-child/router-lists/lists/list-page/list-page.component';
import { SectionGenericComponent } from '../section-generic/section-generic.component';



@Component({
  selector: 'app-card-books',
  templateUrl: './card-books.component.html',
  styleUrls: ['./card-books.component.css']
})
export class CardBooksComponent implements OnInit{
  esLista: boolean = this.sectionGeneric.esLista
  @Input() books:BooksModel = {id:'', nombre:'',saga:'',portada:'',editorial:'',sinopsis:'', favoritos:false};
  constructor(private bookComponent: BooksPageComponent, private listComponent: ListPageComponent, private sectionGeneric: SectionGenericComponent){ }
  
  ngOnInit(): void {
    
  }
  
  public deleteBookId(idBook: any): void{
    this.bookComponent.receiveData(idBook)
  }

  public deleteBookListId(idBook: any): void{
    this.listComponent.receiveData(idBook)
  }
}
