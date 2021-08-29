import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {AboutComponent} from "./about/about.component";
import {NotFoundComponent} from "./not-found/not-found.component";
import {aboutRoutes} from "./routes/about-routes";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  aboutRoutes,
  {
    path: 'finance',
    loadChildren: () => import('./finance/finance.module')
      .then(m => m.FinanceModule)
  },
  {
    path: 'ops',
    loadChildren: () => import('./ops/ops.module')
      .then(m => m.OpsModule)
  },
  {
    path: 'forms',
    loadChildren: () => import('./forms/forms.module')
      .then(m => m.FormsModule)
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
