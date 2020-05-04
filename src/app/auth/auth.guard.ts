import { UserService } from './../shared/user.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private Service: UserService) {}
  
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      if (localStorage.getItem('token') != null) {
        let roles = next.data['permittedRoles'] as Array<string>;
        if (roles) {
          if (this.Service.roleMatch(roles)) {
            return true;
          } else {
            this.router.navigate(['/forbidden']);
            return false;
          }
        }
        return true;
      } else {
        this.router.navigate(['/login']);
        return false;
      }

  }
  
}
