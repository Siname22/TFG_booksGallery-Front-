import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BooksModel } from '@core/models/books.model';
import * as dataRaw from '../..../../../../data/books.json'

@Component({
  selector: 'app-detail-book',
  templateUrl: './detail-book.component.html',
  styleUrls: ['./detail-book.component.css']
})
export class DetailBookComponent implements OnInit{
  @Input() bookShow:Array<BooksModel> =[]

  bookId = this.route.snapshot.paramMap.get('id')
  dataBooksModel:Array<BooksModel> = []
  

  constructor(private route: ActivatedRoute){
    console.log('Book_Id', this.bookId)
   }

  ngOnInit(): void {
    const { data }:any = (dataRaw as any).default
    this.dataBooksModel = data  
    for (let i = 0; i < this.dataBooksModel.length; i++) {
      if (this.dataBooksModel[i]._id == this.bookId) { 
        this.bookShow.push(this.dataBooksModel[i])
        console.log('Se ha encontrado el libro', this.dataBooksModel[i])
      }
    }  
  }
}