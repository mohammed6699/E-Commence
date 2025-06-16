import { CanActivateFn, Router } from '@angular/router';
import { UerrAuth } from '../service/uerr-auth';
import { inject } from '@angular/core';
import Swal from 'sweetalert2';

export const adminGuardGuard: CanActivateFn = (route, state) => {
  let userAuth = inject(UerrAuth);
  let router = inject(Router);
  if(userAuth.IsUserAdmin){
    return true
  }else{
    Swal.fire({
      icon: "error",
      title: "This is admin dashboard",
      text: "Only for Authorized users",
    });
        router.navigate(['/home'])
        return false
  }
};
