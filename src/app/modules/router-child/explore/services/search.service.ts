import { environment } from './../../../../../enviroments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private readonly URL = environment.api

  constructor(private http: HttpClient) { }

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
}