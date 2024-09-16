import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  loginstatus(){
 return  !!localStorage.getItem("name")

    //2 exclamation mark return boolean value
  }
}
