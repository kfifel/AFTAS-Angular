import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {authUtils} from "../helpers/authUtils";
import {Role} from "../models/role.enum";

@Injectable({
  providedIn: 'root'
})
export class JudgeGuard implements CanActivate {

  constructor(private router: Router) {
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | UrlTree {
    return authUtils.hasAnyRole([
      Role.ROLE_JUDGE,
      Role.ROLE_MANAGER
    ]);
  }

}
