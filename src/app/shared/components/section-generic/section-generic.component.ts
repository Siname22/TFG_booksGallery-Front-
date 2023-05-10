import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { BooksModel } from '@core/models/books.model';
import { CardBooksComponent } from '../card-books/card-books.component';


@Component({
  selector: 'app-section-generic',
  templateUrl: './section-generic.component.html',
  styleUrls: ['./section-generic.component.css']
})
export class SectionGenericComponent implements OnInit{
  
  @Input() title:string ='';
  @Input() dataBooks:Array<BooksModel> = []
  @Input() public esLista: boolean = false
  constructor(){

  }

  ngOnInit(): void {
  
  }

}