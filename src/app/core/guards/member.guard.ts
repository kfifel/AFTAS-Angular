import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
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
    state: RouterStateSnapshot): boolean {

    return authUtils.hasAnyRole(
      [Role.ROLE_MEMBER, Role.ROLE_MANAGER, Role.ROLE_JUDGE]
    );
  }

}
