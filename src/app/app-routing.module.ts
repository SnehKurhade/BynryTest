import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListComponentComponent} from './Components/list-component/list-component.component';
import { AboutComponentComponent } from './Components/about-component/about-component.component';
import { AddComponent } from './Components/add/add.component';
import { EditComponent } from './Components/edit/edit.component';

const routes: Routes = [
  {
    path:'list',
    component: ListComponentComponent
  },
  {
    path:'about',
    component: AboutComponentComponent
  },
  {
    path:'add',
    component:AddComponent
  },
  {
    path:'edit/:id',
    component:EditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
