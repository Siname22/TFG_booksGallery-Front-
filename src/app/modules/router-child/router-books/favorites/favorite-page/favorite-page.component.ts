import { Component, OnDestroy, OnInit } from '@angular/core';
import { BooksModel } from '@core/models/books.model';
import { FavsService } from '../services/favs.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-favorite-page',
  templateUrl: './favorite-page.component.html',
  styleUrls: ['./favorite-page.component.css']
})
export class FavoritePageComponent implements OnInit, OnDestroy{
  data_favsBooks:Array<BooksModel> = []
  listObervers$ : Array<Subscription> = []

  constructor(private books_favsService: FavsService){ }

  ngOnInit(): void {
    this.books_favsService.getFavsBooks$()
      .subscribe((response: BooksModel[]): void =>{
        console.log('response',response)
        this.data_favsBooks = response
      })
  }

  ngOnDestroy(): void {

  }

}
