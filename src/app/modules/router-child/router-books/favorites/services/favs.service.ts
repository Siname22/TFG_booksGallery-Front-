import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable, map } from 'rxjs';
import { environment } from 'src/enviroments/environment';

@Injectable({
  providedIn: 'root'
})
export class FavsService {
  private readonly URL = environment.api

  constructor(private http: HttpClient, private cookie: CookieService) { }

  /**
   * 
   * 
   * @returns todos los libros favoritos del usuario
   */

  getFavsBooks$(): Observable<any> {
    console.log('FavsBooks =' , `${this.URL}/favorites/`, this.addHeader())
    return this.http.get(`${this.URL}/favorites/`, this.addHeader())
    .pipe(
      map((data: any)=>{
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
