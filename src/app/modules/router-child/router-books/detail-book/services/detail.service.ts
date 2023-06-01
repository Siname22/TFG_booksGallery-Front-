import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DetailService {
  private readonly URL = environment.api
  constructor(private http: HttpClient, private cookie: CookieService){
  }

  /**
   * 
   *  @returns la informacion del libro que queremos ver
   */
  getDetailBook$(bookId:any): Observable<any> {
    console.log('DetailBook = ',`${this.URL}/detail_book_gallery/${bookId}/`, this.addHeader())
    return this.http.get(`${this.URL}/detail_book_gallery/${bookId}/`, this.addHeader())
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
