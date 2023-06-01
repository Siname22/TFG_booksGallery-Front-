import { environment } from './../../../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private readonly URL = environment.api

  constructor(private http: HttpClient,  private cookie: CookieService) { }

  searchBooks$(term: string): Observable<any> {
    console.log('🔴 Llamamos a nuestra API HTTP GET:', `${this.URL}/books/${term}`);
    return this.http.get(`${this.URL}/books/${term}`)
      .pipe(
        map((dataRaw: any) => {
          console.log('Obtengo los datos que quiero:', dataRaw);
          return dataRaw
        })
      )
  }

  addBook$(name:string): Observable<any> {
    console.log('AddBookUser: ', `${this.URL}/addBookToGallery/`,{name}, this.addHeader())
    return this.http.post(`${this.URL}/addBookToGallery/`, {name}, this.addHeader())
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