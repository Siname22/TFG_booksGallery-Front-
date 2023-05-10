import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from 'src/enviroments/environment';


@Injectable({
  providedIn: 'root'
})
export class ListService {

  private readonly URL = environment.api

  constructor(private http: HttpClient) { }

  getBooksList$(idlist:any): Observable<any> {
    console.log('BooksList = ', `${this.URL}/books_list/${idlist}/1`)
    return this.http.get(`${this.URL}/books_list/${idlist}/1`)
    .pipe(
      map((data:any) => {
        return data
      })
    )
  }

  deleteListBook_Id$(idBook: any, idlist:any): Observable<any> {
    console.log('Deletebook = ',`${this.URL}/delete_book_list/${idBook}/${idlist}/1`)
    return this.http.delete(`${this.URL}/delete_book_list/${idBook}/${idlist}/1`)
    .pipe(
      map((data: any) => {
        return data
      })
    )
  }


}
