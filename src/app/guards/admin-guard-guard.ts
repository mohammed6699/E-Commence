import { CanActivateFn, Router } from '@angular/router';
import { UerrAuth } from '../service/uerr-auth';
import { inject } from '@angular/core';

export const adminGuardGuard: CanActivateFn = (route, state) => {
  let userAuth = inject(UerrAuth);
  let router = inject(Router);
  if(userAuth.IsUserAdmin){
    return true
  }else{

        router.navigate(['/home'])
        return false
  }
};
