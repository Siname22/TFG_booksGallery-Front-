import { Component, Input, OnInit } from '@angular/core';
import { BooksModel } from '@core/models/books.model';
import { DetailService } from '@modules/router-child/router-books/detail-book/services/detail.service';
import { PopuUpService } from '../services/popu-up.service';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css'],
})
export class SectionComponent implements OnInit{
  
  @Input() title:string ='';
  @Input() dataBooks:Array<BooksModel> = []
  @Input() public estaLleno: boolean = false

  librosToAdd:Array<any> = []
  listId: any

  constructor(private detailService:DetailService, private popUpService:PopuUpService, private matdialog:MatDialog){

  }

  ngOnInit(): void {
  }

  cogerIdlibro(Id:any){
    this.estaLleno = true
    this.detailService.getDetailBook$(Id)
    .subscribe((response: BooksModel[]) => {
      let book = response[0]
      let encontrado = false
      for (let i = 0;!encontrado && i < this.librosToAdd.length; i++) {
       if(this.librosToAdd[i].id == book.id){
          encontrado = true
       }
      }
      if(!encontrado){
        this.librosToAdd.push(book)
        console.log('Libros a añadir', this.librosToAdd)
      }else{
        window.alert('El libro ya esta seleccionado para añadirlo a la lista')
      }
    })
  }

  

  sendId(id:any){
    this.listId = id
    this.popUpService.cogerId(this.listId)
  }

  addBookList(){
    for (let i = 0; i < this.librosToAdd.length; i++) {
      this.popUpService.addBookToList$(this.librosToAdd[i].id)
      .subscribe((response: any) =>{
        console.log(response)
      })    
    }
    window.alert('Se han añadido los libros a la lista')
    
    window.location.reload()
  }
  
}
