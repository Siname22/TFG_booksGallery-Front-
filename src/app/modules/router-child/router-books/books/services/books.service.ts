import { environment } from 'src/enviroments/environment';
import { BooksModel } from '@core/models/books.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, mergeMap, tap, catchError } from 'rxjs/operators';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private readonly URL = environment.api

  constructor(private http: HttpClient, private cookie: CookieService) {

  }
  /**
   * 
   * 
   * @returns todos los libros del usuario
   */
  getAllBooks$(): Observable<any> {
    console.log('UserBooks = ',`${this.URL}/books_gallery/`, this.addHeader())
    return this.http.get(`${this.URL}/books_gallery/`, this.addHeader())
      .pipe(
        map((data : any) => {
          return data
        })
      )
  }

  deleteBook_Id$(idBook: any): Observable<any> {
    console.log('Deletebook = ',`${this.URL}/delete_book_gallery/${idBook}/`, this.addHeader())
    return this.http.delete(`${this.URL}/delete_book_gallery/${idBook}/`, this.addHeader())
    .pipe(
      map((data: any) => {
        return data
      })
    )
  }




  addHeader() {
    const token = this.cookie.get('token');
    return{
      headers: new HttpHeaders({
        authorization: `${token}`
      })
    };
  }

}