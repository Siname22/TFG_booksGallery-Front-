import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable, map } from 'rxjs';
import { environment } from 'src/enviroments/environment';

@Injectable({
  providedIn: 'root'
})
export class ListsService {
  private readonly URL = environment.api
  
  constructor(private http: HttpClient, private cookie: CookieService) { 

  }

  getAllNameList$(): Observable<any> {
    console.log('ListUser =' ,`${this.URL}/lists/`,this.addHeader())
    return this.http.get(`${this.URL}/lists/`, this.addHeader())
  }

  addHeader() {
    const token = this.cookie.get('token');
    console.log('token del header ', token)
    return{
      headers: new HttpHeaders({
        Authorization: `${token}`
      })
    };
  }


  
}
