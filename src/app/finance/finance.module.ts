import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportComponent } from './report/report.component';
import { ReceiptComponent } from './receipt/receipt.component';
import {Route, RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  {
    path: 'report',
    component: ReportComponent
  },
  {
    path: 'receipt',
    component: ReceiptComponent
  }
]



@NgModule({
  declarations: [
    ReportComponent,
    ReceiptComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class FinanceModule { }
