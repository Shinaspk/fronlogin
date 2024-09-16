import { Component, OnInit } from '@angular/core';
import { employeeModel } from '../employeeModel';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminapiService } from '../services/adminapi.service';

@Component({
  selector: 'app-employeeedit',
  templateUrl: './employeeedit.component.html',
  styleUrls: ['./employeeedit.component.css']
})
export class EmployeeeditComponent implements OnInit {
employee:employeeModel={}

ngOnInit(): void {
  this.route.params.subscribe((res:any)=>{  //observable gives output in subscribe as partial and call back>here we are using call back since we are sure that there is no error
    const{id}=res
    // console.log(id);
this.viewEmployee(id)
    

  })
}
constructor(private route:ActivatedRoute, private api:AdminapiService, private router:Router){}

viewEmployee(id:string){
this.api.viewEmployeeApi(id).subscribe({
  next:(res:any)=>{
    console.log(res);
    this.employee=res
  },
  error:(err:any)=>{
    console.log(err);
    
  }
})
}

updateEmployee(id:any){
this.api.updateemployeeApi(id,this.employee).subscribe({
next:(res:any)=>{
console.log(res);
alert("updated succesfully")
this.employee={}
this.router.navigateByUrl("employee")
},
error:(err:any)=>{
  console.log(err);
  
}
})
}
canceledit(id:any){
  this.viewEmployee(id)
}

}
