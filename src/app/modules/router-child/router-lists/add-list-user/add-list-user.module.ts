import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddListUserRoutingModule } from './add-list-user-routing.module';
import { AddListUserPageComponent } from './add-list-user-page/add-list-user-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '@shared/shared.module';


@NgModule({
  declarations: [
    AddListUserPageComponent,
  ],
  imports: [
    CommonModule,
    AddListUserRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class AddListUserModule { }
