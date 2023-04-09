import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-explore-page',
  templateUrl: './explore-page.component.html',
  styleUrls: ['./explore-page.component.css']
})
export class ExplorePageComponent implements OnInit{
  constructor(){ }

  ngOnInit(): void {
    
  }

  receiveData(event: string): void{
    console.log('Estoy en el padre', event);
  }
}
