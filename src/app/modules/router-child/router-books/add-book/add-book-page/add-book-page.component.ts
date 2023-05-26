import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SearchService } from '@modules/router-child/explore/services/search.service';
import { ListService } from '@modules/router-child/router-lists/lists/services/list.service';
import { Observable, of } from 'rxjs';
import { AddBookService } from '../services/add-book.service';
import { ListsService } from '@shared/components/side-bar/services/lists.service';
import { ListModel } from '@core/models/list.model';

@Component({
  selector: 'app-add-book-page',
  templateUrl: './add-book-page.component.html',
  styleUrls: ['./add-book-page.component.css']
})
export class AddBookPageComponent implements OnInit{
  formBook:FormGroup = new FormGroup({});
  
  constructor(private addBookService:AddBookService){

  }

  ngOnInit(): void {
    this.formBook = new FormGroup(
      {
        name: new FormControl('',[
          Validators.required, 
          Validators.minLength(3)
        ]),
        autor: new FormControl('',[
          Validators.required, 
          Validators.minLength(3)
        ]),
        saga: new FormControl('',[
          Validators.required, 
          Validators.minLength(3)
        ]),
        editorial: new FormControl('',[
          Validators.required, 
          Validators.minLength(3)
        ]),
        sinopsis: new FormControl('',[
          Validators.required, 
          Validators.minLength(3)
        ]),
        portada: new FormControl('',[
          Validators.required, 
          Validators.minLength(3)
        ]),
      }
    )
    
  }



  sendBook(): void{
    const{
      name,
      autor,
      saga,
      editorial,
      sinopsis,
      portada
    } = this.formBook.value
    this.addBookService.addBook$(name, autor, saga, editorial, sinopsis, portada)
    .subscribe((response: any) =>{
      console.log(response)
      window.alert('Se ha añadido el libro')
      window.location.reload()
    })

    
  }
}