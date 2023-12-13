import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../../environments/environment";
import {PaginatedResponse} from "../../../core/models/paginated.response.model";
import {ICompetition} from "../competition.model";

@Injectable({
  providedIn: 'root'
})
export class CompetitionService {

  private baseUrl: string = environment.baseUrl + "/api/v1/competitions";
  constructor(private http: HttpClient) { }

  findAllCompetition(): Observable<PaginatedResponse<ICompetition>> {
    return this.http.get<PaginatedResponse<ICompetition>>(`${this.baseUrl}?page=1&size=5`);
  }
}
