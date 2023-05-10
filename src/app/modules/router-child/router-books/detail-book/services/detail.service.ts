import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from 'src/enviroments/environment';

@Injectable({
  providedIn: 'root'
})
export class DetailService {
  private readonly URL = environment.api
  constructor(private http: HttpClient){
  }

  /**
   * 
   *  @returns la informacion del libro que queremos ver
   */
  getDetailBook$(bookId:any): Observable<any> {
    console.log('DetailBook = ',`${this.URL}/detail_book_gallery/${bookId}/1`)
    return this.http.get(`${this.URL}/detail_book_gallery/${bookId}/1`)
    .pipe(
      map((data: any) => {
        return data
      })
    )      
  }
}
