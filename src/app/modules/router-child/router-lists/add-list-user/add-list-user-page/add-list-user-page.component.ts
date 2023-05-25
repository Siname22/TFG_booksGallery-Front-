import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ListService } from '../../lists/services/list.service';

@Component({
  selector: 'app-add-list-user-page',
  templateUrl: './add-list-user-page.component.html',
  styleUrls: ['./add-list-user-page.component.css']
})
export class AddListUserPageComponent implements OnInit{
  formList:FormGroup = new FormGroup({});

  constructor(private listService:ListService){

  }

  ngOnInit(): void {
    this.formList = new FormGroup(
      {
        name: new FormControl('',[
          Validators.required, 
          Validators.minLength(3)
        ])
      }
    )
  }



  sendList(): void{
    const { name } = this.formList.value
    this.listService.addList$(name)
    .subscribe((response: any) =>{
      console.log(response)
      window.location.reload()
    })
  }
}
