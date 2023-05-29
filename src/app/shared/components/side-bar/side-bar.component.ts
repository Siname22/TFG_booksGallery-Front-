import { Component,  OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListModel } from '@core/models/list.model';
import { ListsService } from './services/lists.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  dataList: Array<ListModel> = []

  mainMenu: {
    defaultOptions: Array<any>,
    accessLink: Array<any>, 
    accessListLink: Array<any>, 
    exitLink: Array<any>
  } = { 
    defaultOptions: [
      {
        name: 'Home',
        icon: 'uil uil-estate',
        router: ['/','books']
      },
      {
        name: 'Explorar',
        icon: 'uil uil-search',
        router: ['/', 'explore']
      },
      {
        name: 'Favoritos',
        icon: 'uil-heart',
        router: ['/','favoritos'],
      },
    ], 
    accessLink: [
      {
        name: 'Añadir Libro',
        icon: 'uil uil-book-medical',
        router:['/', 'add_book_to_gallery']
      },
      {
        name: 'Crear lista',
        icon: 'uil-plus-square',
        router:['/','addListUser']
      },
    ],
    accessListLink: [

    ], 
    exitLink: [
      {
        name: 'Cerrar Sesion',
        icon: 'uil uil-signout',
        router: ['/', 'auth'],
      },
    ] 
  }

  constructor(private router: Router, private listService: ListsService) { }

  ngOnInit(): void {
    
    this.listService.getAllNameList$()
    .subscribe((response: ListModel[]) =>{
      console.log('Todas las listas del user =', response)
      this.dataList = response
      this.rellenarSideBar(this.dataList)
    })
  }

   goTo($event: any): void {
    this.router.navigate(['/', 'favoritos'], {
      queryParams: {
        key1: 'value1',
        key2: 'value2',
        key3: 'value3'
      }
    })
    console.log($event)
  }


  
  rellenarSideBar(arrList: ListModel[]): void {
    for (let i = 0; i < arrList.length; i++) {
      let list = arrList[i]
      this.mainMenu.accessListLink.push({
          name: list.nombre,
          icon: "uil uil-bookmark", 
          router: ['/','list_user', list.id, list.nombre]
        }) 
    }
  }
  
}