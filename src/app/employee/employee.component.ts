import { Component, OnInit } from '@angular/core';
import { AdminapiService } from '../services/adminapi.service';
import { employeeModel } from '../employeeModel';
import jsPDF from 'jspdf'
import autoTable from 'jspdf-autotable'

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit { //oninit is a  interface to implement ngonit function
  
  allemployee: employeeModel[] = []
searchkey:any=""
p: number = 1;//for pagination

constructor(private api: AdminapiService) { }
  ngOnInit(): void {
    this.employeelistApi()
  }
  employeelistApi() {
    this.api.employeelist().subscribe({
      next: (res: any) => {

        this.allemployee = res
        console.log(this.allemployee);
      },
      error: (err: any) => {
        console.log(err);

      }
    })
  }
  deleteemployee(id:any) {
    this.api.deleteemployeeApi(id).subscribe({
      next: (res: any) => {
console.log(res);
this.employeelistApi()
      },
      error: (err: any) => {
        console.log(err);

      }
    })
  }

sortid(){
  this.allemployee.sort((a:any,b:any)=>a.id-b.id)
}
sortname(){
  this.allemployee.sort((a:any,b:any)=>a.name.localeCompare(b.name))
}

generatePdf(){
  //crete a object for jspdf
const pdf=new jsPDF()

//head
let head=[['Id','Emplyeename','Email','Status']]
//body
let body:any=[]

this.allemployee.filter((item:any)=>item.id!==1).forEach((item:any)=>{
body.push([item.id,item.name,item.email,item.status])
})

//fontsize
pdf.setFontSize(16)

//text
pdf.text('Employee Details',10,10)
//autottable
autoTable(pdf,{head,body})
//to shoe the table
pdf.output('dataurlnewwindow')
//save
pdf.save('employeeModel.pdf')

}
}



