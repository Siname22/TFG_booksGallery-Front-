import { environment } from 'src/enviroments/environment';
import { BooksModel } from '@core/models/books.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, mergeMap, tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private readonly URL = environment.api

  constructor(private http: HttpClient) {

  }
  /**
   * 
   * 
   * @returns todos los libros del usuario
   */
  getAllBooks$(): Observable<any> {
    console.log(this.URL)
    return this.http.get(`${this.URL}/books_gallery/1`)
      .pipe(
        map((data : any) => {
          return data
        })
      )
  }

}