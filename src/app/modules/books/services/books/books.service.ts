import { environment } from 'src/enviroments/environment';
import { BooksModel } from '@core/models/books.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, mergeMap, tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  private readonly URL = environment.api

  constructor(private http: HttpClient) {

  }

  /**
   * 
   * @returns Devolver todas los libros
   */

  private skipById(listTracks: BooksModel[], id: number): Promise<BooksModel[]> {
    return new Promise((resolve, reject) => {
      const listTmp = listTracks.filter(a => a._id !== id)
      resolve(listTmp)
    })
  }

  /**
   * TODO {data:[..1,...2,..2]}
   * 
   * @returns 
   */
  getAllBooks$(): Observable<any> {
    return this.http.get(`${this.URL}/tracks`)
      .pipe(
        map(({ data }: any) => {
          return data
        })
      )
  }

}
