import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsRoutingModule } from './forms-routing.module';
import { TFormComponent } from './t-form/t-form.component';
import { RFormComponent } from './r-form/r-form.component';


@NgModule({
  declarations: [
    TFormComponent,
    RFormComponent
  ],
  imports: [
    CommonModule,
    FormsRoutingModule
  ]
})
export class FormsModule { }
