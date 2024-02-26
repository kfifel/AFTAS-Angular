import {User} from "../models/auth.models";
import {JwtAuthenticationResponse} from "../../account/auth/jwt-authentication-response.model";
import {Role} from "../models/role.enum";

class AuthUtils {


  constructor() {
  }


  /**
   * Logout the user
   */
  logout() {
    localStorage.clear();
  }

  setLoggedCredentials(user: User, jwtAuthenticationResponse: JwtAuthenticationResponse) {
    if (user)
      localStorage.setItem('authUser', JSON.stringify(user));
    if (jwtAuthenticationResponse) {
      this.setAccessToken(jwtAuthenticationResponse.accessToken);
      this.setRefreshToken(jwtAuthenticationResponse.refreshToken);
    }
  }

  setRefreshToken(refreshToken: string) {
    localStorage.setItem('refresh_token', refreshToken);
  }

  getRefreshToken(): string {
    return localStorage.getItem('refresh_token');
  }

  setAccessToken(accessToken: string) {
    localStorage.setItem('access_token', accessToken);
  }

  getAccessToken(): string {
    return localStorage.getItem('access_token');
  }

  /**
   * Returns the authenticated user
   */
  getAuthenticatedUser(): User | null {
    const authUserString = localStorage.getItem('authUser');
    if (!authUserString) {
      return null;
    }
    return JSON.parse(authUserString) as User;
  }

  /**
   * Handle the error
   * @param {*} error
   */
  _handleError(error) {
    return error.message;
  }

  currentAccessToken() {
    return localStorage.getItem('access_token') ?? null;
  }

  currentUserValue() {
    return this.getAuthenticatedUser();
  }

  hasCurrentUserRole(role: Role): boolean {
    let user = this.currentUserValue();
    if(!user)
      return false;
    return user.authorities.includes(role);
  }

  hasAllRoles(roles: Role[]): boolean {
    let user = this.currentUserValue();
    if(!user)
      return false;
    return roles.every(role => user.authorities.includes(role));
  }

  hasAnyRole(roles: Role[]): boolean {
    let user = this.currentUserValue();
    if(!user)
      return false;
    return roles.some(role => user.authorities.includes(role));
  }

  isAuthenticate() {
    return this.getAuthenticatedUser() != null;
  }

  removeAccessToken() {
    localStorage.removeItem('access_token');
  }
}

export const authUtils = new AuthUtils();
