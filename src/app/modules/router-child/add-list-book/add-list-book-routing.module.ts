import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddListBookPageComponent } from './add-list-book-page/add-list-book-page.component';

const routes: Routes = [
  {
    path:'',
    component:AddListBookPageComponent,
    outlet:'child'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddListBookRoutingModule { }
