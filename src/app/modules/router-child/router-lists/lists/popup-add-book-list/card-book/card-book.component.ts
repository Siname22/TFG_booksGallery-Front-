import { Component, Input, OnInit } from '@angular/core';
import { BooksModel } from '@core/models/books.model';
import { SectionComponent } from '../section/section.component';

@Component({
  selector: 'app-card-book',
  templateUrl: './card-book.component.html',
  styleUrls: ['./card-book.component.css']
})
export class CardBookComponent implements OnInit{
  esLista: boolean = this.sectionGeneric.estaLleno
  @Input() books:BooksModel = {id:'', nombre:'',saga:'',portada:'',editorial:'',sinopsis:'', favoritos:false};
  constructor(private sectionGeneric: SectionComponent){ }
  
  ngOnInit(): void {
    
  }

}
