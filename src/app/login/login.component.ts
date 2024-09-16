import { Component, OnInit } from '@angular/core';
import { AdminapiService } from '../services/adminapi.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  email: string = ""
  password: string = ""


ngOnInit(): void {
  localStorage.removeItem("name")
  this.api.updateLogin(false)
}

  constructor(private api: AdminapiService, private router: Router ) { }
  login() {
    if (!this.email && !this.password) {
      alert("please fill compleely")
    }

    else {
  
      this.api.authorization().subscribe({
        next: (res: any) => {
          console.log(res);
          
          const { email, password } = res
          if (email == this.email && password == this.password) {
            alert("login successful")
            localStorage.setItem("name",res.name)
            localStorage.setItem("psswd",res.password)
            this.router.navigateByUrl("dashboard")
            this.api.updateLogin({d:true})}
          else {
            alert("invalid email or password")
          }
        },

        error: (res: any) => {
          console.log(res);


        }
      })
    }
  }

  
}
