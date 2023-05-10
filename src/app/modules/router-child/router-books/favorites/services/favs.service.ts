import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from 'src/enviroments/environment';

@Injectable({
  providedIn: 'root'
})
export class FavsService {
  private readonly URL = environment.api

  constructor(private http: HttpClient) { }

  /**
   * 
   * 
   * @returns todos los libros favoritos del usuario
   */

  getFavsBooks$(): Observable<any> {
    console.log('FavsBooks =' , `${this.URL}/favorites/1`)
    return this.http.get(`${this.URL}/favorites/1`)
    .pipe(
      map((data: any)=>{
        return data
      })
    )
  }
}
