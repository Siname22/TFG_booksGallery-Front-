import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListsRoutingModule } from './lists-routing.module';
import { SharedModule } from '@shared/shared.module';
import { ListPageComponent } from './list-page/list-page.component';



@NgModule({
  declarations: [
    ListPageComponent
  ],
  imports: [
    CommonModule,
    ListsRoutingModule,
    SharedModule
  ]
})
export class ListsModule { }
