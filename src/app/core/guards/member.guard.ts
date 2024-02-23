import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {authUtils} from "../helpers/authUtils";
import {Role} from "../models/role.enum";

@Injectable({
  providedIn: 'root'
})
export class MemberGuard implements CanActivate {

  constructor(private router: Router) {
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | UrlTree {
    const hasAuthority = authUtils.hasCurrentUserRole(Role.ROLE_MEMBER)

    if (hasAuthority) return true;

    return this.router.createUrlTree(['/']);
  }

}
