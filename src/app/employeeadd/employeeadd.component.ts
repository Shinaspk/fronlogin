import { Component } from '@angular/core';
import { employeeModel } from '../employeeModel';

import { AdminapiService } from '../services/adminapi.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employeeadd',
  templateUrl: './employeeadd.component.html',
  styleUrls: ['./employeeadd.component.css']
})
export class EmployeeaddComponent {

  constructor(private api: AdminapiService, private router:Router) { }

  //variable to store the value from the input box which have the structure of employeeModel
  employee: employeeModel = {}
 
  cancelEmployee() {
    this.employee = {}
  }


  addEmployee() {

    if(!this.employee.id ||!this.employee.email || !this.employee.name ||!this.employee.status){
      alert("please fill the form completely")
    }else{
    console.log(this.employee);
    this.api.addemployeeApi(this.employee).subscribe({
      next:(res: employeeModel)=> {
        alert("added succesfully")
        this.employee={}
        this.router.navigateByUrl("employee")

      },
      error:(err: any)=> {
        console.log("err");
   alert("failed to add")
      }
    })}



  }
}