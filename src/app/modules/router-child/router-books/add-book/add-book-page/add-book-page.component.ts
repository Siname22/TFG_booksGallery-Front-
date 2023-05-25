import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SearchService } from '@modules/router-child/explore/services/search.service';
import { ListService } from '@modules/router-child/router-lists/lists/services/list.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-add-book-page',
  templateUrl: './add-book-page.component.html',
  styleUrls: ['./add-book-page.component.css']
})
export class AddBookPageComponent implements OnInit{
  formBook:FormGroup = new FormGroup({});
  listResults$: Observable<any> = of([])
  constructor(private listService:ListService, private searchService: SearchService){

  }

  ngOnInit(): void {
    this.formBook = new FormGroup(
      {
        name: new FormControl('',[
          Validators.required, 
          Validators.minLength(3)
        ])
      }
    )
  }



  sendList(): void{
    const { name } = this.formBook.value
    this.listService.addList$(name)
    .subscribe((response: any) =>{
      console.log(response)
      window.location.reload()
    })
  }

  receiveData(event: string): void{
    this.listResults$ = this.searchService.searchBooks$(event) 
  }
}