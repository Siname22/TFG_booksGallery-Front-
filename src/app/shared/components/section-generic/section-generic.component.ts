import { Component, Input, OnInit } from '@angular/core';
import { BooksModel } from '@core/models/books.model';


@Component({
  selector: 'app-section-generic',
  templateUrl: './section-generic.component.html',
  styleUrls: ['./section-generic.component.css']
})
export class SectionGenericComponent implements OnInit{
  
  @Input() title:string = 'Tu Galeria de  Libros'
  @Input() dataBooks:Array<BooksModel> = []
  constructor(){

  }

  ngOnInit(): void {
  }
}