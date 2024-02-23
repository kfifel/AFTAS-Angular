import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {authUtils} from "../helpers/authUtils";
import {User} from "../models/auth.models";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree {

    const user = authUtils.getAuthenticatedUser();

    if(user == null) {
      return this.router.createUrlTree(['/login'], { queryParams: { returnUrl: state.url } });
    }
    return true;
  }

}
