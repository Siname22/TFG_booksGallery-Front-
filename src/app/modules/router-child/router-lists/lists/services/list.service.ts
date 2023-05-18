import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable, map, tap } from 'rxjs';
import { environment } from 'src/enviroments/environment';


@Injectable({
  providedIn: 'root'
})
export class ListService {

  private readonly URL = environment.api

  constructor(private http: HttpClient, private cookie: CookieService) { }

  getBooksList$(idlist:any): Observable<any> {
    console.log('BooksList = ', `${this.URL}/books_list/${idlist}/`, this.addHeader())
    return this.http.get(`${this.URL}/books_list/${idlist}/`,this.addHeader())
    .pipe(
      map((data:any) => {
        return data
      })
    )
  }

  deleteListBook_Id$(idBook: any, idlist:any): Observable<any> {
    console.log('Deletebook = ',`${this.URL}/delete_book_list/${idBook}/${idlist}/`, this.addHeader())
    return this.http.delete(`${this.URL}/delete_book_list/${idBook}/${idlist}/`,this.addHeader())
    .pipe(
      map((data: any) => {
        return data
      })
    )
  }

  addList(name:string): Observable<any> {
    const body = {
      name
    }
    return this.http.post(`${this.URL}/addList/`, body, this.addHeader())
    .pipe(
      tap((responseOk: any) =>{
        console.log('Estoy aqui', responseOk)
      })
    )
  }


  addHeader() {
    const token = this.cookie.get('token');
    console.log('token del header ', token)
    return{
      headers: new HttpHeaders({
        authorization: `${token}`
      })
    };
  }
}
