import { Component, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { BooksModel } from '@core/models/books.model';
import { ListService } from '../services/list.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { MatDialog} from '@angular/material/dialog';
import { PopupAddBookListComponent } from '../popup-add-book-list/popup-add-book-list.component';
import { SectionComponent } from '../popup-add-book-list/section/section.component';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.css'],
})
export class ListPageComponent implements OnInit, OnDestroy{
  data_list: Array<BooksModel> =[]
  listId:any
  listName:any
  infoDef: Array<BooksModel> =[]

  constructor( private books_listService: ListService, private route:ActivatedRoute, private popUpService:MatDialog, private popcomponent:SectionComponent){}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.listId = params.get('id')
      this.listName = params.get('name')
      
      console.log('Id',this.listId,'Nombre' ,this.listName)
      
      this.books_listService.getBooksList$(this.listId)
      .subscribe((response: BooksModel[]) =>{
        this.data_list = response
        console.log('datos recogidos = ', this.data_list)
      })
    })
    
  }

  ngOnDestroy(): void { 
    this.data_list
  }

  receiveData(event: any): void{
    if(window.confirm('¿Seguro que quieres elimar el libro?') == true){
      this.books_listService.deleteListBook_Id$(event, this.listId)
      .subscribe((response: BooksModel[]) =>{
        console.log('Libro que borro de la lista', response)
        this.data_list = response
        console.log('datos que sigue teniendo el user = ', this.data_list)
        window.location.reload()
      })
    }  
  }

  addBookToList(): void{
    this.popUpService.open(PopupAddBookListComponent, {
      height: 'auto',
      maxHeight:'70%',
      width:'70%',
    })
    this.popcomponent.sendId(this.listId)
  }

  deleteList(){
    if(window.confirm('¿Seguro que quieres elimar la lista?') == true){
      this.books_listService.deleteList$(this.listId)
      .subscribe((response:any)=>{
        console.log('se ha borrado la lista', response)
        window.location.replace('(/books_gallery')
      })
    }   
  }
}
