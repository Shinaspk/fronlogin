import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { EmployeeaddComponent } from './employeeadd/employeeadd.component';
import { EmployeeeditComponent } from './employeeedit/employeeedit.component';
import { EmployeeComponent } from './employee/employee.component';
import { authGuard } from './gaurds/auth.guard';


const routes: Routes = [
{path:"", component:LoginComponent },
{path:"dashboard", component:DashboardComponent,canActivate:[authGuard]},
{path:"employee", component:EmployeeComponent,canActivate:[authGuard]},
{path:"employee/employeeadd", component:EmployeeaddComponent},
{path:"employee/employeeedit/:id", component:EmployeeeditComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
