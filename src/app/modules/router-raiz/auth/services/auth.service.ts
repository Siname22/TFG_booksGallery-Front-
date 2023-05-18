import { environment } from '../../../../../enviroments/environment';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly URL = environment.api

  constructor(private http: HttpClient) { }

  sendCredentials(username: string, password: string): Observable<any> {
    console.log(`${this.URL}/auth/login`, {username, password},this.addHeader())

    return this.http.post(`${this.URL}/auth/login`, {username, password}, this.addHeader())
  }

  addHeader() {
    return{
      headers: new HttpHeaders({
        ContentType: 'application/json'
      })
    };
  }

  suma(a: number, b: number): number {
    return a + b
  }
}