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
    console.log('UserBooks = ',`${this.URL}/books_gallery/1`)
    return this.http.get(`${this.URL}/books_gallery/1`)
      .pipe(
        map((data : any) => {
          return data
        })
      )
  }

  deleteBook_Id$(idBook: any): Observable<any> {
    console.log('Deletebook = ',`${this.URL}/delete_book_gallery/${idBook}/1`)
    return this.http.delete(`${this.URL}/delete_book_gallery/${idBook}/1`)
    .pipe(
      map((data: any) => {
        return data
      })
    )
  }

}