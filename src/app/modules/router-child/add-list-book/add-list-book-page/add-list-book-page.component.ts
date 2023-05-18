import { Component, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ListService } from '@modules/router-child/router-lists/lists/services/list.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-add-list-book-page',
  templateUrl: './add-list-book-page.component.html',
  styleUrls: ['./add-list-book-page.component.css']
})
export class AddListBookPageComponent implements OnInit{
  
  formList:FormGroup = new FormGroup({});

  constructor(private listService: ListService, private router: Router){

  }
  ngOnInit(): void {
    this.formList = new FormGroup(
      {
        nameList: new FormControl('',[
          Validators.required,
          Validators.minLength(3)
        ]),
      }
    )
  }
  sendList(): void{
    const {nameList} = this.formList.value
    this.listService.addList(nameList)
    .subscribe((responseOk:any)=>{
      console.log('Datos cogidos del formulario:', responseOk)
      this.router.navigate(['/', 'books_gallery'])
    })
  } 
}
