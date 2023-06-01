import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { environment } from 'src/enviroments/environment';
import { Observable, map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddBookService {

  private readonly URL = environment.api

  constructor(private http: HttpClient, private cookie: CookieService) { }

  addBook$(name:string, autor: string, saga: string, editorial:string, descripcion:string, portada: string){

    let book = {
      name: name,
      autor: autor,
      saga: saga,
      editorial: editorial,
      descripcion: descripcion,
      portada: portada
    }


    console.log('AddBook: ', `${this.URL}/addBook/`,book, this.addHeader())
    return this.http.post(`${this.URL}/addBook/`, book, this.addHeader())
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
