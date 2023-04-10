import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBookPageComponent } from './add-book-page/add-book-page.component';

const routes: Routes = [
  {
    path:'',
    component:AddBookPageComponent,
    outlet:'child'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddBookRoutingModule { }
