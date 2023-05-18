import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable, map } from 'rxjs';
import { environment } from 'src/enviroments/environment';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  private readonly URL = environment.api
  
  constructor(private http:HttpClient, private cookie: CookieService) { }

 getUser$():Observable<any> {
  console.log('User =' , `${this.URL}/user`, this.addHeader())
  return this.http.get(`${this.URL}/user`, this.addHeader())
  .pipe(
    map((data:any) =>{
      console.log(data)
      return data
    })
  )
 }

 addHeader() {
  const token = this.cookie.get('token');
  console.log('token:', token)
  console.log('esto es el header: ', {
    headers: new HttpHeaders({
      Authorization: `Bearer ${token}`
    })
  })
  return{
    headers: new HttpHeaders({
      Authorization: `Bearer ${token}`
    })
  };
}
}
