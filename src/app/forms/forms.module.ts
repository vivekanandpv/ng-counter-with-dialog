import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsRoutingModule } from './forms-routing.module';
import { TFormComponent } from './t-form/t-form.component';
import { RFormComponent } from './r-form/r-form.component';
import {ReactiveFormsModule} from "@angular/forms";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    TFormComponent,
    RFormComponent
  ],
  imports: [
    CommonModule,
    FormsRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AngularFormsModule { }
