import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UerrAuth } from '../service/uerr-auth';
export const loginGuard: CanActivateFn = (route, state) => {
  // injection using inject
  let userAuth = inject(UerrAuth);
  let router = inject(Router);
  if(userAuth.IsUserLoggedIn){
    return true
  }else{
    
    router.navigate(['/signUp'])
    return false
  }
};
