import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExploreRoutingModule } from './explore-routing.module';
import { ExplorePageComponent } from './explore-page/explore-page.component';
import { SearchComponent } from './components/search/search.component';
import { SharedModule } from '@shared/shared.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ExplorePageComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    ExploreRoutingModule,
    SharedModule,
    FormsModule
  ]
})
export class ExploreModule { }
