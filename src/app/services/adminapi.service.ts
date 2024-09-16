
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { employeeModel } from '../employeeModel';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminapiService {

  constructor(private http:HttpClient) { }
  serverUrl='http://localhost:3000'

  authorization(){
   return this.http.get(`${this.serverUrl}/employee/1`) //can also be used for getting data in admin profile update
    }


  addemployeeApi(employee:employeeModel){
    return this.http.post(`${this.serverUrl}/employee`,employee)
  }

employeelist(){
  return this.http.get(`${this.serverUrl}/employee`)
}


deleteemployeeApi(id:string){
  return this.http.delete(`${this.serverUrl}/employee/${id}`

  )
}

viewEmployeeApi(id:string){
  return this.http.get(`${this.serverUrl}/employee/${id}`)
}

updateemployeeApi(id:string,employee:any){
  return this.http.put(`${this.serverUrl}/employee/${id}`,employee)
}
UpdateAdmindetails(admin:any){
  return this.http.put(`${this.serverUrl}/employee/1`,admin)
}

public sharedData= new BehaviorSubject(false)

updateLogin(data:any){
  this.sharedData.next(data)
}
}

