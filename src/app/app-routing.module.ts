import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './dashboard/login/login.component';

const routes: Routes = [
  {  pathMatch: 'full', path:"", redirectTo:"login"},

 { path:"login",component:LoginComponent},
// { path:"dashboard",component:DashboardComponent},
 { path: 'inicio', loadChildren: () => import ('./dashboard/dashboard.module') .then (x => x.DashboardModule)},
{  pathMatch: 'full', path:"**", redirectTo:"login"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule, CommonModule]
})
export class AppRoutingModule { }