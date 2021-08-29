import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TFormComponent} from "./t-form/t-form.component";
import {RFormComponent} from "./r-form/r-form.component";

const routes: Routes = [
  {
    path: 't-form',
    component: TFormComponent
  },
  {
    path: 'r-form',
    component: RFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormsRoutingModule { }
