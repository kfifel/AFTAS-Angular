import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";
import {CsrfModel} from "../models/csrf.model";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CsrfService {

  private baseUrl: string = environment.baseUrl + '/api/v1'
  constructor(private http: HttpClient) { }

  getCsrf(): Observable<CsrfModel> {
    return this.http.get<CsrfModel>(`${this.baseUrl}/csrf-token`);
  }
}
