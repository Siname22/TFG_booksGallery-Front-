import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BooksModel } from '@core/models/books.model';
import { Observable, of } from 'rxjs';


@Component({
  selector: 'app-detail-book',
  templateUrl: './detail-book.component.html',
  styleUrls: ['./detail-book.component.css']
})
export class DetailBookComponent {
  bookId = this.route.snapshot.paramMap.get('id')
  @Input() dataBook: Array<BooksModel> = [] 
  @Input() infoBook:BooksModel = {id:`${this.bookId}`, nombre:'',saga:'',portada:'',editorial:'',sinopsis:'', favoritos:false};
  
  
  

  constructor(private route: ActivatedRoute){

   }
}