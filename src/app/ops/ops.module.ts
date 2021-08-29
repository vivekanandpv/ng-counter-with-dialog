import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OpsRoutingModule } from './ops-routing.module';
import { StaffComponent } from './staff/staff.component';


@NgModule({
  declarations: [
    StaffComponent
  ],
  imports: [
    CommonModule,
    OpsRoutingModule
  ]
})
export class OpsModule { }
