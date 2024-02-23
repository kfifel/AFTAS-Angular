import {Injectable} from "@angular/core";
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import {CsrfService} from "../services/csrf.service";
import {catchError, switchMap} from "rxjs/operators";

@Injectable({providedIn: 'root'})
export class CsrfInterceptor implements HttpInterceptor {

  constructor(private csrfService: CsrfService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (req.method === 'GET' || req.url.includes("api/v1/auth/"))
      return next.handle(req);

    return this.csrfService.getCsrf().pipe(
      switchMap( csrf => {
        const newReq = req.clone({
          setHeaders: {
            "X-XSRF-TOKEN" : csrf.token
          }
        })
        return next.handle(newReq)
      }),
      catchError(err => {
        console.error('Error fetching CSRF token:', err);
        return next.handle(req);
      })
    );

  }
}
