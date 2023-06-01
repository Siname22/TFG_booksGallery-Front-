import { Component, OnInit } from '@angular/core';
import { Observable, Subscription, of } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { DetailService } from '@modules/router-child/router-books/detail-book/services/detail.service';
import { BooksModel } from '@core/models/books.model';


@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.css']
})
export class DetailPageComponent implements OnInit{
  bookShow$: Observable<any> = of([])
  dataBook: Array<BooksModel> = []
  listObervers$ : Array<Subscription> = []

  bookId = this.route.snapshot.paramMap.get('id')

  constructor(private detailService: DetailService, private route: ActivatedRoute){
    console.log('BookId', this.bookId)
  }
  
  ngOnInit(): void {
    this.detailService.getDetailBook$(this.bookId)
      .subscribe((response: BooksModel[]) =>{
        console.log('Datos recogidos:', response)
        this.dataBook = response
      })
  }

}
