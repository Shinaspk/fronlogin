import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { EmployeeaddComponent } from './employeeadd/employeeadd.component';
import { EmployeeeditComponent } from './employeeedit/employeeedit.component';
import { EmployeeComponent } from './employee/employee.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SearchPipe } from './search.pipe';
import {NgxPaginationModule} from 'ngx-pagination';
import {MatCardModule} from '@angular/material/card';

import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { HighchartsChartModule } from 'highcharts-angular';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    DashboardComponent,
    EmployeeaddComponent,
    EmployeeeditComponent,
    EmployeeComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,//for ngModel 
    HttpClientModule ,//to conduct http calls
    NgxPaginationModule,
    //MatCardModule,
    
    MatDatepickerModule,
  MatNativeDateModule,
  HighchartsChartModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
