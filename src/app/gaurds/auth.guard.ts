import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

  export const authGuard: CanActivateFn = () => {

  const authshare=inject(AuthService)

  const router=inject(Router)
  if(authshare.loginstatus()){
  return true;}
else{
  alert("please login")
    
    //router.navigateByUrl("")
    return false
  
}
};
