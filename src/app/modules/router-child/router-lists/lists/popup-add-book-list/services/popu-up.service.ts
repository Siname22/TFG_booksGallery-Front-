import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PopuUpService {

  private readonly URL = environment.api
  listid:any

  constructor(private http:HttpClient, private cookie:CookieService) { }

  addBookToList$(idBook:any){
    
    console.log('AddBookList: ', `${this.URL}/addBookToList/${this.listid}`, {idBook}, this.addHeader())
    return this.http.post(`${this.URL}/addBookToList/${this.listid}`, {idBook}, this.addHeader())
  }
  addHeader() {
    const token = this.cookie.get('token');
    return{
      headers: new HttpHeaders({
        authorization: `${token}`
      })
    };
  }
  cogerId(id:any){
    this.listid = id
  }
}
