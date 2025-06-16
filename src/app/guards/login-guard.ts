import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UerrAuth } from '../service/uerr-auth';
import Swal from 'sweetalert2';
export const loginGuard: CanActivateFn = (route, state) => {
  // injection using inject
  let userAuth = inject(UerrAuth);
  let router = inject(Router);
  if(userAuth.IsUserLoggedIn){
    return true
  }else{
    Swal.fire({
  icon: "error",
  title: "UnAuthorized user",
  text: "You Must login first",
});
    router.navigate(['/signUp'])
    return false
  }
};
