import { Component, OnInit } from '@angular/core';
import { HeaderService } from './services/header.service';
import { UsersModel } from '@core/models/users.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  dataUser: Array<UsersModel> = []

  constructor(private headerService: HeaderService){

  }

  ngOnInit(): void {
    this.headerService.getUser$()
    .subscribe((response: UsersModel[])=>{
      this.dataUser = response
    })
  }
}
