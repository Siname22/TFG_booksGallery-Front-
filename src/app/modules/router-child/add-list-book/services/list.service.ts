import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ListModel } from '@core/models/list.model';
import { environment } from 'src/enviroments/environment';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  private readonly URL = environment.api

  constructor(private http: HttpClient) { }

  addList$(list: ListModel): Observable<any>{
    console.log('🔴 Llamamos a nuestra API HTTP GET:', `${this.URL}/addList/1`, list);
    return this.http.post(`${this.URL}/addList/1`, list)
      .pipe(
        map((dataRaw: any) => {
          console.log('Obtengo los datos que quiero:', dataRaw);
          return dataRaw
        })
      )
  }
  
}
