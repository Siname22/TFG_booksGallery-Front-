import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from 'src/enviroments/environment';

@Injectable({
  providedIn: 'root'
})
export class ListsService {
  private readonly URL = environment.api
  
  constructor(private http: HttpClient) { 

  }

  getAllNameList$(): Observable<any> {
    console.log('ListUser =' ,`${this.URL}/lists/1` )
    return this.http.get(`${this.URL}/lists/1`)
    .pipe(
      map((data:any)=>{
        return data
      })
    )
  }


  
}
