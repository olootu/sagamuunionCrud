
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { MembersService } from './../../core/members.service';


@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private ms: MembersService, private router: Router){}

    canActivate(
      route: ActivatedRouteSnapshot,
      state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {
      const isAuth = this.ms.getIsAuthenticated();

      if (!isAuth) {
        this.router.navigate(['/login']);
      }
      return isAuth;
    }
}
