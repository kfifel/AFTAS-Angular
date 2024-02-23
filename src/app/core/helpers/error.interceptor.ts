import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import {BehaviorSubject, Observable, throwError} from 'rxjs';
import {catchError, concatMap, filter, finalize, take} from 'rxjs/operators';

import { AuthenticationService } from '../services/auth.service';
import {environment} from "../../../environments/environment";
import {authUtils} from "./authUtils";

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  isRefreshingToken = false;

  tokenRefreshed$ = new BehaviorSubject<boolean>(false);

  constructor(private authenticationService: AuthenticationService) {
  }

  addToken(req: HttpRequest<any>): HttpRequest<any> {
    const token = authUtils.getAccessToken();
    return token ? req.clone({ setHeaders: { Authorization: 'Bearer ' + token } }) : req;
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(this.addToken(req)).pipe(
      catchError(err => {
        if (err.status === 401) {
          return this.handle401Error(req, next);
        }

        return throwError(err);
      })
    );
  }

  private handle401Error(req: HttpRequest<any>, next: HttpHandler): Observable<any> {
    if (this.isRefreshingToken) {
      return this.tokenRefreshed$.pipe(
        filter(Boolean),
        take(1),
        concatMap(() => next.handle(this.addToken(req)))
      );
    }

    this.isRefreshingToken = true;

    // Reset here so that the following requests wait until the token
    // comes back from the refreshToken call.
    this.tokenRefreshed$.next(false);
    authUtils.removeAccessToken();

    return this.authenticationService.refresh(authUtils.getRefreshToken()).pipe(
      concatMap((res) => {
        authUtils.setAccessToken(res.accessToken);
        if (!environment.production) {
          console.info('Token was successfully refreshed'); // tslint:disable-line
        }

        this.tokenRefreshed$.next(true);
        return next.handle(this.addToken(req));
      }),
      catchError((err) => {
        this.authenticationService.logout();
        return throwError(err);
      }),
      finalize(() => {
        this.isRefreshingToken = false;
      })
    );
  }
}
