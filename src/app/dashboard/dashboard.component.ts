
import { Component, OnInit } from '@angular/core';
import { AdminapiService } from '../services/adminapi.service';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  
})


export class DashboardComponent  implements OnInit {
showsidebar:boolean=true
emplength:Number=0
selected: Date | null = new Date
Highcharts: typeof Highcharts = Highcharts; // required

  chartOptions= { }; // required

profileimage:string='./assets/Images/download.png'

updateAdmin:boolean=false
AdminName:any=""

UpdateDetails:any={}
constructor(private api:AdminapiService){
this.chartOptions={

  
  chart: {
    type: 'pie'
},
title: {
    text: 'Emplyee job discrption'
},
tooltip: {
    valueSuffix: '%'
},

plotOptions: {
    series: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: [{
            enabled: true,
            distance: 20
        }, {
            enabled: true,
            distance: -40,
            format: '{point.percentage:.1f}%',
            style: {
                fontSize: '1.2em',
                textOutline: 'none',
                opacity: 0.7
            },
            filter: {
                operator: '>',
                property: 'percentage',
                value: 10
            }
        }]
    }
},
credits:{ //to remove the watermarks
    enabled:false
},
series: [
    {
        name: 'Projects',
        colorByPoint: true,
        data: [
            {
                name: 'React',
                y: 55.02
            },
            {
                name: 'Angular',
                sliced: true,
                selected: true,
                y: 26.71
            },
            {
                name: 'MongoDB',
                y: 1.09
            },
            {
                name: 'Node js',
                y: 15.5
            },
            {
                name: 'HTML',
                y: 1.68
            }
        ]
    }
]

}
HC_exporting(Highcharts);

}



ngOnInit(): void {
  this.totalEmployee()
  if(localStorage.getItem("name")){
    this.AdminName=localStorage.getItem("name")
  
  }
//update admin details
  this.api.authorization().subscribe((res:any)=>{
console.log(res);
  this.UpdateDetails=res
if(this.UpdateDetails.picture){
  this.profileimage=this.UpdateDetails.picture
}
  })
}
menubar(){
  this.showsidebar=!this.showsidebar
}

totalEmployee(){
  this.api.employeelist().subscribe({
    next:(res:any)=>{
    this.emplength= res.length
console.log(res.length);

    },
    error:(err:any)=>{
      console.log(err);
      
    }
  })
}

edit(){
    this.updateAdmin=true
}
cancel(){
  this.api.authorization().subscribe((res:any)=>{
    console.log(res);
      this.UpdateDetails=res
    if(this.UpdateDetails.picture){
      this.profileimage=this.UpdateDetails.picture
    }
      })
    this.updateAdmin=false
}  

file(event:any){ //to update image
let filedetails=event.target.files[0]
console.log(filedetails);

//file reader
let fs=new FileReader()
//read
fs.readAsDataURL(filedetails)

//convert
fs.onload=(event:any)=>{
    
this.profileimage=event.target.result
this.UpdateDetails.picture=this.profileimage
}

}

adminupdate(){
  this.api.UpdateAdmindetails(this.UpdateDetails).subscribe({

    next:(res:any)=>{
      console.log(res);
      alert("Updated succesfully")
      localStorage.setItem("name",res.name)
      localStorage.setItem("pswd",res.password)
      this.AdminName=localStorage.getItem("name")
    },
    error:(err:any)=>{
      console.log(err);
      
    }
  })
}



}


