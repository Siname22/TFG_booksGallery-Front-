import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddListUserPageComponent } from './add-list-user-page/add-list-user-page.component';

const routes: Routes = [
  {
    path:'',
    component: AddListUserPageComponent,
    outlet:'child'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddListUserRoutingModule { }
