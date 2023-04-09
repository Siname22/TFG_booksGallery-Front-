import { Component,  OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  mainMenu: {
    defaultOptions: Array<any>, accessLink: Array<any>
  } = { defaultOptions: [], accessLink: [] }

  customOptions: Array<any> = []

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.mainMenu.defaultOptions = [
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
        name: 'Añadir Libro',
        icon: 'uil uil-book-medical'
      },
      {
        name: 'Cerrar Sesion',
        icon: 'uil uil-signout',
        router: ['/', 'auth'],
      },

    ]

    this.mainMenu.accessLink = [
      {
        name: 'Crear lista',
        icon: 'uil-plus-square'
      },
      {
        name: 'Favoritos',
        icon: 'uil-heart',
        router: ['/favorites'],
      },
      {
        name: 'Mi lista º1',
        icon: 'uil uil-bookmark',
        router: ['/']
      },
      {
        name: 'Mi lista º2',
        icon: 'uil uil-bookmark',
        router: ['/']
      },
      {
        name: 'Mi lista º3',
        icon: 'uil uil-bookmark',
        router: ['/']
      },
      {
        name: 'Mi lista º4',
        icon: 'uil uil-bookmark',
        router: ['/']
      }
    ]

  }

   goTo($event: any): void {
    this.router.navigate(['/', 'favorites'], {
      queryParams: {
        key1: 'value1',
        key2: 'value2',
        key3: 'value3'
      }
    })
    console.log($event)
  } 
  
}