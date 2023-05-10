import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SearchService } from '@modules/router-child/explore/services/search.service';

@Component({
  selector: 'app-explore-page',
  templateUrl: './explore-page.component.html',
  styleUrls: ['./explore-page.component.css']
})
export class ExplorePageComponent implements OnInit{
  listResults$: Observable<any> = of([])
  constructor(private searchService: SearchService){ }

  ngOnInit(): void {
    
  }

  receiveData(event: string): void{
    
    this.listResults$ = this.searchService.searchBooks$(event)
    
  }
}
