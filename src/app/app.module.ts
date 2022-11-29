import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { DashboardModule } from './dashboard/dashboard.module';


import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SpinnerInterceptor } from './core/interceptor/spinner.interceptor';

import { NgToastModule } from 'ng-angular-popup';
import { LoginComponent } from './dashboard/login/login.component';
import { MaterialModule } from './shared/material-module';
import { GanttModule } from '@syncfusion/ej2-angular-gantt';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,

   
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    CoreModule,
    DashboardModule,
    CommonModule,
    NgToastModule,
    HttpClientModule,
    GanttModule,
    FormsModule,
    ReactiveFormsModule ,
   

 


  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: SpinnerInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
